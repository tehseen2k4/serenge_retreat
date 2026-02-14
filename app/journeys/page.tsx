"use client";

import { motion, Variants } from "framer-motion";
import ItineraryAccordion from "../components/ItineraryAccordion";

const fadeUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function JourneysPage() {
    return (
        <div className="bg-paper min-h-screen">

            {/* HEADER */}
            <section className="relative pt-32 pb-20 px-6 md:px-12 bg-canvas overflow-hidden">
                <div className="absolute inset-0 z-0 opacity-40">
                    <img src="/images/journeys/Journeys Hero.webp" alt="Journeys Hero" className="w-full h-full object-cover" />
                </div>
                <div className="relative z-10 max-w-4xl mx-auto text-center space-y-6">
                    <motion.h1
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        className="text-4xl md:text-5xl font-serif text-ink drop-shadow-md"
                    >
                        Not a Vacation. A Return.
                    </motion.h1>
                    <motion.p
                        initial="hidden"
                        animate="visible"
                        variants={fadeUp}
                        transition={{ delay: 0.1 }}
                        className="text-lg text-ink-soft max-w-2xl mx-auto leading-relaxed drop-shadow-sm"
                    >
                        We do not sell packages. We curate journeys. Each experience is designed to
                        hold space for what you need to find.
                    </motion.p>
                </div>
            </section>

            {/* OFFERS */}
            <div className="max-w-7xl mx-auto px-6 md:px-12 py-20 space-y-32">

                {/* Journey 1: SOUL */}
                <section id="soul" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Visual Side */}
                    <div className="space-y-4 order-1 md:order-1">
                        <div className="h-[500px] bg-stone/10 relative overflow-hidden rounded-sm">
                            <img src="/images/journeys/Soul Journey Pic 2.webp" alt="Soul Journey Main" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/90 drop-shadow-md">The Valley</div>
                        </div>
                        {/* Inspiration Gallery (Mini Masonry) */}
                        <div className="grid grid-cols-2 gap-4 h-48">
                            <div className="bg-stone/20 overflow-hidden rounded-sm">
                                <img src="/images/journeys/Soul Journey Pic 3.webp" alt="Soul Journey Detail 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="bg-stone/30 overflow-hidden rounded-sm">
                                <img src="/images/home/Soul Journeys.webp" alt="Soul Journey Detail 2" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6 order-2 md:order-2 p-4 md:p-8 sticky top-24">
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

                        <ItineraryAccordion
                            title="Sample Rhythm"
                            items={[
                                { time: "06:00 AM", activity: "Silence & Herbal Tea" },
                                { time: "08:00 AM", activity: "Solitary Walk by the River" },
                                { time: "01:00 PM", activity: "Plant-based Lunch in Garden" },
                                { time: "04:00 PM", activity: "Journaling or Nap" },
                                { time: "08:00 PM", activity: "Fire Meditation" }
                            ]}
                        />
                    </div>
                </section>

                {/* Journey 2: WELLNESS */}
                <section id="wellness" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Content Side */}
                    <div className="space-y-6 order-2 md:order-1 p-4 md:p-8 sticky top-24">
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

                        <ItineraryAccordion
                            title="Daily Practice"
                            items={[
                                { time: "07:00 AM", activity: "Sunrise Yoga" },
                                { time: "10:00 AM", activity: "Breathwork Session" },
                                { time: "02:00 PM", activity: "Somatic Healing Workshop" },
                                { time: "06:00 PM", activity: "Restorative Yoga" }
                            ]}
                        />
                    </div>

                    {/* Visual Side */}
                    <div className="space-y-4 order-1 md:order-2">
                        <div className="h-[500px] bg-sand/10 relative overflow-hidden rounded-sm  image-bottom">
                            <img src="/images/home/Wellness Retreat.webp" alt="Wellness Retreat Main" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/90 drop-shadow-md">The Healing</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 h-48">
                            <div className="bg-sand/20 overflow-hidden rounded-sm">
                                <img src="/images/journeys/Wellness Retreat Pic 2.webp" alt="Wellness Retreat Detail 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="bg-sand/30 overflow-hidden rounded-sm">
                                <img src="/images/journeys/Wellness Retreat Pic 3.webp" alt="Wellness Retreat Detail 2" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>
                </section>

                {/* Journey 3: IMMERSION */}
                <section id="immersion" className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
                    {/* Visual Side */}
                    <div className="space-y-4 order-1 md:order-1">
                        <div className="h-[500px] bg-earth/10 relative overflow-hidden rounded-sm">
                            <img src="/images/home/Nature Immersions.webp" alt="Nature Immersion Main" className="w-full h-full object-cover" />
                            <div className="absolute bottom-4 left-4 text-xs uppercase tracking-widest text-white/90 drop-shadow-md">The Glacial Streams</div>
                        </div>
                        <div className="grid grid-cols-2 gap-4 h-48">
                            <div className="bg-earth/20 overflow-hidden rounded-sm">
                                <img src="/images/journeys/Nature Immersion Pic 2.webp" alt="Nature Immersion Detail 1" className="w-full h-full object-cover" />
                            </div>
                            <div className="bg-earth/30 overflow-hidden rounded-sm">
                                {/* Use Image 2 specifically */}
                                <img src="/images/journeys/Nature Immersion Pic 3.webp" alt="Nature Immersion Detail 2" className="w-full h-full object-cover" />
                            </div>
                        </div>
                    </div>

                    {/* Content Side */}
                    <div className="space-y-6 order-2 md:order-2 p-4 md:p-8 sticky top-24">
                        <h2 className="text-3xl font-serif text-ink">Nature Immersions</h2>
                        <div className="w-12 h-[1px] bg-earth/50" />
                        <p className="text-ink-soft leading-relaxed font-light">
                            Connect with the raw power of Baltistan. Glacier walks, cold plunges in
                            glacial streams, and nights spent under the Milky Way.
                        </p>
                        <ul className="space-y-2 text-sm text-ink-muted">
                            <li>· Guided treks in Thalle La</li>
                            <li>· Wild swimming in Katpana</li>
                            <li>· Star-gazing workshops</li>
                        </ul>

                        <ItineraryAccordion
                            title="Explorer's Day"
                            items={[
                                { time: "05:00 AM", activity: "Depart for Khosar Gang Base" },
                                { time: "12:00 PM", activity: "Picnic by the stream" },
                                { time: "03:00 PM", activity: "Cold Plunge" },
                                { time: "09:00 PM", activity: "Astronomy Session" }
                            ]}
                        />
                    </div>
                </section>

            </div>
        </div>
    );
}
