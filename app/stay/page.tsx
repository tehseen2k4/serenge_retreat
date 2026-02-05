"use client";

import { motion } from "framer-motion";

export default function StayPage() {
    return (
        <div className="bg-canvas min-h-screen pb-20">

            {/* Intro */}
            <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-serif text-ink">Built from the Earth</h1>
                <p className="text-lg text-ink-soft font-light leading-relaxed">
                    Our walls are made of mud, straw, and stone. They breathe with you.
                    Every corner of Serengé is designed to ground you.
                </p>
            </section>

            {/* Architecture */}
            <section className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-start py-12">
                <div className="sticky top-32 space-y-8">
                    <h2 className="text-3xl font-serif text-ink">Architecture of Silence</h2>
                    <div className="bg-paper p-8 border border-border/50 space-y-4">
                        <h3 className="text-lg font-medium text-earth">Traditional Balti Wisdom</h3>
                        <p className="text-ink-soft font-light leading-relaxed">
                            We employed local artisans to build Serengé using techniques that have stood for centuries.
                            Thick mud walls keep the interiors cool in summer and warm in winter. No concrete. No plastic.
                        </p>
                    </div>
                    <div className="bg-paper p-8 border border-border/50 space-y-4">
                        <h3 className="text-lg font-medium text-earth">Solar & Sustainable</h3>
                        <p className="text-ink-soft font-light leading-relaxed">
                            We are 100% off-grid. Energy comes from the sun. Water comes from the glacial melt.
                            Waste is returned to the earth as compost.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-1 gap-8">
                    <div className="aspect-[4/5] bg-stone/20 w-full" /> {/* Image: Mud walls */}
                    <div className="aspect-square bg-sand/20 w-full" /> {/* Image: Interior */}
                </div>
            </section>

            {/* Food */}
            <section className="bg-paper py-24 mt-20 px-6">
                <div className="max-w-5xl mx-auto text-center space-y-12">
                    <h2 className="text-3xl font-serif text-ink">Nourishment</h2>
                    <p className="max-w-2xl mx-auto text-ink-soft font-light leading-relaxed text-lg">
                        We believe food is medicine. Our kitchen uses only what is grown in our organic gardens
                        or sourced from the immediate valley. Simple, clean, and deeply nourishing.
                        (Apricots, buckwheat, walnuts, and glacial water).
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-8">
                        <div className="border-t border-earth/30 pt-4">
                            <h4 className="text-earth mb-2 uppercase tracking-widest text-xs">Breakfast</h4>
                            <p className="text-ink-soft text-sm">Buckwheat pancakes, fresh apricot jam, herbal tea.</p>
                        </div>
                        <div className="border-t border-earth/30 pt-4">
                            <h4 className="text-earth mb-2 uppercase tracking-widest text-xs">Lunch</h4>
                            <p className="text-ink-soft text-sm">Lentil stew, fresh greens, whole grain flatbread.</p>
                        </div>
                        <div className="border-t border-earth/30 pt-4">
                            <h4 className="text-earth mb-2 uppercase tracking-widest text-xs">Dinner</h4>
                            <p className="text-ink-soft text-sm">Vegetable broth, roasted roots, communal connection.</p>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
