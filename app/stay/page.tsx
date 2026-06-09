"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import RoomCarousel from "../components/RoomCarousel";
import Image from "next/image";
import Link from "next/link";
import BookingWizard from "../components/BookingWizard";
import StructuredData from "../components/StructuredData";

export default function StayPage() {
    const staySchema = {
        "@context": "https://schema.org",
        "@graph": [
            {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://www.serengeretreatpakistan.com"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Stay",
                        "item": "https://www.serengeretreatpakistan.com/stay"
                    }
                ]
            },
            {
                "@type": ["LocalBusiness", "LodgingBusiness"],
                "@id": "https://www.serengeretreatpakistan.com/#lodging",
                "name": "Serengé Retreat Shigar",
                "description": "An eco-conscious wellness sanctuary located beside the Shigar River in Alchori Village, Shigar Valley, Pakistan. Providing traditional mud-and-stone cabin stays.",
                "url": "https://www.serengeretreatpakistan.com/stay",
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "Alchori Village",
                    "addressLocality": "Shigar Valley",
                    "addressRegion": "Gilgit-Baltistan",
                    "postalCode": "16301",
                    "addressCountry": "PK"
                },
                "containsPlace": [
                    {
                        "@type": "Accommodation",
                        "name": "Traditional Deluxe Mud-and-Stone Cabin",
                        "description": "Authentic Balti design mud-and-stone cabin with mountain and river views, fully insulated and eco-friendly.",
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "USD",
                            "price": "120.00",
                            "availability": "https://schema.org/InStock",
                            "validFrom": "2026-01-01"
                        }
                    },
                    {
                        "@type": "Accommodation",
                        "name": "Cozy Twin Heritage Room",
                        "description": "Poplar timber interiors and hand-carved details with standard amenities for families or solo adventurers.",
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "USD",
                            "price": "90.00",
                            "availability": "https://schema.org/InStock",
                            "validFrom": "2026-01-01"
                        }
                    },
                    {
                        "@type": "Accommodation",
                        "name": "Riverside Glamping Dome",
                        "description": "Luxury geodesic dome on the edge of the Shigar River, perfect for stargazing and couples seeking romantic getaways.",
                        "offers": {
                            "@type": "Offer",
                            "priceCurrency": "USD",
                            "price": "150.00",
                            "availability": "https://schema.org/InStock",
                            "validFrom": "2026-01-01"
                        }
                    }
                ]
            },
            {
                "@type": "FAQPage",
                "@id": "https://www.serengeretreatpakistan.com/stay/#faq",
                "mainEntity": [
                    {
                        "@type": "Question",
                        "name": "How far is Serengé Retreat from Skardu Airport?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "Serengé Retreat is 57 km (1 hr 45 min) from Skardu Airport and 17 km (25 min) from Shigar Fort. The last 1.4 km is a rough mountain track."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "Do I need a 4x4 vehicle to reach the retreat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "The final 1.4 km to the retreat is a rough track best suited for 4x4 vehicles. We provide pickup assistance on request for guests arriving in standard cars."
                        }
                    },
                    {
                        "@type": "Question",
                        "name": "What type of food is served at Serengé Retreat?",
                        "acceptedAnswer": {
                            "@type": "Answer",
                            "text": "We serve traditional Balti meals, organic garden-fresh vegetables, and farm-to-table dining inspired by the seasons of Shigar Valley."
                        }
                    }
                ]
            }
        ]
    };

    return (
        <div className="bg-canvas min-h-screen pb-20">
            <StructuredData data={staySchema} />

            {/* Hero with Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src="/images/stay/Stay Hero.webp"
                    alt="Serengé Retreat Sanctuary - Sustainable mud brick accommodation in Shigar Valley, Baltistan"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">Built from the Earth: Eco-Stays in Shigar</h1>
                    <p className="text-white/90 text-lg font-light max-w-2xl mx-auto">
                        Our walls are made of mud, straw, and stone. A sustainable sanctuary in Baltistan.
                    </p>
                </div>
            </div>

            {/* SECTION 1: THE ROOMS & BOOKING WIZARD (NEW LAYOUT) */}
            <section id="booking-form" className="py-32 px-6 max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-16 items-start">
                    {/* Left Column: Context */}
                    <div className="space-y-12 lg:sticky lg:top-32">
                        <div className="space-y-6">
                            <h2 className="text-xs uppercase tracking-[0.4em] text-earth">Sanctuary Rooms</h2>
                            <h3 className="text-4xl md:text-6xl font-serif text-ink italic leading-tight">
                                Choose your home <br /> <span className="text-earth">in Shigar Valley.</span>
                            </h3>
                            <p className="text-ink-soft text-lg font-light leading-relaxed max-w-md">
                                Large windows, warm wood details, and serene views of the mountains and river.
                                Ideal for those who love comfort blended with nature.
                            </p>
                        </div>

                        <div className="grid grid-cols-2 gap-8 pt-8 border-t border-earth/10">
                            <div className="space-y-2">
                                <h4 className="text-xs uppercase tracking-widest text-ink font-medium">Included</h4>
                                <ul className="text-[10px] text-ink-soft space-y-1 uppercase tracking-wider">
                                    <li>• Organic Breakfast</li>
                                    <li>• Running Hot Water</li>
                                    <li>• High Speed Wi-Fi</li>
                                    <li>• Room Service</li>
                                </ul>
                            </div>
                            <div className="space-y-2">
                                <h4 className="text-xs uppercase tracking-widest text-ink font-medium">Boutique</h4>
                                <p className="text-[10px] text-ink-soft uppercase tracking-wider leading-relaxed">
                                    Exclusive rooms to ensure silence and privacy.
                                </p>
                            </div>
                        </div>

                        <div className="pt-8 text-xs text-ink-muted italic">
                            "The rhythm of the valley dictates the day."
                        </div>
                    </div>

                    {/* Right Column: The Wizard */}
                    <div className="space-y-8">
                        <BookingWizard />
                        <div className="p-8 bg-paper/50 border border-earth/5 text-center">
                            <p className="text-xs text-ink-soft font-light italic">
                                Prefer a standard form? <Link href="/book" className="text-earth underline underline-offset-4">Visit our Booking Page</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Room Details Overlay/Carousel */}
            <section className="pb-32 px-6">
                <div className="max-w-7xl mx-auto">
                    <div className="mb-12 flex justify-between items-end">
                        <h3 className="text-2xl font-serif text-ink italic">The Aesthetic</h3>
                        <p className="text-xs uppercase tracking-widest text-ink/40">Scroll to explore rooms</p>
                    </div>
                    <RoomCarousel />
                </div>
            </section>

            {/* Our Facilities Section */}
            <section className="bg-paper py-24 px-6 border-t border-earth/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-earth">Our Facilities</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-ink">Comfort. Culture. Calm.</h3>
                        <p className="text-ink-soft font-light max-w-2xl mx-auto">
                            Everything at Serengé Retreat is designed for slow, soulful stays in the heart of <Link href="/land" className="text-earth hover:underline">Shigar</Link>.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-16">
                        {[
                            { title: "Comfort", items: ["Deluxe, Twin, Riverside Rooms", "Hot Water & Private Baths", "Laundry on Request"] },
                            { title: "Nourishment", items: ["Traditional Balti Meals", "Organic Garden", "Farm-to-Table Dining"] },
                            { title: "Connection", items: ["Riverfront Sitting Area", "Bonfire Spot", "Guided Village Tours"] },
                            { title: "Wellness", items: ["Yoga/Meditation Space", "Nature Walks", "Herbal Teas"] },
                            { title: "Eco-Living", items: ["Eco-Friendly Materials", "Natural Cooling", "Solar Lighting"] },
                            { title: "Logistics", items: ["Car Parking Space", "Transport Assistance", "4x4 Access (pickup on request)"] },
                        ].map((group, idx) => (
                            <div key={idx} className="space-y-4">
                                <h4 className="text-earth text-xs uppercase tracking-[0.2em] font-medium border-b border-earth/20 pb-2">
                                    {group.title}
                                </h4>
                                <ul className="space-y-2">
                                    {group.items.map((item, i) => (
                                        <li key={i} className="text-ink-soft font-light text-sm">{item}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Food Menu Refined */}
            <section className="py-24 px-6 max-w-6xl mx-auto">
                <div className="text-center space-y-6 mb-20">
                    <h2 className="text-sm uppercase tracking-[0.4em] text-earth">Nourishment</h2>
                    <h3 className="text-4xl font-serif text-ink">The Menu</h3>
                    <p className="text-ink-soft font-italic">Wholesome, home-cooked, and rooted in the mountains.</p>
                </div>

                <div className="grid md:grid-cols-2 gap-16">
                    {/* Column 1: Traditional & Mains */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-ink border-b border-dotted border-ink/20 pb-2">Starters</h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-ink font-medium"><span className="uppercase tracking-widest text-xs">Balti Daudo Soup</span></div>
                                    <p className="text-xs text-ink-soft italic">Broth made from slow cooked meat, herbs and local spices.</p>
                                </div>
                                <div>
                                    <div className="flex justify-between text-ink font-medium"><span className="uppercase tracking-widest text-xs">Mamtu</span></div>
                                    <p className="text-xs text-ink-soft italic">Steamed dumpling filled with minced meat, onions and garlic.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-ink border-b border-dotted border-ink/20 pb-2">Mains</h4>
                            <div className="space-y-4">
                                <div>
                                    <div className="flex justify-between text-ink font-medium"><span className="uppercase tracking-widest text-xs">Chicken or Mutton Moskut</span></div>
                                    <p className="text-xs text-ink-soft italic">Curry made with Mountain Spices.</p>
                                </div>
                                <div>
                                    <div className="flex justify-between text-ink font-medium"><span className="uppercase tracking-widest text-xs">Furur Ballay</span></div>
                                    <p className="text-xs text-ink-soft italic">Dry version of noodle dish, stir fried with chunks of meat.</p>
                                </div>
                                <div>
                                    <div className="flex justify-between text-ink font-medium"><span className="uppercase tracking-widest text-xs">Prapoo</span></div>
                                    <p className="text-xs text-ink-soft italic">Savory Buckwheat pancakes with local butter.</p>
                                </div>
                                <div>
                                    <div className="flex justify-between text-ink font-medium"><span className="uppercase tracking-widest text-xs">Baley</span></div>
                                    <p className="text-xs text-ink-soft italic">Thick wheat noodles with Chicken, Mutton, or Beef.</p>
                                </div>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-ink border-b border-dotted border-ink/20 pb-2">From the Tandoor</h4>
                            <ul className="text-sm text-ink-soft space-y-1">
                                <li>Khurba</li>
                                <li>Tandoori Naan</li>
                                <li>Roghni Naan</li>
                                <li>Chapati / Roti</li>
                                <li>Azoq</li>
                            </ul>
                        </div>
                    </div>

                    {/* Column 2: Breakfast, BBQ, Global */}
                    <div className="space-y-12">
                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-ink border-b border-dotted border-ink/20 pb-2">Breakfast</h4>
                            <div className="grid grid-cols-2 gap-4 text-sm text-ink-soft">
                                <ul className="space-y-1">
                                    <li>Kisser (Balti Pancake)</li>
                                    <li>Kulcha (Round Flatbread)</li>
                                    <li>Paratha</li>
                                    <li>French Toasts</li>
                                </ul>
                                <ul className="space-y-1">
                                    <li>Eggs / Omelette</li>
                                    <li>Jam (Apricot/Mulberry/Cherry)</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-ink border-b border-dotted border-ink/20 pb-2">BBQ & Grill</h4>
                            <ul className="grid grid-cols-2 gap-2 text-xs uppercase tracking-widest text-ink-soft">
                                <li>Chicken Leg Piece</li>
                                <li>Chicken Breast</li>
                                <li>Chicken Booti</li>
                                <li>Malai Booti</li>
                                <li>Seekh Kabab</li>
                                <li>Steam Roast</li>
                            </ul>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-ink border-b border-dotted border-ink/20 pb-2">Pakistani & Chinese</h4>
                            <div className="grid grid-cols-2 gap-4 text-xs uppercase tracking-widest text-ink-soft">
                                <ul className="space-y-2">
                                    <li>Chicken Karahi</li>
                                    <li>Mutton Karahi</li>
                                    <li>Chicken Handi</li>
                                    <li>Chicken Biryani</li>
                                    <li>Mix Vegetable / Beans</li>
                                </ul>
                                <ul className="space-y-2">
                                    <li>Egg Fried Rice</li>
                                    <li>Chicken Corn Soup</li>
                                    <li>Manchurian</li>
                                </ul>
                            </div>
                        </div>

                        <div className="space-y-6">
                            <h4 className="text-xl font-serif text-ink border-b border-dotted border-ink/20 pb-2">Beverages</h4>
                            <ul className="flex flex-wrap gap-4 text-sm text-ink-soft text-earth/80">
                                <li>Special Chai</li>
                                <li>Green Tea</li>
                                <li>Tumburu Tea</li>
                                <li>Black Tea</li>
                                <li>Coffee</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
