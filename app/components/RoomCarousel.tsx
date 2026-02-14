"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

interface Slide {
    id: number;
    src: string;
    label: string;
}

const slides: Slide[] = [
    { id: 1, src: "/images/stay/Riverside Hut.webp", label: "Riverside Hut" },
    { id: 2, src: "/images/stay/Deluxe Room.webp", label: "Deluxe Room" },
    { id: 3, src: "/images/stay/Twin Room.webp", label: "Twin Room" },
];

export default function RoomCarousel() {
    const [index, setIndex] = useState(0);

    const nextSlide = () => {
        setIndex((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setIndex((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
    };

    const swipeConfidenceThreshold = 10000;
    const swipePower = (offset: number, velocity: number) => {
        return Math.abs(offset) * velocity;
    };

    return (
        <div className="relative w-full h-[500px] bg-canvas overflow-hidden group rounded-sm">
            <AnimatePresence mode="wait">
                <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -20 }}
                    transition={{ duration: 0.5 }}
                    drag="x"
                    dragConstraints={{ left: 0, right: 0 }}
                    dragElastic={1}
                    onDragEnd={(e, { offset, velocity }) => {
                        const swipe = swipePower(offset.x, velocity.x);

                        if (swipe < -swipeConfidenceThreshold) {
                            nextSlide();
                        } else if (swipe > swipeConfidenceThreshold) {
                            prevSlide();
                        }
                    }}
                    className="absolute inset-0 w-full h-full"
                >
                    <Image
                        src={slides[index].src}
                        alt={slides[index].label}
                        fill
                        className="object-cover"
                        priority
                    />

                    {/* Label Overlay */}
                    <div className="absolute bottom-8 left-8 bg-paper/90 px-4 py-2 text-ink text-sm tracking-widest uppercase shadow-sm border border-earth/10">
                        {slides[index].label}
                    </div>
                </motion.div>
            </AnimatePresence>

            {/* Buttons - Always visible on touch, hover effect on desktop */}
            <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 -translate-y-1/2 bg-paper/80 backdrop-blur-sm p-3 rounded-full text-ink shadow-sm hover:bg-earth hover:text-white transition-all duration-300 z-10"
            >
                <ChevronLeft size={20} />
            </button>
            <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 -translate-y-1/2 bg-paper/80 backdrop-blur-sm p-3 rounded-full text-ink shadow-sm hover:bg-earth hover:text-white transition-all duration-300 z-10"
            >
                <ChevronRight size={20} />
            </button>

            {/* Dots */}
            <div className="absolute bottom-8 right-8 flex gap-2 z-10">
                {slides.map((_, i) => (
                    <button
                        key={i}
                        onClick={() => setIndex(i)}
                        className={`w-2 h-2 rounded-full transition-colors duration-300 ${i === index ? "bg-earth" : "bg-white/50"}`}
                    />
                ))}
            </div>
        </div>
    );
}
