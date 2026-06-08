"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
    BatteryCharging,
    Brain,
    Dumbbell,
    Flame,
    Moon,
    ShieldCheck,
} from "lucide-react";

const transformations = [
    {
        icon: BatteryCharging,
        title: "Mais energia",
        description: "Disposição real para viver a rotina com mais presença.",
    },
    {
        icon: Moon,
        title: "Sono restaurador",
        description: "Quando o corpo descansa melhor, tudo começa a responder melhor.",
    },
    {
        icon: Flame,
        title: "Metabolismo ativo",
        description: "Mais clareza sobre os fatores que influenciam peso e composição.",
    },
    {
        icon: Brain,
        title: "Clareza mental",
        description: "Foco, memória e performance cognitiva também dependem do corpo.",
    },
    {
        icon: Dumbbell,
        title: "Composição corporal",
        description: "Estratégias para perda de gordura e preservação de massa muscular.",
    },
    {
        icon: ShieldCheck,
        title: "Longevidade saudável",
        description: "Prevenção, vitalidade e qualidade de vida no longo prazo.",
    },
];

export function TransformationSection() {
    return (
        <section className="relative isolate overflow-hidden bg-[#061012] py-24 text-ivory sm:py-28 lg:py-32">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(216,196,163,0.1),transparent_30%),radial-gradient(circle_at_80%_80%,rgba(22,49,54,0.65),transparent_34%),linear-gradient(180deg,#061012_0%,#081112_55%,#061012_100%)]" />
                <Image
                    src="/priscilla/backfiodeouro.png"
                    alt=""
                    fill
                    className="object-cover opacity-[0.08] mix-blend-screen"
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
                            Transformação
                        </p>
                        <div className="h-px w-12 bg-champagne/45" />
                    </div>

                    <h2 className="font-heading text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-ivory sm:text-5xl lg:text-6xl">
                        Quando o corpo volta ao equilíbrio,
                        <span className="block text-champagne">
              a vida começa a responder diferente.
            </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ivory/68 sm:text-base">
                        O objetivo não é apenas melhorar exames. É recuperar energia,
                        clareza, disposição, composição corporal e qualidade de vida com uma
                        estratégia médica individualizada.
                    </p>
                </motion.div>

                <div className="mt-16 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                    {transformations.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 24 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-120px" }}
                                transition={{
                                    duration: 0.65,
                                    delay: index * 0.06,
                                    ease: "easeOut",
                                }}
                                className="group relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.035] p-6 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-champagne/30 hover:bg-white/[0.055]"
                            >
                                <div className="absolute -right-10 -top-10 size-28 rounded-full bg-champagne/5 blur-2xl transition duration-300 group-hover:bg-champagne/10" />

                                <div className="mb-5 flex size-12 items-center justify-center rounded-full border border-champagne/18 bg-champagne/[0.07] text-champagne">
                                    <Icon strokeWidth={1.25} className="size-6" />
                                </div>

                                <h3 className="font-heading text-2xl font-semibold tracking-[-0.025em] text-ivory">
                                    {item.title}
                                </h3>

                                <p className="mt-3 text-sm leading-7 text-ivory/60">
                                    {item.description}
                                </p>
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
                        Saúde não é apenas ausência de doença.
                    </p>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-ivory/66">
                        É ter energia, autonomia e clareza para viver melhor em cada fase da
                        vida.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}