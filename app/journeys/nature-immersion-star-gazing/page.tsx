"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ItineraryAccordion from "../../components/ItineraryAccordion";
import StructuredData from "../../components/StructuredData";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function NatureImmersionStarGazingPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Nature Immersion & Star Gazing",
        "provider": {
            "@type": "LodgingBusiness",
            "name": "Serengé Retreat"
        },
        "description": "Exploration program including glacial stream grounding and Milky Way photography sessions.",
        "areaServed": "Shigar Valley, Baltistan"
    };

    return (
        <div className="bg-canvas min-h-screen pt-32 pb-20 px-6">
            <StructuredData data={serviceSchema} />
            <article className="max-w-5xl mx-auto space-y-24">

                {/* Header Section */}
                <header className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Cosmic Connection</motion.p>
                    <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-7xl font-serif text-ink italic leading-tight">
                        5. NATURE IMMERSION & <br /> STAR GAZING
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-xl text-ink-soft font-light">
                        For the minimalist. For the stargazer. Deep immersion in the raw elements of <Link href="/land" className="text-earth hover:underline">Baltistan</Link>.
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap justify-center gap-8 pt-4 text-xs uppercase tracking-widest text-ink/60">
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Season</span>
                            <span className="text-ink">April – October</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Duration</span>
                            <span className="text-ink">5-Day Explorer’s Program</span>
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
                        src="/images/journeys/Nature Immersion Pic 2.webp"
                        alt="Nature Immersion and Star Gazing - Milky Way photography and astronomy in Shigar Valley"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Purpose & Why Join */}
                <section className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-ink italic">Reconnection with the Wild.</h2>
                        <p className="text-ink-soft text-lg leading-relaxed font-light">
                            Experience the elemental forces of the Karakoram. From the ice-cold glacial streams to the depth of the night sky, this retreat is designed for those who seek the raw and the real.
                        </p>
                        <ul className="space-y-4 text-ink-soft">
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Outdoor lovers</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Those seeking reconnection</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Minimalists</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Explorers of silence</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-paper p-8 md:p-12 space-y-6">
                        <h3 className="text-xl font-serif text-ink">The Adventure</h3>
                        <ul className="text-sm text-ink-soft leading-relaxed font-light space-y-2">
                            <li>• Glacial stream hikes</li>
                            <li>• Cold plunge grounding</li>
                            <li>• Deep star-gazing sessions</li>
                            <li>• Traditional mountain treks</li>
                            <li>• Community & Craft immersion</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/stay#booking-form" className="inline-block w-full text-center py-4 bg-ink text-white uppercase tracking-widest text-xs hover:bg-earth transition-colors">
                                Inquire for Dates
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Itinerary */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-sm uppercase tracking-widest text-earth">The Flow</h2>
                        <h3 className="text-4xl font-serif text-ink italic">5-Day Explorer’s Program</h3>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ItineraryAccordion
                            title="Day 1: Arrival & Earth Connection"
                            items={[
                                { time: "Welcome", activity: "Grounding circle & village walk." },
                                { time: "Evening", activity: "Bonfire night under the peaks." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 2: Glacial Streams"
                            items={[
                                { time: "Day", activity: "Guided hike toward glacial water & cold plunge experience." },
                                { time: "Reflect", activity: "Reflection circle by the riverside." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 3: Mountain Trek"
                            items={[
                                { time: "Day", activity: "Guided trek toward Shigar valley trails & picnic lunch." },
                                { time: "Evening", activity: "Relaxed basket weaving session." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 4: Culture & Cosmos"
                            items={[
                                { time: "Day", activity: "Community meet-up & hand-stitch workshop." },
                                { time: "Night", activity: "Deep star-gazing night in Shigar Valley." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 5: Closing"
                            items={[
                                { time: "Morning", activity: "Sunrise grounding & closing circle." },
                                { time: "Departure", activity: "Integrated departure." }
                            ]}
                        />
                    </div>
                </section>

                {/* What's Included */}
                <section className="bg-paper p-12 md:p-20 rounded-sm border border-earth/10 grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif italic text-earth">Includes</h3>
                        <ul className="space-y-3 font-light text-ink-soft">
                            <li>• Riverside accommodation</li>
                            <li>• All guided hikes & stargazing equipment</li>
                            <li>• Three organic meals daily</li>
                            <li>• All workshops & cultural experiences</li>
                        </ul>
                    </div>
                    <div className="space-y-6 border-l border-earth/10 pl-12">
                        <h3 className="text-2xl font-serif italic text-earth/60">Not Included</h3>
                        <ul className="space-y-3 font-light text-ink-soft text-sm">
                            <li>• Flights & Insurance</li>
                            <li>• Optional jeep treks</li>
                            <li>• Personal shopping</li>
                        </ul>
                    </div>
                </section>

                {/* Final Footer CTA */}
                <footer className="text-center space-y-8 py-12 border-t border-earth/10">
                    <p className="font-serif italic text-2xl text-ink">Connect with the cosmos.</p>
                    <Link href="/stay#booking-form" className="inline-block px-12 py-4 bg-earth text-white uppercase tracking-widest text-sm hover:bg-ink transition-all">
                        Reserve Your Explorer Spot
                    </Link>
                </footer>
            </article>
        </div>
    );
}
