import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import AudioPlayer from "./components/AudioPlayer";
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
  title: "Serengé Retreat | Eco Wellness Sanctuary in Shigar Valley ★",
  description: "Experience the sacred silence of the Karakoram. Authentic Balti hospitality, soul journeys, and wellness retreats in the heart of Shigar Valley. Welcome to your long life ✓",
  keywords: [
    "serenge retreat",
    "aslam shigri",
    "shigar valley retreat",
    "baltistan wellness retreat",
    "karakoram sanctuary",
    "eco retreat pakistan",
    "aslam shigri porter",
    "spiritual retreat karakoram",
    "alchori village stay",
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
    title: "Serengé Retreat - Where Peace Meets The Mountains",
    description: "Eco wellness retreat in Shigar Valley, Baltistan. Soul journeys, nature immersion, authentic Balti culture.",
    images: [
      {
        url: "/images/logo_brown.png",
        width: 800,
        height: 600,
        alt: "Serengé Retreat Logo - Eco Wellness Sanctuary in Shigar Valley",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Serengé Retreat | Wellness Sanctuary in Karakoram",
    description: "Eco retreat in Shigar Valley, Baltistan. Experience authentic mountain hospitality.",
    images: ["/images/logo_brown.png"],
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
      "name": "Serenge Retreat",
      "url": "https://www.serengeretreatpakistan.com",
      "logo": {
        "@type": "ImageObject",
        "url": "https://www.serengeretreatpakistan.com/images/logo_brown.png",
        "caption": "Serengé Retreat - Eco Wellness Sanctuary in Shigar Valley"
      },
      "sameAs": [
        "https://www.instagram.com/serengeretreat",
        "https://maps.app.goo.gl/vpKyRZLyVZaswYHM8"
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
      "name": "Serenge Retreat",
      "description": "Eco-conscious wellness sanctuary in Shigar Valley, Baltistan, Pakistan",
      "publisher": {
        "@id": "https://www.serengeretreatpakistan.com/#organization"
      }
    },
    {
      "@type": ["LocalBusiness", "LodgingBusiness"],
      "@id": "https://www.serengeretreatpakistan.com/#lodging",
      "name": "Serengé Retreat Shigar",
      "description": "An eco-conscious wellness sanctuary located beside the Shigar River in Alchori Village, Shigar Valley, Pakistan. Specializing in digital detox, somatic healing, and Karakoram mountain immersion.",
      "url": "https://www.serengeretreatpakistan.com",
      "telephone": "+923349669198",
      "priceRange": "$$$",
      "image": [
        {
          "@type": "ImageObject",
          "url": "https://www.serengeretreatpakistan.com/images/night%20retreat.png",
          "caption": "Serengé Retreat beside the Shigar River at night"
        },
        {
          "@type": "ImageObject",
          "url": "https://www.serengeretreatpakistan.com/images/home/Wellness%20Retreat.webp",
          "caption": "Eco-conscious wellness sanctuary in Shigar Valley, Baltistan"
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
        "ratingValue": "5.0",
        "reviewCount": "14",
        "bestRating": "5.0",
        "worstRating": "1.0"
      },
      "amenityFeature": [
        { "@type": "LocationFeatureSpecification", "name": "Organic Farm-to-Table Meals", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Yoga & Meditation Space", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Eco-Friendly Mud-and-Stone Architecture", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Karakoram Mountain Views", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Riverside Location on Shigar River", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Digital Detox Space", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "Guided Wellness Retreats", "value": true },
        { "@type": "LocationFeatureSpecification", "name": "WiFi Available", "value": true }
      ],
      "sameAs": [
        "https://www.instagram.com/serengeretreat",
        "https://maps.app.goo.gl/vpKyRZLyVZaswYHM8"
      ]
    },
    {
      "@type": "TouristAttraction",
      "@id": "https://www.serengeretreatpakistan.com/#attraction",
      "name": "Serengé Retreat — Eco Wellness Sanctuary in Shigar Valley",
      "description": "A boutique eco-wellness sanctuary and tourist destination in Alchori Village, Shigar Valley, Baltistan, Pakistan. Offering somatic healing, cultural immersion, and Karakoram mountain experiences.",
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
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}
