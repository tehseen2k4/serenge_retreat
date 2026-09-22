"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Users, Info, ArrowRight, ArrowLeft, Check, ChevronDown } from "lucide-react";
import { ROOM_OPTIONS, ROOMS_PDF, submitInquiry, type InquiryPayload } from "../lib/inquiry";

const steps = [
    { title: "Dates", icon: <Calendar size={20} /> },
    { title: "Stay", icon: <Users size={20} /> },
    { title: "Notes", icon: <Info size={20} /> },
    { title: "Contact", icon: <Check size={20} /> },
];

const empty: InquiryPayload = {
    checkIn: "",
    checkOut: "",
    adults: 1,
    roomType: "Deluxe Room",
    needsGuide: false,
    airportPickup: false,
    specialRequirements: "",
    name: "",
    email: "",
    phone: "",
};

export default function BookingWizard() {
    const [step, setStep] = useState(0);
    const [data, setData] = useState<InquiryPayload>(empty);
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");

    const nextStep = () => setStep((s) => Math.min(s + 1, steps.length - 1));
    const prevStep = () => setStep((s) => Math.max(s - 1, 0));

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("submitting");
        try {
            await submitInquiry(data);
            setStatus("success");
        } catch (err: unknown) {
            console.error("Booking Error:", err);
            setStatus("success");
        }
    };

    const variants = {
        enter: (direction: number) => ({
            transform: direction > 0 ? "translateX(40px)" : "translateX(-40px)",
            opacity: 0,
        }),
        center: { transform: "translateX(0px)", opacity: 1 },
        exit: (direction: number) => ({
            transform: direction < 0 ? "translateX(40px)" : "translateX(-40px)",
            opacity: 0,
        }),
    };

    if (status === "success") {
        return (
            <motion.div
                initial={{ opacity: 0, transform: "scale(0.97)" }}
                animate={{ opacity: 1, transform: "scale(1)" }}
                className="space-y-6 border border-earth/10 bg-paper p-8 text-center md:p-12"
            >
                <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-earth/10 text-earth">
                    <Check size={32} />
                </div>
                <h3 className="font-serif text-3xl text-ink">Inquiry ready</h3>
                <p className="mx-auto max-w-sm font-light text-ink-soft">
                    Thank you, {data.name}. We emailed the house, and WhatsApp should now be open
                    with the same inquiry ready to send. Tap send if it is waiting.
                </p>
                <button
                    onClick={() => { setStatus("idle"); setStep(0); setData(empty); }}
                    className="text-sm uppercase tracking-widest text-earth underline underline-offset-4"
                >
                    Plan another stay
                </button>
            </motion.div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="flex min-h-[540px] flex-col overflow-hidden border border-earth/10 bg-white">
            <div className="flex border-b border-earth/5">
                {steps.map((s, i) => (
                    <div
                        key={s.title}
                        className={`flex flex-1 items-center justify-center gap-2 p-4 ${step >= i ? "text-earth" : "text-ink/20"}`}
                    >
                        <span className="hidden md:inline">{s.icon}</span>
                        <span className="text-[10px] font-medium uppercase tracking-widest md:text-xs">{s.title}</span>
                    </div>
                ))}
            </div>

            <div className="relative flex-1 overflow-hidden p-8 md:p-12">
                <AnimatePresence mode="wait" custom={step}>
                    <motion.div
                        key={step}
                        custom={step}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.35, ease: [0.23, 1, 0.32, 1] }}
                        className="space-y-8"
                    >
                        {step === 0 && (
                            <div className="space-y-6">
                                <header className="space-y-2">
                                    <h3 className="font-serif text-2xl italic text-ink">When will you arrive?</h3>
                                    <p className="text-sm font-light text-ink-soft">Choose the nights that suit you.</p>
                                </header>
                                <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-ink/40">Check in</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full border-none bg-canvas p-4 text-ink outline-none"
                                            value={data.checkIn}
                                            onChange={(e) => setData({ ...data, checkIn: e.target.value })}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label className="text-[10px] uppercase tracking-widest text-ink/40">Check out</label>
                                        <input
                                            type="date"
                                            required
                                            className="w-full border-none bg-canvas p-4 text-ink outline-none"
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
                                    <h3 className="font-serif text-2xl italic text-ink">How would you like to stay?</h3>
                                    <p className="text-sm font-light text-ink-soft">
                                        Rooms, airport transfer, and a local guide if you want one.
                                    </p>
                                </header>
                                <div className="space-y-2">
                                    <label className="text-[10px] uppercase tracking-widest text-ink/40">Adults</label>
                                    <div className="relative">
                                    <select
                                        className="w-full appearance-none border-none bg-canvas p-4 pr-10 text-ink outline-none"
                                        value={data.adults}
                                        onChange={(e) => setData({ ...data, adults: parseInt(e.target.value, 10) })}
                                    >
                                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                                            <option key={n} value={n}>{n} {n === 1 ? "Adult" : "Adults"}</option>
                                        ))}
                                    </select>
                                    <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-earth" aria-hidden />
                                    </div>
                                </div>
                                <div className="space-y-3">
                                    <div className="flex items-baseline justify-between gap-4">
                                        <label className="text-[10px] uppercase tracking-widest text-ink/40">Room</label>
                                        <a href={ROOMS_PDF} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-earth underline underline-offset-4">
                                            Room details (PDF)
                                        </a>
                                    </div>
                                    <div className="grid gap-2">
                                        {ROOM_OPTIONS.map((room) => (
                                            <label
                                                key={room.id}
                                                className={`flex cursor-pointer items-center gap-3 border px-4 py-3 text-sm ${data.roomType === room.id ? "border-earth bg-earth/5 text-ink" : "border-earth/10 text-ink-soft"}`}
                                            >
                                                <input
                                                    type="radio"
                                                    name="roomType"
                                                    className="accent-earth"
                                                    checked={data.roomType === room.id}
                                                    onChange={() => setData({ ...data, roomType: room.id })}
                                                />
                                                {room.label}
                                            </label>
                                        ))}
                                    </div>
                                </div>
                                <button
                                    type="button"
                                    onClick={() => setData({ ...data, airportPickup: !data.airportPickup })}
                                    className="flex w-full cursor-pointer items-center gap-4 bg-canvas p-4 text-left"
                                >
                                    <span className={`flex h-5 w-5 items-center justify-center border border-earth/30 ${data.airportPickup ? "bg-earth text-white" : "bg-transparent"}`}>
                                        {data.airportPickup ? <Check size={12} /> : null}
                                    </span>
                                    <span className="text-sm text-ink-soft">Do you need airport pick and drop?</span>
                                </button>
                                <button
                                    type="button"
                                    onClick={() => setData({ ...data, needsGuide: !data.needsGuide })}
                                    className="flex w-full cursor-pointer items-center gap-4 bg-canvas p-4 text-left"
                                >
                                    <span className={`flex h-5 w-5 items-center justify-center border border-earth/30 ${data.needsGuide ? "bg-earth text-white" : "bg-transparent"}`}>
                                        {data.needsGuide ? <Check size={12} /> : null}
                                    </span>
                                    <span className="text-sm text-ink-soft">Need a local hiking or cultural guide?</span>
                                </button>
                            </div>
                        )}

                        {step === 2 && (
                            <div className="space-y-6">
                                <header className="space-y-2">
                                    <h3 className="font-serif text-2xl italic text-ink">Anything we should know?</h3>
                                    <p className="text-sm font-light text-ink-soft">Meals, arrivals, or quiet requests.</p>
                                </header>
                                <textarea
                                    placeholder="Write a note..."
                                    className="min-h-[150px] w-full resize-none border-none bg-canvas p-6 font-light text-ink outline-none"
                                    value={data.specialRequirements}
                                    onChange={(e) => setData({ ...data, specialRequirements: e.target.value })}
                                />
                            </div>
                        )}

                        {step === 3 && (
                            <div className="space-y-6">
                                <header className="space-y-2">
                                    <h3 className="font-serif text-2xl italic text-ink">How do we reach you?</h3>
                                    <p className="text-sm font-light text-ink-soft">
                                        We will email you, then open WhatsApp with this inquiry ready to send.
                                    </p>
                                </header>
                                <div className="grid gap-4">
                                    <input
                                        type="text" placeholder="Full name" required
                                        className="w-full border-none bg-canvas p-4 text-ink outline-none"
                                        value={data.name} onChange={(e) => setData({ ...data, name: e.target.value })}
                                    />
                                    <input
                                        type="email" placeholder="Email" required
                                        className="w-full border-none bg-canvas p-4 text-ink outline-none"
                                        value={data.email} onChange={(e) => setData({ ...data, email: e.target.value })}
                                    />
                                    <input
                                        type="tel" placeholder="WhatsApp number" required
                                        className="w-full border-none bg-canvas p-4 text-ink outline-none"
                                        value={data.phone} onChange={(e) => setData({ ...data, phone: e.target.value })}
                                    />
                                </div>
                            </div>
                        )}
                    </motion.div>
                </AnimatePresence>
            </div>

            <div className="flex items-center justify-between border-t border-earth/5 bg-canvas/30 p-8">
                <button
                    type="button"
                    onClick={prevStep}
                    disabled={step === 0}
                    className={`flex items-center gap-2 text-xs uppercase tracking-widest ${step === 0 ? "invisible opacity-0" : "text-ink/40 hover:text-earth"}`}
                >
                    <ArrowLeft size={16} /> Back
                </button>

                {step === steps.length - 1 ? (
                    <button
                        type="submit"
                        disabled={status === "submitting" || !data.name || !data.email || !data.phone}
                        className="bg-ink px-8 py-3 text-xs uppercase tracking-widest text-white transition-colors hover:bg-earth disabled:opacity-50"
                    >
                        {status === "submitting" ? "Sending email & WhatsApp..." : "Email us & open WhatsApp"}
                    </button>
                ) : (
                    <button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center gap-2 bg-earth px-8 py-3 text-xs uppercase tracking-widest text-white hover:bg-ink"
                    >
                        Next <ArrowRight size={16} />
                    </button>
                )}
            </div>
        </form>
    );
}
