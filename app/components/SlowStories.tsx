"use client";

import { motion } from "framer-motion";

interface SlowStoryProps {
    src: string;
    opacity?: number;
    className?: string;
}

/**
 * SlowStories: A component for subtle, atmospheric background video loops. 
 * Designed to be placed behind text sections to give a "living" feel to the silence.
 */
export default function SlowStories({ src, opacity = 0.3, className = "" }: SlowStoryProps) {
    return (
        <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`}>
            <motion.video
                initial={{ opacity: 0 }}
                animate={{ opacity }}
                transition={{ duration: 2 }}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover grayscale brightness-125 contrast-75"
            >
                <source src={src} type="video/mp4" />
            </motion.video>
            {/* Grain/Texture Overlay */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://grainy-gradients.vercel.app/noise.svg')]" />
        </div>
    );
}
