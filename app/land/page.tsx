"use client";

import SeasonsScroll from "../components/SeasonsScroll";
import InteractiveMap from "../components/InteractiveMap";


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

            <SeasonsScroll />

            <div className="max-w-7xl mx-auto px-0 md:px-6 py-24 pt-0">
                <InteractiveMap />
            </div>

            <div className="max-w-7xl mx-auto px-6 py-24 border-b border-earth/10">
                <div className="grid md:grid-cols-2 gap-16">
                    <div className="space-y-6">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-earth">Gateway to Giants</h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-ink italic leading-tight">
                            Shigar Valley: <br /> Timeless beauty.
                        </h3>
                        <p className="text-ink-soft font-light text-lg">
                            The valley is a path to the mighty Karakoram, surrounded by the world's highest peaks
                            and ancient Balti culture.
                        </p>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                        {[
                            { name: "K2 Base Camp", type: "Trek" },
                            { name: "Baltoro Glacier", type: "Ice" },
                            { name: "Spantik Peak", type: "7,027m" },
                            { name: "Khosar Gang", type: "6,040m" },
                            { name: "Shigar Fort", type: "Culture" },
                            { name: "Alchori Village", type: "Local" },
                        ].map((item, i) => (
                            <div key={i} className="bg-paper p-4 border border-earth/5">
                                <p className="text-ink font-serif italic text-lg">{item.name}</p>
                                <p className="text-[10px] uppercase tracking-widest text-earth mt-1">{item.type}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="max-w-5xl mx-auto px-6 py-24 space-y-32">
                {/* Getting Here Section (Logistics) */}
                <section className="space-y-12">
                    <div className="text-center space-y-4">
                        <h2 className="text-sm uppercase tracking-[0.3em] text-earth">How to reach us</h2>
                        <h3 className="text-3xl font-serif text-ink italic">The Journey to Alchori</h3>
                    </div>

                    <div className="grid md:grid-cols-3 gap-8">
                        <div className="space-y-4 p-8 bg-paper rounded-2xl text-center">
                            <div className="text-earth font-serif text-2xl italic">57 km</div>
                            <p className="text-xs uppercase tracking-widest text-ink">From Skardu Airport</p>
                            <p className="text-sm text-ink-soft font-light">1 Hour 45 Min Drive</p>
                        </div>
                        <div className="space-y-4 p-8 bg-paper rounded-2xl text-center">
                            <div className="text-earth font-serif text-2xl italic">17 km</div>
                            <p className="text-xs uppercase tracking-widest text-ink">From Shigar Fort</p>
                            <p className="text-sm text-ink-soft font-light">25 Min Drive</p>
                        </div>
                        <div className="space-y-4 p-8 bg-earth/5 rounded-2xl text-center ring-1 ring-earth/20">
                            <div className="text-earth font-serif text-2xl italic">1.4 km</div>
                            <p className="text-xs uppercase tracking-widest text-ink font-bold">The Rough Track</p>
                            <p className="text-sm text-ink-soft font-light">
                                Best for 4x4 vehicles. Drive slowly or request a pickup.
                            </p>
                        </div>
                    </div>
                </section>

                {/* Khosar Gang */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-earth text-xs uppercase tracking-widest">The Guardian Peak</span>
                        <h2 className="text-3xl font-serif text-ink">Khosar Gang</h2>
                        <p className="text-ink-soft font-light leading-relaxed">
                            Shigar is home to some of the world's highest peaks. Khosar Gang stands as
                            a sentinel above our retreat, demanding nothing but humility.
                        </p>
                    </div>
                    <div className="flex-1 h-96 bg-stone/20 w-full" />
                </div>
            </div>
        </div>
    );
}
