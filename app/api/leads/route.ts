import { NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const {
            name, email, phone,
            checkIn, checkOut,
            adults, needsGuide,
            specialRequirements,
            journey, intention
        } = body;

        // Basic Validation
        if (!name || !email) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
        const RESEND_API_KEY = process.env.RESEND_API_KEY;

        // --- 1. HubSpot Integration ---
        if (HUBSPOT_ACCESS_TOKEN) {
            const hubspotData = {
                properties: {
                    email: email,
                    firstname: name,
                    phone: phone || "",
                    check_in_date: checkIn || "",
                    check_out_date: checkOut || "",
                    number_of_adults: adults?.toString() || "1",
                    guide_required: (needsGuide === true || needsGuide === "true") ? "true" : "false",
                    message: specialRequirements || intention || "",
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

        // --- 2. Resend Email Notification ---
        if (RESEND_API_KEY) {
            try {
                const resend = new Resend(RESEND_API_KEY);
                await resend.emails.send({
                    from: 'Serengé Retreat <onboarding@resend.dev>', // Update to your domain once verified
                    to: ['tehseen2k4@gmail.com'], // Primary notification email
                    subject: `New Inquiry: ${name} from Serengé Website`,
                    html: `
                        <div style="font-family: serif; color: #1c1917; max-width: 600px; margin: auto; padding: 40px; border: 1px solid #e7e5e4;">
                            <h1 style="font-size: 24px; font-style: italic; color: #78350f;">New Sanctuary Inquiry</h1>
                            <p style="font-size: 16px; line-height: 1.6;">A guest has expressed interest in a stay at Serengé Retreat.</p>
                            
                            <hr style="border: none; border-top: 1px solid #e7e5e4; margin: 30px 0;" />
                            
                            <table style="width: 100%; border-collapse: collapse;">
                                <tr><td style="padding: 8px 0; font-weight: bold; width: 150px;">Name:</td><td>${name}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Email:</td><td>${email}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Phone/WhatsApp:</td><td>${phone || "Not provided"}</td></tr>
                                <tr><td style="padding: 30px 0 8px 0; font-weight: bold; color: #78350f;" colspan="2">Stay Details</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Check In:</td><td>${checkIn || "Not selected"}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Check Out:</td><td>${checkOut || "Not selected"}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Adults:</td><td>${adults || "1"}</td></tr>
                                <tr><td style="padding: 8px 0; font-weight: bold;">Guide Needed:</td><td>${needsGuide ? "Yes" : "No"}</td></tr>
                                <tr><td style="padding: 20px 0; font-weight: bold;" colspan="2">Message / Special Requirements:</td></tr>
                                <tr><td colspan="2" style="background: #fdfcfb; padding: 20px; font-style: italic; color: #444;">${specialRequirements || intention || "No specific details provided."}</td></tr>
                            </table>
                            
                            <p style="font-size: 12px; color: #78716c; margin-top: 40px; text-align: center;">Sent from the Serengé Retreat Website Automation.</p>
                        </div>
                    `
                });
            } catch (emailErr) {
                console.error('Resend Email Error:', emailErr);
            }
        } else {
            console.log('Resend Mock Data (Missing API Key):', body);
        }

        return NextResponse.json({ message: 'Inquiry processed successfully' }, { status: 200 });

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
