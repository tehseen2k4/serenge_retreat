import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Soul Journey Retreat | Sacred Silence & Deep Rest in Baltistan ★",
    description: "A slow, unstructured retreat for seekers. Find clarity through silence, village walks, and unguided meditation in the hidden heart of Shigar Valley ✓",
    keywords: [
        "soul journey retreat",
        "meditation retreat pakistan",
        "silent retreat baltistan",
        "spiritual seeker travel",
        "shigar valley stillness",
        "mountain rest retreat"
    ],
    openGraph: {
        title: "Soul Journey Retreat — Find Your Silence",
        description: "A slow, unstructured retreat for deep rest and clarity in the Karakoram mountains.",
        images: [{ url: "/images/home/Soul Journeys.webp", width: 1200, height: 630 }],
    }
};

export default function SoulfulRetreatLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
