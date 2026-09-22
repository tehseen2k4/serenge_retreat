import { NextResponse } from "next/server";

export const dynamic = "force-dynamic";

const PLACE_ID = "ChIJ3SqGYQBZ5DgR16RUTq_f2zc";

const CACHED = {
  name: "Serengé Retreat",
  rating: 5,
  user_ratings_total: 4,
  reviews: [
    {
      author_name: "Elena",
      author_url: "",
      profile_photo_url: "",
      rating: 4,
      relative_time_description: "January 2025",
      text: "The location is absolutely stunning- one of the most beautiful we've seen. We loved walking by the river, playing in the fields, and watching the sunsets. The staff were incredibly kind and did their best to make us feel at home. The food was delicious and clearly made with care.",
    },
    {
      author_name: "Ariz",
      author_url: "",
      profile_photo_url: "",
      rating: 5,
      relative_time_description: "1 year ago",
      text: "Loved our stay at The Serenge Retreat. Beautiful place in a peaceful location with lots of cute animals around. Super cosy, really friendly hosts that are more than happy to support all your needs. Great location for the Nature lover & Introvert person.",
    },
    {
      author_name: "Tassil Ali",
      author_url: "",
      profile_photo_url: "",
      rating: 5,
      relative_time_description: "April 2025",
      text: "Secluded spot. 30 minutes from Shigar. Pin drop silence perfect for self reflection. Highly recommended for solo travels. The hut will heal your nervous system. Axlam was very responsive and his brother Masud was a kind man.",
    },
    {
      author_name: "Naveed",
      author_url: "",
      profile_photo_url: "",
      rating: 5,
      relative_time_description: "July 2023",
      text: "The place is far away from the main Shigar area. It is an isolated basic hut where you could enjoy peace with scenes of the Indus River and mountains. Axlam is very friendly and accommodating.",
    },
  ],
};

type Review = {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
};

function ok(payload: {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: Review[];
  live: boolean;
}) {
  return NextResponse.json(payload);
}

function mapNewReviews(data: {
  displayName?: { text?: string };
  rating?: number;
  userRatingCount?: number;
  reviews?: Array<{
    rating?: number;
    relativePublishTimeDescription?: string;
    text?: { text?: string };
    authorAttribution?: { displayName?: string; uri?: string; photoUri?: string };
  }>;
}) {
  const reviews = (data.reviews || [])
    .filter((r) => (r.rating ?? 0) >= 4)
    .slice(0, 6)
    .map((r) => ({
      author_name: r.authorAttribution?.displayName || "Guest",
      author_url: r.authorAttribution?.uri || "",
      profile_photo_url: r.authorAttribution?.photoUri || "",
      rating: r.rating || 5,
      relative_time_description: r.relativePublishTimeDescription || "",
      text: r.text?.text || "",
    }));

  return {
    name: data.displayName?.text || "Serengé Retreat",
    rating: data.rating || 0,
    user_ratings_total: data.userRatingCount || reviews.length,
    reviews,
    live: reviews.length > 0,
  };
}

async function fetchPlacesNew(apiKey: string) {
  const res = await fetch(`https://places.googleapis.com/v1/places/${PLACE_ID}`, {
    headers: {
      "X-Goog-Api-Key": apiKey,
      "X-Goog-FieldMask": "displayName,rating,userRatingCount,reviews",
    },
    next: { revalidate: 86400 },
  });
  if (!res.ok) return null;
  return mapNewReviews(await res.json());
}

async function fetchPlacesLegacy(apiKey: string) {
  const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&reviews_sort=newest&language=en&key=${apiKey}`;
  const res = await fetch(url, { next: { revalidate: 86400 } });
  if (!res.ok) return null;
  const data = await res.json();
  if (data.status !== "OK" || !data.result) return null;
  const { name, rating, reviews, user_ratings_total } = data.result;
  const filtered = (reviews || [])
    .filter((r: { rating: number }) => r.rating >= 4)
    .slice(0, 6);
  if (!filtered.length) return null;
  return {
    name,
    rating,
    user_ratings_total,
    reviews: filtered,
    live: true,
  };
}

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (apiKey) {
    try {
      const fresh = (await fetchPlacesNew(apiKey)) || (await fetchPlacesLegacy(apiKey));
      if (fresh?.live) return ok(fresh);
    } catch {
      // Use the house copy below. Live Google reviews need billing on the Cloud project.
    }
  }

  return ok({ ...CACHED, live: false });
}
