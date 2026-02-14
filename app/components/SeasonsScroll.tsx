"use client";

import { useRef } from "react";
import Image from "next/image";

const seasons = [
    {
        name: "Spring",
        desc: "Apricot Blossoms. The valley turns white and pink. Life returns after the deep freeze.",
        image: "/images/land/Spring Season.webp",
        month: "April - May"
    },
    {
        name: "Summer",
        desc: "Glacial Melt. The fields are emerald green. The fruit is sweet. The river roars.",
        image: "/images/land/Summer Season.webp",
        month: "June - August"
    },
    {
        name: "Autumn",
        desc: "The Golden Hour. Poplars turn to gold. The air is crisp. The harvest is gathered.",
        image: "/images/land/Autumn Season.webp",
        month: "September - October"
    },
    {
        name: "Winter",
        desc: "Deep Silence. Snow covers the mud walls. The Bukhari stove is the heart of the home.",
        image: "/images/land/Winter Season.JPG",
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
                className="flex overflow-x-auto gap-6 px-6 md:px-12 pb-12 snap-x snap-mandatory no-scrollbar"
                style={{ scrollBehavior: "smooth" }}
            >
                <style jsx>{`
                    .no-scrollbar::-webkit-scrollbar {
                        display: none;
                    }
                    .no-scrollbar {
                        -ms-overflow-style: none;
                        scrollbar-width: none;
                    }
                `}</style>
                {seasons.map((season, i) => (
                    <div
                        key={i}
                        className="min-w-[300px] md:min-w-[400px] aspect-[3/4] relative border border-ink/5 flex flex-col justify-end snap-center group overflow-hidden transition-all duration-500 hover:shadow-lg rounded-sm"
                    >
                        {/* Background Image */}
                        <div className="absolute inset-0">
                            <Image
                                src={season.image}
                                alt={season.name}
                                fill
                                className="object-cover transition-transform duration-1000 group-hover:scale-110"
                            />
                            {/* Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-70 transition-opacity" />
                        </div>

                        <div className="relative z-10 p-8 space-y-2">
                            <span className="text-xs uppercase tracking-widest text-white/80">{season.month}</span>
                            <h3 className="text-3xl font-serif text-white">{season.name}</h3>
                            <p className="text-white/90 text-sm leading-relaxed font-light">{season.desc}</p>
                        </div>
                    </div>
                ))}

                {/* Padding for end of scroll */}
                <div className="min-w-[5vw]" />
            </div>
        </div>
    );
}
