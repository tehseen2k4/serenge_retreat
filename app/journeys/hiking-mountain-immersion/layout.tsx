import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Hiking & Mountain Immersion | Active Retreat in the Karakoram ★",
    description: "Reconnect through movement. Guided treks to Shigar Broq and Thallay La combined with cultural immersion and traditional craft workshops in Baltistan ✓",
    keywords: [
        "hiking retreat pakistan",
        "mountain immersion karakoram",
        "trekking retreat baltistan",
        "active adventure pakistan",
        "shigar broq trek",
        "thalle la pass trail"
    ],
    openGraph: {
        title: "Hiking & Mountain Immersion — Adventure & Stillness",
        description: "For explorers who want movement, mountains, and culture combined in the heart of the Karakoram.",
        images: [{ url: "/images/land/Summer Season.webp", width: 1200, height: 630 }],
    }
};

export default function HikingImmersionLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
