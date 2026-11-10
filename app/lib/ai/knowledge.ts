/**
 * Serengé Retreat - Verified Business Knowledge Source
 *
 * Source of truth extracted directly from:
 * 1. Official 2026 Room Rates (retreat pdf.pdf)
 * 2. Official Menu & Mission (Menu Serenge Retreat Shigar.pdf)
 * 3. Verified website pages (/stay, /book, /how-to-reach-serenge-retreat, /land)
 */

export const BUSINESS_INFO = {
  name: "Serengé Retreat",
  legalOrLocalMeaning:
    "Named after the Tibetan word 'Tsering' (Serengé), meaning 'Long Life' — a traditional Balti greeting wishing health, happiness, and an auspicious long life.",
  founder: "Aslam Shigri (local Balti mountaineer and adventure specialist, founder of Reego Adventure)",
  tagline: "Riverside Eco Retreat in the Heart of Shigar Valley",
  contact: {
    phoneOrWhatsApp: "+92 334 9669198",
    email: "reegoadventure@gmail.com",
    website: "https://www.serengeretreatpakistan.com",
    bookingCom: "https://www.booking.com/Pulse-zJRGAy",
    instagram: "@serengeretreat",
  },
  location: {
    village: "Alchori Village",
    valley: "Shigar Valley",
    region: "Gilgit-Baltistan",
    country: "Pakistan",
    coordinatesDescription: "Beside the Shigar River, beneath the Karakoram mountains",
    distances: {
      skarduAirport: "57 km (~1 hour 45 minutes drive)",
      skarduCity: "43 km (~1 hour 15 minutes drive)",
      shigarFort: "17 km (~25 minutes drive)",
    },
    roadAndAccess: {
      mainRoad: "Fully paved, safe, asphalted two-lane road from Skardu Airport and Skardu city up to Shigar.",
      lastMileOffRoad:
        "The final 1.4 km leading to the retreat is an off-road, rough mountain track. It is best suited for 4x4 vehicles and is NOT suitable for low-clearance small city cars.",
      pickupAssistance:
        "We provide pickup assistance for guests arriving in small cars or from Skardu Airport. Guests arriving by car must call or WhatsApp at least 2 hours before arrival so pickup can be arranged smoothly.",
    },
  },

  roomsAndRates2026: {
    currency: "PKR (Pakistani Rupee)",
    rules: [
      "All rates are for 2 persons per night.",
      "Complimentary organic breakfast is included with all stays.",
      "Extra person: 2,500 PKR per night (includes extra mattress and complimentary breakfast).",
      "Check-in time: 2:00 PM.",
      "Check-out time: 12:00 PM (noon).",
      "Advance deposit / bank transfer is required to confirm a reservation.",
    ],
    categories: [
      {
        name: "Riverside Hut",
        description: "A cozy traditional hut set beside the Shigar River with direct river views and mountain vistas.",
        occupancy: "2 Persons",
        winterOffSeasonPricePKR: 8000, // 1st Oct - 30th Mar
        peakSeasonPricePKR: 9500, // 1st Apr - 30th Sep
      },
      {
        name: "Arandu Twin Room",
        description: "Twin-bed room with poplar timber interiors, ideal for friends, companions, or family members.",
        occupancy: "2 Persons",
        winterOffSeasonPricePKR: 11000,
        peakSeasonPricePKR: 13000,
      },
      {
        name: "Baltoro Deluxe Room (King Bed)",
        description: "Spacious deluxe room with authentic Balti mud-and-stone architecture, king bed, and river/mountain views. Ideal for couples.",
        occupancy: "2 Persons",
        winterOffSeasonPricePKR: 11900,
        peakSeasonPricePKR: 13500,
      },
    ],
  },

  facilitiesAndAmenities: [
    "Complimentary organic breakfast included every morning",
    "Running hot water 24/7",
    "Wi-Fi via SCOM Air Fiber (suitable for messaging, browsing, and remote work, though speeds fluctuate with mountain weather; Jazz 4G, SCOM 4G, and Zong 4G mobile data also work)",
    "Commercial kitchen & room service",
    "Traditional Balti baithak & dining area",
    "Riverfront sitting area & bonfire / fire pit",
    "Organic kitchen garden & fresh seasonal fruits (subject to season)",
    "Electricity backed with solar lighting",
    "Private vehicle parking on site",
    "Laundry service available upon request (air-dried, allow 24 hours)",
  ],

  foodAndDining: {
    philosophy:
      "Farm-to-table organic meals celebrating centuries-old Balti recipes, local garden produce, and seasonal fruits (apricots, apples).",
    baltiSpecialties: [
      "Balti Dao Dao Soup (noodles simmered in savory broth with chicken or beef)",
      "Mamtu (steamed dumplings filled with seasoned minced meat, onions, garlic)",
      "Ballay / Furur Balay (traditional noodle soup with aromatic spices)",
      "Moskut (rich Balti chicken or mutton specialty)",
      "Sunsma (Balti saag made with butter)",
      "Prapoo (traditional handmade Balti flour dish)",
    ],
    desiAndBBQ: [
      "Chicken Karahi, Mutton Karahi, Chicken Handi, Chicken Biryani",
      "Mix Vegetable, Dal Mash",
      "BBQ: Chicken Booti, Malai Booti, Seekh Kabab, Steam Roast",
    ],
    breakfastAndBreads: [
      "Balti Breads: Kisser (traditional Balti buckwheat pancake), Kulcha, Khurba, Azoq, Zirchung",
      "Desi Paratha, Omelettes, Fried Eggs, French Toast, Naan",
    ],
    hotBeverages: [
      "Organic Balti Butter Tea (Poy Cha)",
      "Tumburu Herbal Mountain Tea",
      "Karak Chai, Green Tea (Kehwa), Black Tea",
    ],
    dietaryAccommodations:
      "Vegetarian, vegan, or meat-free preferences are happily accommodated upon advance request.",
  },

  activitiesAndExcursions: {
    treksAndGuides:
      "Partnered with Reego Adventure Pakistan (founded by Aslam Shigri) to offer certified local hiking guides and high-altitude porters for Khosar Gang (6,040m), K2 Base Camp, and Thalle La trek route.",
    nearbyAttractions: [
      "Shigar Fort (Fong Khar) — 17 km (25 min drive)",
      "Sarfaranga Cold Desert — sweeping high-altitude sand dunes",
      "Blind Lake (Jarba Zhou) — serene mountain lake",
      "Hashupi Garden & local apricot orchards",
      "Manthokha Waterfall & Niali Waterfall",
      "Chutron Hot Springs",
      "Masrur Rock & ancient rock carvings",
    ],
    seasonalHighlights: {
      spring: "April to May: Apricot and cherry blossom season across the entire valley.",
      summer: "June to August: Pleasant cool mountain weather, river breezes, trekking season.",
      autumn: "September to October: Golden foliage, crystal clear skies, harvest season.",
      winter: "November to March: Very cold, quiet snowy stillness, cozy stove fires.",
      deosaiStatus: "Deosai Plains Road usually opens between 5–15 June and closes 5–15 October (subject to snow).",
    },
  },

  policiesAndImportantNotes: [
    "Check-in: 2:00 PM | Check-out: 12:00 PM (noon).",
    "Advance deposit or bank transfer is required to confirm bookings.",
    "Payment is handled manually via bank transfer or cash — there is NO card swipe machine on-site.",
    "Guests are requested to respect local Balti village customs and values.",
    "Loud music and disruptive behavior are strictly prohibited to maintain valley peace.",
    "Last 1.4 km requires 4x4 or advance notice for pickup assistance.",
    "This is an intimate 3-room nature sanctuary, not a commercial city hotel.",
  ],

  explicitExclusions: [
    "No swimming pool or heated jacuzzi.",
    "No bar or alcoholic beverages (dry retreat).",
    "No high-speed city fiber for high-bandwidth streaming/gaming (mountain wireless connection only).",
    "No card swipe POS machine (bank transfer or cash only).",
    "No television in rooms (designed for peaceful digital sanctuary and nature immersion).",
  ],
};

/**
 * Returns a compact markdown formatted string of the verified business facts
 * optimized for inclusion in the AI system prompt without wasting unnecessary tokens.
 */
export function getKnowledgePromptText(): string {
  const b = BUSINESS_INFO;
  return `
### BUSINESS OVERVIEW
- Name: ${b.name} (${b.legalOrLocalMeaning})
- Founder: ${b.founder}
- Contact / WhatsApp: ${b.contact.phoneOrWhatsApp}
- Website: ${b.contact.website} | Booking.com: ${b.contact.bookingCom}
- Location: ${b.location.village}, ${b.location.valley}, ${b.location.region}, ${b.location.country}
- Airport distance: ${b.location.distances.skarduAirport}. Shigar Fort: ${b.location.distances.shigarFort}. Skardu City: ${b.location.distances.skarduCity}.
- Road: Main road from Skardu is smooth asphalt. The LAST 1.4 KM is an off-road rough track suitable for 4x4. Small cars cannot drive it; guests must call 2 hours prior for pickup assistance.

### 2026 OFFICIAL ROOM RATES (PKR)
- All rates are for 2 persons, per night, including complimentary organic breakfast.
- Extra person: 2,500 PKR/night (includes mattress & breakfast).
- Check-in: 2:00 PM | Check-out: 12:00 PM.
- Rates by category:
  1. Riverside Hut: Peak Season (1 Apr - 30 Sep) = 9,500 PKR | Winter/Off-Season (1 Oct - 30 Mar) = 8,000 PKR
  2. Arandu Twin Room: Peak Season = 13,000 PKR | Winter/Off-Season = 11,000 PKR
  3. Baltoro Deluxe Room (King Bed): Peak Season = 13,500 PKR | Winter/Off-Season = 11,900 PKR

### AMENITIES & FACILITIES
- 24/7 running hot water, commercial kitchen, dining baithak, riverfront lawn, fire pit, organic garden.
- SCOM Air Fiber Wi-Fi (basic browsing/work; not city streaming). Jazz 4G, SCOM 4G, Zong 4G work.
- Solar & grid electricity. Private parking. No TVs in rooms.

### DINING
- Balti specialties: Mamtu (dumplings), Balti Dao Dao soup, Ballay, Moskut, Sunsma (saag in butter), Prapoo.
- Desi & BBQ: Karahi, Handi, Biryani, BBQ tikka & kababs.
- Teas: Organic Balti Butter Tea, Tumburu Mountain Herbal Tea, Karak Chai, Kehwa.
- Vegetarian & vegan meals available on request.

### EXCURSIONS & SEASONS
- Guides & porters arranged via Reego Adventure for Khosar Gang (6,040m), K2 Base Camp, village walks.
- Nearby: Shigar Fort (17 km), Sarfaranga Cold Desert, Blind Lake, Manthokha Waterfall, Chutron Hot Springs.
- Deosai road is typically open only from mid-June to mid-October.
- Peak travel: April to October (blossoms in April-May; pleasant summer; golden autumn in Sep-Oct). Winter is quiet and snowy.

### BOOKING & POLICIES
- Booking is confirmed via WhatsApp (${b.contact.phoneOrWhatsApp}) with an advance bank transfer deposit.
- No card machine on-site.
- Respect local village traditions. No loud music or rowdy parties.
- EXCLUSIONS: No swimming pool, no bar/alcohol, no TV, no card machine.
`.trim();
}
