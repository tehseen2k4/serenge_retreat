"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

const photos = [
  { src: "/images/home/experience/cherries-in-hand.webp", alt: "A clay bowl of cherries held in front of the lodge", w: 1200, h: 1800 },
  { src: "/images/home/experience/riverside-hut.webp", alt: "The riverside hut under a willow tree", w: 1200, h: 1800 },
  { src: "/images/home/experience/doorway-peaks.webp", alt: "Snow peaks seen through an open lodge door", w: 1200, h: 1800 },
  { src: "/images/home/experience/dining-river.webp", alt: "The dining table looking out to the Shigar riverbed", w: 1800, h: 1200 },
  { src: "/images/home/experience/hut-deck.webp", alt: "A guest sitting on the hut deck above the river", w: 1012, h: 1800 },
  { src: "/images/home/experience/lounge-windows.webp", alt: "The sitting room with wood beams and garden windows", w: 1800, h: 1200 },
  { src: "/images/home/experience/goats-in-the-river.webp", alt: "Goats and sheep crossing the Shigar river", w: 1013, h: 1800 },
  { src: "/images/home/experience/willow-weaving.webp", alt: "A craftsman weaving a willow basket beside the lodge", w: 1013, h: 1800 },
  { src: "/images/home/experience/basket-workshop.webp", alt: "Guests learning willow weaving on a rug in the garden", w: 1012, h: 1800 },
  { src: "/images/home/experience/garden-hands.webp", alt: "Hands in the garden with the lodge behind the sunflowers", w: 1012, h: 1800 },
  { src: "/images/home/experience/walk-by-the-river.webp", alt: "A guest looking across the pale Shigar river", w: 1012, h: 1800 },
  { src: "/images/home/experience/guest-on-the-rock.webp", alt: "A guest standing on a river boulder in the valley", w: 1012, h: 1800 },
  { src: "/images/home/experience/guest-and-peaks.webp", alt: "A guest on the riverbank under the Karakoram", w: 1012, h: 1800 },
  { src: "/images/home/experience/grass-and-mountains.webp", alt: "A guest in the riverside grass facing the mountains", w: 1012, h: 1800 },
  { src: "/images/home/experience/standing-in-the-grass.webp", alt: "A guest standing in tall grass by the river", w: 1012, h: 1800 },
  { src: "/images/home/experience/riverbank-evening.webp", alt: "Evening light on the riverbank lawn", w: 1012, h: 1800 },
  { src: "/images/home/experience/window-to-k2-country.webp", alt: "Snow mountains framed by a bedroom window", w: 1800, h: 1012 },
  { src: "/images/home/experience/window-garden.webp", alt: "A quiet chair and the garden through a four-pane window", w: 1200, h: 1800 },
  { src: "/images/home/experience/bedroom-wide.webp", alt: "A bedroom with a poplar ceiling and a window to the fields", w: 1800, h: 1012 },
  { src: "/images/home/experience/bedroom-morning.webp", alt: "Morning light on a simple wooden bed", w: 1012, h: 1800 },
  { src: "/images/home/experience/bed-embroidery.webp", alt: "Embroidered hoops above a guest bed", w: 1012, h: 1800 },
  { src: "/images/home/experience/mirror-bed.webp", alt: "A bed reflected in a wooden standing mirror", w: 1200, h: 1800 },
  { src: "/images/home/experience/bathroom-light.webp", alt: "A stone-floor bathroom with bamboo blinds", w: 1200, h: 1800 },
  { src: "/images/home/experience/rain-shower.webp", alt: "A black rain shower beside a bamboo shade", w: 1200, h: 1800 },
  { src: "/images/home/experience/lounge-beams.webp", alt: "The sitting room under poplar beams", w: 1200, h: 1800 },
  { src: "/images/home/experience/dining-sun.webp", alt: "Sun on the live-edge dining table", w: 1200, h: 1800 },
  { src: "/images/home/experience/breakfast-table.webp", alt: "Breakfast laid in the dining room", w: 1012, h: 1800 },
  { src: "/images/home/experience/evening-music.webp", alt: "Evening music and stories in the sitting room", w: 1013, h: 1800 },
  { src: "/images/home/experience/stars-over-porch.webp", alt: "The lodge porch under a star-filled sky", w: 1012, h: 1800 },
  { src: "/images/home/experience/lodge-night.webp", alt: "Warm windows of the lodge under the stars", w: 1012, h: 1800 },
  { src: "/images/home/experience/lodge-night-wide.webp", alt: "The lodge silhouette against the night sky", w: 1800, h: 1012 },
  { src: "/images/home/experience/guest-under-stars.webp", alt: "A guest sitting under the Milky Way", w: 1012, h: 1800 },
  { src: "/images/home/experience/milky-way-ridge.webp", alt: "The Milky Way over the mountain ridge", w: 1012, h: 1800 },
  { src: "/images/home/experience/milky-way-trees.webp", alt: "Stars through the trees at the retreat", w: 1012, h: 1800 },
  { src: "/images/home/experience/milky-way-poplars.webp", alt: "The Milky Way above the poplar trees", w: 1012, h: 1800 },
] as const;

export default function FromTheHouse() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState<number | null>(null);
  const [index, setIndex] = useState(0);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const paused = useRef(false);
  const resumeTimer = useRef(0);

  useEffect(() => {
    if (reduce) return;
    const id = window.setInterval(() => {
      const el = scrollerRef.current;
      if (!el || paused.current || open !== null) return;
      if (window.matchMedia("(min-width: 768px)").matches) return;
      const cards = Array.from(el.children) as HTMLElement[];
      if (!cards.length) return;
      const first = cards[0].offsetLeft;
      let current = 0;
      cards.forEach((card, i) => {
        if (el.scrollLeft + 20 >= card.offsetLeft - first) current = i;
      });
      const next = (current + 1) % cards.length;
      el.scrollTo({ left: cards[next].offsetLeft - first, behavior: "smooth" });
      setIndex(next);
    }, 3800);
    return () => window.clearInterval(id);
  }, [reduce, open]);

  const pause = () => {
    paused.current = true;
    window.clearTimeout(resumeTimer.current);
    resumeTimer.current = window.setTimeout(() => {
      paused.current = false;
    }, 7000);
  };

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(null);
      if (e.key === "ArrowRight") setOpen((i) => (i === null ? i : (i + 1) % photos.length));
      if (e.key === "ArrowLeft") setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const photo = open === null ? null : photos[open];

  return (
    <section className="border-t border-earth/10 bg-paper px-6 py-24 md:px-12 md:py-32">
      <div className="mx-auto max-w-7xl">
        <header className="mb-12 max-w-xl space-y-4 md:mb-16">
          <h2 className="font-serif text-3xl italic leading-tight text-ink md:text-5xl">
            Days at the river
          </h2>
          <p className="font-light leading-relaxed text-ink-soft">
            Rooms, meals, willow weaving, the walk to the water, and the sky after dark. Photographed at the house.
          </p>
        </header>

        <div className="md:hidden">
          <div
            ref={scrollerRef}
            role="region"
            aria-roledescription="carousel"
            aria-label="Days at the river"
            className="-mx-6 flex snap-x snap-mandatory gap-3 overflow-x-auto px-6 pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            onPointerDown={pause}
            onTouchStart={pause}
            onScroll={() => {
              const el = scrollerRef.current;
              if (!el) return;
              const cards = Array.from(el.children) as HTMLElement[];
              const first = cards[0]?.offsetLeft ?? 0;
              let current = 0;
              cards.forEach((card, i) => {
                if (el.scrollLeft + 20 >= card.offsetLeft - first) current = i;
              });
              setIndex(current);
            }}
          >
            {photos.map((item, i) => (
              <button
                key={item.src}
                type="button"
                onClick={() => setOpen(i)}
                className="experience-tile w-[78%] shrink-0 snap-center text-left"
                aria-label={`Open photograph: ${item.alt}`}
                aria-hidden={index !== i}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  width={item.w}
                  height={item.h}
                  sizes="78vw"
                  className="aspect-[4/5] w-full bg-canvas object-cover"
                />
              </button>
            ))}
          </div>
          <p className="mt-3 text-center text-[11px] uppercase tracking-[0.16em] text-ink-muted">
            {String(index + 1).padStart(2, "0")} / {String(photos.length).padStart(2, "0")}
          </p>
        </div>

        <div className="hidden columns-2 gap-2 md:block md:columns-3 md:gap-3 lg:columns-4">
          {photos.map((item, i) => (
            <button
              key={item.src}
              type="button"
              onClick={() => setOpen(i)}
              className="experience-tile mb-2 block w-full break-inside-avoid text-left md:mb-3"
              aria-label={`Open photograph: ${item.alt}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                width={item.w}
                height={item.h}
                sizes="(max-width: 1024px) 33vw, 25vw"
                className="w-full bg-canvas object-cover"
              />
            </button>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {photo ? (
          <motion.div
            key={photo.src}
            role="dialog"
            aria-modal="true"
            aria-label={photo.alt}
            initial={reduce ? { opacity: 0 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="fixed inset-0 z-[60] flex items-center justify-center bg-ink/80 p-4 md:p-10"
            onClick={() => setOpen(null)}
          >
            <button
              type="button"
              onClick={() => setOpen(null)}
              className="absolute right-4 top-4 text-paper/80 transition-colors hover:text-paper md:right-8 md:top-8"
              aria-label="Close photograph"
            >
              <X size={22} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => (i === null ? i : (i - 1 + photos.length) % photos.length));
              }}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-paper/80 transition-colors hover:text-paper md:left-8"
              aria-label="Previous photograph"
            >
              <ChevronLeft size={28} />
            </button>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                setOpen((i) => (i === null ? i : (i + 1) % photos.length));
              }}
              className="absolute right-3 top-1/2 -translate-y-1/2 text-paper/80 transition-colors hover:text-paper md:right-8"
              aria-label="Next photograph"
            >
              <ChevronRight size={28} />
            </button>
            <Image
              src={photo.src}
              alt={photo.alt}
              width={photo.w}
              height={photo.h}
              sizes="90vw"
              className="max-h-[88dvh] w-auto max-w-full object-contain"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
