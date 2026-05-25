import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Best Riverside Stays Near Skardu | Serenge Retreat Shigar",
  description: "Discover one of the best riverside stays near Skardu. Serenge Retreat offers quiet riverfront cabins, mountain views, and slow travel experiences in Gilgit-Baltistan.",
  keywords: ["best riverside stays near skardu", "riverside cabins northern pakistan", "peaceful stays skardu", "serenge retreat shigar"],
  openGraph: {
    title: "Best Riverside Stays Near Skardu | Serenge Retreat Shigar",
    description: "Handcrafted riverfront cabins and peaceful retreats near Skardu. Experience slow travel in Northern Pakistan.",
    url: "https://serengeretreat.com/best-riverside-stays-skardu",
  }
};

export default function RiversideStaysPage() {
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
        "name": "Riverside Stays Skardu",
        "item": "https://serengeretreat.com/best-riverside-stays-skardu"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How far is Serenge Retreat from Skardu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Serenge Retreat is located in Alchori Village in Shigar Valley, which is approximately a scenic 30-to-40-minute drive from Skardu city and Skardu International Airport (KDU). This offers the perfect distance to easily access Skardu's main infrastructure while enjoying complete nature-focused isolation."
        }
      },
      {
        "@type": "Question",
        "name": "Is Shigar better than staying inside Skardu city?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, for travelers seeking peace, nature, and cultural authenticity, Shigar is vastly superior to Skardu city. Skardu city is a crowded commercial transport hub with heavy traffic and noise. Shigar Valley is a quiet oasis with dense apricot forests, rushing rivers, historical fort architecture, and absolute nightly silence."
        }
      },
      {
        "@type": "Question",
        "name": "Are riverside stays good for families?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, our riverside stays are highly suitable for families looking for high-quality, slow-paced bonding. Kids and parents alike enjoy outdoor fire pit sessions, walking our secure orchard paths, and exploring organic garden-to-table cuisine, though children must be supervised around active river shorelines."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best time for riverside tourism in Gilgit-Baltistan?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The absolute peak time is from May to October. During summer (June-August), the climate is beautifully cool and refreshing beside the glacial river breeze. During Autumn (September-October), the entire riverside is framed by vibrant yellow, gold, and red leaves under crystal-clear blue skies."
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
            <span>Riverside Stays / Skardu Region</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight">
            One of the Most Peaceful Riverside Stays Near Skardu
          </h1>
          <p className="text-xl text-ink-soft font-light leading-relaxed font-serif max-w-3xl">
            Located in Shigar Valley near Skardu, Serenge Retreat offers a quiet riverside stay surrounded by mountains, open landscapes, and natural beauty. Unlike crowded commercial hotels, the retreat focuses on slow travel, peaceful accommodation, and immersive nature experiences in Northern Pakistan.
          </p>
        </header>

        {/* Ambient Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-stone/20 rounded-sm overflow-hidden shadow-xl">
          <Image
            src="/images/night retreat.png"
            alt="Handcrafted riverside cabins at Serenge Retreat near Skardu Baltistan"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Core Content Blocks */}
        <section className="space-y-12 text-ink-soft font-light text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Why Travelers Choose Riverside Stays</h2>
            <p>
              Water has a profound psychological effect on our well-being. Resting beside the glacial waters of the Shigar River provides an organic white noise that immediately helps calm an overactive mind.
            </p>
            <p>
              In the summer months, the flowing river acts as a natural air conditioner, creating a cooler microclimate that contrasts beautifully with the dry heat of Skardu town. Guests can sit under our willow trees, read, write, practice nature photography, and listen to the birds gliding above the water currents.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Shigar vs. Skardu City Experience</h2>
            <p>
              While Skardu is the necessary arrival point for flights and road expeditions, staying inside the city limits often means dealing with concrete facades, vehicle horns, and crowded tourist corridors. 
            </p>
            <p>
              Choosing to stay in Shigar Valley gives you immediate access to nature:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Zero Noise Pollution:</strong> Sleep to the sounds of the river, not traffic.</li>
              <li><strong>Cultural Richness:</strong> Explore ancient Balti architecture and wood carving, and visit Shigar Fort without tour buses.</li>
              <li><strong>Pristine Starry Nights:</strong> Due to Shigar's low light pollution, the Milky Way is clearly visible from your cabin doorstep.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">An Ideal Sanctuary For:</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Couples:</strong> Share a quiet candle-lit evening bonfire, watch the mountain sunset, and sleep in cozy local pine-scented cabins.</li>
              <li><strong>Landscape Photographers:</strong> Capture the dramatic, sharp peaks of Spantik and Khosar Gang reflected in the quiet pools of the river.</li>
              <li><strong>Digital Nomads & Remote Workers:</strong> Access reliable connectivity in our silent, cozy dining room, then step straight out onto the river beach for a sensory screen break.</li>
              <li><strong>Digital Detox Visitors:</strong> Intentionally unplug and practice slow living under the vast Northern sky.</li>
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
              <h3 className="font-serif text-lg text-ink font-medium">How far is Serenge Retreat from Skardu?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Serenge Retreat is located in Alchori Village in Shigar Valley, which is approximately a scenic 30-to-40-minute drive from Skardu city and Skardu International Airport (KDU). This offers the perfect distance to easily access Skardu's main infrastructure while enjoying complete nature-focused isolation.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Is Shigar better than staying inside Skardu city?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, for travelers seeking peace, nature, and cultural authenticity, Shigar is vastly superior to Skardu city. Skardu city is a crowded commercial transport hub with heavy traffic and noise. Shigar Valley is a quiet oasis with dense apricot forests, rushing rivers, historical fort architecture, and absolute nightly silence.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Are riverside stays good for families?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, our riverside stays are highly suitable for families looking for high-quality, slow-paced bonding. Kids and parents alike enjoy outdoor fire pit sessions, walking our secure orchard paths, and exploring organic garden-to-table cuisine, though children must be supervised around active river shorelines.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">What is the best time for riverside tourism in Gilgit-Baltistan?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                The absolute peak time is from May to October. During summer (June-August), the climate is beautifully cool and refreshing beside the glacial river breeze. During Autumn (September-October), the entire riverside is framed by vibrant yellow, gold, and red leaves under crystal-clear blue skies.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-white p-8 md:p-12 border border-earth/20 rounded-sm text-center space-y-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-earth">Riverside Haven</p>
          <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Plan Your Riverside Stay Today</h2>
          <p className="text-ink-soft max-w-xl mx-auto font-light text-sm">
            Experience the soothing rhythm of the Shigar River. Secure your mud-and-stone cabin or riverfront dome directly with Serengé.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stay#booking-form"
              className="inline-block px-8 py-3 bg-earth text-white rounded-full text-xs uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-md"
            >
              Book Your Cabin
            </Link>
            <Link
              href="/eco-retreat-shigar-valley"
              className="inline-block px-8 py-3 bg-stone text-white rounded-full text-xs uppercase tracking-widest hover:bg-earth transition-colors duration-500 shadow-md"
            >
              Read Eco Retreat Guide
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
