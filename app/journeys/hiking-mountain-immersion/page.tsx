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

export default function HikingMountainImmersionPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Hiking & Mountain Immersion Retreat",
        "provider": {
            "@type": "LodgingBusiness",
            "name": "Serengé Retreat"
        },
        "description": "Active adventure program featuring guided hikes to Shigar Broq and cultural workshops.",
        "areaServed": "Shigar Valley, Baltistan"
    };

    return (
        <div className="bg-canvas min-h-screen pt-32 pb-20 px-6">
            <StructuredData data={serviceSchema} />
            <article className="max-w-5xl mx-auto space-y-24">

                {/* Header Section */}
                <header className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Active Adventure</motion.p>
                    <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-7xl font-serif text-ink italic leading-tight">
                        3. HIKING & MOUNTAIN <br /> IMMERSION
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-xl text-ink-soft font-light">
                        For explorers who want movement, mountains, and culture combined. Gentle to moderate hikes blended with grounding and cultural connection.
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap justify-center gap-8 pt-4 text-xs uppercase tracking-widest text-ink/60">
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Season</span>
                            <span className="text-ink">June – September</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Duration</span>
                            <span className="text-ink">5-Day Program</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Location</span>
                            <span className="text-ink"><Link href="/story" className="text-ink hover:underline">Alchori</Link> & Shigar Valleys</span>
                        </div>
                    </motion.div>
                </header>

                {/* Main Visual */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative aspect-video w-full bg-paper rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src="/images/home/Nature Immersions.webp"
                        alt="Hiking and Mountain Immersion - Trekking in Shigar Valley and Khosar Gang base camp"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Purpose & Why Join */}
                <section className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-ink italic">Movement & Discovery.</h2>
                        <p className="text-ink-soft text-lg leading-relaxed font-light">
                            Traditional mountain exploration. Walk the paths of porters and elders through the hidden side of <Link href="/land" className="text-earth hover:underline">Shigar</Link>.
                        </p>
                        <ul className="space-y-4 text-ink-soft">
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Nature lovers</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Active travelers</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Adventure seekers</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Photographers</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-paper p-8 md:p-12 space-y-6">
                        <h3 className="text-xl font-serif text-ink">The Experience</h3>
                        <ul className="text-sm text-ink-soft leading-relaxed font-light space-y-2">
                            <li>• Guided treks to Shigar Broq</li>
                            <li>• Thallay La trail experience</li>
                            <li>• Alpine meadow picnics</li>
                            <li>• Cultural community meet-ups</li>
                            <li>• Traditional craft workshops</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/stay#booking-form" className="inline-block w-full text-center py-4 bg-ink text-white uppercase tracking-widest text-xs hover:bg-earth transition-colors">
                                Book Your Trek
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Itinerary */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-sm uppercase tracking-widest text-earth">The Flow</h2>
                        <h3 className="text-4xl font-serif text-ink italic">5-Day Program</h3>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ItineraryAccordion
                            title="Day 1: Arrival & Village Walk"
                            items={[
                                { time: "Welcome", activity: "Grounding session & nature walk through local farms." },
                                { time: "Evening", activity: "Bonfire welcome circle." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 2: Shigar Broq Exploration"
                            items={[
                                { time: "Day", activity: "Guided trek to Shigar Broq & picnic in alpine meadows." },
                                { time: "Night", activity: "Evening music bazam." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 3: Thallay La Experience"
                            items={[
                                { time: "Day", activity: "Scenic hike toward Thalle La Pass trail section." },
                                { time: "Evening", activity: "Community meet-up in Alchori village & basket workshop." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 4: Cultural & Creative"
                            items={[
                                { time: "Day", activity: "Hand-stitch workshop & photography time." },
                                { time: "Night", activity: "Stargazing and reflection." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 5: Reflection Walk"
                            items={[
                                { time: "Morning", activity: "Sunrise grounding walk & closing circle." },
                                { time: "Departure", activity: "Departure from Shigar." }
                            ]}
                        />
                    </div>
                </section>

                {/* What's Included */}
                <section className="bg-paper p-12 md:p-20 rounded-sm border border-earth/10 grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif italic text-earth">Includes</h3>
                        <ul className="space-y-3 font-light text-ink-soft">
                            <li>• All guided treks & picnics</li>
                            <li>• Cultural experiences & Bazams</li>
                            <li>• Traditional craft workshops</li>
                            <li>• Full-board meals & accommodation</li>
                        </ul>
                    </div>
                    <div className="space-y-6 border-l border-earth/10 pl-12">
                        <h3 className="text-2xl font-serif italic text-earth/60">Season</h3>
                        <p className="text-ink-soft font-light">June – September</p>
                    </div>
                </section>

                {/* Final Footer CTA */}
                <footer className="text-center space-y-8 py-12 border-t border-earth/10">
                    <p className="font-serif italic text-2xl text-ink">Ready for the high meadows?</p>
                    <Link href="/stay#booking-form" className="inline-block px-12 py-4 bg-earth text-white uppercase tracking-widest text-sm hover:bg-ink transition-all">
                        Reserve Your Space
                    </Link>
                </footer>
            </article>
        </div>
    );
}
