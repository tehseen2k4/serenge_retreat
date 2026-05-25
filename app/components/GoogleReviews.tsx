"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";

interface GoogleReview {
  author_name: string;
  author_url: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface ReviewsData {
  name: string;
  rating: number;
  user_ratings_total: number;
  reviews: GoogleReview[];
}

// Static fallback reviews shown while loading or if API fails
const FALLBACK_REVIEWS = [
  {
    author_name: "Elena",
    profile_photo_url: "",
    rating: 4,
    relative_time_description: "January 2025",
    text: "The location is absolutely stunning- one of the most beautiful we've seen. We loved walking by the river, playing in the fields, and watching the sunsets. The staff were incredibly kind and did their best to make us feel at home. The food was delicious and clearly made with care.",
    author_url: "",
  },
  {
    author_name: "Ariz",
    profile_photo_url: "",
    rating: 5,
    relative_time_description: "1 year ago",
    text: "Loved our stay at The Serenge Retreat. Beautiful place in a peaceful location with lots of cute animals around. Super cosy, really friendly hosts that are more than happy to support all your needs. Great location for the Nature lover & Introvert person.",
    author_url: "",
  },
  {
    author_name: "Tassil Ali",
    profile_photo_url: "",
    rating: 5,
    relative_time_description: "April 2025",
    text: "Secluded spot. 30 minutes from Shigar. Pin drop silence perfect for self reflection. Highly recommended for solo travels. The hut will heal your nervous system. Axlam was very responsive and his brother Masud was a kind man.",
    author_url: "",
  },
  {
    author_name: "Naveed",
    profile_photo_url: "",
    rating: 5,
    relative_time_description: "July 2023",
    text: "The place is far away from the main Shigar area. It is an isolated basic hut where you could enjoy peace with scenes of the Indus River and mountains. Axlam is very friendly and accommodating.",
    author_url: "",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {[1, 2, 3, 4, 5].map((star) => (
        <svg
          key={star}
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="currentColor"
          className={`w-4 h-4 ${star <= rating ? "text-earth" : "text-earth/20"}`}
        >
          <path
            fillRule="evenodd"
            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  );
}

function ReviewCard({
  review,
  idx,
  isGoogle,
}: {
  review: GoogleReview;
  idx: number;
  isGoogle: boolean;
}) {
  return (
    <motion.div
      key={idx}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7, delay: idx * 0.05 }}
      className="w-[70vw] md:w-auto shrink-0 snap-center break-inside-avoid bg-white/60 p-8 rounded-sm border border-earth/10 hover:border-earth/30 transition-colors shadow-sm flex flex-col"
    >
      {/* Header: photo + name + stars */}
      <div className="flex items-start gap-4 mb-5">
        {review.profile_photo_url ? (
          <Image
            src={review.profile_photo_url}
            alt={review.author_name}
            width={40}
            height={40}
            className="rounded-full object-cover shrink-0"
            unoptimized // Google photos are external
          />
        ) : (
          <div className="w-10 h-10 rounded-full bg-earth/20 flex items-center justify-center shrink-0">
            <span className="text-earth font-serif text-sm font-medium">
              {review.author_name.charAt(0).toUpperCase()}
            </span>
          </div>
        )}
        <div className="flex-1 min-w-0">
          <span className="block font-medium text-ink text-sm truncate">
            {review.author_name}
          </span>
          <StarRating rating={review.rating} />
        </div>
        {isGoogle && (
          <div className="shrink-0 opacity-40" title="Google Review">
            <svg viewBox="0 0 24 24" className="w-4 h-4" fill="none">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </div>
        )}
      </div>

      {/* Review text */}
      <blockquote className="text-base font-light text-ink-soft leading-relaxed italic flex-1 whitespace-normal">
        &ldquo;{review.text}&rdquo;
      </blockquote>

      {/* Footer: time */}
      <cite className="block not-italic border-t border-earth/10 pt-4 mt-5">
        <span className="block text-ink-muted text-[10px] uppercase tracking-wider">
          {review.relative_time_description}
          {isGoogle && " · Google"}
        </span>
      </cite>
    </motion.div>
  );
}

export default function GoogleReviews() {
  const [data, setData] = useState<ReviewsData | null>(null);
  const [loading, setLoading] = useState(true);
  const [isGoogle, setIsGoogle] = useState(false);

  useEffect(() => {
    fetch("/api/reviews")
      .then((res) => res.json())
      .then((json) => {
        if (json.reviews && json.reviews.length > 0) {
          setData(json);
          setIsGoogle(true);
        }
      })
      .catch(() => {
        // silently fall back to static reviews
      })
      .finally(() => setLoading(false));
  }, []);

  const reviews: GoogleReview[] =
    isGoogle && data?.reviews?.length ? data.reviews : FALLBACK_REVIEWS;

  return (
    <div className="space-y-16">
      {/* Header */}
      <div className="text-center space-y-4">
        <p className="text-sm uppercase tracking-[0.4em] text-earth">
          Echoes of Guests
        </p>
        <h2 className="text-3xl md:text-5xl font-serif text-ink italic">
          Stories from the Sanctuary
        </h2>
        {/* Overall rating badge — only when live data is loaded */}
        {isGoogle && data && (
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-3 bg-white/70 border border-earth/15 rounded-full px-5 py-2 shadow-sm"
          >
            <div className="flex gap-0.5">
              {[1, 2, 3, 4, 5].map((s) => (
                <svg
                  key={s}
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className={`w-3.5 h-3.5 ${s <= Math.round(data.rating) ? "text-earth" : "text-earth/20"}`}
                >
                  <path
                    fillRule="evenodd"
                    d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                    clipRule="evenodd"
                  />
                </svg>
              ))}
            </div>
            <span className="text-ink font-medium text-sm">{data.rating.toFixed(1)}</span>
            <span className="text-ink-muted text-xs">
              ({data.user_ratings_total} reviews on Google)
            </span>
          </motion.div>
        )}
      </div>

      {/* Cards — Mobile carousel | Desktop masonry */}
      {loading ? (
        // Skeleton loader
        <div className="flex md:block overflow-x-auto md:overflow-visible gap-6 space-x-6 md:space-x-0 pb-8 md:pb-0 px-6 md:px-0 -mx-6 md:mx-0 md:columns-2 lg:columns-3 md:space-y-6">
          {[...Array(4)].map((_, i) => (
            <div
              key={i}
              className="w-[70vw] md:w-auto shrink-0 break-inside-avoid bg-white/40 border border-earth/10 rounded-sm p-8 animate-pulse h-56"
            />
          ))}
        </div>
      ) : (
        <div className="flex md:block overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none md:columns-2 lg:columns-3 gap-6 space-x-6 md:space-x-0 space-y-0 md:space-y-6 pb-8 md:pb-0 scrollbar-hide px-6 md:px-0 -mx-6 md:mx-0">
          {reviews.map((review, idx) => (
            <ReviewCard
              key={idx}
              review={review}
              idx={idx}
              isGoogle={isGoogle}
            />
          ))}
        </div>
      )}

      {/* Link to Google Maps */}
      {isGoogle && (
        <div className="text-center">
          <a
            href="https://maps.app.goo.gl/vpKyRZLyVZaswYHM8"
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs uppercase tracking-widest text-ink-muted hover:text-earth border-b border-ink-muted/20 hover:border-earth pb-1 transition-all"
          >
            Read all reviews on Google Maps →
          </a>
        </div>
      )}
    </div>
  );
}
