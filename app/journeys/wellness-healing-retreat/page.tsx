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

export default function WellnessHealingRetreatPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Wellness & Healing Retreat",
        "provider": {
            "@type": "LodgingBusiness",
            "name": "Serengé Retreat"
        },
        "description": "Structured 5-day healing program featuring somatic yoga, breathwork, and recovery under the Karakoram sky.",
        "areaServed": "Shigar Valley, Baltistan"
    };

    return (
        <div className="bg-canvas min-h-screen pt-32 pb-20 px-6">
            <StructuredData data={serviceSchema} />
            <article className="max-w-5xl mx-auto space-y-24">

                {/* Header Section */}
                <header className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Guided Healing</motion.p>
                    <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-7xl font-serif text-ink italic leading-tight">
                        2. WELLNESS & <br /> HEALING RETREAT
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-xl text-ink-soft font-light">
                        Guided by Visiting Practitioners. A structured healing experience practiced in open air under the <Link href="/land" className="text-earth hover:underline">Karakoram sky</Link>.
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap justify-center gap-8 pt-4 text-xs uppercase tracking-widest text-ink/60">
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Season</span>
                            <span className="text-ink">May – September</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Duration</span>
                            <span className="text-ink">5-Day Program</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Location</span>
                            <span className="text-ink">Shigar Valley, Baltistan</span>
                        </div>
                    </motion.div>
                </header>

                {/* Main Visual */}
                <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} className="relative aspect-video w-full bg-paper rounded-sm overflow-hidden shadow-2xl">
                    <Image
                        src="/images/home/Wellness Retreat.webp"
                        alt="Wellness and Healing Retreat - Guided yoga and somatic healing in Shigar Valley, Baltistan"
                        fill
                        className="object-cover"
                        priority
                    />
                </motion.div>

                {/* Purpose & Why Join */}
                <section className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-ink italic">Somatic healing & breathwork.</h2>
                        <p className="text-ink-soft text-lg leading-relaxed font-light">
                            Reset your nervous system and heal emotional stress through guided yoga and specialized wellness workshops in the pristine mountain air.
                        </p>
                        <ul className="space-y-4 text-ink-soft">
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Wellness enthusiasts</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Yoga practitioners</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Those healing emotional stress</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>People seeking nervous system reset</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-paper p-8 md:p-12 space-y-6">
                        <h3 className="text-xl font-serif text-ink">Retreat Highlights</h3>
                        <ul className="text-sm text-ink-soft leading-relaxed font-light space-y-2">
                            <li>• Small group (max 6 guests)</li>
                            <li>• Professional visiting practitioners</li>
                            <li>• Sound healing & Soma workshops</li>
                            <li>• Daily open-air yoga sessions</li>
                            <li>• Full-board organic meals</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/stay#booking-form" className="inline-block w-full text-center py-4 bg-ink text-white uppercase tracking-widest text-xs hover:bg-earth transition-colors">
                                Inquire for Groups
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
                            title="Day 1: Arrival & Reset"
                            items={[
                                { time: "Welcome", activity: "Welcome circle & gentle grounding yoga." },
                                { time: "Sunset", activity: "Sunset at Sarfaranga Cold Desert." },
                                { time: "Night", activity: "Evening sound healing session." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 2: Body & Breath"
                            items={[
                                { time: "Morning", activity: "Morning yoga practice & guided breathwork session." },
                                { time: "Afternoon", activity: "Nature walk in Shigar." },
                                { time: "Night", activity: "Bonfire circle sharing." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 3: Creative Healing"
                            items={[
                                { time: "Morning", activity: "Somatic movement session." },
                                { time: "Afternoon", activity: "Handwoven basket workshop & community meet-up." },
                                { time: "Night", activity: "Balti music bazam." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 4: Glacial Energy"
                            items={[
                                { time: "Day", activity: "Guided nature walk toward glacial streams & cold water grounding experience." },
                                { time: "Afternoon", activity: "Hand-stitch embroidery session." },
                                { time: "Night", activity: "Stargazing meditation." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 5: Integration"
                            items={[
                                { time: "Final", activity: "Closing ceremony & reflection." },
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
                            <li>• Boutique accommodation</li>
                            <li>• Small group setting (max 6)</li>
                            <li>• All workshops & materials</li>
                            <li>• Sound healing & Yoga sessions</li>
                            <li>• Cultural programs & Bazam nights</li>
                            <li>• Full-board organic meals</li>
                        </ul>
                    </div>
                    <div className="space-y-6 border-l border-earth/10 pl-12">
                        <h3 className="text-2xl font-serif italic text-earth/60">Season</h3>
                        <p className="text-ink-soft font-light">May – September</p>
                        <p className="text-sm text-ink-soft/60 italic pt-4">Guided by visiting practitioners.</p>
                    </div>
                </section>

                {/* Final Footer CTA */}
                <footer className="text-center space-y-8 py-12 border-t border-earth/10">
                    <p className="font-serif italic text-2xl text-ink">Limited to 6 participants for deep healing.</p>
                    <Link href="/stay#booking-form" className="inline-block px-12 py-4 bg-earth text-white uppercase tracking-widest text-sm hover:bg-ink transition-all">
                        Inquire for Availability
                    </Link>
                </footer>
            </article>
        </div>
    );
}
