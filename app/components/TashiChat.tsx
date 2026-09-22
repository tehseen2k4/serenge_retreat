"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { X } from "lucide-react";
import { MENU_PDF, ROOMS_PDF, whatsAppHref } from "../lib/inquiry";

type Turn = { from: "tashi" | "you"; text: string };

const chips = [
  { id: "reach", label: "How do I get there?" },
  { id: "rooms", label: "The rooms" },
  { id: "eat", label: "What do we eat?" },
  { id: "when", label: "Best months" },
  { id: "airport", label: "Airport pickup" },
  { id: "net", label: "Internet" },
  { id: "book", label: "I want to stay" },
  { id: "checkin", label: "Check-in time" },
  { id: "family", label: "Families & children" },
  { id: "veg", label: "Vegetarian food" },
  { id: "winter", label: "Winter stays" },
  { id: "power", label: "Electricity" },
  { id: "fort", label: "Shigar Fort" },
  { id: "guides", label: "Guides & treks" },
  { id: "pack", label: "What to pack" },
  { id: "pay", label: "How do I pay?" },
  { id: "laundry", label: "Laundry" },
  { id: "count", label: "How many rooms?" },
];

const replies: Record<string, string> = {
  reach:
    "Fly into Skardu (KDU). We are about 57 km from the airport, a 1 hour 30 to 1 hour 45 minute drive into Shigar, then a short rough track into Alchori. Ask us for a pickup if you would rather not drive the last stretch.",
  rooms:
    "Three rooms: Baltoro Deluxe Room, Arandu Twin Room, and the Riverside Hut. All look toward mountain or river. Open the room sheet, or the Aesthetic gallery on Stay, for beds, baths, and views.",
  eat:
    "Balti cooking from the village: daudo soup, mamtu, moskut, baley, kisser at breakfast, and tea that does not hurry. The full kitchen list is on the menu.",
  when:
    "April to October is the generous season: blossoms, walking weather, and clear nights. Winter is quieter, colder, and very still. Tell us your month and we will be honest about the road.",
  airport:
    "Yes. We arrange airport pick and drop on request. Write it on your inquiry, and we will meet you at Skardu.",
  net:
    "There is internet at the lodge, but this is a far mountain valley. It is not high-speed wifi. Signal moves with weather. Come to rest, not to stream.",
  book:
    "Use Plan a stay on this page, or the wizard on Stay. It emails the house and opens WhatsApp with your dates already written. You tap send.",
  checkin:
    "Arrive in the afternoon when you can. There is no city rush here. Tell us your flight or road time and we will wait with tea.",
  family:
    "Families, couples, and solo travelers all stay. The Twin Room suits friends or children sharing. The last track is rough, so say if you are traveling with small children and we will help with pickup.",
  veg:
    "Yes. Tell us in the notes. The kitchen cooks Balti and Pakistani plates, garden vegetables, and can keep meat off the table.",
  winter:
    "Winter is possible, but the valley is cold and the road can close with snow. Write us the month. We will say yes only if the house can receive you well.",
  power:
    "The house has electricity and solar lighting. It is a mountain valley, so brief cuts can happen. Bring a power bank if you need one.",
  fort:
    "Shigar Fort (Fong Khar) is about 17 km, around 25 minutes. We can help with a vehicle or a local guide for the visit.",
  guides:
    "Yes. Local hiking and cultural guides, and high-altitude porters through Reego Adventure. Mark the guide box on your inquiry.",
  pack:
    "Layers, a warm evening layer even in summer, walking shoes, sun protection, and a small torch. The river is loud. The nights are dark. Leave the city wardrobe at home.",
  pay:
    "Write us on WhatsApp. We will sit with you and guide you through the nights, the deposit, and how to pay. There is no machine between us.",
  laundry:
    "Laundry on request. It dries with the valley air, so allow a day.",
  count:
    "Three guest rooms only: Deluxe, Twin, and the Riverside Hut. The house stays quiet on purpose.",
};

const follow: Record<string, { href: string; label: string } | undefined> = {
  rooms: { href: ROOMS_PDF, label: "Open room PDF" },
  eat: { href: MENU_PDF, label: "Open the menu" },
  reach: { href: "/how-to-reach-serenge-retreat", label: "Travel notes" },
  book: { href: "/stay#booking-form", label: "Open the stay form" },
  pay: { href: whatsAppHref({ medium: "tashi", campaign: "stay" }), label: "Chat with the house" },
  fort: { href: "/land", label: "The land around us" },
};

export default function TashiChat() {
  const reduce = useReducedMotion();
  const [open, setOpen] = useState(false);
  const listRef = useRef<HTMLDivElement>(null);
  const [turns, setTurns] = useState<Turn[]>([
    {
      from: "tashi",
      text: "Tashi here. I live by the river. Tap a question. I will answer what I know.",
    },
  ]);

  useEffect(() => {
    listRef.current?.scrollTo({ top: listRef.current.scrollHeight, behavior: reduce ? "auto" : "smooth" });
  }, [turns, reduce]);

  const ask = (id: string, label: string) => {
    const reply = replies[id];
    if (!reply) return;
    setTurns((prev) => [
      ...prev,
      { from: "you", text: label },
      { from: "tashi", text: reply },
    ]);
  };

  const lastId = chips.find((c) => turns.at(-1)?.text === replies[c.id])?.id;
  const extra = lastId ? follow[lastId] : undefined;

  return (
    <div className="fixed bottom-6 left-4 z-[48] md:left-6">
      <AnimatePresence>
        {open && (
          <motion.div
            initial={reduce ? false : { opacity: 0, transform: "translateY(8px) scale(0.98)" }}
            animate={{ opacity: 1, transform: "translateY(0px) scale(1)" }}
            exit={reduce ? { opacity: 0 } : { opacity: 0, transform: "translateY(8px) scale(0.98)" }}
            transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
            className="mb-3 flex h-[min(26rem,calc(100dvh-11rem))] w-[min(22rem,calc(100vw-2rem))] origin-bottom-left flex-col overflow-hidden rounded-sm border border-earth/20 bg-paper shadow-[0_12px_40px_rgba(28,25,23,0.12)]"
          >
            <header className="flex items-center justify-between border-b border-earth/10 bg-earth px-3 py-2.5">
              <div className="flex items-center gap-2.5">
                <span className="relative h-9 w-9 overflow-hidden rounded-full bg-paper">
                  <Image src="/images/logo_brown.png" alt="" fill className="object-contain p-1" sizes="36px" />
                </span>
                <div>
                  <p className="text-sm font-medium leading-none text-paper">Chat Tashi</p>
                  <p className="mt-1 text-[10px] uppercase tracking-[0.16em] text-paper/70">By the Shigar river</p>
                </div>
              </div>
              <button type="button" onClick={() => setOpen(false)} aria-label="Close Tashi" className="text-paper/80 hover:text-paper">
                <X size={16} />
              </button>
            </header>

            <div ref={listRef} className="flex-1 space-y-3 overflow-y-auto bg-canvas/40 px-3 py-4">
              {turns.map((turn, i) => (
                <div
                  key={`${turn.from}-${i}`}
                  className={turn.from === "tashi" ? "flex items-end gap-2" : "flex justify-end"}
                >
                  {turn.from === "tashi" ? (
                    <span className="relative mb-0.5 h-6 w-6 shrink-0 overflow-hidden rounded-full bg-paper">
                      <Image src="/images/logo_brown.png" alt="" fill className="object-contain p-0.5" sizes="24px" />
                    </span>
                  ) : null}
                  <p
                    className={
                      turn.from === "tashi"
                        ? "max-w-[85%] bg-paper px-3 py-2 font-light text-sm leading-relaxed text-ink"
                        : "max-w-[80%] bg-earth px-3 py-2 text-sm text-paper"
                    }
                  >
                    {turn.text}
                  </p>
                </div>
              ))}
              {extra ? (
                <a
                  href={extra.href}
                  target={extra.href.startsWith("http") || extra.href.endsWith(".pdf") ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="ml-8 inline-block text-xs uppercase tracking-widest text-earth underline underline-offset-4"
                >
                  {extra.label}
                </a>
              ) : null}
            </div>

            <div className="max-h-32 overflow-y-auto border-t border-earth/10 bg-paper px-3 py-3">
              <div className="flex flex-wrap gap-1.5">
                {chips.map((chip) => (
                  <button
                    key={chip.id}
                    type="button"
                    onClick={() => ask(chip.id, chip.label)}
                    className="border border-earth/20 px-2.5 py-1.5 text-[11px] text-ink-soft transition-colors hover:border-earth hover:text-earth active:scale-[0.97]"
                  >
                    {chip.label}
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full bg-earth py-1.5 pl-1.5 pr-4 text-paper shadow-[0_8px_24px_rgba(120,53,15,0.28)] transition-transform active:scale-[0.97]"
        aria-expanded={open}
        aria-label={open ? "Close Chat Tashi" : "Open Chat Tashi"}
      >
        <span className="relative h-10 w-10 overflow-hidden rounded-full bg-paper">
          <Image src="/images/logo_brown.png" alt="" fill className="object-contain p-1" sizes="40px" />
        </span>
        <span className="pr-1 text-sm font-medium">Chat Tashi</span>
      </button>
    </div>
  );
}
