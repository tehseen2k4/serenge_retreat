import { Metadata } from "next";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
    title: "Rooms in Shigar Valley | Serengé Retreat",
    description: "Three riverside rooms in Alchori, Shigar Valley: Deluxe, Twin, or Hut. Breakfast, airport pickup from Skardu. WhatsApp the house.",
    keywords: [
        "rooms in shigar valley",
        "shigar valley stay",
        "hotels in shigar",
        "shigar hotels",
        "serenge retreat booking",
        "alchori riverside rooms",
        "airport pickup skardu",
        "mud brick architecture"
    ],
    openGraph: {
        title: "Rooms in Shigar Valley | Serengé Retreat",
        description: "Three riverside rooms in Alchori. Breakfast, airport pickup, WhatsApp the house.",
        images: [{ url: "/images/og/stay.jpg", width: 1200, height: 630, alt: "Riverside hut deck at Serengé Retreat" }],
        url: "https://www.serengeretreatpakistan.com/stay"
    },
    twitter: {
        card: "summary_large_image",
        title: "Rooms in Shigar Valley | Serengé Retreat",
        description: "Three riverside rooms in Alchori. Breakfast, airport pickup, WhatsApp the house.",
        images: ["/images/og/stay.jpg"],
    }
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "How far is Serenge Retreat from Skardu Airport?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Serenge Retreat is 57 km (1 hr 45 min) from Skardu Airport and 17 km (25 min) from Shigar Fort. The last 1.4 km is a rough track, best for 4x4 vehicles. Drive slowly or request a pickup."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide Rent-a-Car Services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we arrange all kinds of vehicles as per guest requirements through our partner network."
            }
        },
        {
            "@type": "Question",
            "name": "Do you provide Airport Pick/Drop Services?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we provide Airport Pick/Drop services on guest request. Please coordinate with us at least 24 hours in advance."
            }
        },
        {
            "@type": "Question",
            "name": "Do you have Hiking Guides?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Yes, we have local hiking guides and high-altitude porters for K2 Base Camp treks and Khosar Gang peak expeditions."
            }
        },
        {
            "@type": "Question",
            "name": "Is Deosai Road open?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "It usually opens between June 5-15 and closes between October 5-15, depending on the snowfall. Always check with us for real-time updates."
            }
        }
    ]
};

export default function StayLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <>
            <StructuredData data={faqSchema} />
            {children}
        </>
    );
}
