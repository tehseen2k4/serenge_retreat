"use client";

import Image from "next/image";
import WeatherWidget from "./WeatherWidget";


export default function Footer() {
  return (
    <footer className="bg-paper py-20 px-6 md:px-12 border-t border-divider mt-20">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">

        {/* Right Section: Contact & Info (Visual priority first on mobile, but second in grid for desktop logic, actually keeping left-right standard) */}

        <div className="space-y-8">
          <Image
            src="/images/logo_brown.png"
            alt="Serengé Retreat"
            width={160}
            height={60}
            className="w-40 h-auto object-contain"
          />
          <div className="space-y-2 text-ink-soft font-light leading-relaxed">
            <p className="font-medium text-ink">Alchori Ranga, Shigar</p>
            <p>Gilgit-Baltistan, Pakistan</p>
            <div className="pt-2 flex flex-col gap-1">
              <a href="https://wa.me/923349669198" target="_blank" rel="noopener noreferrer" className="hover:text-earth transition-colors">+92 334 9669198</a>
              <a href="mailto:axlamshigri@gmail.com" className="hover:text-earth transition-colors">axlamshigri@gmail.com</a>
            </div>
          </div>
          <div className="pt-4 flex flex-col gap-2 text-xs uppercase tracking-widest text-ink-muted">
            <a href="https://www.reegoadventure.com" target="_blank" rel="noopener noreferrer" className="hover:text-earth underline underline-offset-4">Tour Partner: Reego Adventure</a>
            <a href="mailto:reegoadventure@gmail.com" className="hover:text-earth transition-colors lowercase font-sans">reegoadventure@gmail.com</a>
          </div>
        </div>

        {/* Left Section: Context */}
        <div className="space-y-6">
          <p className="text-ink-soft italic font-light max-w-sm">
            "We aim to offer not just a stay — but a sense of belonging, calm, and meaningful connection with the land and its people."
          </p>
          <div className="pt-6 space-y-4">
            <p className="text-xs uppercase tracking-[0.2em] text-earth">Social connection</p>
            <div className="flex gap-6 text-sm text-ink-soft">
              <a href="https://www.instagram.com/serengeretreat" target="_blank" rel="noopener noreferrer" className="hover:text-earth transition-colors">Instagram</a>
              <a href="https://www.facebook.com/share/1Ctpfh7Lwf/" target="_blank" rel="noopener noreferrer" className="hover:text-earth transition-colors">Facebook</a>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto mt-20 pt-8 border-t border-divider flex flex-col md:flex-row justify-between text-xs text-ink-muted tracking-wide">
        <div className="flex flex-col gap-2">
          <p>© {new Date().getFullYear()} Serengé Retreat. All rights reserved.</p>
          <WeatherWidget />
        </div>
        <div className="flex gap-6 mt-4 md:mt-0 italic">
          <span>Inhale. Exhale. Repeat.</span>
        </div>
      </div>
    </footer>
  );
}
