"use client";

export default function LandPage() {
    return (
        <div className="bg-canvas min-h-screen">
            <section className="h-[70vh] flex items-center justify-center bg-stone/30 relative">
                <div className="text-center space-y-4 z-10 px-6">
                    <h1 className="text-5xl md:text-7xl font-serif text-ink text-white mix-blend-overlay">The Land</h1>
                    <p className="text-white/80 text-lg tracking-widest uppercase">Shigar Valley · Baltistan</p>
                </div>
                {/* Background video or parallax image would go here */}
            </section>

            <div className="max-w-5xl mx-auto px-6 py-24 space-y-24">

                {/* Khosar Gang */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-earth text-xs uppercase tracking-widest">6,040m Elevation</span>
                        <h2 className="text-3xl font-serif text-ink">Khosar Gang</h2>
                        <p className="text-ink-soft font-light leading-relaxed">
                            The guardian of our valley. A presence that demands nothing but humility.
                            Watching the sun hit the peak at dawn is a prayer in itself.
                        </p>
                    </div>
                    <div className="flex-1 h-96 bg-stone/20 w-full" />
                </div>

                {/* Thalle La */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-earth text-xs uppercase tracking-widest">The Ancient Pass</span>
                        <h2 className="text-3xl font-serif text-ink">Thalle La</h2>
                        <p className="text-ink-soft font-light leading-relaxed">
                            The old trade route connecting Shigar to Khaplu. Walk the same path
                            that sheperds and pilgrams have walked for a thousand years.
                        </p>
                    </div>
                    <div className="flex-1 h-96 bg-sand/20 w-full" />
                </div>

                {/* Glaciers */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-earth text-xs uppercase tracking-widest">Living Ice</span>
                        <h2 className="text-3xl font-serif text-ink">The Glaciers</h2>
                        <p className="text-ink-soft font-light leading-relaxed">
                            Drink water that was frozen before the industrial revolution.
                            The glacial streams are cold, pure, and awakening.
                        </p>
                    </div>
                    <div className="flex-1 h-96 bg-blue-50/20 w-full border border-blue-100/20" />
                </div>

            </div>
        </div>
    );
}
