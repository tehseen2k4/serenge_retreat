"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useRef } from "react";
import { Sparkles } from "lucide-react";
import SlowStories from "./SlowStories";

export default function TheRelease() {
    const [text, setText] = useState("");
    const [isReleasing, setIsReleasing] = useState(false);
    const [isReleased, setIsReleased] = useState(false);
    const [releasedCount, setReleasedCount] = useState(0);
    const whooshAudioRef = useRef<HTMLAudioElement | null>(null);

    const handleRelease = () => {
        if (!text.trim()) return;

        setIsReleasing(true);

        // Play whoosh sound
        if (whooshAudioRef.current) {
            whooshAudioRef.current.currentTime = 0;
            whooshAudioRef.current.play().catch(() => { });
        }

        // Dissolution phase
        setTimeout(() => {
            setIsReleasing(false);
            setIsReleased(true);
            setReleasedCount((c) => c + 1);
        }, 3000);

        // Reset
        setTimeout(() => {
            setText("");
            setIsReleased(false);
        }, 6000);
    };

    return (
        <div className="relative w-full h-[600px] flex flex-col items-center justify-center bg-canvas rounded-2xl p-8 overflow-hidden shadow-sm border border-earth/5">
            {/* Atmospheric Background */}
            <SlowStories src="/videos/release_bg.mp4" opacity={0.1} />

            {/* Audio */}
            <audio ref={whooshAudioRef} src="/audio/woosh.mp3" />

            {/* Subtle flowing background */}
            <div className="absolute inset-0 opacity-10">
                <motion.div
                    animate={{
                        backgroundPosition: ["0% 0%", "100% 100%"],
                    }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                    className="absolute inset-0 bg-gradient-to-br from-earth/30 via-sand/20 to-stone/30"
                    style={{ backgroundSize: "200% 200%" }}
                />
            </div>

            {/* Release Counter */}
            {releasedCount > 0 && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-6 right-6 flex items-center gap-2 text-xs text-earth/70 uppercase tracking-widest"
                >
                    <Sparkles size={12} className="opacity-60" />
                    <span>{releasedCount} {releasedCount === 1 ? "Release" : "Releases"}</span>
                </motion.div>
            )}

            <AnimatePresence mode="wait">
                {!isReleasing && !isReleased ? (
                    <motion.div
                        key="input"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                        transition={{ duration: 0.6, ease: "easeOut" }}
                        className="w-full max-w-lg space-y-16 text-center relative z-10"
                    >
                        <motion.h3
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.2 }}
                            className="text-3xl md:text-4xl font-serif text-ink leading-relaxed"
                        >
                            What weighs on your heart?
                        </motion.h3>

                        <div className="relative">
                            <motion.input
                                initial={{ opacity: 0, width: "60%" }}
                                animate={{ opacity: 1, width: "100%" }}
                                transition={{ delay: 0.4, duration: 0.8 }}
                                type="text"
                                value={text}
                                onChange={(e) => setText(e.target.value)}
                                onKeyDown={(e) => e.key === "Enter" && handleRelease()}
                                placeholder="Name it gently..."
                                className="w-full bg-transparent border-b border-ink/15 text-center py-6 text-xl md:text-2xl text-ink focus:outline-none focus:border-earth/40 transition-all duration-500 placeholder:text-ink/25 font-light tracking-wide"
                                autoFocus
                            />
                            {/* Subtle underline glow on focus */}
                            {text && (
                                <motion.div
                                    initial={{ scaleX: 0 }}
                                    animate={{ scaleX: 1 }}
                                    className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-earth/30 to-transparent"
                                />
                            )}
                        </div>

                        <motion.button
                            initial={{ opacity: 0 }}
                            animate={{ opacity: text.trim() ? 1 : 0.3 }}
                            transition={{ duration: 0.3 }}
                            onClick={handleRelease}
                            disabled={!text.trim()}
                            className="group relative mx-auto px-8 py-3 text-sm uppercase tracking-[0.3em] text-ink/70 hover:text-earth disabled:cursor-not-allowed transition-all duration-500"
                        >
                            <span className="relative z-10">Let it go</span>
                            {/* Subtle hover background */}
                            <motion.div
                                className="absolute inset-0 rounded-full bg-earth/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                            />
                        </motion.button>
                    </motion.div>
                ) : isReleasing ? (
                    <motion.div
                        key="releasing"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="w-full max-w-lg text-center relative"
                    >
                        {/* Gentle fade and rise effect */}
                        <motion.div
                            initial={{ opacity: 1, y: 0 }}
                            animate={{
                                opacity: [1, 0.7, 0.3, 0],
                                y: [0, -20, -60, -120],
                                scale: [1, 1.05, 1.1, 1.2],
                                filter: ["blur(0px)", "blur(1px)", "blur(3px)", "blur(8px)"]
                            }}
                            transition={{ duration: 3, ease: "easeOut" }}
                            className="text-2xl md:text-3xl font-light text-ink/60 tracking-wide"
                        >
                            {text}
                        </motion.div>

                        {/* Ripple effect circles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {[...Array(3)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, opacity: 0.6 }}
                                    animate={{
                                        scale: [0, 2, 4],
                                        opacity: [0.6, 0.3, 0]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        delay: i * 0.4,
                                        ease: "easeOut"
                                    }}
                                    className="absolute w-32 h-32 rounded-full border border-earth/20"
                                />
                            ))}
                        </div>

                        {/* Floating light particles */}
                        <div className="absolute inset-0 flex items-center justify-center">
                            {[...Array(8)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    animate={{
                                        opacity: [0, 0.6, 0],
                                        scale: [0, 1, 0.5],
                                        y: [0, -80 - i * 10],
                                        x: [(i - 4) * 15, (i - 4) * 25]
                                    }}
                                    transition={{
                                        duration: 2.5,
                                        delay: 0.5 + i * 0.15,
                                        ease: "easeOut"
                                    }}
                                    className="absolute w-1.5 h-1.5 rounded-full bg-earth/40"
                                />
                            ))}
                        </div>
                    </motion.div>
                ) : (
                    <motion.div
                        key="released"
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 1.2, ease: "easeOut" }}
                        className="text-center space-y-12"
                    >
                        {/* Gentle mandala/flower bloom */}
                        <motion.div
                            initial={{ scale: 0, rotate: -90, opacity: 0 }}
                            animate={{ scale: 1, rotate: 0, opacity: 1 }}
                            transition={{ duration: 1.5, ease: "easeOut" }}
                            className="mx-auto w-32 h-32 relative"
                        >
                            {/* Outer petals */}
                            {[...Array(12)].map((_, i) => (
                                <motion.div
                                    key={i}
                                    initial={{ scale: 0, opacity: 0 }}
                                    animate={{ scale: 1, opacity: 0.4 }}
                                    transition={{ delay: 0.3 + i * 0.08, duration: 0.8, ease: "easeOut" }}
                                    className="absolute inset-0"
                                    style={{
                                        transform: `rotate(${i * 30}deg)`,
                                    }}
                                >
                                    <div className="w-1 h-16 mx-auto bg-gradient-to-t from-earth/40 to-transparent rounded-full" />
                                </motion.div>
                            ))}

                            {/* Center circle */}
                            <motion.div
                                initial={{ scale: 0 }}
                                animate={{ scale: 1 }}
                                transition={{ delay: 1, duration: 0.6 }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-earth/30 to-sand/30 backdrop-blur-sm" />
                            </motion.div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 1.2, duration: 1 }}
                            className="space-y-6"
                        >
                            <div className="text-3xl md:text-4xl font-serif text-earth/80">Released.</div>
                            <p className="text-ink-soft/70 font-light text-base tracking-wide">
                                You are lighter now.
                            </p>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}
