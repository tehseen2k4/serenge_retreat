"use client";

import RoomCarousel from "../components/RoomCarousel";

export default function StayPage() {
    return (
        <div className="bg-canvas min-h-screen pb-20">

            {/* Intro */}
            <section className="pt-32 pb-20 px-6 max-w-4xl mx-auto text-center space-y-6">
                <h1 className="text-4xl md:text-5xl font-serif text-ink">Built from the Earth</h1>
                <p className="text-lg text-ink-soft font-light leading-relaxed">
                    Our walls are made of mud, straw, and stone. They breathe with you.
                    Every corner of Serengé is designed to ground you.
                </p>
            </section>

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

            {/* Our Facilities Section */}
            <section className="bg-paper py-24 px-6">
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

            {/* Food (Relocated and Refined) */}
            <section className="py-24 px-6 max-w-5xl mx-auto text-center space-y-12">
                <h2 className="text-3xl font-serif text-ink">Home-Cooked Nourishment</h2>
                <p className="text-ink-soft font-light leading-relaxed text-lg italic">
                    "From riverside bonfires to farm-fresh meals... soulful stays in the heart of Shigar."
                </p>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left pt-8">
                    <div className="border-t border-earth/30 pt-4">
                        <h4 className="text-earth mb-2 uppercase tracking-widest text-xs">Breakfast</h4>
                        <p className="text-ink-soft text-sm">Buckwheat pancakes, fresh apricot jam, Balti bread.</p>
                    </div>
                    <div className="border-t border-earth/30 pt-4">
                        <h4 className="text-earth mb-2 uppercase tracking-widest text-xs">Traditional Tea</h4>
                        <p className="text-ink-soft text-sm">Herbal blends and local Chai available all day.</p>
                    </div>
                    <div className="border-t border-earth/30 pt-4">
                        <h4 className="text-earth mb-2 uppercase tracking-widest text-xs">Communal Dinner</h4>
                        <p className="text-ink-soft text-sm">Seasonal organic produce from our own garden.</p>
                    </div>
                </div>
            </section>

        </div>
    );
}
