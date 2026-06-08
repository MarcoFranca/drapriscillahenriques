"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { BadgeCheck, GraduationCap, HeartPulse, ShieldCheck } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const credentials = [
    {
        icon: GraduationCap,
        title: "Formação médica",
        text: "Medicina pela Universidade do Estado do Rio de Janeiro — UERJ.",
    },
    {
        icon: ShieldCheck,
        title: "Residência médica",
        text: "Residência em Anestesiologia pela UERJ.",
    },
    {
        icon: HeartPulse,
        title: "Pós-graduações",
        text: "Endocrinologia, Metabologia, Medicina Funcional Integrativa e Hormonologia.",
    },
    {
        icon: BadgeCheck,
        title: "Aperfeiçoamento",
        text: "Menopausa, implantes hormonais, disbiose, estroboloma e metabolismo hormonal.",
    },
];

export function DoctorSection() {
    return (
        <section className="relative isolate overflow-hidden bg-[#081112] py-24 text-ivory sm:py-28 lg:py-32">
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_75%_20%,rgba(216,196,163,0.12),transparent_30%),radial-gradient(circle_at_20%_80%,rgba(22,49,54,0.7),transparent_34%),linear-gradient(180deg,#061012_0%,#081112_48%,#061012_100%)]" />
                <Image
                    src="/priscilla/backaro.png"
                    alt=""
                    fill
                    className="object-cover opacity-[0.06] mix-blend-screen"
                />

            </div>

            <div className="premium-container">
                <div className="grid items-center gap-14 lg:grid-cols-[0.92fr_1.08fr] lg:gap-20">
                    <motion.div
                        initial={{ opacity: 0, x: -34, scale: 0.98 }}
                        whileInView={{ opacity: 1, x: 0, scale: 1 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.9, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[520px] lg:mx-0"
                    >
                        <div className="absolute -inset-8 -z-10 rounded-full bg-champagne/10 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[2.4rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-2xl shadow-black/35 backdrop-blur">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#081112] via-transparent to-transparent opacity-62" />

                            <Image
                                src="/priscilla/IMG_3160.JPG.jpeg"
                                alt="Dra. Priscilla Costa Henriques"
                                width={900}
                                height={1200}
                                className="aspect-[4/5] w-full rounded-[2rem] object-cover object-top"
                            />

                            <div className="absolute bottom-5 left-5 right-5 z-20 rounded-3xl border border-white/10 bg-[#081112]/72 p-5 backdrop-blur-xl">
                                <p className="text-[11px] uppercase tracking-[0.22em] text-champagne">
                                    CRM-SP 276652
                                </p>

                                <p className="mt-2 text-xs leading-5 text-ivory/68">
                                    Médica com atuação em saúde hormonal, metabólica e medicina
                                    integrativa.
                                </p>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                    >
                        <div className="mb-6 flex items-center gap-4">
                            <div className="h-px w-12 bg-champagne/45" />
                            <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne">
                                Autoridade médica
                            </p>
                        </div>

                        <Badge className="mb-5 rounded-full border border-champagne/30 bg-champagne/10 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-champagne hover:bg-champagne/10">
                            Dra. Priscilla Costa Henriques
                        </Badge>

                        <h2 className="font-heading text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-ivory sm:text-5xl lg:text-6xl">
                            Medicina com ciência,
                            <span className="block text-champagne">
                escuta e individualidade.
              </span>
                        </h2>

                        <p className="mt-6 max-w-2xl text-sm leading-7 text-ivory/68 sm:text-base">
                            A atuação da Dra. Priscilla une investigação clínica, visão
                            integrativa e cuidado personalizado para compreender o organismo
                            como um sistema conectado — hormônios, metabolismo, intestino,
                            sono, inflamação e estilo de vida.
                        </p>

                        <div className="mt-10 grid gap-3 sm:grid-cols-2">
                            {credentials.map((item, index) => {
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
                                        className="rounded-3xl border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition duration-300 hover:-translate-y-1 hover:border-champagne/30 hover:bg-white/[0.055]"
                                    >
                                        <Icon strokeWidth={1.25} className="mb-4 size-5 text-champagne" />

                                        <h3 className="text-sm font-semibold uppercase tracking-[0.14em] text-ivory">
                                            {item.title}
                                        </h3>

                                        <p className="mt-2 text-xs leading-5 text-ivory/58">
                                            {item.text}
                                        </p>
                                    </motion.div>
                                );
                            })}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}