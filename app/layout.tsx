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
  metadataBase: new URL("https://serengeretreat.com"),
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
    url: "https://serengeretreat.com",
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
  },
};

// Organization Schema for SEO
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "LodgingBusiness",
  "name": "Serengé Retreat",
  "description": "Eco-conscious wellness retreat and boutique accommodation in Shigar Valley, Baltistan, Pakistan",
  "url": "https://serengeretreat.com",
  "logo": "https://serengeretreat.com/images/logo_brown.png",
  "image": "https://serengeretreat.com/images/home/serenge_retreat_hero.jpg",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "Alchori Village",
    "addressLocality": "Shigar",
    "addressRegion": "Gilgit-Baltistan",
    "addressCountry": "PK"
  },
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": "35.4167",
    "longitude": "75.7333"
  },
  "priceRange": "$$-$$$",
  "amenityFeature": [
    { "@type": "LocationFeatureSpecification", "name": "Organic Meals" },
    { "@type": "LocationFeatureSpecification", "name": "Yoga & Meditation Space" },
    { "@type": "LocationFeatureSpecification", "name": "Eco-Friendly Architecture" },
    { "@type": "LocationFeatureSpecification", "name": "Mountain Views" },
    { "@type": "LocationFeatureSpecification", "name": "Riverside Location" }
  ],
  "starRating": {
    "@type": "Rating",
    "ratingValue": "5"
  },
  "founder": {
    "@type": "Person",
    "name": "Aslam Shigri",
    "jobTitle": "Founder & High-Altitude Guide",
    "sameAs": "https://www.reegoadventure.com"
  }
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
