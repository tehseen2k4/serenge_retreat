"use client";

import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function JourneysPage() {
    return (
        <div className="bg-paper min-h-screen">

            {/* HEADER */}
            <section className="pt-32 pb-20 px-6 md:px-12 bg-canvas">
                <div className="max-w-4xl mx-auto text-center space-y-6">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-4xl md:text-5xl font-serif text-ink"
                    >
                        Not a Vacation. A Return.
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed"
                    >
                        We do not sell packages. We curate journeys. Each experience is designed to
                        hold space for what you need to find.
                    </motion.p>
                </div>
            </section>

            {/* OFFERS */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-32">

                {/* Journey 1 */}
                <section id="soul" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="h-[500px] bg-stone/10 grayscale hover:grayscale-0 transition-all duration-1000 order-1 md:order-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-stone/5" />
                        {/* Image placeholder */}
                    </div>
                    <div className="space-y-6 order-2 md:order-2 p-8">
                        <h2 className="text-3xl font-serif text-ink">Soul Journeys</h2>
                        <div className="w-12 h-[1px] bg-earth/50" />
                        <p className="text-ink-soft leading-relaxed font-light">
                            For the seeker. These journeys are unstructured, allowing the silence of the
                            valley to do the work. Long walks, unguided meditation, and deep rest.
                        </p>
                        <ul className="space-y-2 text-sm text-ink-muted">
                            <li>· Private cabin accomodation</li>
                            <li>· Organic, plant-based meals</li>
                            <li>· No fixed itinerary</li>
                        </ul>
                    </div>
                </section>

                {/* Journey 2 */}
                <section id="wellness" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="space-y-6 order-2 md:order-1 p-8">
                        <h2 className="text-3xl font-serif text-ink">Wellness Retreats</h2>
                        <div className="w-12 h-[1px] bg-earth/50" />
                        <p className="text-ink-soft leading-relaxed font-light">
                            Guided by visiting practitioners. Breathwork, somatic healing, and yoga
                            practiced in the open air, under the shadow of Khosar Gang.
                        </p>
                        <ul className="space-y-2 text-sm text-ink-muted">
                            <li>· Small group (max 8)</li>
                            <li>· Daily guided practice</li>
                            <li>· Sound healing sessions</li>
                        </ul>
                    </div>
                    <div className="h-[500px] bg-sand/10 grayscale hover:grayscale-0 transition-all duration-1000 order-1 md:order-2 relative overflow-hidden">
                        <div className="absolute inset-0 bg-sand/5" />
                    </div>
                </section>

                {/* Journey 3 */}
                <section id="immersion" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div className="h-[500px] bg-earth/10 grayscale hover:grayscale-0 transition-all duration-1000 order-1 md:order-1 relative overflow-hidden">
                        <div className="absolute inset-0 bg-earth/5" />
                    </div>
                    <div className="space-y-6 order-2 md:order-2 p-8">
                        <h2 className="text-3xl font-serif text-ink">Nature Immersions</h2>
                        <div className="w-12 h-[1px] bg-earth/50" />
                        <p className="text-ink-soft leading-relaxed font-light">
                            Connect with the raw power of Baltistan. Glacier walks, cold plunges in
                            glacial streams, and nights spent under the Milky Way.
                        </p>
                        <ul className="space-y-2 text-sm text-ink-muted">
                            <li>· Guided treks</li>
                            <li>· Wild swimming</li>
                            <li>· Star-gazing workshops</li>
                        </ul>
                    </div>
                </section>

            </div>
        </div>
    );
}
