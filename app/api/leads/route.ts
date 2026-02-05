import { NextResponse } from 'next/server';

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, country, journey, intention } = body;

        // Basic Validation
        if (!name || !email) {
            return NextResponse.json({ error: 'Name and Email are required' }, { status: 400 });
        }

        const HUBSPOT_ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;

        // If no token, mock success for dev/demo purposes
        if (!HUBSPOT_ACCESS_TOKEN) {
            console.log('Mocking HubSpot Submission:', body);
            return NextResponse.json({ message: 'Lead captured (Mock Mode)' }, { status: 200 });
        }

        // HubSpot CRM API Call v3
        // Endpoint: https://api.hubapi.com/crm/v3/objects/contacts
        const hubspotData = {
            properties: {
                email: email,
                firstname: name,
                country: country || "",
                message: intention || "",
                journey_interest: journey || "Undecided",
                lifecyclestage: "lead"
            }
        };

        const response = await fetch('https://api.hubapi.com/crm/v3/objects/contacts', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${HUBSPOT_ACCESS_TOKEN}`
            },
            body: JSON.stringify(hubspotData)
        });

        if (!response.ok) {
            const errorData = await response.json();

            // Handle "Contact already exists" (409) gracefully
            if (response.status === 409) {
                return NextResponse.json({ message: 'Contact already exists, considered updated.' }, { status: 200 });
            }

            console.error('HubSpot API Error:', errorData);
            throw new Error('HubSpot integration failed');
        }

        return NextResponse.json({ message: 'Lead captured successfully' }, { status: 200 });

    } catch (error) {
        console.error('API Route Error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
