import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Nature Immersion & Star Gazing | Cosmic Retreat in Baltistan ★",
    description: "Connect with the wild. Glacial streams, cold plunge grounding, and Milky Way star-gazing sessions in the raw beauty of Shigar Valley ✓",
    keywords: [
        "nature immersion retreat",
        "star gazing pakistan",
        "milky way photography pakistan",
        "shigar valley nature",
        "cold plunge grounding",
        "glacial stream hike"
    ],
    openGraph: {
        title: "Nature Immersion & Star Gazing — The Cosmic Explorer",
        description: "Connect with the raw power of Baltistan. A 5-day explorer’s program under the stars.",
        images: [{ url: "/images/home/Nature Immersions.webp", width: 1200, height: 630 }],
    }
};

export default function NatureImmersionLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
