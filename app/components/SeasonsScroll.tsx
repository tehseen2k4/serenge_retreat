"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

const seasons = [
    {
        name: "Spring",
        desc: "Apricot Blossoms. The valley turns white and pink. Life returns after the deep freeze.",
        color: "bg-pink-50/50",
        month: "April - May"
    },
    {
        name: "Summer",
        desc: "Glacial Melt. The fields are emerald green. The fruit is sweet. The river roars.",
        color: "bg-green-50/50",
        month: "June - August"
    },
    {
        name: "Autumn",
        desc: "The Golden Hour. Poplars turn to gold. The air is crisp. The harvest is gathered.",
        color: "bg-amber-50/50",
        month: "September - October"
    },
    {
        name: "Winter",
        desc: "Deep Silence. Snow covers the mud walls. The Bukhari stove is the heart of the home.",
        color: "bg-slate-50/50",
        month: "November - March"
    }
];

export default function SeasonsScroll() {
    const containerRef = useRef<HTMLDivElement>(null);

    return (
        <div className="py-20 bg-paper">
            <div className="px-6 md:px-12 mb-12">
                <h2 className="text-3xl font-serif text-ink">The Seasons of Shigar</h2>
                <div className="w-12 h-[1px] bg-earth/50 mt-4" />
            </div>

            <div
                ref={containerRef}
                className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory hide-scrollbar"
                style={{ scrollBehavior: "smooth" }}
            >
                {seasons.map((season, i) => (
                    <div
                        key={i}
                        className={`min-w-[300px] md:min-w-[400px] aspect-[3/4] ${season.color} border border-ink/5 p-8 flex flex-col justify-end snap-center relative group overflow-hidden transition-all duration-500 hover:shadow-lg`}
                    >
                        {/* Background Placeholder */}
                        <div className="absolute inset-0 opacity-20 mix-blend-multiply transition-transform duration-700 group-hover:scale-105" />

                        <div className="relative z-10 space-y-2">
                            <span className="text-xs uppercase tracking-widest text-earth">{season.month}</span>
                            <h3 className="text-2xl font-serif text-ink">{season.name}</h3>
                            <p className="text-ink-soft text-sm leading-relaxed">{season.desc}</p>
                        </div>
                    </div>
                ))}

                {/* Padding for end of scroll */}
                <div className="min-w-[5vw]" />
            </div>
        </div>
    );
}
