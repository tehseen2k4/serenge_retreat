"use client";

import { useState, useRef, useEffect } from "react";
import { Volume2, VolumeX, Play, Pause } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function AudioPlayer() {
    const [isPlaying, setIsPlaying] = useState(false);
    const [isMuted, setIsMuted] = useState(false);
    const audioRef = useRef<HTMLAudioElement>(null);

    const togglePlay = () => {
        if (audioRef.current) {
            if (isPlaying) {
                audioRef.current.pause();
            } else {
                audioRef.current.play();
            }
            setIsPlaying(!isPlaying);
        }
    };

    const toggleMute = () => {
        if (audioRef.current) {
            audioRef.current.muted = !isMuted;
            setIsMuted(!isMuted);
        }
    };

    return (
        <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-2 items-end">
            <audio ref={audioRef} loop src="/audio/wind_audio.wav" />

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center gap-2 bg-paper/80 backdrop-blur-md p-2 rounded-full border border-border shadow-sm"
            >
                <button
                    onClick={togglePlay}
                    className="w-10 h-10 flex items-center justify-center rounded-full bg-ink text-paper hover:bg-earth transition-colors duration-300"
                    aria-label={isPlaying ? "Pause Ambient Sound" : "Play Ambient Sound"}
                >
                    {isPlaying ? <Pause size={16} /> : <Play size={16} className="ml-0.5" />}
                </button>

                <AnimatePresence>
                    {isPlaying && (
                        <motion.button
                            initial={{ width: 0, opacity: 0, scale: 0 }}
                            animate={{ width: "auto", opacity: 1, scale: 1 }}
                            exit={{ width: 0, opacity: 0, scale: 0 }}
                            onClick={toggleMute}
                            className="w-10 h-10 flex items-center justify-center rounded-full text-ink hover:text-earth transition-colors"
                        >
                            {isMuted ? <VolumeX size={18} /> : <Volume2 size={18} />}
                        </motion.button>
                    )}
                </AnimatePresence>
            </motion.div>

            {!isPlaying && (
                <motion.p
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-[10px] uppercase tracking-widest text-ink-muted bg-paper/80 px-2 py-1 rounded"
                >
                    Listen to the Valley
                </motion.p>
            )}
        </div>
    );
}
