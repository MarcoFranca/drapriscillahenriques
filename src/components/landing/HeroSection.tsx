"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { siInstagram } from "simple-icons";
import {
    Activity,
    ArrowRight,
    Brain,
    Flower2,
    Scale,
    Sprout,
    TrendingUp,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { siteLinks } from "@/lib/links";

function InstagramIcon({ className = "" }: { className?: string }) {
    return (
        <svg
            role="img"
            viewBox="0 0 24 24"
            className={className}
            fill="currentColor"
        >
            <path d={siInstagram.path} />
        </svg>
    );
}

const stats = ["CRM-SP 276652", "Menopausa", "Metabolismo", "Longevidade"];

const pillars = [
    { icon: Activity, title: "Saúde hormonal" },
    { icon: Scale, title: "Emagrecimento e metabolismo" },
    { icon: Sprout, title: "Saúde intestinal" },
    { icon: Flower2, title: "Longevidade" },
    { icon: Brain, title: "Performance cognitiva" },
    { icon: TrendingUp, title: "Resultados sustentáveis" },
];

export function HeroSection() {
    return (
        <>
            <section className="relative isolate min-h-dvh overflow-hidden emerald-radial">
                <div className="absolute inset-0 -z-10">
                    <Image
                        src="/priscilla/bg-leaves.png"
                        alt=""
                        fill
                        priority
                        className="object-cover opacity-20 mix-blend-screen"
                    />

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.4 }}
                        className="absolute inset-0 bg-[radial-gradient(circle_at_70%_18%,rgba(216,196,163,0.16),transparent_30%),linear-gradient(90deg,rgba(8,17,18,0.98)_0%,rgba(8,17,18,0.78)_48%,rgba(8,17,18,0.45)_100%)]"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 0.42, scale: 1 }}
                        transition={{ duration: 2.2, ease: "easeOut" }}
                        className="absolute right-[-8%] top-[-18%] h-[560px] w-[560px] rounded-full border border-champagne/10"
                    />
                </div>

                <header className="premium-container relative z-20 flex h-[96px] items-center justify-between pt-2">
                    <motion.div
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <Image
                            src="/priscilla/logo-horizontal.png"
                            alt="Dra. Priscilla Henriques"
                            width={420}
                            height={160}
                            priority
                            className="h-auto w-[210px] sm:w-[245px] lg:w-[270px]"
                        />
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: -14 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.15 }}
                        className="hidden items-center gap-3 md:flex"
                    >
                        <Button
                            asChild
                            variant="outline"
                            size="icon"
                            className="size-9 rounded-full border-champagne/25 bg-white/[0.03] text-champagne hover:bg-champagne/10 hover:text-champagne"
                        >
                            <a
                                href={siteLinks.instagram}
                                target="_blank"
                                rel="noreferrer"
                                aria-label="Instagram Dra. Priscilla Henriques"
                            >
                                <InstagramIcon className="size-4" />
                            </a>
                        </Button>

                        <Button
                            asChild
                            size="sm"
                            className="hidden h-9 rounded-full bg-champagne px-6 text-xs font-semibold text-emerald-deep hover:bg-champagne/90 md:inline-flex"
                        >
                            <a
                                href={siteLinks.consultationOnline}
                                target="_blank"
                                rel="noreferrer"
                            >
                                Agendar consulta
                            </a>
                        </Button>
                    </motion.div>
                </header>

                <div className="premium-container relative z-10 grid min-h-[calc(100dvh-96px)] items-center gap-8 pb-8 pt-0 lg:grid-cols-[0.92fr_1.08fr]">
                    <motion.div
                        initial={{ opacity: 0, y: 22 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, delay: 0.18, ease: "easeOut" }}
                        className="max-w-xl"
                    >
                        <Badge className="mb-4 rounded-full border border-champagne/30 bg-champagne/10 px-4 py-1 text-[10px] font-medium uppercase tracking-[0.22em] text-champagne hover:bg-champagne/10">
                            Medicina hormonal integrativa
                        </Badge>

                        <h1 className="font-heading text-balance text-4xl font-semibold leading-[0.96] tracking-[-0.035em] text-ivory sm:text-5xl lg:text-[4rem] xl:text-[4.55rem]">
                            Seu corpo está enviando sinais.
                            <span className="block text-champagne">
                A medicina certa ajuda você a entender.
              </span>
                        </h1>

                        <p className="mt-5 max-w-lg text-sm leading-6 text-ivory/70">
                            Atendimento médico personalizado em saúde hormonal, metabolismo,
                            menopausa, longevidade, composição corporal e medicina
                            integrativa.
                        </p>

                        <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                            <Button
                                asChild
                                className="group h-10 rounded-full bg-champagne px-6 text-sm font-semibold text-emerald-deep shadow-[0_0_36px_rgba(216,196,163,0.2)] hover:bg-champagne/90"
                            >
                                <a
                                    href={siteLinks.consultationOnline}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    Agendar consulta
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-10 rounded-full border-white/15 bg-white/[0.03] px-6 text-sm text-ivory hover:bg-white/10 hover:text-ivory"
                            >
                                <a href="#metodo">Conhecer abordagem</a>
                            </Button>
                        </div>

                        <div className="mt-6 flex flex-wrap gap-2">
                            {stats.map((item) => (
                                <span
                                    key={item}
                                    className="rounded-full border border-white/10 bg-white/[0.04] px-3.5 py-1.5 text-[10px] font-medium uppercase tracking-[0.14em] text-ivory/65"
                                >
                  {item}
                </span>
                            ))}
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 34, scale: 0.98 }}
                        animate={{ opacity: 1, x: 0, scale: 1 }}
                        transition={{ duration: 1, delay: 0.28, ease: "easeOut" }}
                        className="relative mx-auto w-full max-w-[560px] lg:mr-0 xl:max-w-[600px]"
                    >
                        <div className="absolute -inset-8 -z-10 rounded-full bg-champagne/10 blur-3xl" />

                        <div className="relative overflow-hidden rounded-[2.3rem] border border-white/10 bg-white/[0.04] p-2.5 shadow-2xl shadow-black/40 backdrop-blur">
                            <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#081112] via-transparent to-transparent opacity-50" />

                            <Image
                                src="/priscilla/dra-priscilla-hero.jpeg"
                                alt="Dra. Priscilla Henriques"
                                width={900}
                                height={1200}
                                priority
                                className="aspect-[4/4.85] max-h-[calc(100dvh-138px)] w-full rounded-[1.9rem] object-cover object-top"
                            />

                            <div className="absolute bottom-4 left-4 right-4 z-20 rounded-2xl border border-white/10 bg-[#081112]/68 p-3.5 backdrop-blur-xl">
                                <p className="text-[10px] uppercase tracking-[0.2em] text-champagne">
                                    Dra. Priscilla Costa Henriques
                                </p>
                                <p className="mt-1 text-[11px] leading-5 text-ivory/68">
                                    Médica com atuação em saúde hormonal, metabólica e medicina
                                    integrativa.
                                </p>
                            </div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.75 }}
                            className="absolute -right-3 top-9 hidden rounded-full border border-champagne/30 bg-[#081112]/80 px-4 py-2.5 text-[10px] font-medium uppercase tracking-[0.18em] text-champagne shadow-2xl backdrop-blur md:block"
                        >
                            Boutique health
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            <section className="relative border-y border-champagne/15 bg-[#061012] py-9">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,196,163,0.08),transparent_38%)]" />

                <div className="premium-container relative">
                    <div className="mb-8 flex items-center gap-4">
                        <div className="h-px flex-1 bg-champagne/25" />
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-ivory">
                            Especialidades
                        </p>
                        <div className="h-px flex-1 bg-champagne/25" />
                    </div>

                    <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 lg:grid-cols-6">
                        {pillars.map((item, index) => {
                            const Icon = item.icon;

                            return (
                                <motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.55, delay: index * 0.05 }}
                                    className="group flex flex-col items-center text-center"
                                >
                                    <div className="mb-4 flex size-14 items-center justify-center rounded-full border border-champagne/15 bg-white/[0.025] transition duration-300 group-hover:border-champagne/35 group-hover:bg-champagne/10">
                                        <Icon strokeWidth={1.25} className="size-8 text-champagne" />
                                    </div>

                                    <p className="max-w-[132px] text-[10px] font-medium uppercase leading-5 tracking-[0.16em] text-ivory/76">
                                        {item.title}
                                    </p>
                                </motion.div>
                            );
                        })}
                    </div>
                </div>
            </section>
        </>
    );
}