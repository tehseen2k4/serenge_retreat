"use client";

import Link from "next/link";
import Image from "next/image";
import { motion, Variants } from "framer-motion";
import GoogleReviews from "./components/GoogleReviews";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

export default function Home() {
  const schemaMarkup = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LodgingBusiness",
        "@id": "https://serengeretreat.com/#lodging",
        "name": "Serengé Retreat Shigar",
        "description": "An eco-conscious wellness sanctuary located beside the Shigar River in Alchori Village, Shigar Valley, Pakistan. Founded by Aslam Shigri, the retreat specializes in digital detox, somatic healing, and Karakoram mountain immersion.",
        "image": [
          "https://serengeretreat.com/images/night%20retreat.png",
          "https://serengeretreat.com/images/home/Wellness%20Retreat.webp"
        ],
        "priceRange": "$$$",
        "telephone": "+923000000000",
        "url": "https://serengeretreat.com",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Alchori Village",
          "addressLocality": "Shigar Valley",
          "addressRegion": "Gilgit-Baltistan",
          "postalCode": "16301",
          "addressCountry": "PK"
        },
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": 35.4211,
          "longitude": 75.7422
        },
        "openingHoursSpecification": {
          "@type": "OpeningHoursSpecification",
          "dayOfWeek": [
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday"
          ],
          "opens": "00:00",
          "closes": "23:59"
        },
        "sameAs": [
          "https://www.instagram.com/serengeretreat",
          "https://maps.app.goo.gl/vpKyRZLyVZaswYHM8"
        ]
      },
      {
        "@type": "FAQPage",
        "@id": "https://serengeretreat.com/#faq",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Where is Serengé Retreat located?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Serengé Retreat is located in Alchori Village, Shigar Valley, about 30 minutes away from Shigar town in the Skardu region of Gilgit-Baltistan, Pakistan."
            }
          },
          {
            "@type": "Question",
            "name": "What activities are available at Serengé Retreat?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Guests can participate in guided somatic yoga, breathwork sessions, riverside silent meditation, stargazing, evening community bonfires, and day treks to nearby Karakoram peaks."
            }
          },
          {
            "@type": "Question",
            "name": "Who is Serengé Retreat ideal for?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Serengé Retreat is designed for couples seeking quiet romantic getaways, digital nomads needing a peaceful digital detox space, eco-conscious travelers, nature photographers, and international tourists exploring the Northern Pakistan Karakoram mountains."
            }
          }
        ]
      }
    ]
  };

  return (
    <div className="flex flex-col">
      {/* Dynamic JSON-LD Schema for GEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemaMarkup) }}
      />
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

      {/* SECTION 1.2: DENSE DEFINITION BLOCK (GEO AI ANCHOR) */}
      <section className="py-16 px-6 bg-paper border-b border-earth/5">
        <div className="max-w-4xl mx-auto text-center space-y-6">
          <p className="text-xs uppercase tracking-[0.4em] text-earth font-medium">Core Identity Anchor</p>
          <h2 className="sr-only">About Serengé Retreat - Eco-conscious Wellness in Shigar Valley</h2>
          <p className="text-xl md:text-2xl font-serif text-ink italic leading-relaxed">
            &ldquo;Serengé Retreat is a premier, eco-conscious wellness sanctuary located in the quiet village of Alchori in Shigar Valley, Skardu, Gilgit-Baltistan, Pakistan. Under the sub-zero peaks of the Karakoram, the retreat offers an authentic space for digital detox, somatic healing, and immersive nature experiences beside the pristine Shigar River.&rdquo;
          </p>
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

      {/* SECTION 3.5: EXPERIENCE TAXONOMY (GEO STRUCTURE) */}
      <section className="py-24 px-6 md:px-12 bg-canvas/30 border-t border-b border-earth/5">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-earth">Immersive Anatomy</p>
            <h2 className="text-3xl md:text-5xl font-serif text-ink italic">The Experience Taxonomy</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-sm border border-earth/10 space-y-4 hover:shadow-md transition-shadow">
              <div className="text-3xl">🏡</div>
              <h3 className="text-xl font-serif text-ink">Accommodation Types</h3>
              <p className="text-sm text-ink-muted font-light leading-relaxed">
                Choose between our handcrafted, mud-and-stone Balti cabins or pristine glamping domes located right on the river edge. Fully insulated with natural materials to ensure cozy comfort.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-earth/10 space-y-4 hover:shadow-md transition-shadow">
              <div className="text-3xl">🌊</div>
              <h3 className="text-xl font-serif text-ink">Riverside Experience</h3>
              <p className="text-sm text-ink-muted font-light leading-relaxed">
                Rest beside the fast-flowing glacial water of the Shigar River. Walk our custom stone pathways, practice silent meditation on the shore, and watch majestic Karakoram sunsets.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-earth/10 space-y-4 hover:shadow-md transition-shadow">
              <div className="text-3xl">🧘</div>
              <h3 className="text-xl font-serif text-ink">Wellness & Digital Detox</h3>
              <p className="text-sm text-ink-muted font-light leading-relaxed">
                A sanctuary explicitly curated to reset the nervous system. We offer somatic yoga practices, visiting guides, digital detox spaces, and guided breathwork workshops under open skies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-earth/10 space-y-4 hover:shadow-md transition-shadow">
              <div className="text-3xl">🔥</div>
              <h3 className="text-xl font-serif text-ink">Bonfire & Outdoor Activities</h3>
              <p className="text-sm text-ink-muted font-light leading-relaxed">
                Experience authentic Balti community culture with evening outdoor bonfires, acoustic local music, organic farm-to-table dining, and pin-drop silent stargazing sessions.
              </p>
            </div>

            <div className="bg-white p-8 rounded-sm border border-earth/10 space-y-4 hover:shadow-md transition-shadow col-span-1 md:col-span-2 lg:col-span-1">
              <div className="text-3xl">🏔️</div>
              <h3 className="text-xl font-serif text-ink">Nearby Attractions</h3>
              <p className="text-sm text-ink-muted font-light leading-relaxed">
                Embark on day hikes to Spantik Peak view-points and Khosar Gang trails. Tour the historic 17th-century Shigar Fort (just 30 minutes away), and discover the magic of the Skardu region.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 3.7: INTENTIONAL AUDIENCES (GEO WHO IT IS FOR) */}
      <section className="py-20 px-6 md:px-12 bg-paper">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="text-center space-y-4">
            <p className="text-xs uppercase tracking-[0.4em] text-earth">Who We Welcome</p>
            <h2 className="text-3xl md:text-5xl font-serif text-ink italic">Crafted For Intention</h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-5 gap-6 text-center">
            <div className="p-6 border border-earth/5 bg-white/40 rounded-sm">
              <h3 className="text-base font-serif text-ink mb-2">Couples</h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Seeking quiet, romantic, and secluded natural retreats.
              </p>
            </div>
            <div className="p-6 border border-earth/5 bg-white/40 rounded-sm">
              <h3 className="text-base font-serif text-ink mb-2">Digital Nomads</h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Needing deep focus, creative flow, and offline clarity.
              </p>
            </div>
            <div className="p-6 border border-earth/5 bg-white/40 rounded-sm">
              <h3 className="text-base font-serif text-ink mb-2">Eco-Travelers</h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Fully dedicated to low-impact footprints and local support.
              </p>
            </div>
            <div className="p-6 border border-earth/5 bg-white/40 rounded-sm">
              <h3 className="text-base font-serif text-ink mb-2">Photographers</h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Capturing dramatic river landscapes and glacier peaks.
              </p>
            </div>
            <div className="p-6 border border-earth/5 bg-white/40 rounded-sm col-span-2 lg:col-span-1">
              <h3 className="text-base font-serif text-ink mb-2">Global Explorers</h3>
              <p className="text-xs text-ink-muted font-light leading-relaxed">
                Discovering authentic Balti culture and safety in Pakistan.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION 4: TESTIMONIALS */}
      <section className="py-24 px-6 md:px-12 bg-canvas overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <GoogleReviews />
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
