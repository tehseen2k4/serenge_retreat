import { NextResponse } from 'next/server';

// Revalidate every 24 hours — cached by Next.js edge/ISR
export const revalidate = 86400;

const PLACE_ID = 'ChIJ3SqGYQBZ5DgR16RUTq_f2zc';

export async function GET() {
  const apiKey = process.env.GOOGLE_PLACES_API_KEY || process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

  if (!apiKey) {
    return NextResponse.json(
      { error: 'Google Places API key is not configured' },
      { status: 500 }
    );
  }

  try {
    const url = `https://maps.googleapis.com/maps/api/place/details/json?place_id=${PLACE_ID}&fields=name,rating,reviews,user_ratings_total&reviews_sort=newest&language=en&key=${apiKey}`;

    const res = await fetch(url, {
      next: { revalidate: 86400 }, // CDN cache hint
    });

    if (!res.ok) {
      throw new Error(`Google API HTTP error: ${res.status}`);
    }

    const data = await res.json();

    if (data.status !== 'OK') {
      console.error('[/api/reviews] Google Places error:', data.status, data.error_message);
      return NextResponse.json(
        { error: data.status, message: data.error_message },
        { status: 500 }
      );
    }

    const { name, rating, reviews, user_ratings_total } = data.result;

    // Filter to only show 4-5 star reviews and limit to best 6
    const filteredReviews = (reviews || [])
      .filter((r: { rating: number }) => r.rating >= 4)
      .slice(0, 6);

    return NextResponse.json({
      name,
      rating,
      user_ratings_total,
      reviews: filteredReviews,
    });
  } catch (error) {
    console.error('[/api/reviews] Fetch failed:', error);
    return NextResponse.json(
      { error: 'Failed to fetch reviews from Google' },
      { status: 500 }
    );
  }
}
