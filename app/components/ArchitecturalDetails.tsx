"use client";

import Image from "next/image";
import { motion } from "framer-motion";

const details = [
    {
        title: "Mud Bricks",
        desc: "Sun-baked earth, breathing with the seasons.",
        detail: "/images/stay/Mud Bricks.jpeg",
        main: "/images/stay/Mud Bricks Detail.jpeg"
    },
    {
        title: "Handmade Furniture",
        desc: "Crafted by local artisans from walnut and mulberry wood.",
        detail: "/images/stay/Handmade Furniture.jpeg",
        main: "/images/stay/Handmade Furniture Detail.jpeg"
    },
    {
        title: "Pamir Ceiling",
        desc: "The geometric 'Manq' design, a symbol of the universe.",
        detail: "/images/stay/Pamir Cieling.jpeg",
        main: "/images/stay/Pamir Ceiling detail.jpeg"
    },
    {
        title: "Stone Masonry",
        desc: "River stones gathered from the Shigar bank.",
        detail: "/images/stay/Stones.jpeg",
        main: "/images/stay/Stones Detail.jpeg"
    },
    {
        title: "Wooden Structure",
        desc: "Ancient timber frame techniques resilient to time.",
        detail: "/images/stay/Wooden Structure.jpeg",
        main: "/images/stay/Wooden Structure Detail.jpeg"
    },
    {
        title: "Plaster Finish",
        desc: "Smooth, natural lime plaster reflecting the soft light.",
        detail: "/images/stay/Plaster Finish.jpeg",
        main: "/images/stay/Plaster Finish Detail.jpeg"
    },
    {
        title: "Recycled Marble",
        desc: "Chips of Shigar's famous marble given new life.",
        detail: "/images/stay/Recycled Marble.jpeg",
        main: "/images/stay/Recycled Marble Detail.jpeg"
    },
    {
        title: "Community Effort",
        desc: "Built by the hands of Alchori's people.",
        detail: "/images/stay/Community Efforts.jpeg",
        main: "/images/stay/Community Effort Details.jpeg"
    }
];

export default function ArchitecturalDetails() {
    return (
        <section className="bg-paper py-24 px-6">
            <div className="max-w-7xl mx-auto space-y-24">
                <header className="text-center space-y-4 max-w-3xl mx-auto">
                    <h2 className="text-sm uppercase tracking-[0.4em] text-earth">Our Craft</h2>
                    <h3 className="text-3xl md:text-5xl font-serif text-ink italic">The Building Story.</h3>
                    <p className="text-ink-soft font-light text-lg">
                        Serengé is not just built on the land; it is built of the land.
                        Every material tells a story of sustainability, heritage, and hand-craftsmanship.
                    </p>
                </header>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-24">
                    {details.map((item, idx) => (
                        <div key={idx} className="space-y-6 group">
                            {/* Images Container */}
                            <div className="relative aspect-[4/3]">
                                {/* Main Image */}
                                <div className="absolute inset-0 w-[85%] h-full z-10 overflow-hidden rounded-sm">
                                    <Image
                                        src={item.main}
                                        alt={item.title}
                                        fill
                                        className="object-cover transition-transform duration-700"
                                    />
                                </div>
                                {/* Detail Hover Image (Offset) */}
                                <div className="absolute top-8 right-0 w-[40%] h-[60%] z-20 shadow-xl overflow-hidden rounded-sm border-2 border-paper">
                                    <Image
                                        src={item.detail}
                                        alt={`${item.title} Detail`}
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>

                            {/* Text */}
                            <div className="max-w-sm pt-4">
                                <h4 className="text-2xl font-serif text-ink">{item.title}</h4>
                                <p className="text-ink-soft font-light text-sm mt-2">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
