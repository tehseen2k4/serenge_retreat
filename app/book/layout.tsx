import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Inquire for Rooms in Shigar | Serengé Retreat",
    description: "WhatsApp the house to plan nights in Alchori. Three riverside rooms, airport pickup from Skardu, Balti kitchen. We reply as people.",
    keywords: [
        "book serenge retreat",
        "shigar valley reservation",
        "rooms in shigar",
        "aslam shigri booking"
    ],
    openGraph: {
        title: "Inquire for Rooms in Shigar | Serengé Retreat",
        description: "WhatsApp the house to plan nights in Alchori. Three rooms, pickup, Balti kitchen.",
        images: [{ url: "/images/og/stay.jpg", width: 1200, height: 630, alt: "Riverside hut deck at Serengé Retreat" }],
        url: "https://www.serengeretreatpakistan.com/book"
    }
};

export default function BookLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return <>{children}</>;
}
