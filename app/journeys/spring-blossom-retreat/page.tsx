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

export default function SpringBlossomRetreatPage() {
    const serviceSchema = {
        "@context": "https://schema.org",
        "@type": "Service",
        "name": "Spring Blossom Retreat",
        "provider": {
            "@type": "LodgingBusiness",
            "name": "Serengé Retreat"
        },
        "description": "Creative 4-day retreat witnessing the apricot bloom in Shigar Valley.",
        "areaServed": "Shigar Valley, Baltistan"
    };

    return (
        <div className="bg-canvas min-h-screen pt-32 pb-20 px-6">
            <StructuredData data={serviceSchema} />
            <article className="max-w-5xl mx-auto space-y-24">

                {/* Header Section */}
                <header className="text-center space-y-6 max-w-3xl mx-auto">
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-earth text-xs uppercase tracking-[0.4em] font-medium">Seasonal Bloom</motion.p>
                    <motion.h1 initial="hidden" animate="visible" variants={fadeIn} className="text-4xl md:text-7xl font-serif text-ink italic leading-tight">
                        4. SPRING BLOSSOM <br /> RETREAT
                    </motion.h1>
                    <motion.p initial="hidden" animate="visible" variants={fadeIn} className="text-xl text-ink-soft font-light">
                        Experience Shigar during apricot blossom season. Pink trees, snow peaks, and peaceful village life in the heart of spring.
                    </motion.p>
                    <motion.div initial="hidden" animate="visible" variants={fadeIn} className="flex flex-wrap justify-center gap-8 pt-4 text-xs uppercase tracking-widest text-ink/60">
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Season</span>
                            <span className="text-ink">April (Apricot Blossom)</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Duration</span>
                            <span className="text-ink">4-Day Program</span>
                        </div>
                        <div className="flex flex-col gap-1">
                            <span className="text-earth">Location</span>
                            <span className="text-ink">Shigar Valley, Baltistan</span>
                        </div>
                    </motion.div>
                </header>

                {/* Main Visual: Premium Image Collage */}
                <motion.div
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 h-[500px] md:h-[600px] w-full"
                >
                    <div className="relative bg-paper rounded-sm overflow-hidden shadow-2xl">
                        <Image
                            src="/images/journeys/Spring 1.webp"
                            alt="Spring Blossom Retreat - Apricot blossoms in Shigar Valley"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                    <div className="relative bg-paper rounded-sm overflow-hidden shadow-2xl md:translate-y-12">
                        <Image
                            src="/images/journeys/Spring 2.webp"
                            alt="Spring Blossom Retreat - Mountain views"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div className="relative bg-paper rounded-sm overflow-hidden shadow-2xl">
                        <Image
                            src="/images/journeys/Spring 3.webp"
                            alt="Spring Blossom Retreat - Cultural beauty"
                            fill
                            className="object-cover"
                        />
                    </div>
                </motion.div>

                {/* Purpose & Why Join */}
                <section className="grid md:grid-cols-2 gap-16 items-start">
                    <div className="space-y-8">
                        <h2 className="text-3xl font-serif text-ink italic">Poetry in Bloom.</h2>
                        <p className="text-ink-soft text-lg leading-relaxed font-light">
                            Witness the valley awake as apricot and cherry blossoms paint the <Link href="/land" className="text-earth hover:underline">Shigar Valley</Link> in white and pink. Perfect for slow travelers and artists seeking to capture the ethereal landscape of blooming orchards against snow-capped peaks.
                        </p>
                        <ul className="space-y-4 text-ink-soft">
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Couples seeking romance</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Photographers & Artists</span>
                            </li>
                            <li className="flex gap-4">
                                <span className="text-earth">•</span>
                                <span>Slow travelers</span>
                            </li>
                        </ul>
                    </div>
                    <div className="bg-paper p-8 md:p-12 space-y-6">
                        <h3 className="text-xl font-serif text-ink">Creative Highlights</h3>
                        <ul className="text-sm text-ink-soft leading-relaxed font-light space-y-2">
                            <li>• Village blossom walk in Alchori</li>
                            <li>• Handwoven basket weaving</li>
                            <li>• Balti music bazam nights</li>
                            <li>• Hand-stitch embroidery sessions</li>
                            <li>• Sunrise meditations</li>
                        </ul>
                        <div className="pt-4">
                            <Link href="/stay#booking-form" className="inline-block w-full text-center py-4 bg-ink text-white uppercase tracking-widest text-xs hover:bg-earth transition-colors">
                                Join the Bloom
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Itinerary */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-sm uppercase tracking-widest text-earth">The Flow</h2>
                        <h3 className="text-4xl font-serif text-ink italic">4-Day Program</h3>
                    </div>
                    <div className="max-w-3xl mx-auto">
                        <ItineraryAccordion
                            title="Day 1: Blossom Welcome"
                            items={[
                                { time: "Welcome", activity: "Village blossom walk & grounding circle." },
                                { time: "Evening", activity: "Bonfire evening." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 2: Cultural Immersion"
                            items={[
                                { time: "Day", activity: "Meet local families & basket weaving workshop." },
                                { time: "Night", activity: "Balti music bazam." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 3: Creative Spring"
                            items={[
                                { time: "Day", activity: "Hand-stitch embroidery session & Nature walk under blossom trees." },
                                { time: "Night", activity: "Stargazing meditation." }
                            ]}
                        />
                        <ItineraryAccordion
                            title="Day 4: Reflection"
                            items={[
                                { time: "Morning", activity: "Sunrise meditation & closing circle." },
                                { time: "Final", activity: "Integrated departure." }
                            ]}
                        />
                    </div>
                </section>

                {/* What's Included */}
                <section className="bg-paper p-12 md:p-20 rounded-sm border border-earth/10 grid md:grid-cols-2 gap-12">
                    <div className="space-y-6">
                        <h3 className="text-3xl font-serif italic text-earth">Includes</h3>
                        <ul className="space-y-3 font-light text-ink-soft">
                            <li>• Boutique spring accommodation</li>
                            <li>• All blossom walks & groundings</li>
                            <li>• Creative & Cultural workshops</li>
                            <li>• Traditional meals & bazams</li>
                        </ul>
                    </div>
                    <div className="space-y-6 border-l border-earth/10 pl-12">
                        <h3 className="text-2xl font-serif italic text-earth/60">Season</h3>
                        <p className="text-ink-soft font-light">April (Peak Blossom)</p>
                    </div>
                </section>

                {/* Final Footer CTA */}
                <footer className="text-center space-y-8 py-12 border-t border-earth/10">
                    <p className="font-serif italic text-2xl text-ink">The blossom only lasts a few weeks. Don’t miss it.</p>
                    <Link href="/stay#booking-form" className="inline-block px-12 py-4 bg-earth text-white uppercase tracking-widest text-sm hover:bg-ink transition-all">
                        Inquire for Dates
                    </Link>
                </footer>
            </article>
        </div>
    );
}
