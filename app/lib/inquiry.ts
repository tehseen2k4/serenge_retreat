export const WHATSAPP_NUMBER = "923349669198";
export const ROOMS_PDF = "/docs/serenge-rooms.pdf";
export const MENU_PDF = "/docs/serenge-menu.pdf";
export const BOOKING_COM_URL = "https://www.booking.com/Pulse-zJRGAy";

export const ROOM_OPTIONS = [
  { id: "Deluxe Room", label: "Deluxe Room" },
  { id: "Twin Bed Room", label: "Twin Bed Room" },
  { id: "Riverside Hut", label: "Riverside Hut" },
] as const;

export type InquiryPayload = {
  name: string;
  email: string;
  phone: string;
  checkIn?: string;
  checkOut?: string;
  adults?: number | string;
  roomType?: string;
  needsGuide?: boolean | string;
  airportPickup?: boolean | string;
  specialRequirements?: string;
  journey?: string;
};

function yesNo(value: boolean | string | undefined) {
  return value === true || value === "true" ? "Yes" : "No";
}

export function formatWhatsAppMessage(data: InquiryPayload) {
  const lines = [
    "Serenge Retreat inquiry",
    `Name: ${data.name}`,
    `WhatsApp: ${data.phone || "Not shared"}`,
    `Email: ${data.email || "Not shared"}`,
    `Check-in: ${data.checkIn || "Flexible"}`,
    `Check-out: ${data.checkOut || "Flexible"}`,
    `Adults: ${data.adults || "1"}`,
    `Room: ${data.roomType || "Not chosen"}`,
    `Airport pick and drop: ${yesNo(data.airportPickup)}`,
    `Guide: ${yesNo(data.needsGuide)}`,
  ];
  if (data.journey) lines.push(`Journey: ${data.journey}`);
  lines.push(`Notes: ${data.specialRequirements || "None"}`);
  return lines.join("\n");
}

export function whatsAppHref(opts?: {
  text?: string;
  medium?: string;
  campaign?: string;
}) {
  const params = new URLSearchParams();
  if (opts?.text) params.set("text", opts.text);
  params.set("utm_source", "site");
  params.set("utm_medium", opts?.medium || "inquire");
  params.set("utm_campaign", opts?.campaign || "stay");
  return `https://wa.me/${WHATSAPP_NUMBER}?${params.toString()}`;
}

export function openWhatsAppInquiry(data: InquiryPayload) {
  const url = whatsAppHref({
    text: formatWhatsAppMessage(data),
    medium: "inquire",
    campaign: "stay",
  });
  window.open(url, "_blank", "noopener,noreferrer");
}

export async function submitInquiry(data: InquiryPayload) {
  let apiError: Error | undefined;
  try {
    const res = await fetch("/api/leads", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });
    const result = await res.json();
    if (!res.ok) {
      apiError = new Error(result.details || result.error || "Failed to submit inquiry");
    } else {
      openWhatsAppInquiry(data);
      return result;
    }
  } catch (err) {
    apiError = err instanceof Error ? err : new Error("Failed to submit inquiry");
  }
  openWhatsAppInquiry(data);
  if (apiError) throw apiError;
}
