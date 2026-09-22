# Serengé Retreat — 90-Day Traffic, CTR & Visibility Plan

**Window:** 22 September 2026 → 20 December 2026  
**Property:** https://www.serengeretreatpakistan.com  
**Rule that does not change:** stay a riverside retreat. Do not become a Skardu city hotel site. Borrow hotel language as the door; convert on `/stay`.

This plan covers **development**, **SEO**, and **GEO** (ChatGPT, Gemini, Perplexity, Google AI Overviews). It is an operating calendar, not a slogan deck.

---

## 1. Where you are now (baseline)

Source: Google Search Console, last 3 months (20 Jun – 18 Sep 2026), plus GBP searches and the live Next.js site.

| Metric | Now | What it means |
|---|---|---|
| Clicks | 63 | About 0–4 per day. Almost all brand. |
| Impressions | 892 | Google barely shows you outside your name. |
| Average CTR | 7.1% | Healthy for brand. Will fall when non-brand impressions rise. That is success, not failure. |
| Average position | 9.2 | Fine for tiny long-tail. Useless if volume stays at 892. |
| Indexed URLs | 13 | Sitemap has 27. App has ~29 indexable routes. `/book` and `/journal` are missing from the sitemap. |
| Not-indexed queue | 1 crawled, not indexed | The other buckets (404, duplicate, discovered) already sit at 0. Google discarded the rest quietly. |
| Homepage clicks | 17 of 63 | The site is a brand island. |
| Top converting query | `serenge retreat shigar` (3 clicks / 30 impressions) | People who know you, click. |
| Hotel queries on the site | ~8 impressions, 0 clicks | `shigar hotel`, `shigar hotels`, `best hotel in shigar`. |
| GBP / Maps demand | `hotels in shigar` 154, `shigar hotels` 140, `shigar valley hotels` 69, `shigar hotel` 47 | This is the real hotel pool. Naked `hotels` (1,341) is Skardu city. Do not chase it. |
| Click geography (28 days) | Pakistan 67%, UAE 13% | Domestic travelers already arrive. They search hotel words. |

**Honest diagnosis:** the retreat niche is unique and correct for the brand. In Pakistan it is not how people search. The site ranks for “Serengé” and almost nothing else. GEO pages exist, but Google has indexed a minority of URLs, titles used decorative ★ / ✓ (Google rewrote some listings to the domain), and `/stay` still speaks sanctuary first.

---

## 2. What “good” looks like on day 90

Compare **the next 90 days** to **the last 90 days**. Do not judge week one.

### Primary (must hit)

| Metric | Baseline (last 90d) | Day-90 target | Stretch |
|---|---|---|---|
| Indexed unique pages | 13 | 24–29 | All indexable URLs kept |
| Impressions | 892 | 3,000+ | 5,000 |
| Clicks | 63 | 180–220 | 280 |
| Queries containing hotel / stay / room / shigar hotel | ~8 impressions | 120+ impressions | 250 |
| WhatsApp or email inquiries from the site | not tracked | 15–25 qualified | 40 |
| GSC queries where `/stay` or a lodging URL appears | near zero | 8–12 distinct queries | 20 |

### Secondary (health, not vanity)

| Metric | Baseline | Day-90 target | Note |
|---|---|---|---|
| Brand CTR (`serenge`, `serenge retreat`) | ~10%+ | 12–18% | Title + description rewrite should lift this. |
| Non-brand CTR | noisy / tiny | 3–6% | Normal for new lodging queries at pos 8–20. |
| Average position (blended) | 9.2 | 8–12 | May worsen while new queries enter. Ignore blended position. |
| Homepage share of clicks | 27% | 15–20% | Means inner pages started working. |
| AI / GEO mentions | anecdotal | 1 documented citation/month in Gemini, ChatGPT, or Perplexity for “retreat Shigar” or “where to stay Shigar” | Screenshot and save. |
| GBP photo views / direction requests | unknown | Track weekly; +30% photos, +20% direction requests vs month 1 | Maps is half the war. |

### What you will not promise

- Ranking #1 for `hotels` or `skardu hotels`.
- 10× traffic in 30 days.
- Retreat culture becoming the default Pakistan search language this quarter.

If impressions rise and blended CTR falls from 7.1% toward 4–5%, **that is the plan working**: Google is finally showing you to strangers.

---

## 3. Three doors, one house

Every task in this document maps to one layer. Do not mix them on the first screen of a page.

| Layer | Language | Job | Pages |
|---|---|---|---|
| **Door** | rooms, stay, Shigar hotel alternative, pickup, breakfast, price, 3 rooms, Alchori | Rank for how Pakistan books travel | `/stay`, how-to-reach, things-to-do, GBP |
| **House** | Deluxe, Twin, Riverside Hut, Balti kitchen, mud brick, river | Convert after the click | `/stay` gallery, rooms PDF, inquire, WhatsApp |
| **Soul** | silence, wellness, soul journey, digital detox | Foreign, brand, and AI story | Homepage, journeys, journal, GEO essays |

Conversion sequence for a `hotels in Shigar` visitor:

1. **0–8s** — Is this a real place to sleep? H1 about rooms in Shigar. Photos. Alchori. WhatsApp.
2. **8–20s** — Cost and inclusions. From-price, breakfast, pickup, room names.
3. **20–40s** — Why not a Skardu hotel? River, three rooms, quiet, honest internet.
4. **Then** — existing inquire wizard + `wa.me/923349669198`.

You already built the closer (homepage inquire, `/book`, Stay wizard, Tashi, PDFs). SEO’s job is to land the right person on `/stay`.

---

## 4. Workstreams

### A. Development (the index and the door)

Ship these in code. No traffic plan works while Google sees two identities and 13 pages.

**Index hygiene**

- Add `/book` and `/journal` (index) to `app/sitemap.ts`.
- Replace `lastModified = new Date()` with real dates (page `mtime` or a hand-maintained map). Stop telling Google every URL was rewritten at every deploy.
- Remove `Crawl-delay: 1` from `public/robots.txt`.
- Confirm every `canonical`, `og:url`, and schema `@id` uses `https://www.serengeretreatpakistan.com` only. (Homepage + several layouts were fixed 21 Sep; re-grep the repo before requesting indexing.)
- After deploy: Search Console → URL Inspection on `/`, `/stay`, `/book`, `/journal`, each GEO URL, each journal slug. Request indexing only once canonicals match.

**`/stay` as lodging door (keep retreat below the fold)**

- Title and H1: rooms in Shigar Valley, not only “eco sanctuary”.
- Visible from-price band (even “from PKR X / night, meals extra” — honesty beats a missing number; GSC already logged `pricing` and `I need the address`).
- Address / pin / Alchori / 57 km from Skardu Airport on the first screen.
- Comparison block: Serengé vs a typical Shigar/Skardu hotel (river, 3 rooms, kitchen, quiet, wifi honesty).
- Internal links from `/how-to-reach-serenge-retreat` and `/things-to-do-shigar-valley` with anchor text “rooms in Shigar”, not “learn more”.
- FAQ schema already exists on Stay — expand it with: last track, pickup, wifi, winter, children, how to pay.

**CTR engineering on the site**

- Unique `<title>` 50–60 characters: place + offer, no ★ no ✓.
- Unique meta description 140–155 characters: who it is for + what they get + a human CTA.
- Open Graph images: 1200×630 photographs of rooms/river, **not** `logo_brown.png` as the homepage share card.
- Add `Serenge` (no accent) in titles/schema `alternateName` so the common misspelling still matches.
- UTM on WhatsApp links (`utm_source=site&utm_medium=inquire&utm_campaign=stay`) so inquiries are countable.

**Do not build**

- A second booking product.
- Ten “best hotels in Shigar” clones. Google already collapsed overlapping GEO pages.
- ChatGPT-written location posts that repeat the homepage.

### B. SEO (rank the door, protect the brand)

**Keyword clusters — attack list (90 days)**

| Cluster | Queries | Primary URL | Intent |
|---|---|---|---|
| Brand | serenge retreat, serenge retreat shigar, serenge | `/` | Protect. NAP consistency. |
| Shigar lodging | hotels in shigar, shigar hotels, shigar hotel, shigar valley hotels, hotels in shigar skardu | `/stay` | Door. |
| Choice | best hotel in shigar, best hotel in shigar valley | `/stay` or one comparison URL | Door. |
| Place | shigar valley, things to do in shigar, shigar valley location, gilgit to shigar | `/land`, `/things-to-do-shigar-valley`, `/how-to-reach-serenge-retreat` | Guide → stay. |
| Ready | pricing, address, airport pickup | `/stay` first screen | Convert. |
| Foreign / soul | wellness retreat, spiritual retreat, nature retreats | journeys + GEO pages | Keep, do not lead PK ads with these. |

**Off-site (this is where hotel demand actually lives)**

- Google Business Profile: primary category **Lodge** or **Guest house**; secondary Holiday home / Farm stay. Not “yoga studio” as the only category.
- GBP description first line: “3 riverside rooms in Alchori, Shigar Valley — 57 km from Skardu Airport.”
- 20+ room, food, and arrival photos (the rooms PDF set belongs here). Weekly posts. Review replies in English and Urdu.
- Products on GBP: Deluxe, Twin, Hut with a from-price.
- Q&A on GBP: wifi, pickup, last 1.4 km track, breakfast, winter.
- Get or fix listings on Booking.com and Airbnb if not already live. Those brands feed Maps packs.
- Citations: TripAdvisor, one Pakistan travel directory, Reego Adventure cross-link. Same name, address, phone everywhere.

**Content (one useful URL beats five thin ones)**

- Upgrade `/stay` copy (see Development).
- Upgrade `/how-to-reach-serenge-retreat` for `gilgit to shigar`, airport, last track.
- Upgrade `/things-to-do-shigar-valley` so it ends with “stay in Alchori, not Skardu city”.
- One comparison URL only if `/stay` cannot hold it cleanly: “Stay in Shigar vs a hotel in Skardu.”
- Journal: two posts in 90 days, not twelve. Suggested:
  1. “How to get from Skardu Airport to Shigar (and the last rough track)”
  2. “What a night in Alchori is actually like (rooms, meals, river noise)”
- Optional Urdu FAQ block on `/stay` for domestic searchers. One block, not a second site.

**CTR on Google.com (the snippet)**

Google was showing the **domain as the title** because of decorative stars and mixed domains. After the 21 Sep metadata fix, wait for recrawl, then:

- If a query still shows the domain, use Search Console → inspect URL → request indexing.
- Write titles as: `Rooms in Shigar Valley | Serengé Retreat` for `/stay`.
- Write descriptions as a reason to click: “3 riverside rooms in Alchori. Breakfast, airport pickup, WhatsApp the house.”
- Aim for sitelinks (Stay, Journeys, How to reach, Story) once 20+ pages are indexed and internally linked from the homepage footer (already partly there).

Track CTR **split by query type** in a spreadsheet every two weeks. Never optimize blended CTR.

### C. GEO (AI answers and overviews)

You already have a GEO layer. Google has not kept most of it. The job is **entity clarity + quotable facts**, not more landing pages.

**Entity (so models stop calling you a hotel or a Skardu lodge)**

One consistent identity everywhere (schema, GBP, About, Wikipedia-style one-liner):

> Serengé Retreat is a 3-room riverside retreat in Alchori, Shigar Valley, Gilgit-Baltistan, Pakistan. Founder Aslam Shigri. 57 km from Skardu Airport. Not a Skardu city hotel.

- Keep `LodgingBusiness` + `Organization` + `WebSite` on the homepage graph.
- Add `alternateName`: Serenge Retreat, Serenge Retreat Pakistan.
- Journal posts: `Article` / `BlogPosting` with `author` Aslam Shigri, `datePublished`, and the lodging `about`.
- GEO pages: unique 40–80 word “direct answer” at the top of each page (the sentence an LLM can quote). Then the essay.

**Make the six GEO URLs worth indexing**

| URL | Direct-answer job | Unique fact it must own |
|---|---|---|
| `/eco-retreat-shigar-valley` | What an eco stay in Shigar actually is | Mud brick, 3 rooms, Alchori, river |
| `/best-riverside-stays-skardu` | Shigar river vs Skardu town | Distance, quiet, why not city |
| `/serenge-retreat-experience` | A day on the property | Meals, silence, no fake spa menu |
| `/digital-detox-pakistan` | Honest internet | There is signal; it is not high-speed wifi |
| `/how-to-reach-serenge-retreat` | KDU → Shigar → last track | 57 km, 1h30–1h45, pickup |
| `/things-to-do-shigar-valley` | Fort, river, village days | Then link to rooms |

If two GEO pages say the same sanctuary paragraph, merge or differentiate. Thin overlap is why 13 pages survived.

**AI Overview / LLM citation tactics (90 days)**

- FAQ schema with real questions from GSC (`pricing`, `address`, `how to reach`).
- Tables and numbered steps on how-to-reach (models prefer lists).
- Same phone `+923349669198`, same maps link, same Instagram everywhere.
- Earn 3 third-party mentions: Reego, one Pakistan travel writer, one guest review that names Alchori and Serengé.
- Monthly: ask ChatGPT, Gemini, and Perplexity the same five prompts; screenshot answers; note if you appear.

**Prompt set (run on day 1, day 45, day 90)**

1. Best place to stay in Shigar Valley
2. Hotels in Shigar vs Skardu
3. Eco retreat or wellness retreat in Baltistan / Karakoram
4. How to get from Skardu airport to Shigar
5. Serenge Retreat Pakistan

---

## 5. Calendar

### Days 1–14 — Index and truth (22 Sep – 5 Oct)

**Development**

- [x] Sitemap: add `/book`, `/journal`; real `lastmod`.
- [x] robots.txt: drop crawl-delay.
- [x] Grep and kill any leftover `serengeretreat.com`.
- [x] Homepage OG image → river/room 1200×630.
- [x] WhatsApp UTM parameters.
- [ ] Deploy. Then GSC URL Inspection + request indexing for `/`, `/stay`, `/book`, `/journal`, 6 GEO URLs. (Code shipped; inspect after Vercel goes live. URL list in `geo-baselines/README.md`.)

**SEO / GBP**

- [ ] Screenshot current GBP categories, photos, Q&A (baseline).
- [ ] Switch category toward Lodge / Guest house if it is retreat-only.
- [ ] Upload 10 room + food photos this fortnight.
- [ ] Write the GBP first-line description.

**GEO**

- [ ] Run the 5 AI prompts. Save screenshots in a folder `geo-baselines/`.
- [x] Add the one-sentence entity line to homepage schema description if it is still vague.

**Expected after 14 days**

- Indexed count may still be 13–16. That is normal. The request queue is the win.
- No traffic lift yet. Do not panic.

### Days 15–45 — Door pages (6 Oct – 5 Nov)

**Development / content**

- [ ] Rewrite `/stay` first screen (H1, price, pin, pickup, 3 rooms, wifi honesty). Retreat story stays below.
- [ ] Expand Stay FAQ schema.
- [ ] Strengthen how-to-reach (airport, km, hours, last track, pickup CTA).
- [ ] Strengthen things-to-do; last section = stay here as the base.
- [ ] Internal links: footer + in-body anchors “rooms in Shigar”, “how to reach Alchori”.
- [ ] Optional: one comparison section, not a duplicate site.

**SEO**

- [ ] New titles/descriptions live for `/`, `/stay`, `/how-to-reach-serenge-retreat`, `/things-to-do-shigar-valley`.
- [ ] GBP: products with from-price; 10 more photos; reply to every review.
- [ ] Confirm Booking.com / Airbnb NAP matches the site.
- [ ] Journal post 1: airport → Shigar.

**GEO**

- [ ] 40–80 word direct-answer block on each of the 6 GEO URLs.
- [ ] Differentiate overlapping copy (eco vs riverside vs experience).
- [ ] Article schema on journal slugs.

**Expected after 45 days**

- Indexed 18–24.
- Impressions run-rate clearly above the old ~10/day (target 25–40/day).
- First non-brand queries in GSC for Shigar lodging or how-to-reach.
- CTR blended may dip. Brand CTR should hold or rise.
- 3–8 site inquiries this window if `/stay` is honest about price and WhatsApp.

### Days 46–90 — Demand and conversion (6 Nov – 20 Dec)

This window includes late autumn. Be honest on the site about season and road.

**Development / conversion**

- [ ] Urdu FAQ block on `/stay` (short).
- [ ] Track inquire submits + WhatsApp clicks (even a simple count in HubSpot/Resend is enough).
- [ ] Tashi chips already answer rooms/reach/wifi — add one chip: “Is this a hotel?” → “3-room riverside house in Alchori, not a Skardu hotel.”
- [ ] Journal post 2: a real night in the house.

**SEO / GBP**

- [ ] Weekly GBP posts (season, food, river, rooms).
- [ ] Push reviews from actual guests (English + Urdu).
- [ ] Re-inspect any URL still not indexed. If a GEO page is still out after quality edits, consider consolidating it into `/stay` or `/land` rather than begging Google.
- [ ] Mid-plan query review: double down on whichever lodging query gained impressions; do not start a new cluster.

**GEO**

- [ ] Repeat the 5 AI prompts. Compare to day-1 screenshots.
- [ ] One guest or partner page that names Serengé + Alchori (citation).
- [ ] If Google AI Overviews show competitors for “stay in Shigar”, match their fact density (distance, room count, airport) on `/stay`.

**Expected after 90 days**

- Indexed 24–29.
- 3,000+ impressions and 180–220 clicks in the quarter.
- `/stay` appearing for Shigar hotel/stay queries, even at position 8–20.
- 15–25 tracked inquiries.
- At least one AI answer that mentions Serengé or Alchori riverside rooms.

---

## 6. Week-by-week scoreboard

Update this table every Monday. If a cell is red two weeks in a row, stop new content and fix index/GBP.

| Week | Dates | Indexed | Impr. (7d) | Clicks (7d) | Hotel-cluster impr. | Inquiries | Notes |
|---|---|---|---|---|---|---|---|
| 0 (baseline) | to 21 Sep | 13 | ~20 | ~5 | ~0 | ? | Last 3 months averaged |
| 1 | 22–28 Sep |  |  |  |  |  | Ship sitemap + inspect |
| 2 | 29 Sep–5 Oct |  |  |  |  |  | GBP photos |
| 3 | 6–12 Oct |  |  |  |  |  | `/stay` first screen |
| 4 | 13–19 Oct |  |  |  |  |  | How-to-reach |
| 5 | 20–26 Oct |  |  |  |  |  | Things-to-do + links |
| 6 | 27 Oct–2 Nov |  |  |  |  |  | Journal 1 |
| 7 | 3–9 Nov |  |  |  |  |  | GEO direct answers |
| 8 | 10–16 Nov |  |  |  |  |  | Mid-point query review |
| 9 | 17–23 Nov |  |  |  |  |  | Reviews / listings |
| 10 | 24–30 Nov |  |  |  |  |  | Urdu FAQ |
| 11 | 1–7 Dec |  |  |  |  |  | Journal 2 |
| 12 | 8–14 Dec |  |  |  |  |  | AI prompt re-run |
| 13 | 15–20 Dec |  |  |  |  |  | Quarter readout |

---

## 7. CTR playbook (what to change when)

| Symptom | Likely cause | Move |
|---|---|---|
| Title is the domain | Google rejected ★ / messy canonicals | Already stripped stars; recrawl; keep titles factual |
| Impressions up, CTR < 3% on a lodging query | Title still says sanctuary / soul | Put “rooms” + “Shigar” in the title |
| Brand CTR < 8% | Weak description or logo-as-thumbnail | Photo OG; description with Alchori + WhatsApp |
| Position 5–10, CTR < 4% | Snippet does not answer price/place | First 120 characters of description = place + 3 rooms |
| High CTR, no inquiries | Hotel intent bounced on sanctuary copy | `/stay` first screen is lodging, not poetry |
| Sitelinks missing | Too few indexed URLs | Finish index work before worrying about sitelinks |

**Title formulas (use these, not stars)**

- Home: `Serengé Retreat | Eco Wellness Stay in Shigar Valley`
- Stay: `Rooms in Shigar Valley | Serengé Retreat`
- How to reach: `How to Reach Serengé Retreat from Skardu Airport`
- Things to do: `Things to Do in Shigar Valley | Stay by the River`

**Description formula**

`[Place]. [3 rooms / river / who it is for]. [Pickup or breakfast]. [Human CTA].`

Example: `Alchori, Shigar Valley. Three riverside rooms, Balti kitchen, airport pickup. WhatsApp the house to plan nights.`

---

## 8. Roles and rhythm

| Who | Cadence | Owns |
|---|---|---|
| Development (this repo) | Days 1–14 heavy, then as needed | Sitemap, canonicals, `/stay` UI, schema, OG, UTMs |
| SEO operator | Monday 30 min | GSC scoreboard, titles, internal links |
| GBP operator | 20 min, 2× week | Photos, posts, Q&A, reviews |
| GEO operator | Day 1, 45, 90 + one citation | Prompt screenshots, direct-answer blocks |
| House (WhatsApp) | Daily | Reply speed is conversion. Under 2 hours during season. |

No new journal post until `/stay` first screen and sitemap are live.

---

## 9. Day-90 readout (20 December 2026)

Answer only these questions:

1. Did indexed URLs leave the teens?
2. Did impressions clear 3,000 for the quarter?
3. Did any Shigar lodging query gain 50+ impressions?
4. Did `/stay` take clicks away from only-the-homepage?
5. How many WhatsApp/email inquiries, and how many became nights?
6. Do Gemini/ChatGPT mention you for Shigar stay?

If 1–3 are yes and 5 is weak: conversion copy, not more SEO.  
If 1 is no: stop content, fix canonicals and thin GEO overlap.  
If 3 is no but brand grew: the door is still closed; `/stay` and GBP categories are the next bet, not another soul essay.

---

## 10. Do not do

- Rename the site Serengé Hotel.
- Stuff `best hotel Skardu` on every title.
- Delete wellness/soul pages (foreign + brand layer).
- Publish a burst of AI location articles.
- Wait for Pakistan to search “somatic sanctuary” before meeting “hotels in Shigar”.
- Judge the plan on blended CTR or blended average position.

---

## 11. Already done (do not redo)

As of 21 September 2026:

- Homepage inquire can be hidden on desktop (Hide → Plan a stay chip).
- Stars/checkmarks removed from metadata; canonical and site name pointed at `www.serengeretreatpakistan.com`.
- Inquire + Stay wizard + Tashi + room/menu PDFs + WhatsApp `923349669198` exist. Use them. Do not replace them.

Hotel-language conversion on `/stay` is **not** done. That is the center of days 15–45.

---

*This file is the 90-day operating plan. The older `SEO_STRATEGY.md` (Feb 2026) still describes star titles and retreat-only keywords; do not follow that CTR advice.*
