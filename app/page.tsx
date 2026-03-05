"use client";

import Link from "next/link";
import Image from "next/image";
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
          <Image
            src="/images/night retreat.PNG"
            alt="Serengé Retreat hero image showing the eco-conscious wellness sanctuary in Shigar Valley, Baltistan"
            fill
            className="object-cover opacity-95"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay */}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-6">
          <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl md:text-6xl font-serif text-white tracking-tight uppercase leading-tight drop-shadow-lg"
          >
            Experience The Serenity <br /> <span className="italic text-earth-light">In The Heart Of Shigar</span>
            <span className="sr-only"> | Serengé Retreat Shigar Valley</span>
          </motion.h1>

          {/* <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-white/90 font-light tracking-[0.1em] drop-shadow-md"
          >
            Experience serenity in the heart of Shigar.
          </motion.p> */}

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/stay#booking-form"
              className="inline-block px-8 py-3 bg-white text-ink rounded-full text-sm uppercase tracking-widest hover:bg-earth hover:text-white transition-all duration-500 shadow-xl"
            >
              Find Your Sanctuary
            </Link>
            <Link
              href="/story"
              className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-sm uppercase tracking-widest text-white hover:bg-white/20 transition-all duration-500"
            >
              Our Story
            </Link>
          </motion.div>
        </div>
      </section>

      {/* SECTION 1.5: THE MEANING (NEW) */}
      <section className="py-24 px-6 max-w-3xl mx-auto text-center space-y-12">
        <div className="space-y-4">
          <p className="text-xs uppercase tracking-[0.3em] text-earth">The Philosophy</p>
          <h2 className="text-3xl md:text-4xl font-serif text-ink">The Meaning of Serengé</h2>
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

      {/* SECTION 2: THE STORY PREVIEW (NEW) */}
      <section className="py-24 px-6 md:px-12 bg-canvas">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="relative aspect-[4/5] bg-stone/20 rounded-sm overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/story/Aslam.webp"
              alt="Aslam Shigri's journey from K2 Trail to Serengé Retreat"
              fill
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}
            className="space-y-8"
          >
            <div className="space-y-4">
              <p className="text-sm uppercase tracking-widest text-earth">Our Heritage</p>
              <h2 className="text-4xl md:text-5xl font-serif text-ink italic leading-tight">
                From the K2 Trail <br /> to the River House.
              </h2>
            </div>
            <p className="text-ink-soft font-light text-lg leading-relaxed">
              Before Serengé was a sanctuary, it was a dream born on the glaciers of the Karakoram.
              Founder Aslam Shigri spent years as a porter on the K2 Base Camp route,
              learning that while the climb requires strength, the soul requires stillness.
            </p>
            <div className="pt-4">
              <Link href="/story" className="text-xs uppercase tracking-[0.3em] text-earth border-b border-earth/20 pb-1 hover:text-ink hover:border-ink transition-all">
                The Heritage Story →
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* SECTION 2.5: MISSION (REFINED) */}
      <section className="py-24 bg-paper/50">
        <div className="max-w-4xl mx-auto text-center px-6 space-y-12">
          <div className="space-y-4">
            <p className="text-xs uppercase tracking-widest text-earth">The Mission</p>
            <h2 className="text-2xl md:text-4xl font-serif text-ink leading-relaxed">
              Eco-Conscious Wellness & <span className="italic">Meaningful Connection</span> in Baltistan
            </h2>
          </div>
          <p className="text-ink-soft font-light text-lg leading-relaxed max-w-2xl mx-auto italic">
            "A sanctuary where the rhythm of the valley dictates the day,
            allowing you to rediscover the peace that exists in the heart of mountain silence."
          </p>
        </div>
      </section>

      {/* SECTION 3: PATHWAYS */}
      <section className="py-20 px-6 md:px-12 bg-paper">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16 space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-earth">Your Path</p>
            <h2 className="text-3xl md:text-5xl font-serif text-ink italic">Choose Your Journey</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <Link href="/journeys#soul" className="group block space-y-4">
              <div className="h-96 w-full bg-stone/20 overflow-hidden relative rounded-sm">
                <Image
                  src="/images/home/Soul Journeys.webp"
                  alt="Soul Journeys - Guided introspection and silence at Serengé Retreat"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
                <Image
                  src="/images/home/Wellness Retreat.webp"
                  alt="Wellness Retreats - Breathwork and yoga in the Karakoram mountains"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
                <Image
                  src="/images/home/Nature Immersions.webp"
                  alt="Nature Immersions - Glacier walks and star-gazing in Shigar Valley"
                  fill
                  className="object-cover transform group-hover:scale-105 transition-transform duration-1000"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
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
      <section className="py-32 bg-paper text-center space-y-8 px-6 border-t border-earth/5">
        <h3 className="text-3xl md:text-5xl font-serif text-ink italic">Ready to step into the silence?</h3>
        <p className="text-ink-soft font-light max-w-xl mx-auto">
          We prefer human connection over automated systems.
          Message us to begin planning your stay at Serengé.
        </p>
        <div className="pt-6">
          <Link
            href="/stay#booking-form"
            className="inline-block px-12 py-4 bg-earth text-white text-sm uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-lg"
          >
            Start the Conversation
          </Link>
        </div>
      </section>
    </div>
  );
}
