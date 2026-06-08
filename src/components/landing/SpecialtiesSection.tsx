"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
    Activity,
    Brain,
    CircleGauge,
    Dumbbell,
    HeartPulse,
    Leaf,
    Moon,
    Scale,
} from "lucide-react";

const specialties = [
    {
        icon: HeartPulse,
        title: "Saúde hormonal feminina",
    },
    {
        icon: Activity,
        title: "Saúde hormonal masculina",
    },
    {
        icon: Moon,
        title: "Menopausa e climatério",
    },
    {
        icon: Scale,
        title: "Emagrecimento e metabolismo",
    },
    {
        icon: Leaf,
        title: "Saúde intestinal",
    },
    {
        icon: Brain,
        title: "Performance cognitiva",
    },
    {
        icon: Dumbbell,
        title: "Composição corporal",
    },
    {
        icon: CircleGauge,
        title: "Longevidade saudável",
    },
];

export function SpecialtiesSection() {
    return (
        <section className="relative isolate overflow-hidden bg-[#061012] py-24 text-ivory sm:py-28 lg:py-32">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,196,163,0.1),transparent_30%),linear-gradient(180deg,#061012_0%,#081112_48%,#061012_100%)]" />
                <Image
                    src="/priscilla/backcolmeia.png"
                    alt=""
                    fill
                    className="object-cover opacity-[0.06] mix-blend-screen"
                />

            </div>

            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="mx-auto max-w-4xl text-center"
                >
                    <div className="mb-6 flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-champagne/45" />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne">
                            Especialidades
                        </p>
                        <div className="h-px w-12 bg-champagne/45" />
                    </div>

                    <h2 className="font-heading text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-ivory sm:text-5xl lg:text-6xl">
                        Um cuidado médico para diferentes sinais,
                        <span className="block text-champagne">
              fases e necessidades do corpo.
            </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ivory/68 sm:text-base">
                        A abordagem integra saúde hormonal, metabolismo, intestino,
                        performance, prevenção e longevidade para construir um cuidado mais
                        completo e individualizado.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                    {specialties.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 22 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-120px" }}
                                transition={{
                                    duration: 0.6,
                                    delay: index * 0.045,
                                    ease: "easeOut",
                                }}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 text-center backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-champagne/30 hover:bg-white/[0.055]"
                            >
                                <div className="absolute inset-x-8 top-0 h-px bg-gradient-to-r from-transparent via-champagne/35 to-transparent opacity-0 transition duration-300 group-hover:opacity-100" />

                                <div className="mx-auto mb-5 flex size-14 items-center justify-center rounded-full border border-champagne/18 bg-champagne/[0.07] text-champagne transition duration-300 group-hover:border-champagne/35 group-hover:bg-champagne/10">
                                    <Icon strokeWidth={1.25} className="size-7" />
                                </div>

                                <h3 className="mx-auto max-w-[190px] text-[12px] font-semibold uppercase leading-6 tracking-[0.16em] text-ivory/82">
                                    {item.title}
                                </h3>
                            </motion.div>
                        );
                    })}
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="mx-auto mt-16 max-w-4xl rounded-[2rem] border border-champagne/18 bg-champagne/[0.055] px-6 py-8 text-center backdrop-blur-xl sm:px-10"
                >
                    <p className="font-heading text-3xl font-semibold leading-tight tracking-[-0.025em] text-ivory sm:text-4xl">
                        Cada paciente chega com uma história.
                    </p>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-ivory/66">
                        Por isso, o atendimento não parte de fórmulas prontas. Parte de
                        investigação, escuta e estratégia médica.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}