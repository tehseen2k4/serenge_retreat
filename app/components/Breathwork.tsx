"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX } from "lucide-react";
import SlowStories from "./SlowStories";

type Phase = "Inhale" | "Hold" | "Exhale" | "Pause" | "Complete";

export default function Breathwork() {
    const [phase, setPhase] = useState<Phase>("Inhale");
    const [cycles, setCycles] = useState(0);
    const [audioEnabled, setAudioEnabled] = useState(false);
    const [isComplete, setIsComplete] = useState(false);

    const inhaleAudioRef = useRef<HTMLAudioElement | null>(null);
    const exhaleAudioRef = useRef<HTMLAudioElement | null>(null);
    const ambientAudioRef = useRef<HTMLAudioElement | null>(null);

    useEffect(() => {
        let isMounted = true;

        const cycle = async () => {
            while (isMounted && cycles < 2) {
                // Inhale
                setPhase("Inhale");
                if (audioEnabled && inhaleAudioRef.current) {
                    inhaleAudioRef.current.currentTime = 0;
                    inhaleAudioRef.current.play().catch(() => { });
                }
                await new Promise((r) => setTimeout(r, 4000));
                if (!isMounted) break;

                // Hold
                setPhase("Hold");
                await new Promise((r) => setTimeout(r, 4000));
                if (!isMounted) break;

                // Exhale
                setPhase("Exhale");
                if (audioEnabled && exhaleAudioRef.current) {
                    exhaleAudioRef.current.currentTime = 0;
                    exhaleAudioRef.current.play().catch(() => { });
                }
                await new Promise((r) => setTimeout(r, 4000));
                if (!isMounted) break;

                // Pause
                setPhase("Pause");
                await new Promise((r) => setTimeout(r, 4000));
                if (!isMounted) break;

                setCycles((c) => c + 1);
            }

            if (isMounted && cycles >= 1) {
                setPhase("Complete");
                setIsComplete(true);
            }
        };

        if (!isComplete) {
            cycle();
        }

        return () => {
            isMounted = false;
        };
    }, [cycles, audioEnabled, isComplete]);

    // Ambient audio toggle
    useEffect(() => {
        if (audioEnabled && ambientAudioRef.current) {
            ambientAudioRef.current.play().catch(() => { });
        } else if (ambientAudioRef.current) {
            ambientAudioRef.current.pause();
        }
    }, [audioEnabled]);

    const handleRestart = () => {
        setCycles(0);
        setIsComplete(false);
        setPhase("Inhale");
    };

    const getScaleForPhase = () => {
        switch (phase) {
            case "Inhale":
                return 1.8;
            case "Hold":
                return 1.8;
            case "Exhale":
                return 1;
            case "Pause":
                return 1;
            case "Complete":
                return 1;
        }
    };

    const getDuration = () => {
        switch (phase) {
            case "Inhale":
                return 4;
            case "Hold":
                return 4;
            case "Exhale":
                return 4;
            case "Pause":
                return 4;
            default:
                return 1;
        }
    };

    // Fixed particle positions (no Math.random to avoid hydration mismatch)
    const particlePositions = [
        { left: 75, top: 50 },
        { left: 68.3, top: 28.35 },
        { left: 50, top: 18.3 },
        { left: 31.7, top: 28.35 },
        { left: 25, top: 50 },
        { left: 31.7, top: 71.65 },
        { left: 50, top: 81.7 },
        { left: 68.3, top: 71.65 },
        { left: 62.5, top: 37.5 },
        { left: 37.5, top: 37.5 },
        { left: 37.5, top: 62.5 },
        { left: 62.5, top: 62.5 },
    ];

    return (
        <div className="relative w-full h-[600px] flex flex-col items-center justify-center bg-canvas rounded-2xl overflow-hidden shadow-sm border border-earth/5">
            {/* Atmospheric Background */}
            <SlowStories src="/videos/breathe_bg.mp4" opacity={0.15} />

            {/* Audio Elements */}
            <audio ref={inhaleAudioRef} src="/audio/inhale.mp3" />
            <audio ref={exhaleAudioRef} src="/audio/exhale.mp3" />
            <audio ref={ambientAudioRef} loop src="/audio/wind_audio.wav" />

            {/* Audio Toggle */}
            <div className="absolute top-4 right-4 z-20">
                <button
                    onClick={() => setAudioEnabled(!audioEnabled)}
                    className="bg-paper/80 backdrop-blur-sm border border-ink/10 rounded-full p-2 text-ink hover:text-earth transition-colors"
                >
                    {audioEnabled ? <Volume2 size={16} /> : <VolumeX size={16} />}
                </button>
            </div>

            {/* Cycle Counter */}
            <div className="absolute top-4 left-1/2 -translate-x-1/2 text-xs text-ink-muted uppercase tracking-[0.2em] z-20">
                {cycles}/2 Cycles
            </div>

            {/* Phase Label or Completion */}
            <div className="text-center z-10 space-y-2 mb-8">
                {!isComplete ? (
                    <AnimatePresence mode="wait">
                        <motion.div
                            key={phase}
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -10 }}
                            transition={{ duration: 0.3 }}
                            className="text-3xl font-serif text-ink tracking-widest"
                        >
                            {phase}
                        </motion.div>
                    </AnimatePresence>
                ) : (
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        className="space-y-4"
                    >
                        <div className="text-3xl font-serif text-earth">Complete</div>
                        <p className="text-ink-soft text-sm">You are centered.</p>
                        <button
                            onClick={handleRestart}
                            className="mt-4 px-6 py-2 bg-earth/10 hover:bg-earth/20 rounded-full text-xs uppercase tracking-widest text-ink hover:text-earth transition-all"
                        >
                            Practice Again
                        </button>
                    </motion.div>
                )}
            </div>

            {/* Multi-layered Breathing Circles */}
            {!isComplete && (
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                    {/* Outer Glow */}
                    <motion.div
                        animate={{ scale: getScaleForPhase(), opacity: phase === "Hold" || phase === "Pause" ? 0.3 : 0.15 }}
                        transition={{ duration: getDuration(), ease: "easeInOut" }}
                        className="absolute w-64 h-64 rounded-full bg-earth/20 blur-3xl"
                    />

                    {/* Middle Ring */}
                    <motion.div
                        animate={{ scale: getScaleForPhase(), opacity: phase === "Hold" || phase === "Pause" ? 0.6 : 0.4 }}
                        transition={{ duration: getDuration(), ease: "easeInOut" }}
                        className="absolute w-56 h-56 rounded-full bg-earth/30 blur-2xl"
                    />

                    {/* Inner Circle */}
                    <motion.div
                        animate={{
                            scale: getScaleForPhase(),
                            borderColor: phase === "Inhale" ? "rgba(122, 92, 62, 0.6)" : "rgba(122, 92, 62, 0.3)",
                        }}
                        transition={{ duration: getDuration(), ease: "easeInOut" }}
                        className="absolute w-48 h-48 rounded-full border-2 border-earth/40"
                    />

                    {/* Core */}
                    <motion.div
                        animate={{ scale: getScaleForPhase() * 0.3, opacity: phase === "Hold" ? 1 : 0.7 }}
                        transition={{ duration: getDuration(), ease: "easeInOut" }}
                        className="absolute w-12 h-12 rounded-full bg-earth/50"
                    />

                    {/* Floating Particles - Fixed positions */}
                    {particlePositions.map((pos, i) => (
                        <motion.div
                            key={i}
                            animate={{
                                y: [0, -30, 0],
                                opacity: [0.3, 0.7, 0.3],
                                scale: getScaleForPhase() * 0.5,
                            }}
                            transition={{
                                duration: 6,
                                repeat: Infinity,
                                delay: i * 0.5,
                                ease: "easeInOut",
                            }}
                            className="absolute w-1 h-1 rounded-full bg-earth/40"
                            style={{
                                left: `${pos.left}%`,
                                top: `${pos.top}%`,
                            }}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}
