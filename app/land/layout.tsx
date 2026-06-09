import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Shigar Valley Guide | K2, Spantik & Karakoram Attractions ★",
    description: "Discover Shigar Valley: gateway to K2, Khosar Gang peak, and Baltoro Glacier. Explore seasons, attractions, and how to reach the heart of Baltistan ✓",
    keywords: [
        "shigar valley pakistan",
        "k2 base camp route",
        "khosar gang trekking",
        "spantik peak",
        "baltoro glacier",
        "alchori village",
        "shigar fort",
        "baltistan tourism",
        "karakoram mountains",
        "gilgit baltistan travel"
    ],
    openGraph: {
        title: "The Land - Shigar Valley & Karakoram Mountains",
        description: "Gateway to K2, surrounded by 7000m peaks. Explore Baltistan's timeless beauty.",
        images: [{ url: "/images/land/land_hero.webp", width: 1200, height: 630 }],
        url: "https://www.serengeretreatpakistan.com/land"
    },
    twitter: {
        card: "summary_large_image",
        title: "Shigar Valley - The Land",
        description: "Gateway to K2 and the mighty Karakoram mountains.",
    }
};

export default function LandLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
