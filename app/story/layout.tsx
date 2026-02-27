import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Our Story — Serengé Retreat | From K2 Trail to Sanctuary ★",
    description: "Discover the journey of Aslam Shigri, from K2 porter to founder of Serengé Retreat. A story of resilience, mountains, and the search for soul stillness in Baltistan ✓",
    keywords: [
        "aslam shigri",
        "serenge retreat founder",
        "alchori village",
        "reego adventure pakistan",
        "k2 porter story",
        "balti culture",
        "sustainable tourism pakistan",
        "khosar gang summit",
        "mountain guide pakistan"
    ],
    openGraph: {
        title: "Our Story — Serengé Retreat | From K2 Trail to Sanctuary",
        description: "Aslam Shigri's journey from carrying K2 loads to building a riverside sanctuary in Shigar Valley.",
        images: [{ url: "/images/story/Aslam.webp", width: 1200, height: 630 }],
        url: "https://serengeretreat.com/story"
    },
    twitter: {
        card: "summary_large_image",
        title: "Our Story - Serengé Retreat",
        description: "From the high peaks to the riverside. Our journey.",
    }
};

export default function StoryLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
