import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Spring Blossom Retreat | Apricot Bloom Season in Shigar ★",
    description: "Witness the ethereal poetry of spring. Pink apricot blossoms against snow-white peaks. A 4-day creative retreat for artists and slow travelers ✓",
    keywords: [
        "spring blossom retreat",
        "apricot blossom pakistan",
        "shigar valley spring",
        "photography retreat pakistan",
        "blossom season baltistan",
        "slow travel pakistan"
    ],
    openGraph: {
        title: "Spring Blossom Retreat — Poetry in Bloom",
        description: "Experience Shigar during apricot blossom season. Pink trees, snow peaks, and peaceful village life.",
        images: [{ url: "/images/land/Spring Season.webp", width: 1200, height: 630 }],
    }
};

export default function SpringBlossomLayout({ children }: { children: React.ReactNode }) {
    return <>{children}</>;
}
