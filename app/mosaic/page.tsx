"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";

const categories = ["All", "Light", "Earth", "Silence"];

const mosaicItems = [
    { id: 1, category: "Earth", title: "Valley Dawn", type: "image", src: "bg-stone/20", size: "tall" },
    { id: 2, category: "Light", title: "Golden Hour Tea", type: "image", src: "bg-earth/20", size: "small" },
    { id: 3, category: "Silence", title: "River Flow", type: "video", src: "bg-blue-100/10", size: "wide" },
    { id: 4, category: "Earth", title: "Khosar Sentinel", type: "image", src: "bg-sand/30", size: "medium" },
    { id: 5, category: "Light", title: "Night Grace", type: "image", src: "bg-ink/5", size: "tall" },
    { id: 6, category: "Silence", title: "Mud Texture", type: "image", src: "bg-earth/10", size: "small" },
    { id: 7, category: "Earth", title: "Alchori Life", type: "image", src: "bg-stone/30", size: "medium" },
    { id: 8, category: "Silence", title: "The Shala", type: "image", src: "bg-paper", size: "wide" },
];

export default function MosaicPage() {
    const [filter, setFilter] = useState("All");

    const filteredItems = filter === "All"
        ? mosaicItems
        : mosaicItems.filter(item => item.category === filter);

    return (
        <div className="bg-canvas min-h-screen py-32 px-6">
            <div className="max-w-7xl mx-auto space-y-16">
                <header className="space-y-6 text-center max-w-2xl mx-auto">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink italic">The Visual Mosaic</h1>
                    <p className="text-ink-soft font-light text-lg">
                        A silent collection of light and shadow captured in Shigar. No words, just witness.
                    </p>
                </header>

                {/* Filter Bar */}
                <div className="flex justify-center gap-8 border-b border-earth/10 pb-4">
                    {categories.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`text-xs uppercase tracking-[0.3em] pb-2 transition-all duration-500 ${filter === cat ? "text-earth border-b border-earth" : "text-ink-muted hover:text-ink"
                                }`}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Masonry Grid (Simulated with columns) */}
                <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
                    {filteredItems.map((item) => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8 }}
                            className={`relative break-inside-avoid group overflow-hidden bg-paper rounded-sm shadow-sm`}
                        >
                            {/* Media Placeholder */}
                            <div className={`w-full ${item.size === 'tall' ? 'aspect-[2/3]' :
                                    item.size === 'wide' ? 'aspect-[16/9]' :
                                        'aspect-square'
                                } ${item.src} grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out`} />

                            {/* Hover Overlay */}
                            <div className="absolute inset-0 bg-ink/40 opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-6">
                                <p className="text-[10px] uppercase tracking-widest text-earth mb-1">{item.category}</p>
                                <h3 className="text-white font-serif italic text-xl">{item.title}</h3>
                            </div>

                            {item.type === 'video' && (
                                <div className="absolute top-4 right-4 text-white/50">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                                        <circle cx="12" cy="12" r="10" />
                                        <polygon points="10 8 16 12 10 16 10 8" />
                                    </svg>
                                </div>
                            )}
                        </motion.div>
                    ))}
                </div>

                <footer className="pt-24 text-center">
                    <p className="text-xs uppercase tracking-[0.4em] text-ink-muted">Inhale. Witness. Repeat.</p>
                </footer>
            </div>
        </div>
    );
}
