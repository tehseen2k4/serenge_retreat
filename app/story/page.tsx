"use client";

import { motion } from "framer-motion";

const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

export default function StoryPage() {
    return (
        <div className="bg-canvas min-h-screen py-32 px-6">
            <article className="max-w-4xl mx-auto space-y-24">
                {/* Header */}
                <header className="space-y-6 text-left border-l-4 border-earth pl-8">
                    <motion.p
                        initial="hidden" animate="visible" variants={fadeIn}
                        className="text-xs uppercase tracking-[0.3em] text-earth"
                    >
                        Our Story
                    </motion.p>
                    <motion.h1
                        initial="hidden" animate="visible" variants={fadeIn}
                        className="text-4xl md:text-6xl font-serif text-ink italic leading-tight"
                    >
                        Born in Alchori. <br /> Built with Heart.
                    </motion.h1>
                </header>

                {/* The Narrative */}
                <div className="grid md:grid-cols-2 gap-16 items-start">
                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        className="space-y-8 text-ink-soft font-light text-lg leading-relaxed"
                    >
                        <p>
                            I am <span className="text-ink font-medium">Aslam Shigri</span>, born and raised in the village of Alchori.
                            My journey began as a young porter on the K2 Base Camp trail, carrying the weight of others' dreams
                            before I learned to carry my own.
                        </p>
                        <p>
                            From those early days on the iconic route to K2, I was drawn to storytelling, photography,
                            and the quiet power of the high mountains.
                        </p>
                        <p>
                            In 2017, I founded <a href="https://www.reegoadventure.com" target="_blank" rel="noopener noreferrer" className="text-earth underline underline-offset-4 hover:text-ink transition-colors">Reego Adventure Pakistan</a> —
                            a dream to share the hidden valleys and towering peaks of Gilgit-Baltistan with the world.
                        </p>
                    </motion.div>

                    <motion.div
                        initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                        transition={{ delay: 0.2 }}
                        className="space-y-8 text-ink-soft font-light text-lg leading-relaxed pt-4 md:pt-16"
                    >
                        <p>
                            Leading hundreds of travelers through these landscapes taught me that while the climb requires strength,
                            the soul requires silence. Recently, I summited <span className="text-ink font-medium">Khosar Gang (6,400m)</span> in just 48 hours —
                            a journey of pushing boundaries that led me back to the need for a sanctuary.
                        </p>
                        <p>
                            Serengé is that sanctuary. It is the counterpoint to the climb; a space where calm flows like the river.
                        </p>
                        <div className="pt-8 signature">
                            <p className="font-serif italic text-2xl text-ink">Aslam Shigri</p>
                            <p className="text-xs uppercase tracking-widest text-ink-muted mt-2">Founder of Serengé & Reego Adventure</p>
                        </div>
                    </motion.div>
                </div>

                {/* Mission Section */}
                <motion.section
                    initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn}
                    className="bg-paper p-12 md:p-20 rounded-2xl space-y-12"
                >
                    <div className="max-w-2xl">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-earth mb-8">The Mission</h2>
                        <p className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
                            To create a peaceful, eco-conscious space where travelers can reconnect with nature,
                            experience authentic village life, and feel the warmth of Balti hospitality.
                        </p>
                    </div>
                    <div className="w-full h-px bg-earth/10" />
                    <div className="max-w-2xl ml-auto text-right">
                        <p className="text-lg text-ink-soft font-light italic">
                            "We aim to offer not just a stay — but a sense of belonging, calm, and meaningful connection with the land and its people."
                        </p>
                    </div>
                </motion.section>
            </article>
        </div>
    );
}
