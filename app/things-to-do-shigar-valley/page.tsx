import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "Things to Do in Shigar Valley | Explore Northern Pakistan",
  description: "Complete guide on the best things to do in Shigar Valley. Visit the historic 17th-century Shigar Fort, explore cold deserts, and hike the Karakoram mountains.",
  keywords: ["things to do in shigar valley", "places to visit near skardu", "shigar valley travel guide", "shigar fort tourism"],
  openGraph: {
    title: "Things to Do in Shigar Valley | Explore Northern Pakistan",
    description: "Explore the ancient fort, mountain vistas, cold desert, and riverside paths in Shigar Valley, Baltistan.",
    url: "https://serengeretreat.com/things-to-do-shigar-valley",
  }
};

export default function ThingsToDoPage() {
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
        "name": "Things to Do in Shigar Valley",
        "item": "https://serengeretreat.com/things-to-do-shigar-valley"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is Shigar Valley famous for?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Shigar Valley is globally famous as the gateway to the high Karakoram peaks, including K2, Broad Peak, and Gasherbrum. It is also renowned for its sweet organic apricots, the stunning 400-year-old Shigar Fort, pristine high-altitude cold deserts, and its serene, quiet atmosphere perfect for wellness retreats."
        }
      },
      {
        "@type": "Question",
        "name": "How many days should I stay in Shigar?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "We recommend staying at least 3 to 5 days to truly absorb the quiet, slow pace of the valley, explore local historical sites, embark on guided mountain walks, and benefit from a proper digital detox without feeling rushed."
        }
      },
      {
        "@type": "Question",
        "name": "Is Shigar good for families?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, Shigar is exceptionally safe, quiet, and welcoming. Families enjoy exploring the historical fort, walking through fruit-filled local orchards, learning about mountain communities, and sitting by firesides under starry skies."
        }
      },
      {
        "@type": "Question",
        "name": "What are the best photography spots nearby?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Unmissable photography spots include the soft dunes of the Sarfaranga Cold Desert, the sweeping river banks of Serenge Retreat during sunset, the historical wood-carved details of Shigar Fort, and the high-angle panoramic views from Khosar Gang slopes."
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
            <span>Travel Guide / Local Attractions</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight">
            Things to Do in Shigar Valley During Your Stay
          </h1>
          <p className="text-xl text-ink-soft font-light leading-relaxed font-serif max-w-3xl">
            Shigar Valley is one of the most scenic destinations in Gilgit-Baltistan, offering mountain landscapes, riverside experiences, cultural heritage, and peaceful outdoor exploration near Skardu.
          </p>
        </header>

        {/* Ambient Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-stone/20 rounded-sm overflow-hidden shadow-xl">
          <Image
            src="/images/home/serenge_retreat_hero.jpg"
            alt="Beautiful landscapes of Shigar Valley near Skardu Northern Pakistan"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Core Content Blocks */}
        <section className="space-y-12 text-ink-soft font-light text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">1. Visit the Historic Shigar Fort (Fong-Khar)</h2>
            <p>
              Shigar Fort is a highly restored architectural marvel built in the 17th century by the local Amacha dynasty of Shigar. Restored meticulously by the Aga Khan Cultural Service Pakistan (AKCSP), the fort is a striking combination of local stone walls, pine timber beams, and exquisite Kashmiri-style wood carvings.
            </p>
            <p>
              Guests can tour the palace museum, walk the beautiful royal cherry-tree gardens, explore ancient residential chambers, and dine on traditional cuisine in the historic courtyard.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">2. Explore Scenic Riverside Landscapes</h2>
            <p>
              The massive Shigar River bed features high-altitude sand beaches, pristine glacial pools, and dense stands of willow and poplar trees. 
            </p>
            <p>
              We recommend taking a slow morning or evening walk directly along the river shoreline. It is an incredible space to sit in silence, listen to the moving water, gather beautiful river quartz rocks, and photograph the dramatic golden hour sun casting long shadows across the valley floor.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">3. Experience Authentic Balti Culture</h2>
            <p>
              Baltistan has a unique cultural heritage influenced by ancient Tibetan, Ladakhi, and Persian histories. 
            </p>
            <p>
              During your stay at Serenge Retreat in Alchori, you can experience local culture first-hand:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Local Balti Cuisine:</strong> Taste traditional organic dishes like <em>Prapoo</em> (wheat noodles with walnut paste and apricot oil), <em>Balti Bread</em>, and hot mountain herbal tea.</li>
              <li><strong>Village Craftsmanship:</strong> Meet local wood carvers, stone masons, and wool weavers keeping centuries-old skills alive.</li>
              <li><strong>Wood-Carved Mosques:</strong> Visit beautiful local community mosques featuring intricate, geometric wood carvings and quiet, calm courtyards.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">4. Stargazing & Bonfire Gatherings</h2>
            <p>
              At night, the low light pollution of Shigar Valley offers a window into the universe. The Milky Way stands out clearly across the night sky, framed by the dark, high outlines of the surrounding Karakoram peaks. 
            </p>
            <p>
              We gather nightly around our crackling river-stone bonfire pit, sharing folklore and enjoying quiet moments beneath the immense starry sky.
            </p>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">5. Discover Nearby Attractions</h2>
            <p>
              Serenge Retreat serves as a perfect home-base for exploring broader Baltistan:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Sarfaranga Cold Desert:</strong> Walk the majestic, high-altitude sand dunes that sit directly beside snow-capped mountains.</li>
              <li><strong>Khosar Gang Slope Hike:</strong> For active hikers, take a guided day trek up the lower slopes of Khosar Gang (6,400m) for dramatic, soaring aerial views of the entire river valley.</li>
              <li><strong>Deosai Plains:</strong> Plan a day trip to the famous high-altitude alpine plateau, home to golden marmots and rolling green wild flower meadows.</li>
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
              <h3 className="font-serif text-lg text-ink font-medium">What is Shigar Valley famous for?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Shigar Valley is globally famous as the gateway to the high Karakoram peaks, including K2, Broad Peak, and Gasherbrum. It is also renowned for its sweet organic apricots, the stunning 400-year-old Shigar Fort, pristine high-altitude cold deserts, and its serene, quiet atmosphere perfect for wellness retreats.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">How many days should I stay in Shigar?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                We recommend staying at least 3 to 5 days to truly absorb the quiet, slow pace of the valley, explore local historical sites, embark on guided mountain walks, and benefit from a proper digital detox without feeling rushed.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Is Shigar good for families?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, Shigar is exceptionally safe, quiet, and welcoming. Families enjoy exploring the historical fort, walking through fruit-filled local orchards, learning about mountain communities, and sitting by firesides under starry skies.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">What are the best photography spots nearby?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Unmissable photography spots include the soft dunes of the Sarfaranga Cold Desert, the sweeping river banks of Serenge Retreat during sunset, the historical wood-carved details of Shigar Fort, and the high-angle panoramic views from Khosar Gang slopes.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-white p-8 md:p-12 border border-earth/20 rounded-sm text-center space-y-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-earth">Explore the Sacred Valley</p>
          <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Ready to Experience Shigar Valley?</h2>
          <p className="text-ink-soft max-w-xl mx-auto font-light text-sm">
            Make Serenge Retreat your home in the mountains. Reserve your mud cabin or glamping dome directly to begin your exploration of Gilgit-Baltistan.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stay#booking-form"
              className="inline-block px-8 py-3 bg-earth text-white rounded-full text-xs uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-md"
            >
              Book My Stay
            </Link>
            <Link
              href="/how-to-reach-serenge-retreat"
              className="inline-block px-8 py-3 bg-stone text-white rounded-full text-xs uppercase tracking-widest hover:bg-earth transition-colors duration-500 shadow-md"
            >
              Get Travel Directions
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
