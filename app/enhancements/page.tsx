"use client";

import Breathwork from "../components/Breathwork";
import TheRelease from "../components/TheRelease";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export default function EnhancementsPage() {
    return (
        <div className="min-h-screen bg-canvas py-24 px-6 md:px-12">
            <Link href="/" className="inline-flex items-center gap-2 text-ink-muted hover:text-earth mb-12 transition-colors">
                <ArrowLeft size={16} />
                <span className="text-xs uppercase tracking-widest">Back to Home</span>
            </Link>

            <header className="max-w-4xl mx-auto text-center mb-24 space-y-6">
                <h1 className="text-4xl md:text-6xl font-serif text-ink">Soulful Enhancements</h1>
                <p className="text-lg text-ink-soft font-light">
                    Prototypes for deepening the digital connection to the valley.
                </p>
            </header>

            <div className="max-w-6xl mx-auto space-y-16">

                {/* Breathwork Section */}
                <section className="space-y-6">
                    <div className="flex items-baseline justify-between">
                        <h2 className="text-2xl font-serif text-ink">01. Breathe with Shigar</h2>
                        <span className="text-xs uppercase tracking-widest text-ink-muted">Interactive</span>
                    </div>
                    <p className="text-ink-soft font-light text-sm leading-relaxed">
                        A multi-layered meditative tool with customizable rhythms, ambient audio, and floating particles.
                        Choose your breathing pattern and let the visuals guide you into stillness.
                    </p>
                    <Breathwork />
                </section>

                {/* Release Section */}
                <section className="space-y-6">
                    <div className="flex items-baseline justify-between">
                        <h2 className="text-2xl font-serif text-ink">02. The Release</h2>
                        <span className="text-xs uppercase tracking-widest text-ink-muted">Ritual</span>
                    </div>
                    <p className="text-ink-soft font-light text-sm leading-relaxed">
                        A digital fire ceremony with particle physics. Type a burden, watch each letter scatter and dissolve,
                        then witness a lotus bloom as confirmation of your release.
                    </p>
                    <TheRelease />
                </section>

            </div>
        </div>
    );
}
