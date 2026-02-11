"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Slide {
    id: number;
    src: string; // Placeholder color or image path
    label: string;
}

const slides: Slide[] = [
    { id: 1, src: "bg-stone/20", label: "Riverside Hut" },
    { id: 2, src: "bg-earth/20", label: "Deluxe Room" },
    { id: 3, src: "bg-sand/20", label: "Twin Room" },
];

export default function RoomCarousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    return (
        <div className="relative w-full h-[500px] bg-canvas overflow-hidden group">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    className={`absolute inset-0 w-full h-full ${slides[index].src}`}
                >
                    {/* Placeholder for actual image */}
                    <div className="absolute bottom-8 left-8 bg-paper/90 px-4 py-2 text-ink text-sm tracking-widest uppercase shadow-sm">
                        {slides[index].label}
                    </div>
                </motion.div>
            </AnimatePresence>

            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-paper/50 hover:bg-paper p-3 rounded-full text-ink opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-paper/50 hover:bg-paper p-3 rounded-full text-ink opacity-0 group-hover:opacity-100 transition-all duration-300"
            >
                <ChevronRight size={20} />
            </button>

            <div className="absolute bottom-8 right-8 flex gap-2">
                {slides.map((_, i) => (
                    <div
                        key={i}
                        className={`w-1.5 h-1.5 rounded-full transition-colors duration-300 ${i === index ? "bg-ink" : "bg-ink/30"}`}
                    />
                ))}
            </div>
        </div>
    );
}
