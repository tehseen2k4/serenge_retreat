"use client";

import { motion, AnimatePresence, Variants } from "framer-motion";
import Link from "next/link";
import { X } from "lucide-react";
import WeatherWidget from "./WeatherWidget";

interface MobileMenuProps {
    isOpen: boolean;
    onClose: () => void;
}

const menuVariants: Variants = {
    closed: { opacity: 0, x: "100%" },
    open: { opacity: 1, x: 0, transition: { duration: 0.5, ease: "easeInOut" } },
    exit: { opacity: 0, x: "100%", transition: { duration: 0.5, ease: "easeInOut" } }
};

const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
        opacity: 1,
        y: 0,
        transition: { delay: 0.2 + i * 0.1, duration: 0.5, ease: "easeOut" }
    })
};

const links = [
    { href: "/", label: "Home" },
    { href: "/journeys", label: "Journeys" },
    { href: "/stay", label: "Stay" },
    { href: "/land", label: "Land" },
    { href: "/story", label: "Story" },
    { href: "/stay#booking-form", label: "Book" },
];

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial="closed"
                    animate="open"
                    exit="exit"
                    variants={menuVariants}
                    className="fixed inset-0 z-[60] bg-canvas/95 backdrop-blur-md flex flex-col items-center justify-center"
                >
                    {/* Close Button */}
                    <button
                        onClick={onClose}
                        className="absolute top-6 right-6 p-2 text-ink/50 hover:text-earth transition-colors"
                    >
                        <X size={32} />
                    </button>

                    {/* Links */}
                    <nav className="flex flex-col items-center gap-8">
                        {links.map((link, i) => {
                            const isBookLink = link.label === "Book";
                            return (
                                <motion.div
                                    key={link.href}
                                    custom={i}
                                    variants={linkVariants}
                                >
                                    {isBookLink ? (
                                        <button
                                            onClick={() => {
                                                onClose();
                                                setTimeout(() => {
                                                    if (window.location.pathname === "/stay") {
                                                        document.getElementById('booking-form')?.scrollIntoView({ behavior: 'smooth' });
                                                    } else {
                                                        window.location.href = "/stay#booking-form";
                                                    }
                                                }, 500);
                                            }}
                                            className="text-3xl md:text-4xl font-serif text-ink hover:text-earth hover:italic transition-all duration-300"
                                        >
                                            {link.label}
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            onClick={onClose}
                                            className="text-3xl md:text-4xl font-serif text-ink hover:text-earth hover:italic transition-all duration-300"
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </motion.div>
                            );
                        })}
                    </nav>

                    {/* Footer / Widget */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                        className="absolute bottom-12"
                    >
                        <WeatherWidget />
                    </motion.div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}
