"use client";

import Link from "next/link";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-stone/20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/images/home/Serenge Retreat Hero.jpg"
            alt="Serenge Retreat Hero"
            className="w-full h-full object-cover opacity-90"
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay */}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-7xl font-serif text-white tracking-tight uppercase leading-tight drop-shadow-lg"
          >
            Where Peace Meets <br /> <span className="italic text-earth-light">The Mountains</span>.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light tracking-[0.1em] drop-shadow-md"
          >
            Experience serenity in the heart of Shigar.
          </motion.p>

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="pt-8"
          >
            <Link
              href="/journeys"
              className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-sm uppercase tracking-widest text-white hover:bg-white hover:text-ink transition-all duration-500"
            >
              Begin Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.5: THE MEANING (NEW) */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-earth">The Name</p>
          <h2 className="text-3xl md:text-4xl font-serif text-ink">Serengé</h2>
          <p className="text-ink-soft font-light text-sm tracking-widest uppercase italic">/se-ren-ge/</p>
        </div>

        <div className="space-y-8 text-ink-soft font-light leading-relaxed">
          <p className="text-lg md:text-xl">
            Inspired by the Tibetan word <span className="text-ink font-serif italic">Tsering</span>, meaning "Long Life."
            In the high valleys of Baltistan, it is a word of blessing, often heard in the greeting
            <span className="text-earth italic"> Tashi Serengé</span> — An auspicious long life.
          </p>
          <div className="w-12 h-px bg-earth/20 mx-auto" />
          <p className="max-w-xl mx-auto text-sm text-ink-muted italic">
            "A name that echoes through the men and women of the mountains,
            carrying the weight of a century-old prayer for peace and vitality."
          </p>
        </div>
      </section>

      {/* SECTION 2: THE CALL (Poetic Intro & Mission) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-canvas">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-4">
            <p className="text-sm uppercase tracking-widest text-earth">Our Mission</p>
            <h2 className="text-2xl md:text-4xl font-serif text-ink leading-relaxed">
              To offer not just a stay — but a sense of belonging,
              calm, and <span className="italic">meaningful connection</span>.
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 text-left pt-12 border-t border-earth/10">
            <p className="text-ink-soft font-light leading-relaxed">
              Serenge Retreat is an eco-conscious space where travelers can reconnect with nature,
              experience authentic village life, and feel the warmth of Balti hospitality.
            </p>
            <p className="text-ink-soft font-light leading-relaxed">
              We aim to create a sanctuary where the rhythm of the valley dictates the day,
              allowing you to rediscover the peace that exists in the heart of the mountains.
            </p>
          </div>
          <div className="pt-8 text-center md:text-left">
            <p className="font-serif italic text-xl text-ink">— Aslam Shigri</p>
            <p className="text-[10px] uppercase tracking-widest text-ink-muted mt-1">Founder & High-Altitude Guide</p>
          </div>
        </div>
      </section>

      {/* SECTION 3: PATHWAYS */}
      <section className="py-20 px-6 md:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/journeys#soul" className="group block space-y-4">
              <div className="h-96 w-full bg-stone/20 overflow-hidden relative rounded-sm">
                <img src="/images/home/Soul Journeys.webp" alt="Soul Journeys" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-stone/10 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-xl font-serif text-ink group-hover:text-earth transition-colors">Soul Journeys</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Guided introspection, silence, and deep rest. For those seeking clarity.
              </p>
            </Link>

            {/* Card 2 */}
            <Link href="/journeys#wellness" className="group block space-y-4">
              <div className="h-96 w-full bg-sand/30 transition-all duration-700 ease-out overflow-hidden relative rounded-sm">
                <img src="/images/home/Wellness Retreat.webp" alt="Wellness Retreats" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-sand/10 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-xl font-serif text-ink group-hover:text-earth transition-colors">Wellness Retreats</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Breathwork, yoga, and somatic healing led by expert practitioners.
              </p>
            </Link>

            {/* Card 3 */}
            <Link href="/journeys#immersion" className="group block space-y-4">
              <div className="h-96 w-full bg-earth/20 transition-all duration-700 ease-out overflow-hidden relative rounded-sm">
                <img src="/images/home/Nature Immersions.webp" alt="Nature Immersions" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000" />
                <div className="absolute inset-0 bg-earth/10 group-hover:bg-transparent transition-colors" />
              </div>
              <h3 className="text-xl font-serif text-ink group-hover:text-earth transition-colors">Nature Immersions</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Walks on the glacier, star-gazing, and connection with the ancient land.
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 bg-canvas">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <h3 className="text-sm uppercase tracking-widest text-ink-muted">Echoes of Guests</h3>
          <blockquote className="text-xl md:text-2xl font-light italic text-ink leading-relaxed">
            "I came here to escape the world, but I found something better. I found a way to be in it without being consumed by it. Serengé is not a place, it is a state of mind."
          </blockquote>
          <cite className="block not-italic text-sm text-earth tracking-wide space-y-1">
            <span className="block font-medium">Sarah Jenkins</span>
            <span className="block text-ink-muted text-xs">London, UK</span>
          </cite>
        </div>
      </section>

      {/* SECTION 5: FINAL CTA */}
      <section className="py-20 bg-paper text-center">
        <Link
          href="/book"
          className="inline-block px-12 py-4 bg-ink text-canvas text-sm uppercase tracking-widest hover:bg-earth transition-colors duration-500"
        >
          Start Your Conversation
        </Link>
      </section>
    </div>
  );
}
