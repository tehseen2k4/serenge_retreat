import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Serengé Journal | Stories from Shigar Valley",
  description: "Notes from Alchori: how the house was built, life in Shigar Valley, and nights beside the river. Written by Aslam Shigri.",
  openGraph: {
    title: "The Serengé Journal | Stories from Shigar Valley",
    description: "Notes from Alchori and the Shigar river, written by Aslam Shigri.",
    images: [{ url: "/images/og/home.jpg", width: 1200, height: 630 }],
  },
};

export default function JournalLayout({ children }: { children: React.ReactNode }) {
  return children;
}
