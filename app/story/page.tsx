"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import ArchitecturalDetails from "../components/ArchitecturalDetails";
import StructuredData from "../components/StructuredData";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function StoryPage() {
    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": "Our Story — Serengé Retreat | From K2 Trail to Sanctuary",
        "author": {
            "@type": "Person",
            "name": "Aslam Shigri",
            "jobTitle": "Founder & Storyteller",
            "url": "https://www.reegoadventure.com"
        },
        "publisher": {
            "@type": "Organization",
            "name": "Serengé Retreat",
            "logo": {
                "@type": "ImageObject",
                "url": "https://serengeretreat.com/images/logo_brown.png"
            }
        },
        "datePublished": "2024-01-01",
        "image": "https://serengeretreat.com/images/story/Aslam.webp",
        "articleBody": "In the quiet village of Alchori, along the banks of the Shigar River and beneath the vast sky of the Karakoram, a childhood dream slowly took root...",
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://serengeretreat.com/story"
        }
    };

    return (
        <div className="bg-canvas min-h-screen pt-32 pb-20 px-6">
            <StructuredData data={articleSchema} />
            <article className="max-w-5xl mx-auto space-y-32">

                {/* HEADER: CONDENSED & ELEGANT */}
                <header className="max-w-3xl mx-auto text-center space-y-6">
                    <motion.p
                        initial="hidden" animate="visible" variants={fadeIn}
                        className="text-xs uppercase tracking-[0.4em] text-earth"
                    >
                        Our Heritage
                    </motion.p>
                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeIn}
                        className="text-4xl md:text-7xl font-serif text-ink italic leading-tight"
                    >
                        Our Story — <br /> Serengé Retreat <br /> <span className="text-earth"><Link href="/land" className="text-earth hover:underline">Shigar</Link></span>
                    </motion.h1>
                    <div className="w-12 h-px bg-earth/20 mx-auto pt-4" />
                </header>

                {/* THE MOSAIC NARRATIVE: UPDATED CONTENT */}
                <section className="grid md:grid-cols-12 gap-12 items-start">
                    {/* Left Small Detail Image */}
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        className="hidden md:block md:col-span-4 aspect-[3/4] relative bg-paper rounded-sm overflow-hidden"
                    >
                        <Image
                            src="/images/story/Aslam.webp"
                            alt="Aslam Shigri guiding in the mountains"
                            fill
                            className="object-cover transition-all duration-1000"
                        />
                    </motion.div>

                    {/* Main Content Body */}
                    <div className="md:col-span-8 space-y-12 text-left">
                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                            className="space-y-8 text-ink-soft font-light text-lg leading-relaxed"
                        >
                            <p className="first-letter:text-5xl first-letter:font-serif first-letter:text-earth first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                                In the quiet village of Alchori, along the banks of the Shigar River and beneath the vast sky of the Karakoram, a childhood dream slowly took root.
                            </p>
                            <p>
                                I am <span className="text-ink font-medium">Aslam Shigri</span>, born and raised in this valley. As a teenager, I worked as a porter on the trail to <strong>K2 Base Camp</strong> — carrying the weight of other people’s expeditions before I understood the shape of my own. Those early journeys through glacier and stone taught me resilience, humility, and the sacred silence of high places.
                            </p>
                            <p>
                                Over time, guiding became more than work. The mountains drew me into storytelling and photography. They showed me that adventure is not only about reaching summits — it is about listening. In 2017, I founded <strong>Reego Adventure Pakistan</strong> to share the hidden valleys and towering peaks of Gilgit-Baltistan with travelers from around the world.
                            </p>
                            <p>
                                Years later, after summiting <strong>Khosar Gang (6,400m)</strong> in 48 hours — pushing my physical limits — I realized something deeper: while the climb demands strength, the soul asks for stillness.
                            </p>
                            <p className="text-2xl font-serif italic text-ink border-l-2 border-earth pl-6 py-2">
                                Serengé Retreat was born from that understanding.
                            </p>

                            <div className="pt-8 space-y-6">
                                <h2 className="text-2xl font-serif text-ink italic">The Meaning of Serengé</h2>
                                <p>
                                    The name “Serengé” is inspired by the Tibetan word <em>Tsering</em>, meaning Long Life. In Baltistan, it echoes in the blessing <em>Tashi Serengé</em> — a wish for an auspicious and meaningful life.
                                </p>
                                <p>
                                    Serengé is not simply a place to stay. It is a sanctuary shaped by the rhythm of the river and the wisdom of our elders.
                                </p>
                                <p>
                                    Built slowly and intentionally on five acres of land in Alchori, the retreat uses local wood, mud bricks, river stones, and recycled materials. Every beam and stone carries the story of the valley. In front flows the Shigar River; beyond rise the silent Karakoram mountains. Here, nature is not a backdrop — it is the teacher.
                                </p>
                            </div>

                            <div className="pt-8 space-y-6">
                                <h2 className="text-2xl font-serif text-ink italic">A Counterpoint to the Climb</h2>
                                <p>
                                    If Reego Adventure represents movement, exploration, and ascent, Serengé Retreat is its counterpoint. It is the pause after the expedition. The breath after the summit. The stillness after the storm.
                                </p>
                                <p>
                                    Guests come here not only to see the mountains, but to feel them. To wake with sunlight on the peaks. To walk along the river in quiet reflection. To gather for storytelling, yoga, or simple conversation beneath the stars.
                                </p>
                                <p>
                                    Serengé is for those who seek reconnection — with nature, with community, and with themselves.
                                </p>
                            </div>

                            <div className="pt-8 space-y-6 bg-paper p-8 rounded-sm">
                                <h2 className="text-2xl font-serif text-ink italic">Our Mission</h2>
                                <p>We believe hospitality is more than service; it is belonging. Serengé Retreat is an eco-conscious space rooted in Balti culture and sustainable living. We aim to:</p>
                                <ul className="space-y-3 pl-4 border-l border-earth/20">
                                    <li className="flex gap-4">
                                        <span className="text-earth">•</span>
                                        <span>Support our local community</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-earth">•</span>
                                        <span>Preserve traditional building knowledge</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-earth">•</span>
                                        <span>Promote low-impact, mindful travel</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-earth">•</span>
                                        <span>Create space for creative and wellness retreats</span>
                                    </li>
                                    <li className="flex gap-4">
                                        <span className="text-earth">•</span>
                                        <span>Offer travelers a deeper, more meaningful experience of Baltistan</span>
                                    </li>
                                </ul>
                                <p className="pt-4 font-serif italic text-xl">
                                    This is not a luxury defined by excess. <br />
                                    It is a luxury defined by space, silence, and sincerity.
                                </p>
                            </div>

                            <p className="pt-12">
                                From carrying loads on mountain trails to building a riverside sanctuary, this journey has always been about connection — between people and place, adventure and stillness, strength and softness.
                            </p>
                            <p className="text-2xl font-serif text-ink italic">
                                Serengé Retreat stands as a quiet offering from our valley to the world. <br />
                                Welcome to your long life.
                            </p>
                        </motion.div>

                        <motion.div
                            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                            className="pt-12 border-t border-earth/10 flex items-center gap-6"
                        >
                            <div className="relative w-20 h-20 rounded-full overflow-hidden grayscale">
                                <Image
                                    src="/images/story/Founder.webp"
                                    alt="Aslam Shigri"
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <div>
                                <p className="font-serif italic text-3xl text-ink">Aslam Shigri</p>
                                <p className="text-[10px] uppercase tracking-widest text-ink-muted mt-1">Founder & Storyteller</p>
                            </div>
                        </motion.div>
                    </div>
                </section>

                {/* ARCHITECTURAL DETAILS: PRESERVED */}
                <div className="pt-12 border-t border-earth/10">
                    <ArchitecturalDetails />
                </div>

                {/* NEW CLOSING SECTION: A LIVING STORY */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                    className="relative py-32 overflow-hidden text-center"
                >
                    <div className="absolute inset-0 z-0 opacity-10">
                        <Image
                            src="/images/land/Land Seasons.webp"
                            alt="Background texture"
                            fill
                            className="object-cover"
                        />
                    </div>

                    <div className="relative z-10 max-w-2xl mx-auto space-y-8 px-6">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-earth">A Living Story</h2>
                        <p className="text-3xl md:text-4xl font-serif text-ink italic leading-tight">
                            Your presence is the <br /> final layer of our craft.
                        </p>
                        <p className="text-ink-soft font-light text-lg">
                            We invite you to step into the silence of Shigar and find the story
                            waiting to be written in your own breath.
                        </p>
                        <div className="pt-12">
                            <Link
                                href="/stay#booking-form"
                                className="inline-block px-12 py-4 bg-ink text-white text-xs uppercase tracking-widest hover:bg-earth transition-all shadow-xl"
                            >
                                Experience the Silence
                            </Link>
                        </div>
                    </div>
                </motion.section>

            </article>
        </div>
    );
}
