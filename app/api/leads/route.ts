import { NextResponse } from 'next/server';
import { Resend } from 'resend';

function esc(value: unknown) {
    return String(value ?? "")
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;");
}

function yesNo(value: unknown) {
    return value === true || value === "true" ? "Yes" : "No";
}

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name, email, phone,
            checkIn, checkOut,
            adults, needsGuide,
            roomType, airportPickup,
            specialRequirements,
            journey, intention
        } = body;

        if (!name || (!email && !phone)) {
            return NextResponse.json({ error: 'Name and a way to reach you are required' }, { status: 400 });
        }

        const safeEmail = email || `guest.${String(phone).replace(/\D/g, "")}@inquiry.serenge`;
        const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        if (HUBSPOT_ACCESS_TOKEN) {
            const hubspotData = {
                properties: {
                    email: safeEmail,
                    firstname: name,
                    phone: phone || "",
                    check_in_date: checkIn || "",
                    check_out_date: checkOut || "",
                    number_of_adults: adults?.toString() || "1",
                    guide_required: (needsGuide === true || needsGuide === "true") ? "true" : "false",
                    message: [
                        specialRequirements || intention || "",
                        roomType ? `Room: ${roomType}` : "",
                        `Airport pick and drop: ${yesNo(airportPickup)}`,
                    ].filter(Boolean).join("\n"),
                    journey_interest: journey || "Stay",
                    lifecyclestage: "lead"
                }
            };

            await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`
                },
                body: JSON.stringify(hubspotData)
            }).catch(err => console.error('HubSpot Error (Logged but not blocking):', err));
        }

        if (RESEND_API_KEY) {
            try {
                const resend = new Resend(RESEND_API_KEY);
                await resend.emails.send({
                    from: 'Serengé Retreat <onboarding@resend.dev>',
                    to: ['reegoadventure@gmail.com'],
                    subject: `New Inquiry: ${name} from Serengé Website`,
                    html: `
                        <div style="font-family: serif; color: #1c1917; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #e7e5e4;">
                            <h1 style="font-size: 24px; font-style: italic; color: #78350f;">New Stay Inquiry</h1>
                            <p style="font-size: 16px; line-height: 1.6;">A guest has asked about nights at Serengé Retreat.</p>
                            
                            <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 30px 0;" />
                            
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td><td>${esc(name)}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${esc(email || "Not shared")}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Phone/WhatsApp:</td><td>${esc(phone || "Not provided")}</td></tr>
                                <tr><td style="padding: 30px 0 8px 0; font-weight: bold; color: #78350f;" colspan="2">Stay Details</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Check In:</td><td>${esc(checkIn || "Not selected")}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Check Out:</td><td>${esc(checkOut || "Not selected")}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Adults:</td><td>${esc(adults || "1")}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Room:</td><td>${esc(roomType || "Not chosen")}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Airport pick and drop:</td><td>${yesNo(airportPickup)}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Guide Needed:</td><td>${yesNo(needsGuide)}</td></tr>
                                <tr><td style="padding: 20px 0; font-weight: bold;" colspan="2">Message / Special Requirements:</td></tr>
                                <tr><td colspan="2" style="background: #fdfcfb; padding: 20px; font-style: italic; color: #444;">${esc(specialRequirements || intention || "No specific details provided.")}</td></tr>
                            </table>
                            
                            <p style="font-size: 12px; color: #78716c; margin-top: 40px; text-align: center;">Sent from the Serengé Retreat website.</p>
                        </div>
                    `
                });
            } catch (emailErr: any) {
                console.error('Resend Email Error:', emailErr);
                return NextResponse.json({
                    error: 'Email failed to send',
                    details: emailErr.message || 'Unknown error'
                }, { status: 500 });
            }
        } else {
            console.error('CRITICAL: RESEND_API_KEY is missing in production environment');
            return NextResponse.json({
                error: 'Configuration Error',
                details: 'Email service is not configured (API Key missing)'
            }, { status: 500 });
        }

        return NextResponse.json({ message: 'Inquiry processed successfully' }, { status: 200 });

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
