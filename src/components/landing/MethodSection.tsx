"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { RotateCcw, Search, Sparkles } from "lucide-react";

const steps = [
    {
        icon: Search,
        label: "01",
        title: "Investigar",
        description:
            "Compreender sintomas, histórico, exames, hábitos e sinais que o corpo vem apresentando.",
    },
    {
        icon: RotateCcw,
        label: "02",
        title: "Equilibrar",
        description:
            "Atuar nos fatores hormonais, metabólicos, intestinais e inflamatórios que impactam a saúde.",
    },
    {
        icon: Sparkles,
        label: "03",
        title: "Potencializar",
        description:
            "Construir mais energia, performance, composição corporal e qualidade de vida no longo prazo.",
    },
];

export function MethodSection() {
    return (
        <section
            id="metodo"
            className="relative isolate overflow-hidden bg-[#081112] py-24 text-ivory sm:py-28 lg:py-32"
        >
            <div className="absolute inset-0 -z-10">
                {/*<div className="absolute inset-0 bg-[linear-gradient(180deg,#061012_0%,#081112_48%,#061012_100%)]" />*/}

                <Image
                    src="/priscilla/backaro.png"
                    alt=""
                    width={1200}
                    height={1200}
                    className="pointer-events-none absolute left-1/2 top-8 w-[720px] -translate-x-1/2 opacity-[0.105] mix-blend-screen blur-[0.2px]"
                />

                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_14%,rgba(216,196,163,0.16),transparent_28%),radial-gradient(circle_at_50%_45%,rgba(8,17,18,0.62),transparent_48%)]" />
            </div>

            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    className="relative mx-auto max-w-4xl text-center"
                >
                    <div className="mb-6 flex items-center justify-center gap-4">
                        <div className="h-px w-12 bg-champagne/45" />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne">
                            Método Equilíbrio™
                        </p>
                        <div className="h-px w-12 bg-champagne/45" />
                    </div>

                    <h2 className="font-heading text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-ivory sm:text-5xl lg:text-6xl">
                        O problema não é apenas o sintoma que você sente.
                        <span className="block text-champagne">
              É a causa que ainda não foi compreendida.
            </span>
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ivory/68 sm:text-base">
                        Hormônios, metabolismo, intestino, sono, inflamação e estresse não
                        funcionam de forma isolada. O Método Equilíbrio™ organiza essa
                        investigação para construir um cuidado médico mais preciso,
                        individualizado e sustentável.
                    </p>
                </motion.div>

                <div className="relative mt-16 grid gap-5 lg:grid-cols-3">
                    <div className="absolute left-1/2 top-16 hidden h-px w-[72%] -translate-x-1/2 bg-gradient-to-r from-transparent via-champagne/35 to-transparent lg:block" />

                    {steps.map((step, index) => {
                        const Icon = step.icon;

                        return (
                            <motion.div
                                key={step.title}
                                initial={{ opacity: 0, y: 26 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-120px" }}
                                transition={{
                                    duration: 0.7,
                                    delay: index * 0.08,
                                    ease: "easeOut",
                                }}
                                className="relative rounded-[2rem] border border-white/10 bg-white/[0.04] p-7 text-center shadow-2xl shadow-black/20 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-champagne/30 hover:bg-white/[0.055]"
                            >
                                <div className="mx-auto mb-6 flex size-16 items-center justify-center rounded-full border border-champagne/25 bg-[#081112] text-champagne shadow-[0_0_40px_rgba(216,196,163,0.12)]">
                                    <Icon strokeWidth={1.25} className="size-7" />
                                </div>

                                <p className="text-[10px] font-semibold uppercase tracking-[0.28em] text-champagne/80">
                                    {step.label}
                                </p>

                                <h3 className="mt-3 font-heading text-3xl font-semibold tracking-[-0.025em] text-ivory">
                                    {step.title}
                                </h3>

                                <p className="mx-auto mt-4 max-w-xs text-sm leading-7 text-ivory/60">
                                    {step.description}
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
                    className="mx-auto mt-14 max-w-3xl rounded-full border border-champagne/18 bg-champagne/[0.055] px-6 py-4 text-center backdrop-blur-xl"
                >
                    <p className="text-sm leading-7 text-ivory/72">
                        A proposta não é silenciar sinais. É entender o que eles estão
                        tentando revelar sobre o seu organismo.
                    </p>
                </motion.div>
            </div>
        </section>
    );
}