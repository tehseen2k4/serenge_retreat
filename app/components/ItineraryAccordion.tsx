"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface ItineraryItem {
    time: string;
    activity: string;
}

interface ItineraryAccordionProps {
    items: ItineraryItem[];
    title?: string;
}

export default function ItineraryAccordion({ items, title = "Sample Rhythm" }: ItineraryAccordionProps) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border border-ink/10 bg-paper/50 rounded-lg overflow-hidden mt-8">
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="w-full flex justify-between items-center p-4 text-sm uppercase tracking-widest text-ink hover:bg-stone/10 transition-colors"
            >
                <span>{title}</span>
                <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                >
                    <ChevronDown size={16} />
                </motion.div>
            </button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                    >
                        <div className="p-4 pt-0 space-y-3">
                            <div className="w-full h-px bg-ink/5 mb-4" />
                            {items.map((item, i) => (
                                <div key={i} className="flex gap-4 text-sm font-light text-ink-soft">
                                    <span className="w-20 text-ink-muted shrink-0 text-xs uppercase tracking-wide pt-0.5">{item.time}</span>
                                    <span>{item.activity}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
