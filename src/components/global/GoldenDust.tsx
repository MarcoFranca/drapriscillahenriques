"use client";

import { motion } from "motion/react";

const particles = [
    { left: "8%", top: "14%", size: 3, duration: 42, delay: 0 },
    { left: "18%", top: "68%", size: 2, duration: 48, delay: 4 },
    { left: "28%", top: "32%", size: 2, duration: 54, delay: 8 },
    { left: "38%", top: "82%", size: 3, duration: 46, delay: 2 },
    { left: "52%", top: "18%", size: 2, duration: 58, delay: 6 },
    { left: "62%", top: "56%", size: 3, duration: 50, delay: 10 },
    { left: "72%", top: "28%", size: 2, duration: 44, delay: 3 },
    { left: "84%", top: "76%", size: 3, duration: 60, delay: 7 },
    { left: "92%", top: "42%", size: 2, duration: 52, delay: 12 },
    { left: "14%", top: "46%", size: 1.8, duration: 56, delay: 5 },
    { left: "46%", top: "64%", size: 2.2, duration: 62, delay: 9 },
    { left: "78%", top: "12%", size: 1.8, duration: 49, delay: 11 },
];

export function GoldenDust() {
    return (
        <div
            aria-hidden="true"
            className="pointer-events-none fixed inset-0 z-[1] overflow-hidden"
        >
            {particles.map((particle, index) => (
                <motion.span
                    key={index}
                    className="absolute rounded-full bg-champagne shadow-[0_0_18px_rgba(216,196,163,0.55)]"
                    style={{
                        left: particle.left,
                        top: particle.top,
                        width: particle.size,
                        height: particle.size,
                    }}
                    initial={{
                        opacity: 0,
                        y: 0,
                        x: 0,
                        scale: 0.8,
                    }}
                    animate={{
                        opacity: [0, 0.5, 0.08, 0.8, 0],
                        y: [-8, -34, -18, -46, -8],
                        x: [0, 12, -8, 10, 0],
                        scale: [0.8, 1.15, 0.95, 1.25, 0.8],
                    }}
                    transition={{
                        duration: particle.duration,
                        delay: particle.delay,
                        repeat: Infinity,
                        ease: "easeInOut",
                    }}
                />
            ))}

            <motion.div
                className="absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-champagne/5 blur-3xl"
                animate={{
                    opacity: [0.04, 0.09, 0.04],
                    scale: [0.95, 1.08, 0.95],
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
        </div>
    );
}