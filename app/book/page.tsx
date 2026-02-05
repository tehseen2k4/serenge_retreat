"use client";

import { useState } from "react";
import { motion } from "framer-motion";

export default function BookPage() {
    const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");

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

            if (!res.ok) throw new Error("Failed");

            setStatus("success");
        } catch (err) {
            console.error(err);
            setStatus("error");
        }
    }

    if (status === "success") {
        return (
            <div className="min-h-screen flex items-center justify-center bg-canvas px-6 text-center">
                <div className="max-w-md space-y-6">
                    <h1 className="text-3xl font-serif text-ink">Message Received</h1>
                    <p className="text-ink-soft">
                        Thank you for reaching out. We read every message with care.
                        Tehseen or a member of our team will correspond with you via email or WhatsApp shortly.
                    </p>
                    <div className="pt-8">
                        <a href="/" className="text-earth hover:text-ink underline underline-offset-4">Return Home</a>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-canvas py-32 px-6">
            <div className="max-w-2xl mx-auto space-y-12">
                <header className="text-center space-y-4">
                    <h1 className="text-4xl md:text-5xl font-serif text-ink">Start the Conversation</h1>
                    <p className="text-ink-soft font-light">
                        We prefer human connection over automated bookings. Tell us about yourself,
                        and let us design your journey.
                    </p>
                </header>

                <form onSubmit={handleSubmit} className="space-y-8 bg-paper p-8 md:p-12 border border-border shadow-sm">
                    <div className="space-y-2">
                        <label htmlFor="name" className="text-xs uppercase tracking-widest text-ink-muted">Name</label>
                        <input required type="text" name="name" id="name" className="w-full bg-transparent border-b border-border active:border-earth focus:border-earth outline-none py-2 text-ink transition-colors" />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-xs uppercase tracking-widest text-ink-muted">Email</label>
                            <input required type="email" name="email" id="email" className="w-full bg-transparent border-b border-border active:border-earth focus:border-earth outline-none py-2 text-ink transition-colors" />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="country" className="text-xs uppercase tracking-widest text-ink-muted">Country</label>
                            <input type="text" name="country" id="country" className="w-full bg-transparent border-b border-border active:border-earth focus:border-earth outline-none py-2 text-ink transition-colors" />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="journey" className="text-xs uppercase tracking-widest text-ink-muted">Interested In</label>
                        <select name="journey" id="journey" className="w-full bg-transparent border-b border-border active:border-earth focus:border-earth outline-none py-2 text-ink transition-colors appearance-none rounded-none">
                            <option value="Soul Journey">Soul Journey (Unstructured)</option>
                            <option value="Wellness Retreat">Wellness Retreat (Guided)</option>
                            <option value="Immersion">Nature Immersion (Trekking)</option>
                            <option value="Undecided">I am not sure yet</option>
                        </select>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="intention" className="text-xs uppercase tracking-widest text-ink-muted">Your Intention / Message</label>
                        <textarea required name="intention" id="intention" rows={4} className="w-full bg-transparent border-b border-border active:border-earth focus:border-earth outline-none py-2 text-ink transition-colors resize-none" placeholder="Why now? What are you seeking?"></textarea>
                    </div>

                    <button
                        disabled={status === "submitting"}
                        type="submit"
                        className="w-full py-4 bg-ink text-canvas uppercase tracking-widest text-sm hover:bg-earth transition-colors duration-300 disabled:opacity-50"
                    >
                        {status === "submitting" ? "Sending..." : "Send Request"}
                    </button>

                    {status === "error" && (
                        <p className="text-center text-red-800 text-sm">Something went wrong. Please try again or email us directly.</p>
                    )}
                </form>
            </div>
        </div>
    );
}
