import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import AudioPlayer from "./components/AudioPlayer";
import TashiChat from "./components/TashiChat";
import StructuredData from "./components/StructuredData";
import Breadcrumbs from "./components/Breadcrumbs";
import { SpeedInsights } from "@vercel/speed-insights/next";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: 'swap',
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.serengeretreatpakistan.com"),
  applicationName: "Serengé Retreat",
  title: {
    default: "Serengé Retreat | Eco Wellness Stay in Shigar Valley",
    template: "%s",
  },
  description: "Alchori, Shigar Valley. Three riverside rooms, Balti kitchen, airport pickup from Skardu. WhatsApp the house to plan nights. Not a city hotel.",
  alternates: {
    canonical: "https://www.serengeretreatpakistan.com",
  },
  keywords: [
    "serenge retreat",
    "serenge retreat shigar",
    "rooms in shigar valley",
    "shigar valley stay",
    "aslam shigri",
    "alchori village stay",
    "eco retreat pakistan",
    "baltistan wellness retreat",
    "karakoram sanctuary",
    "tsering long life"
  ],
  authors: [{ name: "Aslam Shigri", url: "https://www.reegoadventure.com" }],
  creator: "Serengé Retreat",
  publisher: "Serengé Retreat",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/images/logo_brown.png",
    shortcut: "/images/logo_brown.png",
    apple: "/images/logo_brown.png",
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.serengeretreatpakistan.com",
    siteName: "Serengé Retreat",
    title: "Serengé Retreat | Eco Wellness Stay in Shigar Valley",
    description: "Alchori, Shigar Valley. Three riverside rooms, Balti kitchen, airport pickup from Skardu. WhatsApp the house to plan nights. Not a city hotel.",
    images: [
      {
        url: "/images/og/home.jpg",
        width: 1200,
        height: 630,
        alt: "Dining table at Serengé Retreat looking out to the Shigar riverbed",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serengé Retreat | Eco Wellness Stay in Shigar Valley",
    description: "Three riverside rooms in Alchori, Shigar Valley. Breakfast, airport pickup, WhatsApp the house.",
    images: ["/images/og/home.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add Google Search Console verification code here when available
    // google: 'your-verification-code',
    google: "DblswjaZFD3jQ7etzDBs3LdHUISECoYWZ8dypzcui6w",
  },
};

// Global Site-Wide Schema — Server Component (guaranteed crawler-visible)
const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://www.serengeretreatpakistan.com/#organization",
      "name": "Serengé Retreat",
      "alternateName": ["Serenge Retreat", "Serenge Retreat Pakistan"],
      "url": "https://www.serengeretreatpakistan.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.serengeretreatpakistan.com/images/logo_brown.png",
        "caption": "Serengé Retreat - Eco Wellness Sanctuary in Shigar Valley"
      },
      "sameAs": [
        "https://www.instagram.com/serengeretreat",
        "https://maps.app.goo.gl/vpKyRZLyVZaswYHM8",
        "https://www.booking.com/Pulse-zJRGAy"
      ],
      "founder": {
        "@type": "Person",
        "@id": "https://www.serengeretreatpakistan.com/#founder",
        "name": "Aslam Shigri",
        "jobTitle": "Founder & High-Altitude Guide",
        "sameAs": "https://www.reegoadventure.com"
      }
    },
    {
      "@type": "WebSite",
      "@id": "https://www.serengeretreatpakistan.com/#website",
      "url": "https://www.serengeretreatpakistan.com",
      "name": "Serengé Retreat",
      "alternateName": ["Serenge Retreat", "Serenge Retreat Pakistan"],
      "description": "Serengé Retreat is a 3-room riverside retreat in Alchori, Shigar Valley, Gilgit-Baltistan, Pakistan. Founder Aslam Shigri. 57 km from Skardu Airport. Not a Skardu city hotel.",
      "publisher": {
        "@id": "https://www.serengeretreatpakistan.com/#organization"
      }
    },
    {
      "@type": ["LocalBusiness", "LodgingBusiness"],
      "@id": "https://www.serengeretreatpakistan.com/#lodging",
      "name": "Serengé Retreat Shigar",
      "alternateName": ["Serenge Retreat", "Serenge Retreat Pakistan"],
      "description": "Serengé Retreat is a 3-room riverside retreat in Alchori, Shigar Valley, Gilgit-Baltistan, Pakistan. Founder Aslam Shigri. 57 km from Skardu Airport. Not a Skardu city hotel.",
      "url": "https://www.serengeretreatpakistan.com",
      "telephone": "+923349669198",
      "priceRange": "$$$",
      "numberOfRooms": 3,
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://www.serengeretreatpakistan.com/images/og/home.jpg",
          "caption": "Dining at Serengé Retreat looking out to the Shigar river"
        },
        {
          "@type": "ImageObject",
          "url": "https://www.serengeretreatpakistan.com/images/og/stay.jpg",
          "caption": "Riverside hut deck at Serengé Retreat, Alchori"
        },
        {
          "@type": "ImageObject",
          "url": "https://www.serengeretreatpakistan.com/images/home/experience/riverside-hut.webp",
          "caption": "The riverside hut under a willow tree"
        },
        {
          "@type": "ImageObject",
          "url": "https://www.serengeretreatpakistan.com/images/home/experience/breakfast-table.webp",
          "caption": "Breakfast laid in the dining room"
        }
      ],
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
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        "opens": "08:00",
        "closes": "22:00"
      },
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.8",
        "reviewCount": "4",
        "bestRating": "5",
        "worstRating": "1"
      },
      "review": [
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Elena" },
          "datePublished": "2025-01",
          "reviewRating": { "@type": "Rating", "ratingValue": "4", "bestRating": "5" },
          "reviewBody": "The location is absolutely stunning- one of the most beautiful we've seen. We loved walking by the river, playing in the fields, and watching the sunsets."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Ariz" },
          "datePublished": "2025-09",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Loved our stay at The Serenge Retreat. Beautiful place in a peaceful location with lots of cute animals around. Super cosy, really friendly hosts."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Tassil Ali" },
          "datePublished": "2025-04",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "Secluded spot. 30 minutes from Shigar. Pin drop silence perfect for self reflection. Highly recommended for solo travels."
        },
        {
          "@type": "Review",
          "author": { "@type": "Person", "name": "Naveed" },
          "datePublished": "2023-07",
          "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
          "reviewBody": "An isolated basic hut where you could enjoy peace with scenes of the Indus River and mountains. Axlam is very friendly and accommodating."
        }
      ],
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Organic Farm-to-Table Meals", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Yoga & Meditation Space", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Eco-Friendly Mud-and-Stone Architecture", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Karakoram Mountain Views", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Riverside Location on Shigar River", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Digital Detox Space", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Guided Wellness Retreats", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Lodge internet (variable in the mountains)", "value": true }
      ],
      "sameAs": [
        "https://www.instagram.com/serengeretreat",
        "https://maps.app.goo.gl/vpKyRZLyVZaswYHM8",
        "https://www.booking.com/Pulse-zJRGAy"
      ]
    },
    {
      "@type": "TouristAttraction",
      "@id": "https://www.serengeretreatpakistan.com/#attraction",
      "name": "Serengé Retreat, riverside stay in Shigar Valley",
      "description": "Serengé Retreat is a 3-room riverside retreat in Alchori, Shigar Valley, Gilgit-Baltistan, Pakistan. Founder Aslam Shigri. 57 km from Skardu Airport. Not a Skardu city hotel.",
      "url": "https://www.serengeretreatpakistan.com",
      "touristType": ["Eco-Travelers", "Wellness Seekers", "Couples", "Digital Nomads", "Nature Photographers", "Trekkers"],
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Alchori Village",
        "addressLocality": "Shigar Valley",
        "addressRegion": "Gilgit-Baltistan",
        "addressCountry": "PK"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": 35.4211,
        "longitude": 75.7422
      }
    },
    {
      "@type": "ImageGallery",
      "@id": "https://www.serengeretreatpakistan.com/#days-at-the-river",
      "name": "Days at the river",
      "description": "Rooms, meals, willow weaving, the walk to the water, and the sky after dark. Photographed at Serengé Retreat in Alchori, Shigar Valley.",
      "url": "https://www.serengeretreatpakistan.com/#days-at-the-river",
      "isPartOf": { "@id": "https://www.serengeretreatpakistan.com/#lodging" }
    },
    {
      "@type": "FAQPage",
      "@id": "https://www.serengeretreatpakistan.com/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Where is Serengé Retreat located in Gilgit-Baltistan?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Serengé Retreat is located in Alchori Village, Shigar Valley, about 30 minutes from Shigar town in the Skardu region of Gilgit-Baltistan, Pakistan. Unlike standard hotels in Skardu city, it offers a peaceful, slow-living riverside environment surrounded by Karakoram peaks."
          }
        },
        {
          "@type": "Question",
          "name": "How far is Serengé Retreat from Skardu Airport?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "It is approximately 57 km (about 1 hour 45 minutes drive) from Skardu Airport. We offer airport pickup assistance for all guests."
          }
        },
        {
          "@type": "Question",
          "name": "What makes Serengé Retreat different from hotels in Skardu and Shigar?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Unlike typical concrete hotels in Shigar or Skardu, Serengé Retreat offers an immersive eco-village stay using traditional mud-and-stone Balti architecture, organic local farm-to-table dining, and dedicated wellness programs including somatic yoga and digital detox."
          }
        },
        {
          "@type": "Question",
          "name": "What wellness activities are offered at Serengé Retreat?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Guests can participate in guided somatic yoga, breathwork sessions, riverside silent meditation, stargazing, evening community bonfires, day treks to Karakoram peaks, and guided cultural experiences in Alchori Village."
          }
        },
        {
          "@type": "Question",
          "name": "Is Serengé Retreat eco-friendly?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "Yes, Serengé Retreat is fully dedicated to low-impact tourism using traditional mud brick and poplar wood construction, organic food sourced from Alchori farms, solar lighting, and local community employment."
          }
        }
      ]
    }
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://maps.googleapis.com" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-canvas text-ink flex flex-col min-h-screen`}
      >
        <StructuredData data={organizationSchema} />
        <Header />
        <Breadcrumbs />
        <SmoothScroll />
        <AudioPlayer />
        <TashiChat />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
