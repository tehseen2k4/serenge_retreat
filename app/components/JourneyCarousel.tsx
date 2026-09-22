"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useReducedMotion } from "framer-motion";

const journeys = [
  {
    href: "/journeys#soul",
    src: "/images/home/Soul Journeys.webp",
    alt: "Soul Journeys, guided introspection and silence at Serenge Retreat",
    title: "Soul Journeys",
    text: "Guided introspection, silence, and deep rest. For those seeking clarity.",
  },
  {
    href: "/journeys#wellness",
    src: "/images/home/Wellness Retreat.webp",
    alt: "Wellness Retreats, breathwork and yoga in the Karakoram mountains",
    title: "Wellness Retreats",
    text: "Breathwork, yoga, and somatic healing led by expert practitioners.",
  },
  {
    href: "/journeys#immersion",
    src: "/images/home/Nature Immersions.webp",
    alt: "Nature Immersions, glacier walks and star-gazing in Shigar Valley",
    title: "Nature Immersions",
    text: "Walks on the glacier, star-gazing, and connection with the ancient land.",
  },
];

function JourneyCard({
  journey,
  sizes,
}: {
  journey: (typeof journeys)[number];
  sizes: string;
}) {
  return (
    <Link href={journey.href} className="group block space-y-4">
      <div className="relative h-80 w-full overflow-hidden rounded-sm bg-stone/20 md:h-96">
        <Image
          src={journey.src}
          alt={journey.alt}
          fill
          className="object-cover transition-transform duration-1000 group-hover:scale-105"
          sizes={sizes}
        />
      </div>
      <h3 className="text-xl font-serif text-ink transition-colors group-hover:text-earth">
        {journey.title}
      </h3>
      <p className="text-sm leading-relaxed text-ink-muted">{journey.text}</p>
    </Link>
  );
}

export default function JourneyCarousel() {
  const reduce = useReducedMotion();
  const scrollerRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const paused = useRef(false);
  const resumeTimer = useRef<number>(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el || paused.current) return;
      if (window.matchMedia("(min-width: 1024px)").matches) return;
      const cards = Array.from(el.children) as HTMLElement[];
      if (!cards.length) return;
      const first = cards[0].offsetLeft;
      let current = 0;
      cards.forEach((card, i) => {
        if (el.scrollLeft + 24 >= card.offsetLeft - first) current = i;
      });
      const next = (current + 1) % cards.length;
      el.scrollTo({ left: cards[next].offsetLeft - first, behavior: "smooth" });
      setIndex(next);
    }, 4200);
    return () => window.clearInterval(id);
  }, [reduce]);

  const pause = () => {
    paused.current = true;
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      paused.current = false;
    }, 6000);
  };

  return (
    <>
      <div className="hidden gap-8 lg:grid lg:grid-cols-3">
        {journeys.map((journey) => (
          <JourneyCard key={journey.href} journey={journey} sizes="33vw" />
        ))}
      </div>

      <div className="lg:hidden">
        <div
          ref={scrollerRef}
          role="region"
          aria-roledescription="carousel"
          aria-label="Choose your journey"
          className="flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          onPointerDown={pause}
          onTouchStart={pause}
        >
          {journeys.map((journey, i) => (
            <article
              key={journey.href}
              aria-hidden={index !== i}
              className="w-[82%] shrink-0 snap-center sm:w-[62%]"
            >
              <JourneyCard journey={journey} sizes="82vw" />
            </article>
          ))}
        </div>
        <div className="mt-2 flex justify-center gap-2">
          {journeys.map((journey, i) => (
            <span
              key={journey.href}
              className={`h-1.5 w-1.5 rounded-full ${index === i ? "bg-earth" : "bg-earth/25"}`}
            />
          ))}
        </div>
      </div>
    </>
  );
}
