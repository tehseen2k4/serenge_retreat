"use client";

import type { ReactNode } from "react";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "../components/StructuredData";
import JourneyPhotos from "../components/JourneyPhotos";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

function JourneyBlock({
    id,
    flip,
    tone,
    photos,
    kicker,
    title,
    lead,
    points,
    detailsHref,
    cta,
}: {
    id: string;
    flip?: boolean;
    tone: "stone" | "sand" | "earth";
    photos: [
        { src: string; alt: string },
        { src: string; alt: string },
        { src: string; alt: string },
    ];
    kicker: string;
    title: ReactNode;
    lead: string;
    points: { heading: string; body: string; strong?: boolean }[];
    detailsHref: string;
    cta: { href: string; label: string };
}) {
    return (
        <section id={id} className="grid grid-cols-1 items-start gap-8 md:grid-cols-2 md:gap-20">
            <div
                className={`contents md:sticky md:top-32 md:flex md:flex-col md:gap-12 ${
                    flip ? "md:order-1" : "md:order-2"
                }`}
            >
                <header className="order-1 space-y-6">
                    <div className="space-y-2">
                        <p className="text-xs font-medium uppercase tracking-[0.4em] text-earth">{kicker}</p>
                        <h2 className="font-serif text-4xl italic leading-tight text-ink md:text-5xl">{title}</h2>
                    </div>
                    <p className="text-lg font-light leading-relaxed text-ink-soft">{lead}</p>
                </header>
                <div className="order-3 space-y-8">
                    <div className="space-y-8">
                        {points.map((point) => (
                            <div
                                key={point.heading}
                                className={`border-l-2 py-2 pl-6 ${point.strong ? "border-earth" : "border-earth/20"}`}
                            >
                                <h3 className="font-serif text-xl text-ink">{point.heading}</h3>
                                <p className="text-sm font-light text-ink-soft">{point.body}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex flex-col gap-6 pt-2 md:pt-8">
                        <Link
                            href={detailsHref}
                            className="self-start border-b border-earth/20 pb-1 text-xs font-medium uppercase tracking-widest text-earth transition-all hover:border-ink hover:text-ink"
                        >
                            View Full Details →
                        </Link>
                        <Link
                            href={cta.href}
                            className="inline-block self-start bg-ink px-10 py-4 text-xs uppercase tracking-widest text-white transition-all hover:bg-earth"
                        >
                            {cta.label}
                        </Link>
                    </div>
                </div>
            </div>
            <div className={`order-2 ${flip ? "md:order-2" : "md:order-1"}`}>
                <JourneyPhotos photos={photos} tone={tone} />
            </div>
        </section>
    );
}

export default function JourneysPage() {
    const journeysSchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.serengeretreatpakistan.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Journeys",
                        "item": "https://www.serengeretreatpakistan.com/journeys"
                    }
                ]
            },
            {
                "@type": "CollectionPage",
                "@id": "https://www.serengeretreatpakistan.com/journeys/#collection",
                "url": "https://www.serengeretreatpakistan.com/journeys",
                "name": "Wellness Journeys & Spiritual Retreats | Serengé Retreat",
                "description": "Explore our hand-curated wellness journeys, spiritual retreats, K2 hiking preparations, and nature immersions in the Karakoram mountains.",
                "publisher": {
                    "@type": "Organization",
                    "name": "Serenge Retreat",
                    "url": "https://www.serengeretreatpakistan.com"
                },
                "hasPart": [
                    {
                        "@type": "CreativeWork",
                        "name": "Soul Journey Retreat",
                        "description": "A slow, unstructured retreat where the silence of Shigar Valley does the work.",
                        "url": "https://www.serengeretreatpakistan.com/journeys/soulful-retreat"
                    },
                    {
                        "@type": "CreativeWork",
                        "name": "Wellness & Healing Retreat",
                        "description": "Breathwork, somatic healing, and yoga practiced in open air under the Karakoram sky.",
                        "url": "https://www.serengeretreatpakistan.com/journeys/wellness-healing-retreat"
                    },
                    {
                        "@type": "CreativeWork",
                        "name": "Hiking & Mountain Immersion",
                        "description": "Gentle to moderate hikes toward alpine meadows and high mountain passes, combined with grounding.",
                        "url": "https://www.serengeretreatpakistan.com/journeys/hiking-mountain-immersion"
                    },
                    {
                        "@type": "CreativeWork",
                        "name": "Spring Blossom Retreat",
                        "description": "Experience Shigar during apricot blossom season. Pink trees, snow peaks, and peaceful village life.",
                        "url": "https://www.serengeretreatpakistan.com/journeys/spring-blossom-retreat"
                    },
                    {
                        "@type": "CreativeWork",
                        "name": "Nature Immersion & Star Gazing",
                        "description": "Glacial streams, powerful landscapes, and nights under the Milky Way.",
                        "url": "https://www.serengeretreatpakistan.com/journeys/nature-immersion-star-gazing"
                    }
                ]
            },
            {
                "@type": ["LocalBusiness", "LodgingBusiness"],
                "@id": "https://www.serengeretreatpakistan.com/#lodging",
                "name": "Serengé Retreat Shigar",
                "url": "https://www.serengeretreatpakistan.com",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Alchori Village",
                    "addressLocality": "Shigar Valley",
                    "addressRegion": "Gilgit-Baltistan",
                    "postalCode": "16301",
                    "addressCountry": "PK"
                }
            }
        ]
    };

    return (
        <div className="bg-canvas min-h-screen">
            <StructuredData data={journeysSchema} />

            {/* HEADER */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 bg-paper overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-20">
                    <Image
                        src="/images/journeys/Journeys Hero.webp"
                        alt="Serengé Retreat Wellness Journeys"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeUp}
                        className="text-4xl md:text-6xl font-serif text-ink italic leading-tight"
                    >
                        Wellness Journeys & <br /> Spiritual Retreats.
                    </motion.h1>
                    <motion.p
                        initial="hidden" animate="visible" variants={fadeUp} transition={{ delay: 0.1 }}
                        className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed font-light"
                    >
                        We do not sell packages. We curate space. Each experience is designed to
                        hold what you need to find in the silence of the Karakoram.
                    </motion.p>
                </div>
            </section>

            {/* OFFERS CONTAINER */}
            <div className="mx-auto max-w-7xl space-y-24 px-6 py-16 md:space-y-48 md:px-12 md:py-32">
                <JourneyBlock
                    id="soul"
                    tone="stone"
                    photos={[
                        { src: "/images/home/Soul Journeys.webp", alt: "Soul Journey" },
                        { src: "/images/journeys/Soul Journey Pic 2.webp", alt: "Soul Journey" },
                        { src: "/images/journeys/Soul Journey Pic 3.webp", alt: "Soul Journey" },
                    ]}
                    kicker="Seasonal Silence"
                    title={<>1. SOUL JOURNEY <br /> RETREAT</>}
                    lead="For the Seeker. For the One Who Needs Silence. A slow, unstructured retreat where the silence of Shigar Valley does the work."
                    points={[
                        { heading: "Deep Rest", body: "Mountains, space, and deep rest. Long walks, unguided meditation, and meaningful cultural connection.", strong: true },
                        { heading: "The Seeker", body: "Ideal for solo travelers seeking clarity, creatives in transition, and those feeling burned out." },
                    ]}
                    detailsHref="/journeys/soulful-retreat"
                    cta={{ href: "/stay#booking-form", label: "Apply to Join" }}
                />

                <JourneyBlock
                    id="wellness"
                    flip
                    tone="sand"
                    photos={[
                        { src: "/images/home/Wellness Retreat.webp", alt: "Wellness Retreat" },
                        { src: "/images/journeys/Wellness Retreat Pic 2.webp", alt: "Wellness Retreat" },
                        { src: "/images/journeys/Wellness Retreat Pic 3.webp", alt: "Wellness Retreat" },
                    ]}
                    kicker="Guided Healing"
                    title={<>2. WELLNESS & <br /> HEALING RETREAT</>}
                    lead="Guided by Visiting Practitioners. Breathwork, somatic healing, and yoga practiced in open air under the Karakoram sky."
                    points={[
                        { heading: "Nervous System Reset", body: "A structured healing experience for those healing emotional stress or seeking a deep reset." },
                        { heading: "Body & Breath", body: "Inspirational settings for yoga practitioners and wellness enthusiasts." },
                    ]}
                    detailsHref="/journeys/wellness-healing-retreat"
                    cta={{ href: "/stay#booking-form", label: "Inquire for Groups" }}
                />

                <JourneyBlock
                    id="hiking"
                    tone="stone"
                    photos={[
                        { src: "/images/land/Summer Season.webp", alt: "Hiking & Mountain Immersion" },
                        { src: "/images/land/Khosar Gang.webp", alt: "Hiking & Mountain Immersion" },
                        { src: "/images/land/Spantik Peak.webp", alt: "Hiking & Mountain Immersion" },
                    ]}
                    kicker="Active Adventure"
                    title={<>3. HIKING & <br /> MOUNTAIN IMMERSION</>}
                    lead="For explorers who want movement, mountains, and culture combined. Gentle to moderate hikes blended with grounding."
                    points={[
                        { heading: "Shigar Broq & Thalle La", body: "Scenic treks toward alpine meadows and high mountain passes." },
                        { heading: "Explorers & Artists", body: "Perfect for nature lovers, active travelers, and photographers seeking inspiration." },
                    ]}
                    detailsHref="/journeys/hiking-mountain-immersion"
                    cta={{ href: "/stay#booking-form", label: "Book Your Trek" }}
                />

                <JourneyBlock
                    id="spring"
                    flip
                    tone="sand"
                    photos={[
                        { src: "/images/land/Spring Season.webp", alt: "Spring Blossom" },
                        { src: "/images/journeys/Soul Journey Pic 2.webp", alt: "Spring Blossom" },
                        { src: "/images/journeys/Soul Journey Pic 3.webp", alt: "Spring Blossom" },
                    ]}
                    kicker="Seasonal Bloom"
                    title={<>4. SPRING <br /> BLOSSOM RETREAT</>}
                    lead="Experience Shigar during apricot blossom season. Pink trees, snow peaks, and peaceful village life."
                    points={[
                        { heading: "Village Blossom Walks", body: "Gentle morning walks through blooming orchards and grounding circles." },
                        { heading: "Slow Travelers", body: "Curated for couples, artists, and photographers in the heart of spring." },
                    ]}
                    detailsHref="/journeys/spring-blossom-retreat"
                    cta={{ href: "/stay#booking-form", label: "Join the Bloom" }}
                />

                <JourneyBlock
                    id="immersion"
                    tone="earth"
                    photos={[
                        { src: "/images/home/Nature Immersions.webp", alt: "Nature Immersion" },
                        { src: "/images/journeys/Nature Immersion Pic 2.webp", alt: "Nature Immersion" },
                        { src: "/images/journeys/Nature Immersion Pic 3.webp", alt: "Nature Immersion" },
                    ]}
                    kicker="Cosmic Connection"
                    title={<>5. NATURE IMMERSION <br /> & STAR GAZING</>}
                    lead="Connect with the raw power of Baltistan. Glacial streams, powerful landscapes, and nights under the Milky Way."
                    points={[
                        { heading: "Glacial Energy", body: "Guided hikes toward glacial water and deep star-gazing nights." },
                        { heading: "Minimalists & Explorers", body: "For those seeking reconnection and explorers of silence." },
                    ]}
                    detailsHref="/journeys/nature-immersion-star-gazing"
                    cta={{ href: "/stay#booking-form", label: "Inquire for Dates" }}
                />

            </div>
        </div>
    );
}
