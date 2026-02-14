"use client";

import RoomCarousel from "../components/RoomCarousel";
import ArchitecturalDetails from "../components/ArchitecturalDetails";
import Image from "next/image";

export default function StayPage() {
    return (
        <div className="bg-canvas min-h-screen pb-20">

            {/* Hero with Image */}
            <div className="relative h-[60vh] w-full">
                <Image
                    src="/images/stay/Stay Hero.webp"
                    alt="Serenge Stay"
                    fill
                    className="object-cover"
                    priority
                />
                <div className="absolute inset-0 bg-black/20" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12 text-center">
                    <h1 className="text-4xl md:text-6xl font-serif text-white mb-2">Built from the Earth</h1>
                    <p className="text-white/90 text-lg font-light max-w-2xl mx-auto">
                        Our walls are made of mud, straw, and stone. They breathe with you.
                    </p>
                </div>
            </div>

            {/* Choose Your Room Section */}
            <section className="max-w-7xl mx-auto px-6 py-20">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
                    <div className="space-y-6">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-earth">Choose Your Room</h2>
                        <h3 className="text-3xl md:text-5xl font-serif text-ink italic leading-tight">
                            A cozy space for <br /> slow mornings.
                        </h3>
                        <p className="text-ink-soft font-light text-lg">
                            Large windows, warm wood details, and serene views of the mountains and river.
                            Ideal for those who love comfort blended with nature.
                        </p>
                    </div>
                    <div className="space-y-4 text-ink-soft font-light">
                        <p className="italic">Riverside Hut / Deluxe Room / Twin Room</p>
                        <div className="bg-paper p-6 rounded-lg space-y-4">
                            <h4 className="text-ink font-medium uppercase text-xs tracking-widest">Included Amenities</h4>
                            <ul className="grid grid-cols-2 gap-y-2 text-xs">
                                <li>• Welcome drink</li>
                                <li>• Complimentary water</li>
                                <li>• Running Hot Water</li>
                                <li>• Room Service</li>
                                <li>• Kitchen Available</li>
                                <li>• 1 Water Bottle/Day</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <RoomCarousel />
            </section>

            {/* Architectural Details Mosaic */}
            <ArchitecturalDetails />

            {/* Our Facilities Section */}
            <section className="bg-paper py-24 px-6 border-t border-earth/10">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center mb-16 space-y-4">
                        <h2 className="text-sm uppercase tracking-[0.4em] text-earth">Our Facilities</h2>
                        <h3 className="text-3xl md:text-4xl font-serif text-ink">Comfort. Culture. Calm.</h3>
                        <p className="text-ink-soft font-light max-w-2xl mx-auto">
                            Everything at Serenge Retreat is designed for slow, soulful stays in the heart of Shigar.
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
