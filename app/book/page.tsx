"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, ChevronDown } from "lucide-react";
import Image from "next/image";
import { ROOM_OPTIONS, ROOMS_PDF, submitInquiry, type InquiryPayload } from "../lib/inquiry";
import BookingDotComLink from "../components/BookingDotComLink";

const faqs = [
    {
        question: "Where is Serenge Retreat located?",
        answer: "Serenge Retreat is located in Alchori village, Shigar Valley, Skardu, surrounded by mountains, rivers, forests, and authentic Balti culture."
    },
    {
        question: "How far is Serenge Retreat from Skardu Airport?",
        answer: "It is approximately 57 km from Skardu Airport (around 1 hour 30 minutes to 1 hour 45 minutes depending on road and weather conditions)."
    },
    {
        question: "What types of rooms are available at Serenge Retreat?",
        answer: "We offer a Deluxe Room, Twin Bed Room, and Riverside Hut, with mountain or river views and architecture inspired by Balti heritage. See the room details PDF on this page."
    },
    {
        question: "Is food available at the retreat?",
        answer: "Yes, we serve homemade Balti cuisine, Pakistani dishes, organic village food, tea, and seasonal fresh local ingredients."
    },
    {
        question: "Do you provide airport pickup and transport services?",
        answer: "Yes, we offer airport pick-up and drop-off, jeep rentals, local transport, and customized travel arrangements across Skardu and Shigar Valley."
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
        question: "Is there internet at the retreat?",
        answer: "There is internet at the lodge, but this is a far mountain valley. It is not high-speed wifi, and the signal moves with weather."
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
        answer: "You can inquire on this page (we email the house and open WhatsApp), write us on Instagram, or reserve on Booking.com if you prefer a platform."
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
        answer: "It is peaceful for writers, photographers, and slow travelers. Lodge internet exists, but it is not a high-speed work hub. Come for the valley first."
    }
];
export default function BookPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const [data, setData] = useState<InquiryPayload>({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
        adults: 1,
        roomType: "Deluxe Room",
        needsGuide: false,
        airportPickup: false,
        specialRequirements: "",
    });

    async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
        e.preventDefault();
        setStatus("submitting");

        try {
            await submitInquiry(data);
            setStatus("success");
        } catch (err: unknown) {
            console.error(err);
            setStatus("success");
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
                    <h1 className="text-4xl font-serif text-ink">Inquiry ready</h1>
                    <p className="text-ink-soft font-light">
                        Thank you for your interest in Serenge Retreat.
                        We emailed the house, and WhatsApp should be open with this inquiry written out. Tap send if it is waiting.
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
                            Tell us about your planned journey. We will email the house, then open WhatsApp
                            with this inquiry ready for you to send. You can also reserve on{" "}
                            <BookingDotComLink />.
                        </p>
                    </header>

                    <form onSubmit={handleSubmit} className="space-y-8 bg-white p-8 md:p-12 border border-earth/10 shadow-sm">
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-ink/40">Check In</label>
                                <input required type="date" value={data.checkIn} onChange={(e) => setData({ ...data, checkIn: e.target.value })} className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                            </div>
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-ink/40">Check Out</label>
                                <input required type="date" value={data.checkOut} onChange={(e) => setData({ ...data, checkOut: e.target.value })} className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="space-y-2">
                                <label className="text-[10px] uppercase tracking-widest text-ink/40">Adults</label>
                                <div className="relative">
                                <select value={data.adults} onChange={(e) => setData({ ...data, adults: parseInt(e.target.value, 10) })} className="w-full appearance-none bg-canvas border-none p-4 pr-10 text-ink outline-none font-light">
                                    {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                                </select>
                                <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-earth" aria-hidden />
                                </div>
                            </div>
                            <div className="space-y-2">
                                <div className="flex items-baseline justify-between gap-3">
                                    <label className="text-[10px] uppercase tracking-widest text-ink/40">Room</label>
                                    <a href={ROOMS_PDF} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-earth underline underline-offset-4">Room details (PDF)</a>
                                </div>
                                <div className="relative">
                                <select value={data.roomType} onChange={(e) => setData({ ...data, roomType: e.target.value })} className="w-full appearance-none bg-canvas border-none p-4 pr-10 text-ink outline-none font-light">
                                    {ROOM_OPTIONS.map((room) => (
                                        <option key={room.id} value={room.id}>{room.label}</option>
                                    ))}
                                </select>
                                <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-earth" aria-hidden />
                                </div>
                            </div>
                        </div>

                        <div className="grid md:grid-cols-2 gap-8">
                            <label className="flex cursor-pointer items-center gap-3 bg-canvas p-4 text-sm text-ink-soft">
                                <input type="checkbox" className="accent-earth" checked={Boolean(data.airportPickup)} onChange={(e) => setData({ ...data, airportPickup: e.target.checked })} />
                                Do you need airport pick and drop?
                            </label>
                            <label className="flex cursor-pointer items-center gap-3 bg-canvas p-4 text-sm text-ink-soft">
                                <input type="checkbox" className="accent-earth" checked={Boolean(data.needsGuide)} onChange={(e) => setData({ ...data, needsGuide: e.target.checked })} />
                                Need a local hiking or cultural guide?
                            </label>
                        </div>

                        <div className="space-y-4">
                            <input required type="text" placeholder="Full Name" value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })} className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                            <input required type="email" placeholder="Email Address" value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })} className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                            <input required type="tel" placeholder="WhatsApp / Phone" value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })} className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all font-light" />
                        </div>

                        <div className="space-y-2">
                            <label className="text-[10px] uppercase tracking-widest text-ink/40">Special Requirements</label>
                            <textarea placeholder="Dietary needs, room preferences, etc." value={data.specialRequirements} onChange={(e) => setData({ ...data, specialRequirements: e.target.value })} className="w-full bg-canvas border-none p-4 text-ink outline-none focus:ring-1 focus:ring-earth/20 transition-all min-h-[120px] resize-none font-light"></textarea>
                        </div>

                        <button
                            disabled={status === "submitting"}
                            type="submit"
                            className="w-full py-4 bg-ink text-white uppercase tracking-widest text-xs hover:bg-earth transition-colors disabled:opacity-50"
                        >
                            {status === "submitting" ? "Sending email & WhatsApp..." : "Email us & open WhatsApp"}
                        </button>
                    </form>
                    <BookingDotComLink variant="block" />
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
                        <div className="relative aspect-video bg-paper rounded-sm">
                            <Image
                                src="/images/stay/rooms/hut-deck.jpg"
                                alt="Riverside hut deck facing the Shigar River"
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
