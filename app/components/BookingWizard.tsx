"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Info, ArrowRight, ArrowLeft, Check } from "lucide-react";

interface BookingData {
    checkIn: string;
    checkOut: string;
    adults: number;
    needsGuide: boolean;
    specialRequirements: string;
    name: string;
    email: string;
    phone: string;
}

const steps = [
    { title: "The Timeline", icon: <Calendar size={20} /> },
    { title: "The Gathering", icon: <Users size={20} /> },
    { title: "The Sanctuary", icon: <Info size={20} /> },
    { title: "Connection", icon: <Check size={20} /> },
];

export default function BookingWizard() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<BookingData>({
        checkIn: "",
        checkOut: "",
        adults: 1,
        needsGuide: false,
        specialRequirements: "",
        name: "",
        email: "",
        phone: "",
    });
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");

        try {
            const res = await fetch("/api/leads", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(data),
            });

            const result = await res.json();

            if (!res.ok) {
                throw new Error(result.details || result.error || "Failed to submit inquiry");
            }

            setStatus("success");
        } catch (err: any) {
            console.error("Booking Error:", err);
            setStatus("idle");
            alert(`Booking Error: ${err.message}. Please try again or contact us via WhatsApp.`);
        }
    };

    const variants = {
        enter: (direction: number) => ({
            x: direction > 0 ? 50 : -50,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction: number) => ({
            x: direction < 0 ? 50 : -50,
            opacity: 0,
        }),
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-paper p-8 md:p-12 border border-earth/10 text-center space-y-6"
            >
                <div className="w-16 h-16 bg-earth/10 text-earth rounded-full flex items-center justify-center mx-auto mb-4">
                    <Check size={32} />
                </div>
                <h3 className="text-3xl font-serif text-ink">Inquiry Sent</h3>
                <p className="text-ink-soft max-w-sm mx-auto font-light">
                    Thank you, {data.name}. We have received your sanctuary request.
                    Aslam or Tehseen will reach out to you within 24 hours.
                </p>
                <button
                    onClick={() => { setStatus("idle"); setStep(0); }}
                    className="text-earth underline underline-offset-4 text-sm uppercase tracking-widest"
                >
                    Plan another stay
                </button>
            </motion.div>
        );
    }

    return (
        <div className="bg-white border border-earth/10 shadow-sm overflow-hidden min-h-[500px] flex flex-col">
            {/* Progress Bar */}
            <div className="flex border-b border-earth/5">
                {steps.map((s, i) => (
                    <div
                        key={i}
                        className={`flex-1 p-4 flex items-center justify-center gap-2 transition-colors duration-500 ${step >= i ? "text-earth" : "text-ink/20"}`}
                    >
                        <span className="hidden md:inline">{s.icon}</span>
                        <span className="text-[10px] md:text-xs uppercase tracking-widest font-medium">{s.title}</span>
                        {i < steps.length - 1 && <div className="hidden md:block flex-1 h-px bg-earth/10 ml-4" />}
                    </div>
                ))}
            </div>

            {/* Step Content */}
            <div className="flex-1 p-8 md:p-12 relative overflow-hidden">
                <AnimatePresence mode="wait" custom={step}>
                    <motion.div
                        key={step}
                        custom={step}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.4, ease: "easeInOut" }}
                        className="space-y-8"
                    >
                        {step === 0 && (
                            <div className="space-y-6">
                                <header className="space-y-2">
                                    <h3 className="text-2xl font-serif text-ink italic">When will you arrive?</h3>
                                    <p className="text-ink-soft text-sm font-light">Select your preferred dates of stillness.</p>
                                </header>
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-ink/40">Check In</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full bg-canvas border-none p-4 text-ink focus:ring-1 focus:ring-earth/30 transition-all outline-none"
                                            value={data.checkIn}
                                            onChange={(e) => setData({ ...data, checkIn: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-ink/40">Check Out</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full bg-canvas border-none p-4 text-ink focus:ring-1 focus:ring-earth/30 transition-all outline-none"
                                            value={data.checkOut}
                                            onChange={(e) => setData({ ...data, checkOut: e.target.value })}
                                        />
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 1 && (
                            <div className="space-y-6">
                                <header className="space-y-2">
                                    <h3 className="text-2xl font-serif text-ink italic">Who is traveling?</h3>
                                    <p className="text-ink-soft text-sm font-light">Total adults and guide requirements.</p>
                                </header>
                                <div className="space-y-6">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-ink/40">Number of Adults</label>
                                        <select
                                            className="w-full bg-canvas border-none p-4 text-ink focus:ring-1 focus:ring-earth/30 transition-all outline-none appearance-none"
                                            value={data.adults}
                                            onChange={(e) => setData({ ...data, adults: parseInt(e.target.value) })}
                                        >
                                            {[1, 2, 3, 4, 5, 6, 7, 8].map(n => <option key={n} value={n}>{n} {n === 1 ? 'Adult' : 'Adults'}</option>)}
                                        </select>
                                    </div>
                                    <div className="flex items-center gap-4 p-4 bg-canvas rounded-sm group cursor-pointer" onClick={() => setData({ ...data, needsGuide: !data.needsGuide })}>
                                        <div className={`w-5 h-5 border border-earth/30 rounded flex items-center justify-center transition-colors ${data.needsGuide ? "bg-earth text-white" : "bg-transparent"}`}>
                                            {data.needsGuide && <Check size={12} />}
                                        </div>
                                        <span className="text-sm text-ink-soft">Require a local hiking or cultural guide?</span>
                                    </div>
                                </div>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6">
                                <header className="space-y-2">
                                    <h3 className="text-2xl font-serif text-ink italic">Special Requests</h3>
                                    <p className="text-ink-soft text-sm font-light">Tell us about dietary needs or specific room preferences.</p>
                                </header>
                                <textarea
                                    placeholder="Write your thoughts here..."
                                    className="w-full bg-canvas border-none p-6 text-ink focus:ring-1 focus:ring-earth/30 transition-all outline-none min-h-[150px] resize-none font-light"
                                    value={data.specialRequirements}
                                    onChange={(e) => setData({ ...data, specialRequirements: e.target.value })}
                                />
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6">
                                <header className="space-y-2">
                                    <h3 className="text-2xl font-serif text-ink italic">Contact Details</h3>
                                    <p className="text-ink-soft text-sm font-light">For personalized correspondence.</p>
                                </header>
                                <div className="grid gap-4">
                                    <input
                                        type="text" placeholder="Full Name" required
                                        className="w-full bg-canvas border-none p-4 text-ink focus:ring-1 focus:ring-earth/30 transition-all outline-none"
                                        value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                                    />
                                    <input
                                        type="email" placeholder="Email Address" required
                                        className="w-full bg-canvas border-none p-4 text-ink focus:ring-1 focus:ring-earth/30 transition-all outline-none"
                                        value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                                    />
                                    <input
                                        type="tel" placeholder="WhatsApp / Phone" required
                                        className="w-full bg-canvas border-none p-4 text-ink focus:ring-1 focus:ring-earth/30 transition-all outline-none"
                                        value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            {/* Footer Navigation */}
            <div className="p-8 border-t border-earth/5 flex justify-between items-center bg-canvas/30">
                <button
                    onClick={prevStep}
                    disabled={step === 0}
                    className={`flex items-center gap-2 text-xs uppercase tracking-widest transition-all ${step === 0 ? "opacity-0 invisible" : "text-ink/40 hover:text-earth"}`}
                >
                    <ArrowLeft size={16} /> Previous
                </button>

                {step === steps.length - 1 ? (
                    <button
                        onClick={handleSubmit}
                        disabled={status === "submitting" || !data.name || !data.email}
                        className="px-8 py-3 bg-ink text-white text-xs uppercase tracking-widest hover:bg-earth transition-all disabled:opacity-50"
                    >
                        {status === "submitting" ? "Sending..." : "Submit Inquiry"}
                    </button>
                ) : (
                    <button
                        onClick={nextStep}
                        className="flex items-center gap-2 px-8 py-3 bg-earth text-white text-xs uppercase tracking-widest hover:bg-ink transition-all"
                    >
                        Next <ArrowRight size={16} />
                    </button>
                )}
            </div>
        </div>
    );
}
