"use client";

import SeasonsScroll from "../components/SeasonsScroll";
import InteractiveMap from "../components/InteractiveMap";


export default function LandPage() {
    return (
        <div className="bg-canvas min-h-screen">
            <section className="h-[70vh] flex items-center justify-center bg-stone/30 relative overflow-hidden">
                <div className="absolute inset-0 z-0">
                    <img src="/images/land/Land Hero.webp" alt="Shigar Valley" className="object-cover w-full h-full opacity-90" />
                    <div className="absolute inset-0 bg-black/20" />
                </div>
                <div className="text-center space-y-4 z-10 px-6">
                    <h1 className="text-5xl md:text-7xl font-serif text-white mix-blend-overlay drop-shadow-lg">The Land</h1>
                    <p className="text-white/90 text-lg tracking-widest uppercase drop-shadow-md">Shigar Valley · Baltistan</p>
                </div>
            </section>

            <SeasonsScroll />

            <div className="max-w-7xl mx-auto px-0 md:px-6 py-24 pt-0">
                <InteractiveMap />
            </div>

            {/* Expanded Attractions Section */}
            <div className="max-w-7xl mx-auto px-6 py-24 space-y-32">

                {/* Intro */}
                <div className="text-center max-w-3xl mx-auto space-y-6">
                    <h2 className="text-sm uppercase tracking-[0.4em] text-earth">Gateway to Giants</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-ink italic leading-tight">
                        Shigar Valley: <br /> Timeless beauty.
                    </h3>
                    <p className="text-ink-soft font-light text-lg">
                        The valley is a path to the mighty Karakoram, surrounded by the world's highest peaks
                        and ancient Balti culture.
                    </p>
                </div>

                {/* Khosar Gang */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-earth text-xs uppercase tracking-widest">The Guardian Peak</span>
                        <h2 className="text-3xl font-serif text-ink">Khosar Gang</h2>
                        <p className="text-ink-soft font-light leading-relaxed">
                            Shigar is home to some of the world's highest peaks. Khosar Gang (6,040m) stands as
                            a sentinel above our retreat. Its snow-capped summit is a constant reminder of
                            nature's scale and majesty.
                        </p>
                    </div>
                    {/* Image Side - Refactored to match other sections */}
                    <div className="flex-1 aspect-video relative bg-stone/10 overflow-hidden rounded-sm group">
                        <img
                            src="/images/land/Khosar Gang.webp"
                            alt="Khosar Gang"
                            className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-stone/10 group-hover:bg-transparent transition-colors" />
                    </div>
                </div>

                {/* Spantik Peak */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-earth text-xs uppercase tracking-widest">Directory of Golden Peak</span>
                        <h2 className="text-3xl font-serif text-ink">Spantik Peak</h2>
                        <p className="text-ink-soft font-light leading-relaxed">
                            Known as the Golden Peak (7,027m). Its reddish-golden hue at sunset is a spectacle
                            visible from specific vantage points in the valley. It beckons mountaineers and dreamers alike.
                        </p>
                    </div>
                    {/* Image Side - Refactored to match other sections */}
                    <div className="order-1 md:order-2 flex-1 aspect-video relative bg-stone/10 overflow-hidden rounded-sm group">
                        <img
                            src="/images/land/Spantik Peak.webp"
                            alt="Spantik & Golden Peak"
                            className="w-full h-full object-cover object-bottom transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-stone/10 group-hover:bg-transparent transition-colors" />
                    </div>
                </div>

                {/* K2 Basecamp & Baltoro */}
                <div className="flex flex-col md:flex-row gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-earth text-xs uppercase tracking-widest">The Throne Room</span>
                        <h2 className="text-3xl font-serif text-ink">K2 & Baltoro Glacier</h2>
                        <p className="text-ink-soft font-light leading-relaxed">
                            Shigar is the gateway to Askole, the last village before the trek to K2 (8,611m).
                            The Baltoro Glacier, one of the longest outside the polar regions, winds through
                            this cathedral of granite giants.
                        </p>
                    </div>
                    <div className="flex-1 aspect-video relative bg-stone/20 w-full overflow-hidden rounded-sm group">
                        <div className="grid grid-cols-2 h-full w-full">
                            <img src="/images/land/K2 Basecamp.webp" alt="K2 Basecamp" className="object-cover w-full h-full" />
                            <img src="/images/land/Baltoro Glacier.webp" alt="Baltoro Glacier" className="object-cover w-full h-full" />
                        </div>
                    </div>
                </div>

                {/* Shigar Fort & Alchori */}
                <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
                    <div className="flex-1 space-y-6">
                        <span className="text-earth text-xs uppercase tracking-widest">Living History</span>
                        <h2 className="text-3xl font-serif text-ink">Alchori & Shigar Fort</h2>
                        <p className="text-ink-soft font-light leading-relaxed">
                            Just 25 minutes away lies the 400-year-old Shigar Fort (Fong Khar).
                            But here in Alchori, the experience is raw and authentic—village walks,
                            organic farming, and the warm smiles of the Balti people.
                        </p>
                    </div>
                    <div className="flex-1 aspect-video relative bg-stone/20 w-full overflow-hidden rounded-sm group">
                        <img
                            src="/images/land/Land Hero.webp"
                            alt="Shigar Valley"
                            className="object-cover w-full h-full transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-stone/10 group-hover:bg-transparent transition-colors" />
                    </div>
                </div>


                {/* Getting Here Section (Logistics) */}
                <div className="border-t border-earth/10 pt-24 space-y-12">
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
                </div>
            </div>
        </div>
    );
}
