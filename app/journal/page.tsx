"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { postsData } from "./postsData";

export default function JournalPage() {
    return (
        <div className="min-h-screen bg-paper pt-32 pb-20 px-6 md:px-12">
            <header className="max-w-3xl mx-auto mb-20 text-center space-y-6">
                <p className="text-xs uppercase tracking-[0.4em] text-earth font-medium">Stories from Baltistan</p>
                <h1 className="text-4xl md:text-5xl font-serif text-ink italic">The Serengé Journal</h1>
                <p className="text-ink-soft leading-relaxed font-light max-w-2xl mx-auto text-sm md:text-base">
                    Timeless notes from the valley. Stories of ancient mountain land, slow-paced Balti culture, the craft of sustainable sanctuary building, and somatic mindfulness.
                </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-16">
                {postsData.map((post, i) => (
                    <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.08 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer border-b border-earth/20 pb-12"
                    >
                        <Link href={`/journal/${post.slug}`} className="block space-y-4">
                            <div className="flex justify-between items-baseline text-xs uppercase tracking-widest text-ink-muted">
                                <span className="text-earth font-medium">{post.category}</span>
                                <span>{post.date}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-ink group-hover:text-earth transition-colors duration-300">
                                {post.title}
                            </h2>
                            <p className="text-ink-soft font-light leading-relaxed text-sm md:text-base">
                                {post.excerpt}
                            </p>
                            <span className="inline-block text-xs uppercase tracking-widest text-earth pt-2 border-b border-transparent group-hover:border-earth transition-all">
                                Read Story →
                            </span>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
