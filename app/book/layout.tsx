import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Book Your Retreat | Serengé Wellness Sanctuary Shigar ★",
    description: "Secure your path to silence. Inquire about our seasonal soul journeys, wellness programs, and boutique mountain stays. Start your long life journey today ✓",
    keywords: [
        "book serenge retreat",
        "shigar valley reservation",
        "wellness retreat pricing",
        "retreat availability pakistan",
        "aslam shigri booking",
        "baltistan luxury retreat"
    ],
    openGraph: {
        title: "Book Your Retreat — Serengé Wellness Sanctuary",
        description: "Secure your path to silence in the heart of Shigar Valley.",
        images: [{ url: "/images/stay/Stay Hero.webp", width: 1200, height: 630 }],
        url: "https://serengeretreat.com/book"
    }
};

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
