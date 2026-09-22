import type { MetadataRoute } from "next";
import { postsData } from "./journal/postsData";

const BASE = "https://www.serengeretreatpakistan.com";

const LASTMOD: Record<string, string> = {
  "/": "2026-09-23",
  "/stay": "2026-09-23",
  "/book": "2026-09-23",
  "/journal": "2026-09-23",
  "/journeys": "2026-09-23",
  "/journeys/soulful-retreat": "2026-09-23",
  "/journeys/wellness-healing-retreat": "2026-09-23",
  "/journeys/hiking-mountain-immersion": "2026-09-23",
  "/journeys/spring-blossom-retreat": "2026-09-23",
  "/journeys/nature-immersion-star-gazing": "2026-09-23",
  "/enhancements": "2026-06-01",
  "/digital-sanctuary": "2026-09-23",
  "/land": "2026-09-23",
  "/story": "2026-09-23",
  "/eco-retreat-shigar-valley": "2026-05-26",
  "/best-riverside-stays-skardu": "2026-09-23",
  "/serenge-retreat-experience": "2026-09-23",
  "/digital-detox-pakistan": "2026-09-23",
  "/how-to-reach-serenge-retreat": "2026-05-26",
  "/things-to-do-shigar-valley": "2026-05-26",
};

function page(
  path: string,
  changeFrequency: NonNullable<MetadataRoute.Sitemap[number]["changeFrequency"]>,
  priority: number
): MetadataRoute.Sitemap[number] {
  return {
    url: path === "/" ? BASE : `${BASE}${path}`,
    lastModified: LASTMOD[path] || "2026-09-23",
    changeFrequency,
    priority,
  };
}

export default function sitemap(): MetadataRoute.Sitemap {
  const journalPosts = postsData.map((post) => ({
    url: `${BASE}/journal/${post.slug}`,
    lastModified: new Date(post.date),
    changeFrequency: "yearly" as const,
    priority: 0.7,
  }));

  return [
    page("/", "weekly", 1),
    page("/stay", "weekly", 0.95),
    page("/book", "monthly", 0.85),
    page("/journal", "monthly", 0.7),
    page("/journeys", "monthly", 0.85),
    page("/journeys/soulful-retreat", "monthly", 0.75),
    page("/journeys/wellness-healing-retreat", "monthly", 0.75),
    page("/journeys/hiking-mountain-immersion", "monthly", 0.75),
    page("/journeys/spring-blossom-retreat", "monthly", 0.75),
    page("/journeys/nature-immersion-star-gazing", "monthly", 0.75),
    page("/enhancements", "monthly", 0.7),
    page("/digital-sanctuary", "monthly", 0.7),
    page("/land", "monthly", 0.7),
    page("/story", "yearly", 0.6),
    page("/eco-retreat-shigar-valley", "monthly", 0.9),
    page("/best-riverside-stays-skardu", "monthly", 0.9),
    page("/serenge-retreat-experience", "monthly", 0.85),
    page("/digital-detox-pakistan", "monthly", 0.85),
    page("/how-to-reach-serenge-retreat", "monthly", 0.9),
    page("/things-to-do-shigar-valley", "monthly", 0.9),
    ...journalPosts,
  ];
}
