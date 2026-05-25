import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import StructuredData from "../components/StructuredData";

export const metadata: Metadata = {
  title: "How to Reach Serenge Retreat Shigar | Travel Guide",
  description: "Complete travel guide to reaching Serenge Retreat in Shigar Valley, Gilgit-Baltistan. Find flights to Skardu, road conditions, and private transfer information.",
  keywords: ["how to reach shigar valley", "how to reach serenge retreat", "travel guide skardu to shigar", "skardu airport to shigar"],
  openGraph: {
    title: "How to Reach Serenge Retreat Shigar | Travel Guide",
    description: "Plan your trip to Shigar Valley. Details on Skardu flights, safe road conditions, and airport transfer services.",
    url: "https://serengeretreat.com/how-to-reach-serenge-retreat",
  }
};

export default function HowToReachPage() {
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
        "name": "How to Reach Serenge Retreat",
        "item": "https://serengeretreat.com/how-to-reach-serenge-retreat"
      }
    ]
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "How far is Serenge Retreat from Skardu Airport?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Serenge Retreat is approximately 35 to 45 kilometers from Skardu International Airport (KDU). The drive takes around 40 minutes on a smooth, fully paved two-lane road that winds past the Indus River and the majestic Sarfaranga Cold Desert."
        }
      },
      {
        "@type": "Question",
        "name": "Is the road to Shigar Valley safe?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, the road from Skardu city and the airport to Shigar Valley is highly safe, wide, and fully asphalted. Unlike steep mountain jeep tracks, this road is suitable for standard sedans, coasters, and private SUVs, making the travel comfortable and accessible for all age groups."
        }
      },
      {
        "@type": "Question",
        "name": "What is the best season to visit?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The travel conditions are highly favorable from April through November. The weather is stable, flights operate regularly, and roads are clear of winter snow. Early spring offers stunning blossoms, summer offers pleasant coolness, and autumn offers clear skies and golden trees."
        }
      },
      {
        "@type": "Question",
        "name": "Are airport pickups available?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, we arrange private custom airport transfers with professional, friendly drivers who will greet you directly at Skardu Airport and bring you in comfort straight to the retreat."
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
            <span>Travel Guide / Route Planner</span>
            <span>Last Updated: {lastUpdated}</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif text-ink italic leading-tight">
            How to Reach Serenge Retreat in Shigar Valley
          </h1>
          <p className="text-xl text-ink-soft font-light leading-relaxed font-serif max-w-3xl">
            Serenge Retreat is located in Shigar Valley, Gilgit-Baltistan, near Skardu in Northern Pakistan. The retreat is accessible through Skardu Airport and road travel routes connecting the Skardu region to Shigar Valley.
          </p>
        </header>

        {/* Ambient Hero Image */}
        <div className="relative aspect-[16/9] w-full bg-stone/20 rounded-sm overflow-hidden shadow-xl">
          <Image
            src="/images/home/Nature Immersions.webp"
            alt="Scenic route to Shigar Valley and Serenge Retreat Pakistan"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Core Content Blocks */}
        <section className="space-y-12 text-ink-soft font-light text-base md:text-lg leading-relaxed">
          
          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">1. Reaching Skardu</h2>
            <p>
              Your journey to Shigar Valley begins by reaching Skardu, the main regional hub of Baltistan. There are two primary ways to travel to Skardu:
            </p>
            
            <div className="space-y-4 pt-2">
              <h3 className="text-xl font-serif text-ink font-semibold">Option A: By Air (Highly Recommended)</h3>
              <p>
                Pakistan International Airlines (PIA) operates daily direct flights from <strong>Islamabad</strong> to Skardu. Weekly direct flights are also available from <strong>Lahore</strong> and <strong>Karachi</strong>. 
              </p>
              <div className="bg-paper p-6 border-l-4 border-earth rounded-sm text-sm space-y-2">
                <p><strong>Note on Weather Operations:</strong> Flights to Skardu are highly scenic as they pass over Nanga Parbat and the high Karakoram, but they are dependent on visual flight conditions. We highly advise booking your flights with a day or two of buffer time in case of weather-related cancellations.</p>
              </div>
            </div>

            <div className="space-y-2 pt-4">
              <h3 className="text-xl font-serif text-ink font-semibold">Option B: By Road</h3>
              <p>
                For adventurous travelers, you can drive to Skardu via the legendary <strong>Karakoram Highway (KKH)</strong>. The standard route is from Islamabad to Gilgit, and then taking the newly built, smooth Skardu Road along the roaring Indus River gorge. The road trip takes approximately 18 to 22 hours of driving, featuring stunning mountain vistas.
              </p>
            </div>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">2. Travel from Skardu to Shigar Valley</h2>
            <p>
              Once you arrive in Skardu city or Skardu Airport, reaching Serenge Retreat is remarkably straightforward and pleasant:
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Distance:</strong> Approximately 35 kilometers.</li>
              <li><strong>Travel Time:</strong> Around 30 to 45 minutes of scenic driving.</li>
              <li><strong>The Route:</strong> You will drive north across the Shigar River bridge, passing through the beautiful, high-altitude white dunes of the <strong>Sarfaranga Cold Desert</strong>. The road runs through quiet apricot fields, following the river valley directly to Alchori Village.</li>
              <li><strong>Road Quality:</strong> Excellent. The entire road is fully paved, safe, and easily passable by any standard sedan or small van.</li>
            </ul>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">3. Best Seasons for Travel</h2>
            <p>
              While Shigar Valley is accessible year-round, the road conditions and flights are most consistent during:
            </p>
            <table className="min-w-full divide-y divide-earth/10 text-sm mt-4">
              <thead>
                <tr className="text-left font-serif text-ink">
                  <th className="pb-3 pr-4">Season</th>
                  <th className="pb-3 px-4">Flight Stability</th>
                  <th className="pb-3 pl-4">Road Conditions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-earth/10 font-light text-ink-soft">
                <tr>
                  <td className="py-3 pr-4 font-medium">Spring (Apr - May)</td>
                  <td className="py-3 px-4">Moderate (Occasional cloudcover)</td>
                  <td className="py-3 pl-4">Fully clear, beautiful blossoms</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Summer (Jun - Aug)</td>
                  <td className="py-3 px-4">High (Clear skies, sunny days)</td>
                  <td className="py-3 pl-4">Fully clear, glacier melt beside river</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 font-medium">Autumn (Sep - Nov)</td>
                  <td className="py-3 px-4">Very High (Crisp, blue skies)</td>
                  <td className="py-3 pl-4">Clear, stunning golden leaves</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="space-y-4">
            <h2 className="text-2xl md:text-3xl font-serif text-ink italic">4. Practical Travel Tips</h2>
            <ul className="list-disc pl-6 space-y-2">
              <li><strong>Mobile Connectivity:</strong> While standard Pakistani networks have limited coverage in Northern Baltistan, <strong>SCOM (Special Communications Organization)</strong> offers excellent 4G internet and calls. We suggest buying an SCOM SIM card at Skardu Airport or in Skardu town.</li>
              <li><strong>Clothing:</strong> Pack in layers. Even in mid-summer, while the daytime is pleasantly warm, the nights beside the rushing glacial river get cold very quickly. A warm windbreaker and a fleece jacket are highly recommended.</li>
              <li><strong>Altitude Considerations:</strong> Shigar Valley sits at approximately 2,230 meters (7,300 feet). This is a very comfortable height and rarely causes any altitude sickness, but we advise drinking plenty of water during your first day to adjust easily.</li>
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
              <h3 className="font-serif text-lg text-ink font-medium">How far is Serenge Retreat from Skardu Airport?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Serenge Retreat is approximately 35 to 45 kilometers from Skardu International Airport (KDU). The drive takes around 40 minutes on a smooth, fully paved two-lane road that winds past the Indus River and the majestic Sarfaranga Cold Desert.
              </p>
            </div>
            
            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Is the road to Shigar Valley safe?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, the road from Skardu city and the airport to Shigar Valley is highly safe, wide, and fully asphalted. Unlike steep mountain jeep tracks, this road is suitable for standard sedans, coasters, and private SUVs, making the travel comfortable and accessible for all age groups.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">What is the best season to visit?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                The travel conditions are highly favorable from April through November. The weather is stable, flights operate regularly, and roads are clear of winter snow. Early spring offers stunning blossoms, summer offers pleasant coolness, and autumn offers clear skies and golden trees.
              </p>
            </div>

            <div className="bg-white p-6 rounded-sm border border-earth/10 space-y-2">
              <h3 className="font-serif text-lg text-ink font-medium">Are airport pickups available?</h3>
              <p className="text-sm text-ink-muted leading-relaxed font-light">
                Yes, we arrange private custom airport transfers with professional, friendly drivers who will greet you directly at Skardu Airport and bring you in comfort straight to the retreat.
              </p>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="bg-white p-8 md:p-12 border border-earth/20 rounded-sm text-center space-y-6 shadow-sm">
          <p className="text-xs uppercase tracking-[0.3em] text-earth">Arrange Transfers</p>
          <h2 className="text-2xl md:text-3xl font-serif text-ink italic">Let Us Arrange Your Skardu Transfer</h2>
          <p className="text-ink-soft max-w-xl mx-auto font-light text-sm">
            Make your travel completely stress-free. Let our team coordinate your airport pickup or private car hire from Skardu straight to Alchori.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/stay#booking-form"
              className="inline-block px-8 py-3 bg-earth text-white rounded-full text-xs uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-md"
            >
              Coordinate My Arrival
            </Link>
            <Link
              href="/things-to-do-shigar-valley"
              className="inline-block px-8 py-3 bg-stone text-white rounded-full text-xs uppercase tracking-widest hover:bg-earth transition-colors duration-500 shadow-md"
            >
              Things to Do in Shigar
            </Link>
          </div>
        </section>
      </article>
    </div>
  );
}
