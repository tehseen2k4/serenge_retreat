"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import Image from "next/image";

const faqs = [
    {
        question: "Where is Serenge Retreat located?",
        answer: "Serenge Retreat is located in Alchori village, Shigar Valley, Skardu — surrounded by mountains, rivers, forests, and authentic Balti culture."
    },
    {
        question: "How far is Serenge Retreat from Skardu Airport?",
        answer: "It is approximately 57 km from Skardu Airport (around 1 hour 30 minutes to 1 hour 45 minutes depending on road and weather conditions)."
    },
    {
        question: "What types of rooms are available at Serenge Retreat?",
        answer: "We offer traditional and deluxe rooms with mountain views, cozy interiors, and architecture inspired by Balti heritage."
    },
    {
        question: "Is food available at the retreat?",
        answer: "Yes, we serve homemade Balti cuisine, Pakistani dishes, organic village food, tea, and seasonal fresh local ingredients."
    },
    {
        question: "Do you provide airport pickup and transport services?",
        answer: "Yes, we offer airport pick-up/drop-off, jeep rentals, local transport, and customized travel arrangements across Skardu and Shigar Valley."
    },
    {
        question: "Is Serenge Retreat suitable for families and solo travelers?",
        answer: "Yes, it is ideal for families, couples, solo travelers, photographers, hikers, and anyone seeking a peaceful nature escape."
    },
    {
        question: "What activities can guests do at and around Serenge Retreat?",
        answer: "Guests can enjoy village walks, river walks, hiking trails, waterfalls, cultural experiences, bonfires, stargazing, photography, camping, and day trips around Shigar Valley."
    },
    {
        question: "Is WiFi available at the retreat?",
        answer: "Yes, WiFi is available, though speeds may vary due to the remote mountain location and weather conditions."
    },
    {
        question: "What is the best time to visit Serenge Retreat?",
        answer: "The best time to visit is from April to October for green landscapes, trekking, cultural experiences, and clear mountain views."
    },
    {
        question: "Do you organize tours and trekking?",
        answer: "Yes, through our partners we organize guided tours, cultural trips, hiking, trekking, camping, and photography experiences across Northern Pakistan."
    },
    {
        question: "Is Serenge Retreat eco-friendly?",
        answer: "Yes, we follow eco-friendly practices including low-impact tourism, local community support, sustainable materials, and responsible travel experiences."
    },
    {
        question: "How can guests book a stay?",
        answer: "You can book directly via WhatsApp, Instagram, Airbnb, Booking.com, or by submitting an inquiry through our website."
    },
    {
        question: "What makes Serenge Retreat different from hotels in Skardu?",
        answer: "Unlike standard hotels, Serenge Retreat offers an immersive village experience with authentic Balti culture, peaceful surroundings, personalized hospitality, and slow living in nature."
    },
    {
        question: "Can guests experience local Balti culture and village life?",
        answer: "Yes, guests can experience Balti traditions, local food, village walks, farming culture, storytelling, music, and interactions with local communities."
    },
    {
        question: "Is Serenge Retreat good for remote work or slow travel?",
        answer: "Yes, it is ideal for remote workers, writers, photographers, and slow travelers, offering peaceful surroundings, mountain views, WiFi, and cultural immersion experiences including bonfires and local evenings."
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
