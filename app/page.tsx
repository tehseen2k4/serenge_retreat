"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const guestReviews = [
  {
    name: "Elena",
    date: "January 2025",
    source: "Airbnb",
    rating: 4,
    text: "The location is absolutely stunning- one of the most beautiful we've seen. We loved walking by the river, playing in the fields, and watching the sunsets. The staff were incredibly kind and did their best to make us feel at home. The food was delicious and clearly made with care.",
  },
  {
    name: "Ariz",
    date: "1 year ago",
    source: "Airbnb",
    rating: 5,
    text: "Loved our stay at The Serenge Retreat. Beautiful place in a peaceful location with lots of cute animals around. Super cosy everything you need for a comfortable stay, really friendly hosts that are more than happy to support all your needs. Great location for the Nature lover & Introvert person. Thoroughly enjoyed ourselves and perfect birthday treat for my partner.",
  },
  {
    name: "Tassil Ali",
    date: "April 2025",
    source: "Dubai",
    rating: 5,
    text: "Secluded spot. 30 minutes from Shigar. Pin drop silence perfect for self reflection. Highly recommended for solo travels. The hut will heal your nervous system. Axlam was very responsive and his brother Masud was a kind man.",
  },
  {
    name: "thisisgna",
    date: "May 2025",
    source: "Instagram",
    rating: 5,
    text: "If you are going to Skardu..you have to visit this place @serengeretreat it's become so close to my heart..it now feels like a second home. I'll be sharing more about it soon.. and the person behind it all @axlamshigri is truly one of the kindest souls.. he makes sure you are treated like family from the moment you arrive.",
  },
  {
    name: "Naveed",
    date: "July 2023",
    source: "Dubai",
    rating: 5,
    text: "The place is far away from the main Shigar area. It is an isolated basic hut where you could enjoy peace with scenes of the Indus River and mountains. Axlam is very friendly and accommodating.",
  },
  {
    name: "flywithomer",
    date: "August 2025",
    source: "Instagram",
    rating: 5,
    text: "Tea tastes better with this view.",
  }
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* SECTION 1: HERO */}
      <section className="relative h-screen min-h-[600px] flex items-center justify-center bg-stone/20 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/images/night retreat.png"
            alt="Serengé Retreat hero image showing the eco-conscious wellness sanctuary in Shigar Valley, Baltistan"
            fill
            className="object-cover opacity-96"
            priority
            quality={90}
          />
          <div className="absolute inset-0 bg-black/20" /> {/* Slight overlay */}
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto space-y-16">
          {/* <motion.h1
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            className="text-3xl md:text-6xl font-serif text-white tracking-tight uppercase leading-tight drop-shadow-lg"
          >
             <br /> <span className="italic text-earth-light">The Serenity in the heart of Shigar</span>
            <span className="sr-only"> | Serengé Retreat Shigar Valley</span>
          </motion.h1> */}
          {/* <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-4xl text-white/90 font-serif font-light tracking-[0.1em] drop-shadow-lg"
          >
            EXPERIENCE THE SERENITY  <br /> in the heart of Shigar
          </motion.p> */}
          <motion.p
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl text-white/90 font-serif font-light tracking-[0.21em] drop-shadow-lg"
          >
            EXPERIENCE THE SERENITY
          </motion.p>
          <p className="text-xs uppercase tracking-[0.3em] text-white/90">In the heart of Shigar</p>
          <div className="h-5" />

          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            transition={{ delay: 0.4 }}
            className="pt-8 flex flex-col md:flex-row gap-4 justify-center items-center"
          >
            <Link
              href="/stay#booking-form"
              className="inline-block px-6 py-3 bg-white/10 backdrop-blur-md border border-white/30 text-white rounded-full text-sm uppercase tracking-[0.01em] hover:bg-earth hover:text-white transition-all duration-500 shadow-xl"
            >
              Find Your Sanctuary
            </Link>
            {/* <Link
              href="/story"
              className="inline-block px-8 py-3 bg-white/10 backdrop-blur-md border border-white/30 rounded-full text-sm uppercase tracking-widest text-white hover:bg-white/20 transition-all duration-500"
            >
              Our Story
            </Link> */}
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
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <h3 className="text-sm uppercase tracking-[0.4em] text-earth">Echoes of Guests</h3>
            <h2 className="text-3xl md:text-5xl font-serif text-ink italic">Stories from the Sanctuary</h2>
          </div>

          {/* Mobile: Horizontal scroll snap carousel | Desktop: Masonry columns */}
          <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:columns-2 lg:columns-3 gap-6 space-x-6 md:space-x-0 space-y-0 md:space-y-6 pb-8 md:pb-0 scrollbar-hide px-6 md:px-0 -mx-6 md:mx-0">
            {guestReviews.map((review, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="w-[70vw] md:w-auto shrink-0 snap-center break-inside-avoid bg-white/60 p-8 rounded-sm border border-earth/10 hover:border-earth/30 transition-colors shadow-sm"
              >
                <div className="flex gap-1 mb-6">
                  {[...Array(review.rating)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4 text-earth">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <blockquote className="text-lg font-light text-ink leading-relaxed mb-6 italic whitespace-normal">
                  "{review.text}"
                </blockquote>
                <cite className="block not-italic border-t border-earth/10 pt-4">
                  <span className="block font-medium text-ink">{review.name}</span>
                  <span className="block text-ink-muted text-[10px] uppercase tracking-wider mt-1">
                    {review.source} • {review.date}
                  </span>
                </cite>
              </motion.div>
            ))}
          </div>
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
            href="/stay#book"
            className="inline-block px-12 py-4 bg-earth text-white text-sm uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-lg"
          >
            Start the Conversation
          </Link>
        </div>
      </section>

      {/* SECTION 6: DIGITAL ENHANCEMENTS LINK */}
      <section className="py-24 bg-canvas text-center space-y-6 px-6 border-t border-earth/10">
        <p className="text-xs uppercase tracking-[0.4em] text-earth">Digital Sanctuary</p>
        <h3 className="text-2xl md:text-3xl font-serif text-ink italic max-w-xl mx-auto">
          Interactive rituals crafted to connect your breath with the valley before you arrive.
        </h3>
        <div className="pt-6">
          <Link
            href="/enhancements"
            className="text-xs uppercase tracking-widest text-ink border-b border-ink/20 pb-1 hover:text-earth hover:border-earth transition-all"
          >
            Experience Soulful Enhancements →
          </Link>
        </div>
      </section>
    </div>
  );
}
