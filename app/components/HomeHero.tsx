"use client";

import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, useReducedMotion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const plates = [
  {
    src: "/images/night retreat.png",
    alt: "Serengé Retreat at night, a lit lodge at the end of a cobblestone path under the Milky Way",
  },
  {
    src: "/images/spring retreat.png",
    alt: "Serengé Retreat in spring, wildflowers lining the path to the lodge beneath snow peaks",
  },
  {
    src: "/images/autumn.webp",
    alt: "Serengé Retreat in autumn, golden poplars and a stone path toward the Karakoram",
  },
  {
    src: "/images/snow.webp",
    alt: "Serengé Retreat in winter, the same path and lodge under snow and a clear blue sky",
  },
];

const easeOut = [0.23, 1, 0.32, 1] as const;

export default function HomeHero() {
  const reduce = useReducedMotion();
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (reduce || !sectionRef.current) return;
    const section = sectionRef.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        section.classList.toggle("hero-paused", !entry.isIntersecting);
      },
      { threshold: 0 }
    );
    observer.observe(section);
    return () => observer.disconnect();
  }, [reduce]);

  return (
    <section
      ref={sectionRef}
      className="relative isolate min-h-[calc(100dvh-5rem)] overflow-hidden bg-ink"
    >
      <div className="absolute inset-0">
        {plates.map((plate, i) => (
          <div
            key={plate.src}
            className={
              reduce
                ? i === 0
                  ? "absolute inset-0 opacity-100"
                  : "hidden"
                : i === 0
                  ? "hero-plate hero-plate-first absolute inset-0"
                  : "hero-plate absolute inset-0 opacity-0"
            }
            style={
              reduce
                ? undefined
                : { animationDelay: `${i * 6}s` }
            }
          >
            <div className={reduce ? "absolute inset-0" : "hero-plate-inner absolute inset-0"}>
              <Image
                src={plate.src}
                alt={reduce || i === 0 ? plate.alt : ""}
                fill
                priority={i === 0}
                quality={75}
                sizes="100vw"
                className="object-cover object-[center_45%]"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute inset-0 bg-gradient-to-t from-ink/65 via-ink/20 to-transparent pointer-events-none" />

      <div className="relative z-10 flex min-h-[calc(100dvh-5rem)] items-end px-6 pb-16 pt-10 md:px-12 md:pb-20 lg:px-16">
        <div className="max-w-xl">
          <motion.h1
            className="font-serif text-[2.5rem] leading-[1.12] tracking-[-0.03em] text-paper pb-1 md:text-5xl lg:text-[3.35rem]"
            initial={reduce ? false : { opacity: 0, transform: "translateY(12px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.7, ease: easeOut, delay: reduce ? 0 : 0.12 }}
          >
            Experience
            <span className="mt-1 block italic font-normal pb-1">the serenity</span>
          </motion.h1>

          <motion.p
            className="mt-6 text-base font-light leading-relaxed text-paper/85 md:text-[1.05rem]"
            initial={reduce ? false : { opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.7, ease: easeOut, delay: reduce ? 0 : 0.2 }}
          >
            A riverside stay in Shigar Valley, beneath the Karakoram.
          </motion.p>

          <motion.div
            className="mt-8"
            initial={reduce ? false : { opacity: 0, transform: "translateY(10px)" }}
            animate={{ opacity: 1, transform: "translateY(0px)" }}
            transition={{ duration: 0.7, ease: easeOut, delay: reduce ? 0 : 0.28 }}
          >
            <Link
              href="/stay#booking-form"
              className="hero-cta inline-flex items-center gap-2.5 rounded-full bg-paper px-6 py-3 text-sm text-ink"
            >
              Plan your stay
              <ArrowRight size={16} strokeWidth={1.5} aria-hidden="true" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
