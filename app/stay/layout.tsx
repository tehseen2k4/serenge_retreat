import { Metadata } from "next";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
    title: "Eco Rooms & Booking | Serengé Retreat Shigar Valley ★",
    description: "Stay in our eco-friendly mud brick retreat. Book your room or inquire about personalized wellness journeys in Shigar Valley. Authentic mountain silence guaranteed ✓",
    keywords: [
        "book shigar valley retreat",
        "eco accommodation pakistan",
        "serenge retreat booking",
        "sustainable retreat baltistan",
        "mud brick architecture",
        "organic farm stay pakistan",
        "k2 base camp accommodation",
        "wellness retreat inquiry pakistan"
    ],
    openGraph: {
        title: "Eco Rooms & Direct Booking - Serengé Retreat",
        description: "Mud brick architecture and personalized retreat planning in Shigar Valley.",
        images: [{ url: "/images/stay/Stay Hero.webp", width: 1200, height: 630 }],
        url: "https://serengeretreat.com/stay"
    },
    twitter: {
        card: "summary_large_image",
        title: "Stay & Book - Serengé Retreat",
        description: "Sustainable mud brick rooms and wellness journeys in Shigar Valley.",
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
                "text": "Serenge Retreat is 57 km (1 hr 45 min) from Skardu Airport and 17 km (25 min) from Shigar Fort. The last 1.4 km is a rough track, best for 4x4 vehicles — drive slowly or request a pickup."
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
