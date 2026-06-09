import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Digital Detox Retreat in Pakistan | Serenge Retreat Shigar",
  description: "Disconnect to reconnect. Plan a quiet digital detox retreat in Pakistan. Serenge Retreat offers a silent Karakoram sanctuary for mental clarity and rest.",
  keywords: ["digital detox pakistan", "quiet retreats pakistan", "nature escape northern pakistan", "mental clarity retreat"],
  openGraph: {
    title: "Digital Detox Retreat in Pakistan | Serenge Retreat Shigar",
    description: "An intentional space to unplug. Experience slow living, silent river beaches, and starlit skies in Shigar Valley.",
    url: "https://www.serengeretreatpakistan.com/digital-detox-pakistan",
  }
};

export default function DigitalDetoxPage() {
  const lastUpdated = "2026-05-26";

  const lodgingSchema = {
    "@context": "https://schema.org",
    "@type": "LodgingBusiness",
    "@id": "https://www.serengeretreatpakistan.com/#lodging",
    "name": "Serengé Retreat",
    "description": "An eco-conscious wellness sanctuary located beside the Shigar River in Alchori Village, Shigar Valley, Pakistan.",
    "url": "https://www.serengeretreatpakistan.com",
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
        "item": "https://www.serengeretreatpakistan.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Digital Detox Pakistan",
        "item": "https://www.serengeretreatpakistan.com/digital-detox-pakistan"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is a digital detox retreat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "A digital detox retreat is an intentional travel experience designed to help you disconnect from digital screens, constant email notifications, and social media feeds. The goal is to reduce cognitive overload, allow the nervous system to settle, and cultivate presence through nature immersion, silence, and mindfulness."
        }
      },
      {
        "@type": "Question",
        "name": "Is there internet access at Serenge Retreat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we have reliable internet access available in our central lodge building for guests who need to check in periodically or work remotely. However, we intentionally do not have Wi-Fi in the guest cabins, encouraging guests to unplug and rest in their private sanctuaries."
        }
      },
      {
        "@type": "Question",
        "name": "Can I work remotely from the retreat?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Serenge is ideal for deep creative focus, coding, or writing sprints. You can utilize our cozy, quiet indoor dining and library room which has charging outlets, comfortable seating, and hot tea services, letting you maintain deep work blocks without city distractions."
        }
      },
      {
        "@type": "Question",
        "name": "What activities help guests disconnect?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We offer a range of sensory, grounding activities: silent walks on the sandy river beach, custom breathwork sessions, stargazing without light pollution, reading printed books from our curated library, local sketching/painting, and nightly fireside conversations."
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
            <span>Wellness Retreats / Digital Detox</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight">
            Escape the Noise with a Digital Detox Retreat in Northern Pakistan
          </h1>
          <p className="text-xl text-ink-soft font-light leading-relaxed font-serif max-w-3xl">
            Serenge Retreat offers a peaceful digital detox experience in Shigar Valley, Gilgit-Baltistan, where travelers can disconnect from busy urban life and reconnect with nature, mountains, rivers, and quiet surroundings.
          </p>
        </header>

        {/* Ambient Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-stone/20 rounded-sm overflow-hidden shadow-xl">
          <Image
            src="/images/home/Wellness Retreat.webp"
            alt="Digital detox retreat in Northern Pakistan at Serenge Retreat"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Core Content Blocks */}
        <section className="space-y-12 text-ink-soft font-light text-base md:text-lg leading-relaxed">

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Why a Digital Detox Matters</h2>
            <p>
              In a world dominated by push notifications, endless scrolling, and instant messaging, our minds are under constant stimulation. This steady flow of digital alerts keeps our bodies in a mild state of fight-or-flight, leading to chronic stress, sleep disruption, and decreased focus.
            </p>
            <p>
              An intentional digital detox helps break these addictive dopamine loops. Taking a break from screens allows your brain to enter a state of deep rest. This pause helps restore cognitive clarity, lowers cortisol levels, improves sleep patterns, and builds a stronger connection to the present moment.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Why Shigar Valley is the Ultimate Detox Destination</h2>
            <p>
              A true digital detox requires a supportive physical setting. Shigar Valley is geographically insulated by the giant stone towers of the Karakoram.
            </p>
            <p>
              Here, the absolute lack of urban noise instantly lowers your heart rate. The local Balti culture is naturally slow-paced, friendly, and unhurried. Surrounded by apricot orchards and glacial rivers, the visual environment invites you to look outward rather than down at a screen.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Slow Living at Serenge Retreat</h2>
            <p>
              We provide several ways to help you gently ease into a quiet, screen-free routine:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>The Analog Library:</strong> Browse our collection of philosophy, literature, and nature writing, reading under the willow trees in our quiet garden.</li>
              <li><strong>Silent Rivershores:</strong> Walk bare-foot along the warm sand banks of the Shigar River, practicing grounding and sensory awareness.</li>
              <li><strong>Guided Reflection & Breathwork:</strong> Join our daily somatic workshops to help process thoughts and physically release stress.</li>
              <li><strong>Stargazing:</strong> Swap blue light screens for the bright night sky, watching the stars rise above the quiet peaks of Spantik.</li>
            </ul>
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
              <h3 className="font-serif text-lg text-ink font-medium">What is a digital detox retreat?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                A digital detox retreat is an intentional travel experience designed to help you disconnect from digital screens, constant email notifications, and social media feeds. The goal is to reduce cognitive overload, allow the nervous system to settle, and cultivate presence through nature immersion, silence, and mindfulness.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Is there internet access at Serenge Retreat?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, we have reliable internet access available in our central lodge building for guests who need to check in periodically or work remotely. However, we intentionally do not have Wi-Fi in the guest cabins, encouraging guests to unplug and rest in their private sanctuaries.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Can I work remotely from the retreat?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Absolutely. Serenge is ideal for deep creative focus, coding, or writing sprints. You can utilize our cozy, quiet indoor dining and library room which has charging outlets, comfortable seating, and hot tea services, letting you maintain deep work blocks without city distractions.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">What activities help guests disconnect?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                We offer a range of sensory, grounding activities: silent walks on the sandy river beach, custom breathwork sessions, stargazing without light pollution, reading printed books from our curated library, local sketching/painting, and nightly fireside conversations.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-white p-8 md:p-12 border border-earth/20 rounded-sm text-center space-y-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-earth">Unplug & Restore</p>
          <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Ready to Step Into the Silence?</h2>
          <p className="text-ink-soft max-w-xl mx-auto font-light text-sm">
            Give your mind the rest it deserves. Contact us to reserve your quiet mud cabin and experience slow mountain living in Northern Pakistan.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stay#booking-form"
              className="inline-block px-8 py-3 bg-earth text-white rounded-full text-xs uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-md"
            >
              Reserve Your Stay
            </Link>
            <Link
              href="/serenge-retreat-experience"
              className="inline-block px-8 py-3 bg-stone text-white rounded-full text-xs uppercase tracking-widest hover:bg-earth transition-colors duration-500 shadow-md"
            >
              Explore the Experience
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
