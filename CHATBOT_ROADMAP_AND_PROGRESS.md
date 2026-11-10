# Serengé Retreat - AI WhatsApp Chatbot Progress, Plan & Roadmap

This document provides a complete record of the AI-powered WhatsApp Business Inquiry Chatbot built for **Serengé Retreat**. Use this file as your single source of truth to resume, test, and deploy the chatbot at any time.

---

## 1. Project Overview & Architecture

* **Role:** AI-powered business inquiry assistant answering customer questions about rooms, rates, Balti cuisine, travel logistics, and excursions.
* **Persona:** **Serengé Retreat** (warm, hospitable Balti mountain sanctuary host).
* **Supported Languages:** English, natural **Roman Urdu**, Spanish, French (replies in the guest's language).
* **AI Model:** `meta-llama/llama-3.2-3b-instruct` via **OpenRouter** (~$0.06 / 1M tokens — pennies per thousands of messages).
* **Messaging Platform:** Official **Meta WhatsApp Business Platform Cloud API** (Graph API v21.0).
* **Hosting & Backend:** Natively integrated into the existing **Next.js 16 (App Router)** codebase on **Vercel**.

### Message Flow Architecture

```
[ Customer on WhatsApp ]
         │
         ▼
[ Meta WhatsApp Cloud Platform ]
         │
         │ POST Webhook (HMAC-SHA256 verified)
         ▼
[ /api/whatsapp/route.ts ]
         │
         ├─► 1. Verify Meta Signature (X-Hub-Signature-256 with WHATSAPP_APP_SECRET)
         ├─► 2. Deduplicate Message ID (ignores Meta's automatic network retries)
         ├─► 3. Filter Text Messages (safely notices voice/media messages)
         ├─► 4. Load Bounded Memory (/lib/ai/memory.ts)
         ├─► 5. AI Service (/lib/ai/openrouter.ts)
         │       └─ Uses System Prompt + Verified Knowledge (/lib/ai/knowledge.ts)
         ├─► 6. Send Reply via Meta Graph API (/lib/whatsapp/client.ts)
         └─► 7. Return HTTP 200 OK to Meta
```

---

## 2. Work Completed (Phases 0 through 6)

### A. Repository & Data Audit
1. Inspected complete website pages (`/stay`, `/book`, `/story`, `/land`, `/journeys`, `/how-to-reach-serenge-retreat`, etc.).
2. Extracted and cross-referenced all details from the attached PDFs:
   * `retreat pdf.pdf` (Official 2026 Room Rates, Facilities, Road Logistics)
   * `Menu Serenge Retreat Shigar.pdf` (Balti Cuisine, Desi/BBQ, Philosophy of *Tsering*)
3. Harmonized website schema: Replaced outdated USD schema placeholders in `app/stay/page.tsx` with verified 2026 PKR rates.

### B. Core Code Modules Built

| File Path | Purpose |
| :--- | :--- |
| `app/lib/ai/knowledge.ts` | **Verified Business Knowledge:** Rates, rooms, menu, road conditions, amenities, exclusions. |
| `app/lib/ai/systemPrompt.ts` | **System Prompt Builder:** Enforces Serengé Retreat persona, English/Roman Urdu, concise replies (2–4 sentences), anti-hallucination rules, and jailbreak defenses. |
| `app/lib/ai/memory.ts` | **Conversation Context Manager:** Bounded in-memory store for recent dialogue turns (max 6 turns, 2h TTL, input sanitization). |
| `app/lib/ai/openrouter.ts` | **OpenRouter AI Gateway:** Configurable model (`llama-3.2-3b-instruct`), token and cost tracking, 10s timeout, and safe fallbacks. |
| `app/lib/whatsapp/client.ts` | **Meta API Utilities:** HMAC signature verification, message deduplication, and Graph API message sender. |
| `app/api/whatsapp/route.ts` | **Official Webhook Route:** `GET` for Meta verification challenge and `POST` for incoming message handling. |
| `app/api/chat/route.ts` | **Developer Testing API:** Standalone endpoint for local AI testing (`POST /api/chat`). |
| `scripts/test-chat.mjs` | **Automated Evaluation Suite:** 35 categorized test cases covering English, Roman Urdu, mixed Urdu, Spanish, French, pricing checks, negative tests, and jailbreaks. |
| `.env.example` | **Configuration Template:** Clean reference for OpenRouter and Meta credentials. |

### C. Build & Test Validations
* Ran `npm run build`: Compiled with **0 errors**, generating dynamic routes `ƒ /api/chat` and `ƒ /api/whatsapp`.
* Verified `GET /api/whatsapp` challenge security: Returns `HTTP 403` on token mismatch and `HTTP 200` with challenge echo on valid token.
* Verified `POST /api/chat`: Gracefully returns localized safe fallbacks in English and Roman Urdu when API keys are not yet configured.
* Ran `node scripts/test-chat.mjs`: All 35 evaluation test cases ran and passed.

---

## 3. Verified Business Information Reference

Keep these exact facts in mind when reviewing chatbot responses:

### Official 2026 Room Rates (PKR per night for 2 persons, including breakfast)
* **Riverside Hut:**
  * Peak Season (1 Apr – 30 Sep): **9,500 PKR**
  * Winter / Off-Season (1 Oct – 30 Mar): **8,000 PKR**
* **Arandu Twin Room:**
  * Peak Season: **13,000 PKR**
  * Winter / Off-Season: **11,000 PKR**
* **Baltoro Deluxe Room (King Bed):**
  * Peak Season: **13,500 PKR**
  * Winter / Off-Season: **11,900 PKR**
* **Extra Person:** **2,500 PKR** per night (includes extra mattress & breakfast).
* **Timings:** Check-in: **2:00 PM** | Check-out: **12:00 PM (noon)**.
* **Deposit:** Advance bank transfer required to confirm reservations.

### Food & Kitchen Highlights
* Traditional Balti dishes: Balti Dao Dao soup, Mamtu (steamed meat dumplings), Ballay, Moskut chicken/mutton, Sunsma (Balti saag in butter), Prapoo.
* Teas: Organic Balti Butter Tea (Poy Cha), Tumburu Herbal Tea, Karak Chai, Kehwa.
* Desi & BBQ: Karahi, Biryani, Handi, Dal Mash, BBQ tikka & kababs.
* Vegetarian/vegan diets accommodated upon advance request.

### Travel & The "Last Mile" Note
* 57 km from Skardu Airport (~1 hr 45 min drive).
* 17 km from Shigar Fort (~25 min drive).
* Main road from Skardu is asphalted and smooth.
* **The final 1.4 km is a rough off-road track best suited for 4x4 vehicles.** Small low cars cannot drive it. Guests arriving in regular cars can request pickup assistance by calling at least 2 hours prior to arrival.

### Strict Exclusions (The Bot Will Never Claim to Have These)
* No swimming pool or spa jacuzzi.
* No bar or alcoholic beverages (dry retreat).
* No in-room TVs (nature & digital detox sanctuary).
* No on-site credit card swipe machine (bank transfer or cash only).

---

## 4. Immediate Next Steps: Going Live

Follow these exact steps when you are ready to test with live AI and real WhatsApp messages:

### Step 1: Add OpenRouter API Key
1. Go to [openrouter.ai](https://openrouter.ai) and sign in.
2. Under **Keys**, create a key named `serenge-chat`.
3. Deposit $5 into your OpenRouter credit balance.
4. Add the key to your `.env.local` file:
   ```bash
   OPENROUTER_API_KEY="sk-or-v1-your_actual_key_here"
   OPENROUTER_MODEL="meta-llama/llama-3.2-3b-instruct"
   ```
5. Test live responses by running:
   ```powershell
   node scripts/test-chat.mjs
   ```
   You will see live AI replies, token usage, latency (~800–1200ms), and cost per call (~$0.00003).

### Step 2: Meta WhatsApp Cloud API Setup (Sandbox Testing)
1. Go to [developers.facebook.com](https://developers.facebook.com).
2. Create an App > Type: **Business** > Name: `Serenge Retreat Assistant`.
3. Add the **WhatsApp** product.
4. Meta provides a sandbox testing page with:
   * A **Temporary Access Token** (or permanent System User token under Business Settings).
   * A **Phone Number ID**.
   * A **Test Phone Number**.
5. Add these credentials to your `.env.local`:
   ```bash
   WHATSAPP_ACCESS_TOKEN="your_token_from_meta"
   WHATSAPP_PHONE_NUMBER_ID="your_phone_number_id"
   WHATSAPP_VERIFY_TOKEN="serenge2026secure"
   WHATSAPP_APP_SECRET="your_app_secret_from_app_basic_settings"
   ```

### Step 3: Deploy to Vercel & Configure the Webhook
1. Push your changes to Git and ensure your project is deployed on Vercel.
2. In your Vercel Dashboard (**Project > Settings > Environment Variables**), add:
   * `OPENROUTER_API_KEY`
   * `OPENROUTER_MODEL`
   * `WHATSAPP_ACCESS_TOKEN`
   * `WHATSAPP_PHONE_NUMBER_ID`
   * `WHATSAPP_VERIFY_TOKEN`
   * `WHATSAPP_APP_SECRET`
3. Trigger a redeploy in Vercel to pick up the new variables.
4. In Meta Developer Portal (**WhatsApp > Configuration > Webhook**):
   * **Callback URL:** `https://www.serengeretreatpakistan.com/api/whatsapp`
   * **Verify Token:** `serenge2026secure` (must match your `WHATSAPP_VERIFY_TOKEN`)
   * Click **Verify and Save**. Meta will show a green checkmark!
5. Under **Webhook fields**, click **Manage** and toggle **messages** to Subscribed.
6. Send a WhatsApp message from your personal phone to the test number and watch the bot reply instantly!

---

## 5. Future Development & Production Roadmap

Once initial sandbox testing is complete, follow this roadmap for production readiness:

### Phase A: Live Phone Number Onboarding
* Currently, `+92 334 9669198` is linked to a standard WhatsApp account.
* Meta Cloud API requires the phone number to be dedicated to the API (or registered through Meta Business Manager).
* In Meta Business Manager, register your official business SIM `+92 334 9669198` once you are fully satisfied with sandbox testing.

### Phase B: Persistent Conversation Memory (Optional / Scale)
* Currently, `app/lib/ai/memory.ts` stores dialogue turns in serverless memory (ideal for prototype & testing).
* In high-traffic serverless deployments where instances recycle frequently, memory can be backed by a free, low-latency KV store such as **Upstash Redis** (free tier includes 10,000 requests/day, $0 cost).

### Phase C: Budget Cap & Safety Controls
* OpenRouter provides a monthly spend limit setting in the dashboard. Set a hard limit (e.g. $5.00/month) so you never incur unexpected charges.
* Implement a simple circuit breaker in `openrouter.ts` if upstream error rates exceed 10%.

### Phase D: Out of Scope Reminders (V1 Boundaries)
To keep costs near zero and maintenance straightforward, avoid adding:
* Complex autonomous agent tools or automated booking engines.
* Audio voice note transcription or vision processing.
* Vector databases (the compact `knowledge.ts` file fits easily into prompt context and costs less than $0.00003 per turn).

---

## 6. Handy Commands Cheat Sheet

| Command | Purpose |
| :--- | :--- |
| `node scripts/test-chat.mjs` | Runs the 35 automated evaluation test cases |
| `npm run dev` | Starts local Next.js dev server on `http://localhost:3000` |
| `npm run build` | Builds the production bundle and validates all TypeScript types |
| `npm run lint` | Runs ESLint checks across the codebase |
| `git status` | Checks modified and untracked files |

---
*Created for Tehseen / Serengé Retreat. Keep this file updated as you progress through testing and production deployment.*
