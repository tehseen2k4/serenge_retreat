"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

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

export default function BookPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        const formData = new FormData(e.currentTarget);
        const data = Object.fromEntries(formData);

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.details || result.error || "Failed");
            }
            setStatus("success");
        } catch (err: any) {
            console.error(err);
            alert(`Error: ${err.message}`);
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="min-h-screen bg-canvas flex items-center justify-center px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center space-y-6 max-w-md"
                >
                    <h1 className="text-4xl font-serif text-ink">Inquiry Received</h1>
                    <p className="text-ink-soft font-light">
                        Thank you for your interest in Serenge Retreat.
                        We will correspond with you via email or WhatsApp shortly.
                    </p>
                    <button
                        onClick={() => setStatus("idle")}
                        className="text-earth underline underline-offset-4 uppercase tracking-widest text-xs"
                    >
                        Send another request
                    </button>
                </motion.div>
            </div>
        );
    }

    return (
        <div className="bg-canvas min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-24">

                {/* Form Section */}
                <div className="space-y-12">
                    <header className="space-y-4">
                        <h2 className="text-xs uppercase tracking-[0.4em] text-earth">Reservation</h2>
                        <h1 className="text-4xl md:text-5xl font-serif text-ink">Start the Conversation</h1>
                        <p className="text-ink-soft font-light max-w-xl">
                            Tell us about your planned journey. We prefer human connection
                            to design your bespoke sanctuary experience.
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 border border-earth/10 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-ink/40">Check In</label>
                                <input required type="date" name="checkIn" className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-ink/40">Check Out</label>
                                <input required type="date" name="checkOut" className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-ink/40">Adults</label>
                                <select name="adults" className="w-full bg-canvas border-none p-4 text-ink outline-none appearance-none font-light">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                                </select>
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-ink/40">Local Guide</label>
                                <select name="needsGuide" className="w-full bg-canvas border-none p-4 text-ink outline-none appearance-none font-light">
                                    <option value="false">Not required</option>
                                    <option value="true">Required</option>
                                </select>
                            </div>
                        </div>

                        <div className="space-y-4">
                            <input required type="text" name="name" placeholder="Full Name" className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                            <input required type="email" name="email" placeholder="Email Address" className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                            <input required type="tel" name="phone" placeholder="WhatsApp / Phone" className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-ink/40">Special Requirements</label>
                            <textarea name="specialRequirements" placeholder="Dietary needs, room preferences, etc." className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all min-h-[120px] resize-none font-light"></textarea>
                        </div>

                        <button
                            disabled={status === "submitting"}
                            type="submit"
                            className="w-full py-4 bg-ink text-white uppercase tracking-widest text-xs hover:bg-earth transition-colors disabled:opacity-50"
                        >
                            {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                        </button>
                    </form>
                </div>

                {/* FAQ Section */}
                <div className="space-y-16">
                    <div className="space-y-6">
                        <h2 className="text-xs uppercase tracking-[0.4em] text-earth">Clarity</h2>
                        <h3 className="text-4xl font-serif text-ink italic">Frequent questions.</h3>
                    </div>

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
                                <AnimatePresence>
                                    {openIndex === idx && (
                                        <motion.div
                                            initial={{ height: 0, opacity: 0 }}
                                            animate={{ height: "auto", opacity: 1 }}
                                            exit={{ height: 0, opacity: 0 }}
                                            className="overflow-hidden"
                                        >
                                            <div className="pb-8 text-ink-soft font-light leading-relaxed text-sm">
                                                {faq.answer}
                                            </div>
                                        </motion.div>
                                    )}
                                </AnimatePresence>
                            </div>
                        ))}
                    </div>

                    {/* Trust / Visual */}
                    <div className="pt-12">
                        <div className="relative aspect-video bg-paper rounded-sm overflow-hidden grayscale opacity-60">
                            <Image
                                src="/images/snow.webp"
                                alt="Serenge Retreat Landscape"
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
