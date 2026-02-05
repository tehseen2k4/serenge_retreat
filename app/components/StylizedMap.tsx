"use client";

import { motion } from "framer-motion";

export default function StylizedMap() {
    return (
        <div className="relative w-full aspect-[16/9] md:aspect-[2/1] bg-canvas border border-border overflow-hidden p-8 md:p-12">
            {/* River */}
            <svg className="absolute top-1/2 left-0 right-0 -translate-y-1/2 w-full h-32 text-blue-50/50" viewBox="0 0 100 20" preserveAspectRatio="none">
                <path d="M0 10 Q 25 20 50 10 T 100 10" stroke="currentColor" strokeWidth="0.5" fill="transparent" />
                <path d="M0 12 Q 25 22 50 12 T 100 12" stroke="currentColor" strokeWidth="0.2" fill="transparent" />
            </svg>

            {/* Labels */}
            <div className="relative h-full w-full max-w-4xl mx-auto flex justify-between items-center text-xs uppercase tracking-widest text-ink-muted font-mono">

                {/* K2 */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    className="absolute top-[10%] left-[15%] text-center"
                >
                    <div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-b-[10px] border-b-ink/20 mx-auto mb-2" />
                    <span>K2 (8611m)</span>
                </motion.div>

                {/* Serenge */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.2 }}
                    className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 text-center z-10"
                >
                    <div className="w-3 h-3 bg-earth rounded-full mx-auto mb-2 ring-4 ring-earth/10 animate-pulse" />
                    <span className="text-ink font-bold">Serengé Retreat</span>
                    <span className="block text-[8px] text-ink-muted mt-1">Shigar Valley</span>
                </motion.div>

                {/* Khosar Gang */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ delay: 0.4 }}
                    className="absolute bottom-[20%] right-[20%] text-center"
                >
                    <div className="w-0 h-0 border-l-[8px] border-l-transparent border-r-[8px] border-r-transparent border-b-[12px] border-b-ink/20 mx-auto mb-2" />
                    <span>Khosar Gang</span>
                </motion.div>
            </div>

            <div className="absolute bottom-4 right-6 text-[10px] text-ink-muted/40">
                35.42° N, 75.74° E
            </div>
        </div>
    );
}
