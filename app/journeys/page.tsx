"use client";

import { motion, Variants } from "framer-motion";
import ItineraryAccordion from "../components/ItineraryAccordion";
import Image from "next/image";
import Link from "next/link";
import StructuredData from "../components/StructuredData";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

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
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-32 space-y-48">

                {/* Journey 1: SOUL JOURNEY RETREAT */}
                <section id="soul" className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                    {/* Visual Side: 3 Photos in a Column */}
                    <div className="grid grid-cols-1 gap-6 order-1">
                        <div className="aspect-[4/5] relative bg-stone/10 rounded-sm overflow-hidden">
                            <Image src="/images/home/Soul Journeys.webp" alt="Soul Journey" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-stone/10 rounded-sm overflow-hidden">
                            <Image src="/images/journeys/Soul Journey Pic 2.webp" alt="Soul Journey" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-stone/10 rounded-sm overflow-hidden">
                            <Image src="/images/journeys/Soul Journey Pic 3.webp" alt="Soul Journey" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Content Side: Modern Text Layout */}
                    <div className="space-y-12 order-2 md:sticky md:top-32">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Seasonal Silence</p>
                                <h2 className="text-4xl md:text-5xl font-serif text-ink italic leading-tight">1. SOUL JOURNEY <br /> RETREAT</h2>
                            </div>
                            <p className="text-ink-soft text-lg font-light leading-relaxed">
                                For the Seeker. For the One Who Needs Silence. A slow, unstructured retreat where the silence of Shigar Valley does the work.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="border-l-2 border-earth pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Deep Rest</h4>
                                <p className="text-sm text-ink-soft font-light">Mountains, space, and deep rest. Long walks, unguided meditation, and meaningful cultural connection.</p>
                            </div>
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">The Seeker</h4>
                                <p className="text-sm text-ink-soft font-light">Ideal for solo travelers seeking clarity, creatives in transition, and those feeling burned out.</p>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col gap-6">
                            <Link href="/journeys/soulful-retreat" className="text-xs uppercase tracking-widest text-earth border-b border-earth/20 pb-1 self-start hover:text-ink hover:border-ink transition-all font-medium">
                                View Full Details →
                            </Link>
                            <Link href="/stay#booking-form" className="inline-block px-10 py-4 bg-ink text-white text-xs uppercase tracking-widest hover:bg-earth transition-all self-start">
                                Apply to Join
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Journey 2: WELLNESS & HEALING RETREAT */}
                <section id="wellness" className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                    {/* Content Side (Flipped for alternating) */}
                    <div className="space-y-12 order-2 md:order-1 md:sticky md:top-32">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Guided Healing</p>
                                <h2 className="text-4xl md:text-5xl font-serif text-ink italic leading-tight">2. WELLNESS & <br /> HEALING RETREAT</h2>
                            </div>
                            <p className="text-ink-soft text-lg font-light leading-relaxed">
                                Guided by Visiting Practitioners. Breathwork, somatic healing, and yoga practiced in open air under the Karakoram sky.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Nervous System Reset</h4>
                                <p className="text-sm text-ink-soft font-light">A structured healing experience for those healing emotional stress or seeking a deep reset.</p>
                            </div>
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Body & Breath</h4>
                                <p className="text-sm text-ink-soft font-light">Inspirational settings for yoga practitioners and wellness enthusiasts.</p>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col gap-6">
                            <Link href="/journeys/wellness-healing-retreat" className="text-xs uppercase tracking-widest text-earth border-b border-earth/20 pb-1 self-start hover:text-ink hover:border-ink transition-all font-medium">
                                View Full Details →
                            </Link>
                            <Link href="/stay#booking-form" className="inline-block px-10 py-4 bg-ink text-white text-xs uppercase tracking-widest hover:bg-earth transition-all self-start">
                                Inquire for Groups
                            </Link>
                        </div>
                    </div>

                    {/* Visual Side: 3 Photos in a Column */}
                    <div className="grid grid-cols-1 gap-6 order-1 md:order-2">
                        <div className="aspect-[4/5] relative bg-sand/10 rounded-sm overflow-hidden">
                            <Image src="/images/home/Wellness Retreat.webp" alt="Wellness Retreat" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-sand/10 rounded-sm overflow-hidden">
                            <Image src="/images/journeys/Wellness Retreat Pic 2.webp" alt="Wellness Retreat" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-sand/10 rounded-sm overflow-hidden">
                            <Image src="/images/journeys/Wellness Retreat Pic 3.webp" alt="Wellness Retreat" fill className="object-cover" />
                        </div>
                    </div>
                </section>

                {/* Journey 3: HIKING & MOUNTAIN IMMERSION RETREAT */}
                <section id="hiking" className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                    {/* Visual Side: 3 Photos in a Column */}
                    <div className="grid grid-cols-1 gap-6 order-1">
                        <div className="aspect-[4/5] relative bg-stone/10 rounded-sm overflow-hidden">
                            <Image src="/images/land/Summer Season.webp" alt="Hiking & Mountain Immersion" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-stone/10 rounded-sm overflow-hidden">
                            <Image src="/images/land/Khosar Gang.webp" alt="Hiking & Mountain Immersion" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-stone/10 rounded-sm overflow-hidden">
                            <Image src="/images/land/Spantik Peak.webp" alt="Hiking & Mountain Immersion" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Content Side: Modern Text Layout */}
                    <div className="space-y-12 order-2 md:sticky md:top-32">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Active Adventure</p>
                                <h2 className="text-4xl md:text-5xl font-serif text-ink italic leading-tight">3. HIKING & <br /> MOUNTAIN IMMERSION</h2>
                            </div>
                            <p className="text-ink-soft text-lg font-light leading-relaxed">
                                For explorers who want movement, mountains, and culture combined. Gentle to moderate hikes blended with grounding.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Shigar Broq & Thalle La</h4>
                                <p className="text-sm text-ink-soft font-light">Scenic treks toward alpine meadows and high mountain passes.</p>
                            </div>
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Explorers & Artists</h4>
                                <p className="text-sm text-ink-soft font-light">Perfect for nature lovers, active travelers, and photographers seeking inspiration.</p>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col gap-6">
                            <Link href="/journeys/hiking-mountain-immersion" className="text-xs uppercase tracking-widest text-earth border-b border-earth/20 pb-1 self-start hover:text-ink hover:border-ink transition-all font-medium">
                                View Full Details →
                            </Link>
                            <Link href="/stay#booking-form" className="inline-block px-10 py-4 bg-ink text-white text-xs uppercase tracking-widest hover:bg-earth transition-all self-start shadow-sm">
                                Book Your Trek
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Journey 4: SPRING BLOSSOM RETREAT */}
                <section id="spring" className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                    {/* Content Side (Flipped for alternating) */}
                    <div className="space-y-12 order-2 md:order-1 md:sticky md:top-32">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Seasonal Bloom</p>
                                <h2 className="text-4xl md:text-5xl font-serif text-ink italic leading-tight">4. SPRING <br /> BLOSSOM RETREAT</h2>
                            </div>
                            <p className="text-ink-soft text-lg font-light leading-relaxed">
                                Experience Shigar during apricot blossom season. Pink trees, snow peaks, and peaceful village life.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Village Blossom Walks</h4>
                                <p className="text-sm text-ink-soft font-light">Gentle morning walks through blooming orchards and grounding circles.</p>
                            </div>
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Slow Travelers</h4>
                                <p className="text-sm text-ink-soft font-light">Curated for couples, artists, and photographers in the heart of spring.</p>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col gap-6">
                            <Link href="/journeys/spring-blossom-retreat" className="text-xs uppercase tracking-widest text-earth border-b border-earth/20 pb-1 self-start hover:text-ink hover:border-ink transition-all font-medium">
                                View Full Details →
                            </Link>
                            <Link href="/stay#booking-form" className="inline-block px-10 py-4 bg-ink text-white text-xs uppercase tracking-widest hover:bg-earth transition-all self-start">
                                Join the Bloom
                            </Link>
                        </div>
                    </div>

                    {/* Visual Side: 3 Photos in a Column */}
                    <div className="grid grid-cols-1 gap-6 order-1 md:order-2">
                        <div className="aspect-[4/5] relative bg-sand/10 rounded-sm overflow-hidden">
                            <Image src="/images/land/Spring Season.webp" alt="Spring Blossom" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-sand/10 rounded-sm overflow-hidden">
                            <Image src="/images/journeys/Soul Journey Pic 2.webp" alt="Spring Blossom" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-sand/10 rounded-sm overflow-hidden">
                            <Image src="/images/journeys/Soul Journey Pic 3.webp" alt="Spring Blossom" fill className="object-cover" />
                        </div>
                    </div>
                </section>

                {/* Journey 5: NATURE IMMERSION & STAR GAZING RETREAT */}
                <section id="immersion" className="grid grid-cols-1 md:grid-cols-2 gap-20 items-start">
                    {/* Visual Side: 3 Photos in a Column */}
                    <div className="grid grid-cols-1 gap-6 order-1">
                        <div className="aspect-[4/5] relative bg-earth/10 rounded-sm overflow-hidden">
                            <Image src="/images/home/Nature Immersions.webp" alt="Nature Immersion" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-earth/10 rounded-sm overflow-hidden">
                            <Image src="/images/journeys/Nature Immersion Pic 2.webp" alt="Nature Immersion" fill className="object-cover" />
                        </div>
                        <div className="aspect-[4/3] relative bg-earth/10 rounded-sm overflow-hidden">
                            <Image src="/images/journeys/Nature Immersion Pic 3.webp" alt="Nature Immersion" fill className="object-cover" />
                        </div>
                    </div>

                    {/* Content Side: Modern Text Layout */}
                    <div className="space-y-12 order-2 md:sticky md:top-32">
                        <div className="space-y-6">
                            <div className="space-y-2">
                                <p className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Cosmic Connection</p>
                                <h2 className="text-4xl md:text-5xl font-serif text-ink italic leading-tight">5. NATURE IMMERSION <br /> & STAR GAZING</h2>
                            </div>
                            <p className="text-ink-soft text-lg font-light leading-relaxed">
                                Connect with the raw power of Baltistan. Glacial streams, powerful landscapes, and nights under the Milky Way.
                            </p>
                        </div>

                        <div className="space-y-8">
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Glacial Energy</h4>
                                <p className="text-sm text-ink-soft font-light">Guided hikes toward glacial water and deep star-gazing nights.</p>
                            </div>
                            <div className="border-l-2 border-earth/20 pl-6 py-2">
                                <h4 className="font-serif text-xl text-ink">Minimalists & Explorers</h4>
                                <p className="text-sm text-ink-soft font-light">For those seeking reconnection and explorers of silence.</p>
                            </div>
                        </div>

                        <div className="pt-8 flex flex-col gap-6">
                            <Link href="/journeys/nature-immersion-star-gazing" className="text-xs uppercase tracking-widest text-earth border-b border-earth/20 pb-1 self-start hover:text-ink hover:border-ink transition-all font-medium">
                                View Full Details →
                            </Link>
                            <Link href="/stay#booking-form" className="inline-block px-10 py-4 bg-ink text-white text-xs uppercase tracking-widest hover:bg-earth transition-all self-start">
                                Inquire for Dates
                            </Link>
                        </div>
                    </div>
                </section>

            </div>
        </div>
    );
}
