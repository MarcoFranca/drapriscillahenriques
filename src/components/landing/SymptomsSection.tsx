"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
    BatteryLow,
    Brain,
    Heart,
    Moon,
    Scale,
    Waves,
} from "lucide-react";

const symptoms = [
    {
        icon: BatteryLow,
        title: "Energia",
        description: "Cansaço constante, mesmo após descansar.",
    },
    {
        icon: Scale,
        title: "Peso",
        description: "Dificuldade para emagrecer ou manter resultados.",
    },
    {
        icon: Moon,
        title: "Sono",
        description: "Dormir não significa necessariamente recuperar energia.",
    },
    {
        icon: Waves,
        title: "Humor",
        description: "Oscilações emocionais que impactam sua rotina.",
    },
    {
        icon: Heart,
        title: "Libido",
        description: "Mudanças hormonais podem afetar desejo e disposição.",
    },
    {
        icon: Brain,
        title: "Foco",
        description: "Dificuldade de concentração e clareza mental.",
    },
];

export function SymptomsSection() {
    return (
        <section className="relative isolate overflow-hidden bg-[#061012] py-24 text-ivory sm:py-28 lg:py-32">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[linear-gradient(180deg,#061012_0%,#081112_52%,#061012_100%)]" />

                <Image
                    src="/priscilla/backcolmeia.png"
                    alt=""
                    fill
                    className="object-cover object-right opacity-[0.13] mix-blend-screen"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(216,196,163,0.10),transparent_30%),radial-gradient(circle_at_82%_54%,rgba(216,196,163,0.09),transparent_32%),linear-gradient(90deg,#061012_0%,rgba(6,16,18,0.86)_46%,rgba(6,16,18,0.55)_100%)]" />
            </div>

            <div className="premium-container">
                <div className="grid items-center gap-14 lg:grid-cols-[1.02fr_0.98fr] lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-px w-12 bg-champagne/45" />
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne">
                                Os sinais
                            </p>
                        </div>

                        <h2 className="font-heading text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-ivory sm:text-5xl lg:text-6xl">
                            Seu corpo já está tentando avisar.
                        </h2>

                        <p className="mt-6 max-w-xl text-sm leading-7 text-ivory/68 sm:text-base">
                            Muitos sintomas considerados “normais” podem ser sinais de
                            desequilíbrios hormonais, metabólicos, intestinais ou inflamatórios
                            que merecem atenção.
                        </p>

                        <div className="mt-10 grid gap-3 sm:grid-cols-2">
                            {symptoms.map((item, index) => {
                                const Icon = item.icon;

                                return (
                                    <motion.div
                                        key={item.title}
                                        initial={{ opacity: 0, y: 18 }}
                                        whileInView={{ opacity: 1, y: 0 }}
                                        viewport={{ once: true, margin: "-100px" }}
                                        transition={{
                                            duration: 0.55,
                                            delay: index * 0.06,
                                            ease: "easeOut",
                                        }}
                                        className="group rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-champagne/30 hover:bg-white/[0.055]"
                                    >
                                        <div className="mb-4 flex size-11 items-center justify-center rounded-full border border-champagne/18 bg-champagne/[0.07] text-champagne transition duration-300 group-hover:border-champagne/35 group-hover:bg-champagne/10">
                                            <Icon strokeWidth={1.25} className="size-5" />
                                        </div>

                                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ivory">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-ivory/58">
                                            {item.description}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 34, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[520px] lg:mr-0"
                    >
                        <div className="absolute -left-10 -top-10 -z-10 size-64 rounded-full bg-champagne/10 blur-3xl" />

                        {/*<Image*/}
                        {/*    src="/priscilla/backaro.png"*/}
                        {/*    alt=""*/}
                        {/*    width={520}*/}
                        {/*    height={520}*/}
                        {/*    className="pointer-events-none absolute -right-14 -top-14 z-0 w-[230px] rotate-[18deg] opacity-[0.10] mix-blend-screen"*/}
                        {/*/>*/}

                        <div className="relative z-10 overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-2xl shadow-black/35 backdrop-blur">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#061012] via-transparent to-transparent opacity-60" />

                            <Image
                                src="/priscilla/IMG_3198.JPG.jpeg"
                                alt="Dra. Priscilla Henriques"
                                width={900}
                                height={1200}
                                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top"
                            />

                            <div className="absolute bottom-5 left-5 right-5 z-20 rounded-3xl border border-white/10 bg-[#061012]/72 p-5 backdrop-blur-xl">
                                <p className="text-[11px] uppercase tracking-[0.22em] text-champagne">
                                    Investigação individualizada
                                </p>

                                <p className="mt-2 text-xs leading-5 text-ivory/68">
                                    O cuidado começa quando os sinais deixam de ser ignorados e
                                    passam a ser compreendidos.
                                </p>
                            </div>
                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 22 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.75, ease: "easeOut" }}
                    className="mt-18 rounded-[2rem] border border-champagne/18 bg-champagne/[0.055] px-6 py-8 text-center backdrop-blur-xl sm:px-10 lg:mt-20"
                >
                    <p className="font-heading text-3xl font-semibold leading-tight tracking-[-0.025em] text-ivory sm:text-4xl">
                        Nem sempre o problema é falta de esforço.
                    </p>

                    <p className="mx-auto mt-3 max-w-2xl text-sm leading-7 text-ivory/66">
                        Muitas vezes é um organismo tentando pedir ajuda.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}