"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ItineraryAccordion from "../../components/ItineraryAccordion";
import StructuredData from "../../components/StructuredData";
import TheRelease from "../../components/TheRelease";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function SoulfulRetreatPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Soul Journey Retreat",
        "provider": {
            "@type": "LodgingBusiness",
            "name": "Serengé Retreat"
        },
        "description": "A slow, unstructured retreat focused on silence and deep rest in Shigar Valley.",
        "areaServed": "Shigar Valley, Baltistan"
    };

    return (
        <div className="bg-canvas min-h-screen pt-32 pb-20 px-6">
            <StructuredData data={serviceSchema} />
            <article className="max-w-5xl mx-auto space-y-24">

                {/* Header Section */}
                <header className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Seasonal Silence</motion.p>
                    <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-7xl font-serif text-ink italic leading-tight">
                        1. SOUL JOURNEY <br /> RETREAT
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-xl text-ink-soft font-light">
                        For the Seeker. For the One Who Needs Silence. A slow, unstructured retreat where the silence of Shigar Valley does the work.
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap justify-center gap-8 pt-4 text-xs uppercase tracking-widest text-ink/60">
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Season</span>
                            <span className="text-ink">April – October</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Duration</span>
                            <span className="text-ink">4-Day Sample Rhythm</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Location</span>
                            <span className="text-ink">Alchori, Shigar Valley</span>
                        </div>
                    </motion.div>
                </header>

                {/* Main Visual */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative aspect-video w-full bg-paper rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src="/images/journeys/Soul Journey Pic 2.webp"
                        alt="Soul Journey Retreat - Meditation and silence in Shigar Valley, Baltistan"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Purpose & Why Join */}
                <section className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-ink italic">Mountains, space, and deep rest.</h2>
                        <p className="text-ink-soft text-lg leading-relaxed font-light">
                            A slow, unstructured retreat where the silence of <Link href="/land" className="text-earth hover:underline">Shigar Valley</Link> does the work. There is no rush, no strict schedule — just mountains, space, and deep rest.
                        </p>
                        <ul className="space-y-4 text-ink-soft">
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Solo travelers seeking clarity</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Creatives in transition</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Those feeling burned out</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Spiritual seekers craving stillness</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-paper p-8 md:p-12 space-y-6">
                        <h3 className="text-xl font-serif text-ink">Accommodation & Facilities</h3>
                        <ul className="text-sm text-ink-soft leading-relaxed font-light space-y-2">
                            <li>• Private mountain cabins</li>
                            <li>• Hot showers</li>
                            <li>• Organic garden</li>
                            <li>• Bonfire space</li>
                            <li>• Mountain-view terrace</li>
                            <li>• Limited WiFi</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/stay#booking-form" className="inline-block w-full text-center py-4 bg-ink text-white uppercase tracking-widest text-xs hover:bg-earth transition-colors">
                                Apply to Join
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Itinerary */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-sm uppercase tracking-widest text-earth">The Rhythm</h2>
                        <h3 className="text-4xl font-serif text-ink italic">4-Day Sample Flow</h3>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ItineraryAccordion
                            title="Day 1: Arrival & Grounding"
                            items={[
                                { time: "Welcome", activity: "Herbal tea & Grounding circle in nature." },
                                { time: "Evening", activity: "Gentle walk through Alchori village & bonfire circle with soft local Balti music (bazam)." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 2: Silence & Craft"
                            items={[
                                { time: "Morning", activity: "Sunrise self-guided meditation & nature walk along glacial streams." },
                                { time: "Afternoon", activity: "Handwoven basket workshop with local women artists. Rest and journaling." },
                                { time: "Night", activity: "Stargazing under pure mountain sky." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 3: Community & Culture"
                            items={[
                                { time: "Morning", activity: "Unguided morning reflection & meet-up with local community families." },
                                { time: "Afternoon", activity: "Hand-stitch traditional embroidery workshop." },
                                { time: "Night", activity: "Local Balti music bazam night & bonfire sharing circle." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 4: Integration"
                            items={[
                                { time: "Final", activity: "Grounding walk & Closing circle." },
                                { time: "Departure", activity: "Departure with intention." }
                            ]}
                        />
                    </div>
                </section>

                {/* Digital Release Ritual */}
                <section className="space-y-12">
                    <div className="text-center space-y-4 max-w-2xl mx-auto">
                        <h2 className="text-sm uppercase tracking-widest text-earth">Sacred Intention</h2>
                        <h3 className="text-4xl font-serif text-ink italic">The Digital Release</h3>
                        <p className="text-ink-soft font-light leading-relaxed">
                            Sacred rituals have been part of Himalayan life for centuries. This digital fire ceremony is an invitation to leave behind what no longer serves you. Type a burden, watch it dissolve into the mountain winds, and prepare your heart for the silence of Alchori.
                        </p>
                    </div>
                    <div className="max-w-4xl mx-auto">
                        <TheRelease />
                    </div>
                    <div className="text-center">
                        <p className="text-xs text-ink/40 italic uppercase tracking-widest">Symbolic preparation for your Soul Journey.</p>
                    </div>
                </section>

                {/* What's Included */}
                <section className="bg-paper p-12 md:p-20 rounded-sm border border-earth/10 grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif italic text-earth">Includes</h3>
                        <ul className="space-y-3 font-light text-ink-soft">
                            <li>• Private cabin accommodation</li>
                            <li>• Organic, plant-based & local Balti meals</li>
                            <li>• Grounding sessions & Nature walks</li>
                            <li>• Basket & hand-stitch workshops</li>
                            <li>• Community meet-up</li>
                            <li>• Bonfire circle & Balti music bazam</li>
                        </ul>
                    </div>
                    <div className="space-y-6 border-l border-earth/10 pl-12">
                        <h3 className="text-2xl font-serif italic text-earth/60">Not Included</h3>
                        <ul className="space-y-3 font-light text-ink-soft text-sm">
                            <li>• Flights to Skardu</li>
                            <li>• Airport transfers (available on request)</li>
                            <li>• Personal expenses</li>
                        </ul>
                    </div>
                </section>



                {/* Final Footer CTA */}
                <footer className="text-center space-y-8 py-12 border-t border-earth/10">
                    <p className="font-serif italic text-2xl text-ink">Limited to 8 soulful participants.</p>
                    <Link href="/stay#booking-form" className="inline-block px-12 py-4 bg-earth text-white uppercase tracking-widest text-sm hover:bg-ink transition-all">
                        Reserve Your Space
                    </Link>
                </footer>
            </article>
        </div>
    );
}
