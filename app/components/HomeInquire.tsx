"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ArrowRight, Check, ChevronDown, Minus } from "lucide-react";
import { ROOM_OPTIONS, ROOMS_PDF, submitInquiry, type InquiryPayload } from "../lib/inquiry";
import BookingDotComLink from "./BookingDotComLink";

const STORAGE_KEY = "serenge-inquire-panel";

const empty: InquiryPayload = {
  name: "",
  email: "",
  phone: "",
  checkIn: "",
  checkOut: "",
  adults: 2,
  roomType: "Deluxe Room",
  airportPickup: false,
  needsGuide: false,
  specialRequirements: "",
};

function FieldLabel({ children }: { children: React.ReactNode }) {
  return <label className="block text-[10px] uppercase tracking-[0.16em] text-ink/50">{children}</label>;
}

function SelectWrap({ children }: { children: React.ReactNode }) {
  return (
    <div className="relative">
      {children}
      <ChevronDown size={16} className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-earth" aria-hidden />
    </div>
  );
}

const selectClass = "w-full appearance-none bg-canvas px-3 py-2.5 pr-9 text-sm text-ink outline-none";
const inputClass = "w-full bg-canvas px-3 py-2.5 text-sm text-ink outline-none";

export default function HomeInquire() {
  const reduce = useReducedMotion();
  const [panel, setPanel] = useState<"hidden" | "open" | "min">("hidden");
  const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle");
  const [data, setData] = useState<InquiryPayload>(empty);

  useEffect(() => {
    const saved = sessionStorage.getItem(STORAGE_KEY);
    if (saved === "min" || saved === "open") {
      setPanel(saved);
      return;
    }
    let shown = false;
    const reveal = () => {
      if (shown) return;
      shown = true;
      setPanel("open");
      sessionStorage.setItem(STORAGE_KEY, "open");
    };
    const onScroll = () => {
      if (window.scrollY < window.innerHeight * 0.85) return;
      reveal();
      window.removeEventListener("scroll", onScroll);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const minimize = () => {
    sessionStorage.setItem(STORAGE_KEY, "min");
    setPanel("min");
  };

  const expand = () => {
    sessionStorage.setItem(STORAGE_KEY, "open");
    setPanel("open");
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    try {
      await submitInquiry(data);
      setStatus("success");
    } catch {
      setStatus("success");
    }
  };

  if (panel === "hidden") return null;

  return (
    <AnimatePresence mode="wait">
      {panel === "min" ? (
        <motion.button
          key="min"
          type="button"
          onClick={expand}
          initial={reduce ? false : { opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 8 }}
          transition={{ duration: 0.2, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-24 right-4 z-[45] flex items-center gap-2 border border-earth/20 bg-paper px-4 py-3 text-sm text-ink shadow-[0_10px_28px_rgba(28,25,23,0.12)] md:right-6"
          aria-label="Reopen stay planner"
        >
          <span className="font-serif italic">
            {status === "success" ? "Inquiry sent" : "Plan a stay"}
          </span>
          <span className="text-[10px] uppercase tracking-widest text-earth">Open</span>
        </motion.button>
      ) : (
        <motion.aside
          key="open"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          exit={reduce ? { opacity: 0 } : { opacity: 0, y: 12 }}
          transition={{ duration: 0.28, ease: [0.23, 1, 0.32, 1] }}
          className="fixed bottom-24 left-4 right-4 z-[45] flex max-h-[calc(100dvh-13.5rem)] max-w-md flex-col overflow-hidden border border-earth/15 bg-paper shadow-[0_16px_40px_rgba(28,25,23,0.12)] md:left-auto md:right-6"
          role="dialog"
          aria-label="Plan a stay"
        >
          <div className="flex shrink-0 items-start justify-between gap-3 border-b border-earth/10 px-5 py-3.5">
            <div className="min-w-0">
              {status === "success" ? (
                <p className="font-serif text-xl italic text-ink">Sent both ways</p>
              ) : (
                <>
                  <p className="font-serif text-xl italic leading-tight text-ink">A few nights?</p>
                  <p className="mt-1 text-sm font-light text-ink-soft">
                    Same details as the booking form. We email the house and open WhatsApp together.
                  </p>
                </>
              )}
            </div>
            <button
              type="button"
              onClick={minimize}
              className="relative z-[1] mt-0.5 flex shrink-0 cursor-pointer items-center gap-1.5 px-2 py-1.5 text-[11px] uppercase tracking-[0.16em] text-earth transition-colors hover:text-ink"
              aria-label="Hide stay planner"
            >
              <Minus size={14} />
              Hide
            </button>
          </div>

          <div className="min-h-0 flex-1 overflow-y-auto px-5 py-4">
            {status === "success" ? (
              <div className="space-y-3">
                <p className="text-sm font-light text-ink-soft">
                  We emailed the house, and WhatsApp is open with the same inquiry. Tap send in WhatsApp if it is waiting.
                </p>
                <button
                  type="button"
                  onClick={() => { setStatus("idle"); setData(empty); }}
                  className="text-[10px] uppercase tracking-widest text-earth underline underline-offset-4"
                >
                  Plan another stay
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <FieldLabel>Check in</FieldLabel>
                    <input
                      required
                      type="date"
                      className={inputClass}
                      value={data.checkIn}
                      onChange={(e) => setData({ ...data, checkIn: e.target.value })}
                    />
                  </div>
                  <div className="space-y-1">
                    <FieldLabel>Check out</FieldLabel>
                    <input
                      required
                      type="date"
                      className={inputClass}
                      value={data.checkOut}
                      onChange={(e) => setData({ ...data, checkOut: e.target.value })}
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <FieldLabel>Adults</FieldLabel>
                    <SelectWrap>
                      <select
                        className={selectClass}
                        value={data.adults}
                        onChange={(e) => setData({ ...data, adults: parseInt(e.target.value, 10) })}
                      >
                        {[1, 2, 3, 4, 5, 6, 7, 8].map((n) => (
                          <option key={n} value={n}>{n} {n === 1 ? "Adult" : "Adults"}</option>
                        ))}
                      </select>
                    </SelectWrap>
                  </div>
                  <div className="space-y-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <FieldLabel>Room</FieldLabel>
                      <a href={ROOMS_PDF} target="_blank" rel="noopener noreferrer" className="text-[10px] uppercase tracking-widest text-earth underline underline-offset-4">
                        Details
                      </a>
                    </div>
                    <SelectWrap>
                      <select
                        className={selectClass}
                        value={data.roomType}
                        onChange={(e) => setData({ ...data, roomType: e.target.value })}
                      >
                        {ROOM_OPTIONS.map((room) => (
                          <option key={room.id} value={room.id}>{room.label}</option>
                        ))}
                      </select>
                    </SelectWrap>
                  </div>
                </div>

                <label className="flex cursor-pointer items-center gap-3 bg-canvas px-3 py-2.5 text-sm text-ink-soft">
                  <span className={`flex h-4 w-4 shrink-0 items-center justify-center border border-earth/40 ${data.airportPickup ? "bg-earth text-white" : ""}`}>
                    {data.airportPickup ? <Check size={10} /> : null}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={Boolean(data.airportPickup)}
                    onChange={(e) => setData({ ...data, airportPickup: e.target.checked })}
                  />
                  Airport pick and drop
                </label>
                <label className="flex cursor-pointer items-center gap-3 bg-canvas px-3 py-2.5 text-sm text-ink-soft">
                  <span className={`flex h-4 w-4 shrink-0 items-center justify-center border border-earth/40 ${data.needsGuide ? "bg-earth text-white" : ""}`}>
                    {data.needsGuide ? <Check size={10} /> : null}
                  </span>
                  <input
                    type="checkbox"
                    className="sr-only"
                    checked={Boolean(data.needsGuide)}
                    onChange={(e) => setData({ ...data, needsGuide: e.target.checked })}
                  />
                  Local hiking or cultural guide
                </label>

                <div className="space-y-1">
                  <FieldLabel>Notes</FieldLabel>
                  <textarea
                    placeholder="Meals, arrivals, quiet requests"
                    className="min-h-[72px] w-full resize-none bg-canvas px-3 py-2.5 text-sm font-light text-ink outline-none"
                    value={data.specialRequirements}
                    onChange={(e) => setData({ ...data, specialRequirements: e.target.value })}
                  />
                </div>

                <div className="space-y-1">
                  <FieldLabel>Full name</FieldLabel>
                  <input
                    required
                    type="text"
                    placeholder="Your name"
                    className={inputClass}
                    value={data.name}
                    onChange={(e) => setData({ ...data, name: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <FieldLabel>Email</FieldLabel>
                  <input
                    required
                    type="email"
                    placeholder="name@email.com"
                    className={inputClass}
                    value={data.email}
                    onChange={(e) => setData({ ...data, email: e.target.value })}
                  />
                </div>
                <div className="space-y-1">
                  <FieldLabel>WhatsApp number</FieldLabel>
                  <input
                    required
                    type="tel"
                    placeholder="+92 …"
                    className={inputClass}
                    value={data.phone}
                    onChange={(e) => setData({ ...data, phone: e.target.value })}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "submitting"}
                  className="inline-flex w-full items-center justify-center gap-2 bg-earth py-3 text-sm text-paper transition-colors hover:bg-ink active:scale-[0.99] disabled:opacity-50"
                >
                  {status === "submitting" ? "Sending email & WhatsApp..." : "Email us & open WhatsApp"}
                  <ArrowRight size={16} />
                </button>
                <p className="text-center text-xs font-light text-ink-soft">
                  Or reserve on <BookingDotComLink />.
                </p>
              </form>
            )}
          </div>
        </motion.aside>
      )}
    </AnimatePresence>
  );
}
