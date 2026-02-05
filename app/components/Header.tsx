"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";
import WeatherWidget from "./WeatherWidget";



const links = [
    { href: "/journeys", label: "Journeys" },
    { href: "/stay", label: "Stay" },
    { href: "/land", label: "Land" },
    { href: "/story", label: "Story" },
    { href: "/book", label: "Book" },
];

export default function Header() {
    const pathname = usePathname();

    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex justify-between items-center px-6 py-6 md:px-12 bg-canvas/80 backdrop-blur-sm border-b border-transparent transition-all duration-500">
            <Link href="/" className="group">
                <Image
                    src="/images/logo brown.PNG"
                    alt="Serengé"
                    width={140}
                    height={50}
                    className="w-32 md:w-40 h-auto object-contain opacity-90 hover:opacity-100 transition-opacity"
                    priority
                />
            </Link>

            <nav className="hidden md:flex gap-8 items-center">
                {links.map((link) => {
                    const isActive = pathname === link.href;
                    return (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="relative text-sm uppercase tracking-widest text-ink-muted hover:text-earth transition-colors duration-300"
                        >
                            {link.label}
                            {isActive && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-[1px] bg-earth"
                                />
                            )}
                        </Link>
                    );
                })}
                <div className="pl-4 border-l border-ink/10 ml-2">
                    <WeatherWidget />
                </div>
            </nav>

            <div className="md:hidden">
                {/* Mobile Menu Placeholder - keeping it simple for now as per "Silence" philosophy, can expand later */}
                <Link href="/book" className="text-sm uppercase tracking-widest text-ink hover:text-earth">
                    Menu
                </Link>
            </div>
        </header>
    );
}
