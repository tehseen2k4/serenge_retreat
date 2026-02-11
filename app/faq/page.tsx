"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        question: "How far is Serenge Retreat from Skardu Airport?",
        answer: "Serenge Retreat is 57 km (1 hr 45 min) from Skardu Airport and 17 km (25 min) from Shigar Fort. The last 1.4 km is a rough track, best for 4x4 vehicles — drive slowly or request a pickup."
    },
    {
        question: "Do you provide Rent-a-Car Services?",
        answer: "Yes, we arrange all kinds of vehicles as per guest requirements through our partner network."
    },
    {
        question: "Do you provide Airport Pick/Drop Services?",
        answer: "Yes, we provide Airport Pick/Drop services on guest request. Please coordinate with us at least 24 hours in advance."
    },
    {
        question: "Do you have Hiking Guides?",
        answer: "Yes, we have local hiking guides and high-altitude porters for K2 Base Camp treks and Khosar Gang peak expeditions."
    },
    {
        question: "Is Deosai Road open?",
        answer: "It usually opens between June 5-15 and closes between October 5-15, depending on the snowfall. Always check with us for real-time updates."
    }
];

export default function FAQPage() {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    return (
        <div className="bg-canvas min-h-screen py-32 px-6">
            <div className="max-w-3xl mx-auto space-y-16">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink">Clarity</h1>
                    <p className="text-ink-soft font-light">Frequent questions on the journey to Shigar.</p>
                </header>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <div key={idx} className="border-b border-earth/10">
                            <button
                                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                                className="w-full py-6 flex justify-between items-center text-left hover:text-earth transition-colors"
                            >
                                <span className="text-lg font-serif text-ink">{faq.question}</span>
                                {openIndex === idx ? <Minus size={18} /> : <Plus size={18} />}
                            </button>
                            <motion.div
                                initial={false}
                                animate={{ height: openIndex === idx ? "auto" : 0, opacity: openIndex === idx ? 1 : 0 }}
                                className="overflow-hidden"
                            >
                                <div className="pb-8 text-ink-soft font-light leading-relaxed">
                                    {faq.answer}
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="pt-12 text-center space-y-4">
                    <p className="text-sm text-ink-muted">Still have questions?</p>
                    <a
                        href="https://wa.me/923349669198"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block px-8 py-3 bg-earth text-white rounded-full text-xs uppercase tracking-widest hover:bg-ink transition-colors"
                    >
                        Contact via WhatsApp
                    </a>
                </div>
            </div>
        </div>
    );
}
