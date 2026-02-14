import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import SmoothScroll from "./components/SmoothScroll";
import AudioPlayer from "./components/AudioPlayer";



const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://serengeretreat.com"),
  title: "Serengé Retreat | A Threshold into Silence",
  description: "A soulful retreat and wellness sanctuary in Karakoram, Baltistan. Join us for slow, grounded journeys.",
  icons: {
    icon: "/images/logo_brown.png",
    shortcut: "/images/logo_brown.png",
  },
  openGraph: {
    title: "Serengé Retreat",
    description: "Where Peace Meets The Mountains. A sanctuary in Shigar Valley.",
    images: [
      {
        url: "/images/logo_brown.png",
        width: 800,
        height: 600,
        alt: "Serengé Retreat Logo",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-canvas text-ink flex flex-col min-h-screen`}
      >
        <Header />
        <SmoothScroll />
        <AudioPlayer />
        <main className="flex-grow pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
