import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wellness Journeys | Soul, Yoga & Nature Retreats in Baltistan ★",
    description: "Choose your sanctuary: Soul retreats for silence, guided wellness with somatic healing, hiking immersions, spring blossom experiences, or cosmic star gazing in Shigar Valley ✓",
    keywords: [
        "meditation retreat pakistan",
        "yoga retreat baltistan",
        "spring blossom retreat",
        "hiking immersion karakoram",
        "star gazing retreat pakistan",
        "somatic healing retreat",
        "wellness retreat pakistan",
        "nature immersion pakistan",
        "soul journey retreat",
        "shigar valley wellness"
    ],
    openGraph: {
        title: "5 Transformative Journeys — Serengé Retreat",
        description: "Explore our curated retreats: Soul, Wellness, Hiking, Spring Blossom, and Nature Immersion in Shigar Valley, Baltistan.",
        images: [{ url: "/images/journeys/Journeys Hero.webp", width: 1200, height: 630 }],
        url: "https://serengeretreat.com/journeys"
    },
    twitter: {
        card: "summary_large_image",
        title: "Wellness Journeys - Serengé Retreat",
        description: "Choose your path to peace in the Karakoram mountains.",
    }
};

export default function JourneysLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}

