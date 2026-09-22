import { BOOKING_COM_URL } from "../lib/inquiry";

type Variant = "inline" | "block";

export default function BookingDotComLink({ variant = "inline" }: { variant?: Variant }) {
  if (variant === "block") {
    return (
      <a
        href={BOOKING_COM_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="group block border border-earth/10 bg-paper px-6 py-5 text-left transition-colors hover:border-earth/30"
      >
        <p className="text-[10px] uppercase tracking-[0.16em] text-earth">Also listed on</p>
        <p className="mt-1 font-serif text-xl italic text-ink group-hover:text-earth">Booking.com</p>
        <p className="mt-2 text-sm font-light text-ink-soft">
          Check dates and reserve there if you prefer a platform. Direct inquiry still reaches the house.
        </p>
      </a>
    );
  }

  return (
    <a
      href={BOOKING_COM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className="text-earth underline underline-offset-4 transition-colors hover:text-ink"
    >
      Booking.com
    </a>
  );
}
