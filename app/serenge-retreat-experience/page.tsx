import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "The Serenge Retreat Experience | Nature, Mountains & Riverside Living",
  description: "Immerse yourself in the Serenge Retreat stay experience in Shigar Valley. A daily rhythm of somatic breathwork, mountain silence, and fireside Balti culture.",
  keywords: ["serenge retreat experience", "stay experience shigar valley", "eco lodge experience pakistan", "baltistan slow living"],
  openGraph: {
    title: "The Serenge Retreat Experience | Nature, Mountains & Riverside Living",
    description: "Experience the sacred silence, local Balti cuisine, and riverside stargazing at Serenge Retreat in Gilgit-Baltistan.",
    url: "https://serengeretreat.com/serenge-retreat-experience",
  }
};

export default function ExperiencePage() {
  const lastUpdated = "2026-05-26";

  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://serengeretreat.com/#lodging",
    "name": "Serengé Retreat",
    "description": "An eco-conscious wellness sanctuary located beside the Shigar River in Alchori Village, Shigar Valley, Pakistan.",
    "url": "https://serengeretreat.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Alchori Village",
      "addressLocality": "Shigar Valley",
      "addressRegion": "Gilgit-Baltistan",
      "addressCountry": "PK"
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://serengeretreat.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Serenge Retreat Experience",
        "item": "https://serengeretreat.com/serenge-retreat-experience"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is included in the Serenge Retreat experience?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The experience includes boutique eco-conscious lodging, freshly prepared traditional organic Balti and Pakistani farm-to-table meals, daily guided somatic wellness breathwork, unlimited herbal local teas, access to private river beach paths, and participation in evening community bonfires."
        }
      },
      {
        "@type": "Question",
        "name": "Is the retreat suitable for long stays?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Serenge Retreat is specifically designed for slow travel and long stays. Many creative professionals, writers, and individuals seeking deep mental resets stay for 1 to 4 weeks to benefit from the absolute silence, mountain walks, and inspiring environment."
        }
      },
      {
        "@type": "Question",
        "name": "Can international tourists stay here?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Pakistan's northern region of Gilgit-Baltistan, particularly Shigar, is globally recognized as one of the safest and most hospitable tourism regions in the world. We offer comprehensive assistance with airport transfers, local guides, and permit registration for global explorers."
        }
      },
      {
        "@type": "Question",
        "name": "Is Serenge Retreat good for remote workers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we combine low-impact nature living with the modern tools needed for creative focus, including a cozy heated workspace and reliable network connectivity, allowing remote workers to work with direct views of the Karakoram glaciers."
        }
      }
    ]
  };

  return (
    <div className="bg-canvas min-h-screen pt-12 pb-20 px-6 md:px-12">
      <StructuredData data={lodgingSchema} />
      <StructuredData data={breadcrumbSchema} />
      <StructuredData data={faqSchema} />

      <article className="max-w-4xl mx-auto space-y-16">
        {/* Header Section */}
        <header className="space-y-6 text-center md:text-left border-b border-earth/10 pb-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs uppercase tracking-widest text-ink-muted">
            <span>Our Philosophy / Retreat Experience</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight">
            The Serenge Retreat Experience
          </h1>
          <p className="text-xl text-ink-soft font-light leading-relaxed font-serif max-w-3xl">
            Serenge Retreat was created as a peaceful escape in Shigar Valley for travelers looking to reconnect with nature, mountains, and slower living. The experience combines riverside accommodation, mountain scenery, local culture, and quiet outdoor moments in one of the most beautiful regions of Northern Pakistan.
          </p>
        </header>

        {/* Ambient Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-stone/20 rounded-sm overflow-hidden shadow-xl">
          <Image
            src="/images/home/Soul Journeys.webp"
            alt="The Serenge Retreat stay experience showing slow mountain living in Gilgit-Baltistan"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Core Content Blocks */}
        <section className="space-y-12 text-ink-soft font-light text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">The Morning Experience</h2>
            <p>
              Your day begins before the sun clears the high Karakoram peaks. As the light first touches the sub-zero summits, the valley floor remains in a quiet, cool shade. A light mist rises from the glacial waters of the Shigar River.
            </p>
            <p>
              In this quiet space, we host a voluntary guided morning breathwork and somatic yoga session to align your energy. This is followed by an outdoor, farm-fresh breakfast featuring fresh organic local eggs, apricot jams, hand-milled wheat bread, and hot Balti herbal mountain tea.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Daytime Activities & Exploration</h2>
            <p>
              At Serenge, there is no rushed itinerary. We encourage you to let the day unfold naturally:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Local Village Walk:</strong> Take a quiet walk through Alchori Village, meeting our friendly neighbors and learning about traditional dry-stone irrigation farming.</li>
              <li><strong>Mountain Trekking:</strong> Go on a day hike up the lower slopes of Khosar Gang mountain to experience dramatic panoramas of the Shigar Valley.</li>
              <li><strong>History & Culture:</strong> Spend an afternoon touring the historic wood-carved mosques and the majestic 17th-century Shigar Fort just a short drive away.</li>
              <li><strong>Glacier Walks:</strong> Embark on guided day-trips deeper into Baltistan's wilderness.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">The Evening Atmosphere</h2>
            <p>
              As twilight paints the Karakoram walls in deep orange and violet, the air turns crisp. We gather around a large stone bonfire pit, sharing hot local meals, enjoying acoustic Balti folk music, and discussing stories of high-altitude guide adventures.
            </p>
            <p>
              Under one of the darkest night skies in Pakistan, the stars are incredibly bright. Stargazing becomes an effortless nightly ritual of awe and silence.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Intentionally Structured for Digital Detox</h2>
            <p>
              Our retreat is a slow sanctuary. We invite you to experience a gentle digital detox—placing your phone in our safe box, reading books from our collection, writing in journals, and engaging in deep, unhurried conversations with other travelers. By reducing screen-time, you invite the quietness of the mountains to fill your mind.
            </p>
          </div>

        </section>

        {/* FAQ Section */}
        <section className="space-y-8 border-t border-earth/10 pt-12">
          <div className="text-center md:text-left">
            <p className="text-xs uppercase tracking-widest text-earth">Q&A</p>
            <h2 className="text-3xl font-serif text-ink italic">FAQs</h2>
          </div>

          <div className="grid gap-6">
            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">What is included in the Serenge Retreat experience?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                The experience includes boutique eco-conscious lodging, freshly prepared traditional organic Balti and Pakistani farm-to-table meals, daily guided somatic wellness breathwork, unlimited herbal local teas, access to private river beach paths, and participation in evening community bonfires.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Is the retreat suitable for long stays?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, Serenge Retreat is specifically designed for slow travel and long stays. Many creative professionals, writers, and individuals seeking deep mental resets stay for 1 to 4 weeks to benefit from the absolute silence, mountain walks, and inspiring environment.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Can international tourists stay here?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Absolutely. Pakistan's northern region of Gilgit-Baltistan, particularly Shigar, is globally recognized as one of the safest and most hospitable tourism regions in the world. We offer comprehensive assistance with airport transfers, local guides, and permit registration for global explorers.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Is Serenge Retreat good for remote workers?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, we combine low-impact nature living with the modern tools needed for creative focus, including a cozy heated workspace and reliable network connectivity, allowing remote workers to work with direct views of the Karakoram glaciers.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-white p-8 md:p-12 border border-earth/20 rounded-sm text-center space-y-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-earth">Sensory Awakening</p>
          <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Step Into the Mountain Rhythm</h2>
          <p className="text-ink-soft max-w-xl mx-auto font-light text-sm">
            Ready to disconnect from stress and reconnect with yourself? Contact our team to begin planning your custom journey to Serengé.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stay#booking-form"
              className="inline-block px-8 py-3 bg-earth text-white rounded-full text-xs uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-md"
            >
              Begin Your Journey
            </Link>
            <Link
              href="/best-riverside-stays-skardu"
              className="inline-block px-8 py-3 bg-stone text-white rounded-full text-xs uppercase tracking-widest hover:bg-earth transition-colors duration-500 shadow-md"
            >
              View Riverside Stays
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
