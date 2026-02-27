import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Wellness & Healing Retreat | Somatic Yoga in Shigar Valley ★",
    description: "Recover your peace with guided breathwork, somatic healing, and yoga under the Karakoram peaks. A structured 5-day program for nervous system reset ✓",
    keywords: [
        "wellness retreat pakistan",
        "somatic healing retreat",
        "yoga retreat baltistan",
        "breathwork workshop pakistan",
        "shigar valley wellness",
        "nervous system reset retreat"
    ],
    openGraph: {
        title: "Wellness & Healing Retreat — Reset & Recover",
        description: "A structured 5-day healing experience practiced in the open air under the Karakoram sky.",
        images: [{ url: "/images/home/Wellness Retreat.webp", width: 1200, height: 630 }],
    }
};

export default function WellnessHealingLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
