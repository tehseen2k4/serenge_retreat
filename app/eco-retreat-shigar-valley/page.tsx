import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Eco Retreat in Shigar Valley | Serenge Retreat",
  description: "Experience a peaceful riverside eco-retreat in Shigar Valley, Gilgit-Baltistan. Handcrafted mud-and-stone cabins, Karakoram views, and somatic wellness.",
  keywords: ["eco retreat shigar valley", "nature retreat northern pakistan", "quiet stay gilgit baltistan", "serenge retreat"],
  openGraph: {
    title: "Eco Retreat in Shigar Valley | Serenge Retreat",
    description: "Handcrafted mud-and-stone cabins, riverside silence, and authentic Balti hospitality in the heart of the Karakoram.",
    url: "https://www.serengeretreatpakistan.com/eco-retreat-shigar-valley",
  }
};

export default function EcoRetreatPage() {
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
        "name": "Eco Retreat Shigar Valley",
        "item": "https://www.serengeretreatpakistan.com/eco-retreat-shigar-valley"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What makes Serenge Retreat different from hotels in Skardu?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unlike crowded, commercial concrete hotels in busy Skardu city, Serenge Retreat is an eco-conscious sanctuary located 30 minutes away in the quiet village of Alchori in Shigar Valley. We prioritize local mud-and-stone Balti architecture, slow travel, organic meals, and absolute quiet, right on the edge of the rushing Shigar River."
        }
      },
      {
        "@type": "Question",
        "name": "Is Serenge Retreat suitable for couples?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Serenge Retreat is highly suited for couples looking for private, romantic, and nature-immersive escapes in Gilgit-Baltistan. The peaceful sound of the river, mountain silence, cozy fire pit evenings, and private stone cabins offer an ideal space for quality connection."
        }
      },
      {
        "@type": "Question",
        "name": "Does the retreat offer mountain views?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Absolutely. Every cabin, room, and outdoor space at Serenge Retreat offers stunning, uninterrupted views of the Karakoram mountain range, including direct views of the rugged peaks rising above Shigar Valley."
        }
      },
      {
        "@type": "Question",
        "name": "What activities are available nearby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Guests can explore the historic 17th-century Shigar Fort, wander through local organic farms in Alchori, take guided day treks to Khosar Gang viewpoints, enjoy sunset photography on the Shigar River banks, or sit around evening community bonfires."
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
            <span>Destination Guide / Shigar Valley</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight">
            Experience a Riverside Eco Retreat in Shigar Valley
          </h1>
          <p className="text-xl text-ink-soft font-light leading-relaxed font-serif max-w-3xl">
            Serenge Retreat is a riverside eco-retreat located in the heart of Shigar Valley, Gilgit-Baltistan, offering peaceful nature-focused stays surrounded by the Karakoram mountains. Designed for travelers seeking quiet experiences, slow living, and authentic mountain landscapes, the retreat combines comfort with the natural beauty of Northern Pakistan.
          </p>
        </header>

        {/* Ambient Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-stone/20 rounded-sm overflow-hidden shadow-xl">
          <Image
            src="/images/home/Nature Immersions.webp"
            alt="Riverside eco retreat in Shigar Valley at Serenge Retreat surrounded by Karakoram peaks"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Core Content Blocks */}
        <section className="space-y-12 text-ink-soft font-light text-base md:text-lg leading-relaxed">

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Why Choose an Eco Retreat in Shigar Valley</h2>
            <p>
              Shigar Valley offers something increasingly rare in modern travel: absolute stillness. Unlike standard tourist centers, an eco retreat here allows you to fully immerse yourself in a peaceful environment. The clean mountain air is unpolluted by city smog, and the visual landscape consists only of rising Karakoram granite and green apricot orchards.
            </p>
            <p>
              At Serenge Retreat, this natural silence is complemented by the soothing, consistent sound of the Shigar River. By disconnecting from high-speed city life, guests are able to slow down, regulate their nervous systems, and align their breath with the natural rhythm of the valley.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Nature-Focused Accommodation</h2>
            <p>
              Our structures are designed to touch the earth lightly. Utilizing local wood, natural river stones, and traditional Balti mud-brick masonry, the accommodation options at Serenge Retreat are both thermally efficient and visually harmonized with the landscape.
            </p>
            <p>
              Guests can choose between handcrafted private cabins, insulated glamping domes on the riverbank, or cozy lodge rooms. Each room features comfortable organic linens, handcrafted wooden furniture, and private outdoor seating designed for quiet morning reflection.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">The Riverside Experience</h2>
            <p>
              The Shigar River is the lifeblood of our property. Guests can begin their mornings with quiet walks on the soft sand banks, practicing silent meditation or simple breathwork on the shore.
            </p>
            <p>
              As evening falls, the riverside comes alive with soft bonfires, local acoustic music, stargazing beneath one of the darkest night skies in Pakistan, and professional-grade landscape photography opportunities under the pink light of sunset.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Best Season to Visit Shigar Valley</h2>
            <p>
              Each season in Shigar Valley offers a distinct healing environment:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Spring (April to May):</strong> Witness the legendary apricot and cherry blossoms covering the valley floor in shades of pink and white.</li>
              <li><strong>Summer (June to September):</strong> Experience cooler, pleasant mountain weather perfect for trekking the Karakoram trails and sleeping beside the river.</li>
              <li><strong>Autumn (October to November):</strong> Watch the valley turn into a golden paradise of yellow leaves and crystal-clear skies, ideal for digital detox and writing.</li>
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
              <h3 className="font-serif text-lg text-ink font-medium">What makes Serenge Retreat different from hotels in Skardu?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Unlike crowded, commercial concrete hotels in busy Skardu city, Serenge Retreat is an eco-conscious sanctuary located 30 minutes away in the quiet village of Alchori in Shigar Valley. We prioritize local mud-and-stone Balti architecture, slow travel, organic meals, and absolute quiet, right on the edge of the rushing Shigar River.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Is Serenge Retreat suitable for couples?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, Serenge Retreat is highly suited for couples looking for private, romantic, and nature-immersive escapes in Gilgit-Baltistan. The peaceful sound of the river, mountain silence, cozy fire pit evenings, and private stone cabins offer an ideal space for quality connection.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Does the retreat offer mountain views?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Absolutely. Every cabin, room, and outdoor space at Serenge Retreat offers stunning, uninterrupted views of the Karakoram mountain range, including direct views of the rugged peaks rising above Shigar Valley.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">What activities are available nearby?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Guests can explore the historic 17th-century Shigar Fort, wander through local organic farms in Alchori, take guided day treks to Khosar Gang viewpoints, enjoy sunset photography on the Shigar River banks, or sit around evening community bonfires.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-white p-8 md:p-12 border border-earth/20 rounded-sm text-center space-y-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-earth">Reconnect with Silence</p>
          <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Ready to Experience Shigar Valley?</h2>
          <p className="text-ink-soft max-w-xl mx-auto font-light text-sm">
            Book your eco-sanctuary stay directly with us. We invite you to experience slow mountain living, organic local food, and deep mindfulness beside the river.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stay#booking-form"
              className="inline-block px-8 py-3 bg-earth text-white rounded-full text-xs uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-md"
            >
              Book Your Sanctuary
            </Link>
            <Link
              href="/"
              className="inline-block px-8 py-3 bg-stone text-white rounded-full text-xs uppercase tracking-widest hover:bg-earth transition-colors duration-500 shadow-md"
            >
              Explore Homepage
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
