"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const posts = [
    {
        slug: "season-of-apricots",
        title: "The Season of Apricots",
        date: "July 12, 2025",
        excerpt: "When the valley turns golden, and the roofs of Shigar are covered in drying fruit.",
    },
    {
        slug: "silence-of-winter",
        title: "The Silence of Winter",
        date: "December 04, 2024",
        excerpt: "Snow changes the acoustics of the world. It muffles the unnecessary.",
    },
    {
        slug: "tea-with-hassan",
        title: "Tea with Hassan",
        date: "October 20, 2024",
        excerpt: "Notes on hospitality, salt, and the art of waiting.",
    },
];

export default function JournalPage() {
    return (
        <div className="min-h-screen bg-paper pt-32 pb-20 px-6 md:px-12">
            <header className="max-w-3xl mx-auto mb-20 text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-serif text-ink">The Journal</h1>
                <p className="text-ink-soft leading-relaxed font-light">
                    Notes from the valley. Stories of the land, the people, and the changing seasons.
                </p>
            </header>

            <div className="max-w-3xl mx-auto space-y-16">
                {posts.map((post, i) => (
                    <motion.article
                        key={post.slug}
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 }}
                        viewport={{ once: true }}
                        className="group cursor-pointer border-b border-earth/20 pb-12"
                    >
                        <Link href={`#`} className="block space-y-4"> {/* Linking to # for now as full blog logic is out of scope */}
                            <div className="flex justify-between items-baseline text-xs uppercase tracking-widest text-ink-muted">
                                <span>Journal Entry</span>
                                <span>{post.date}</span>
                            </div>
                            <h2 className="text-2xl md:text-3xl font-serif text-ink group-hover:text-earth transition-colors duration-300">
                                {post.title}
                            </h2>
                            <p className="text-ink-soft font-light leading-relaxed">
                                {post.excerpt}
                            </p>
                            <span className="inline-block text-xs uppercase tracking-widest text-earth pt-2 border-b border-transparent group-hover:border-earth transition-all">
                                Read Story
                            </span>
                        </Link>
                    </motion.article>
                ))}
            </div>
        </div>
    );
}
