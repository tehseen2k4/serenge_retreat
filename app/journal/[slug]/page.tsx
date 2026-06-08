import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import { postsData } from "../postsData";
import StructuredData from "../../components/StructuredData";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return postsData.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const post = postsData.find((p) => p.slug === slug);
  
  if (!post) {
    return {
      title: "Story Not Found | Serengé Retreat",
      description: "The requested journal entry could not be found.",
    };
  }

  return {
    title: `${post.title} | Serengé Retreat Journal`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `https://serengeretreat.com/journal/${post.slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [
        {
          url: post.image,
          alt: post.title,
        }
      ]
    }
  };
}

export default async function JournalPostPage({ params }: PageProps) {
  const { slug } = await params;
  const post = postsData.find((p) => p.slug === slug);

  if (!post) {
    notFound();
  }

  const blogPostingSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": post.title,
    "description": post.excerpt,
    "image": `https://serengeretreat.com${post.image}`,
    "datePublished": post.date,
    "author": {
      "@type": "Person",
      "name": post.author,
      "jobTitle": "Founder & Storyteller"
    },
    "publisher": {
      "@type": "Organization",
      "name": "Serengé Retreat",
      "logo": {
        "@type": "ImageObject",
        "url": "https://serengeretreat.com/images/logo_brown.png"
      }
    },
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": `https://serengeretreat.com/journal/${post.slug}`
    }
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://serengeretreat.com"
      },
      {
        "@type": "ListItem",
        "position": 2,
        "name": "Journal",
        "item": "https://serengeretreat.com/journal"
      },
      {
        "@type": "ListItem",
        "position": 3,
        "name": post.title,
        "item": `https://serengeretreat.com/journal/${post.slug}`
      }
    ]
  };

  return (
    <div className="bg-canvas min-h-screen pt-12 pb-20 px-6 md:px-12">
      <StructuredData data={blogPostingSchema} />
      <StructuredData data={breadcrumbSchema} />

      <article className="max-w-3xl mx-auto space-y-12">
        {/* Back Navigation */}
        <div className="pt-4">
          <Link
            href="/journal"
            className="text-xs uppercase tracking-widest text-earth hover:text-ink transition-colors pb-1 border-b border-earth/20 hover:border-ink"
          >
            ← Back to Journal
          </Link>
        </div>

        {/* Header Metadata */}
        <header className="space-y-6 text-left border-b border-earth/10 pb-8">
          <div className="flex justify-between items-center text-xs uppercase tracking-widest text-ink-muted">
            <span className="bg-earth/10 text-earth px-3 py-1 rounded-full font-medium">
              {post.category}
            </span>
            <span>{post.date}</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-serif text-ink italic leading-tight">
            {post.title}
          </h1>

          <div className="flex items-center gap-4 text-xs text-ink-soft">
            <span className="font-medium">Written by {post.author}</span>
            <span className="text-ink-muted">•</span>
            <span className="text-ink-muted">{post.readTime}</span>
          </div>
        </header>

        {/* Article Featured Image */}
        <div className="relative aspect-[16/9] w-full bg-stone/20 rounded-sm overflow-hidden shadow-lg">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Article Body Content */}
        <section className="space-y-8 text-ink-soft font-light text-base md:text-lg leading-relaxed font-sans">
          {post.paragraphs.map((para, index) => {
            if (index === 0) {
              // Beautiful first letter drop cap styling
              return (
                <p key={index} className="first-letter:text-5xl first-letter:font-serif first-letter:text-earth first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  {para}
                </p>
              );
            }
            return <p key={index}>{para}</p>;
          })}

          {/* Blockquote rendering if present */}
          {post.blockquote && (
            <div className="bg-paper p-8 my-12 border-l-4 border-earth rounded-sm shadow-sm space-y-4">
              <blockquote className="text-2xl font-serif italic text-ink leading-relaxed">
                &ldquo;{post.blockquote}&rdquo;
              </blockquote>
              {post.quoteAuthor && (
                <p className="text-xs uppercase tracking-widest text-ink-muted text-right">
                  — {post.quoteAuthor}
                </p>
              )}
            </div>
          )}
        </section>

        {/* Footer actions / Dynamic Internal Links */}
        <footer className="pt-12 border-t border-earth/10 mt-16 space-y-8">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-6">
            <div className="space-y-1 text-center sm:text-left">
              <p className="text-xs uppercase tracking-widest text-ink-muted">Continue Reading</p>
              <h4 className="font-serif text-lg text-ink">Explore more stories from the Shigar Valley</h4>
            </div>
            <Link
              href="/journal"
              className="inline-block px-6 py-3 border border-earth text-earth hover:bg-earth hover:text-white rounded-full text-xs uppercase tracking-widest transition-all duration-300 shadow-sm"
            >
              All Journal Entries
            </Link>
          </div>

          <div className="bg-paper p-8 rounded-sm border border-earth/10 text-center space-y-4">
            <p className="text-xs uppercase tracking-widest text-earth">Stay at Serengé</p>
            <h3 className="font-serif text-xl text-ink italic">Ready to write your own mountain story?</h3>
            <p className="text-sm text-ink-soft max-w-lg mx-auto font-light leading-relaxed">
              Join us beside the Shigar River in Baltistan. Disconnect from screens and reconnect with mountain stillness.
            </p>
            <div className="pt-4 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/stay#booking-form"
                className="inline-block px-8 py-3 bg-earth text-white rounded-full text-xs uppercase tracking-widest hover:bg-ink transition-colors duration-500 shadow-md"
              >
                Find Your Sanctuary
              </Link>
              <Link
                href="/"
                className="inline-block px-8 py-3 bg-white border border-earth/20 text-ink rounded-full text-xs uppercase tracking-widest hover:bg-canvas transition-colors duration-500 shadow-sm"
              >
                Return Home
              </Link>
            </div>
          </div>
        </footer>
      </article>
    </div>
  );
}
