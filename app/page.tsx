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
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-60 pointer-events-none"
        >
          <source src="/videos/hero_placeholder.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-stone/20" /> {/* Slight overlay */}

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto space-y-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-4xl md:text-6xl font-serif text-ink tracking-tight leading-tight"
          >
            A threshold into <br /> <span className="italic text-earth">stillness</span>.
          </motion.h1>

          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-ink-soft font-light"
          >
            Return to yourself in the heart of the Karakoram.
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
              className="inline-block px-8 py-3 bg-paper/80 backdrop-blur-sm border border-ink/10 rounded-full text-sm uppercase tracking-widest text-ink hover:bg-white hover:border-earth/50 transition-all duration-500"
            >
              Begin Your Journey
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.5: FOUNDER'S NOTE - "THE INVITATION" */}
      <section className="py-20 px-6 max-w-2xl mx-auto text-center space-y-6">
        <div className="w-px h-12 bg-earth/30 mx-auto" />
        <p className="text-ink-soft font-light text-lg italic leading-relaxed">
          "The mountains do not ask for your attention. They simply wait.
          And in that waiting, you find the part of yourself that has been lost in the noise."
        </p>
        <div className="pt-4 font-serif text-ink text-xl">
          — Tehseen, Founder
        </div>
        <div className="w-px h-12 bg-earth/30 mx-auto" />
      </section>

      {/* SECTION 2: THE CALL (Poetic Intro) */}
      <section className="py-24 md:py-32 px-6 md:px-12 bg-canvas">
        <div className="max-w-3xl mx-auto text-center space-y-8">
          <p className="text-sm uppercase tracking-widest text-earth">The Philosophy</p>
          <h2 className="text-2xl md:text-3xl font-serif text-ink leading-relaxed">
            We do not offer vacations. We offer <span className="italic">returns</span>.
            <br />
            To the land, to silence, and to your own center.
          </h2>
          <p className="text-ink-soft font-light leading-relaxed max-w-2xl mx-auto">
            Serengé is not a hotel. It is a sanctuary built from the earth of Shigar.
            Here, time slows down. The noise of the world fades into the sound of the wind
            and the river. Come to breathe again.
          </p>
        </div>
      </section>

      {/* SECTION 3: PATHWAYS */}
      <section className="py-20 px-6 md:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/journeys#soul" className="group block space-y-4">
              <div className="h-96 w-full bg-stone/20 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out overflow-hidden relative">
                <div className="absolute inset-0 bg-stone/10" />
                {/* Image would go here */}
              </div>
              <h3 className="text-xl font-serif text-ink group-hover:text-earth transition-colors">Soul Journeys</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Guided introspection, silence, and deep rest. For those seeking clarity.
              </p>
            </Link>

            {/* Card 2 */}
            <Link href="/journeys#wellness" className="group block space-y-4">
              <div className="h-96 w-full bg-sand/30 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out overflow-hidden relative">
                <div className="absolute inset-0 bg-sand/10" />
              </div>
              <h3 className="text-xl font-serif text-ink group-hover:text-earth transition-colors">Wellness Retreats</h3>
              <p className="text-sm text-ink-muted leading-relaxed">
                Breathwork, yoga, and somatic healing led by expert practitioners.
              </p>
            </Link>

            {/* Card 3 */}
            <Link href="/journeys#immersion" className="group block space-y-4">
              <div className="h-96 w-full bg-earth/20 grayscale group-hover:grayscale-0 transition-all duration-700 ease-out overflow-hidden relative">
                <div className="absolute inset-0 bg-earth/10" />
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
