"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siInstagram } from "simple-icons";
import { Button } from "@/components/ui/button";
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

export function FinalCtaSection() {
    return (
        <section
            id="agendar"
            className="relative isolate overflow-hidden bg-[#081112] py-24 text-ivory sm:py-28 lg:py-32"
        >
            <div className="absolute inset-0 -z-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_20%,rgba(216,196,163,0.16),transparent_34%),radial-gradient(circle_at_20%_80%,rgba(22,49,54,0.72),transparent_34%),linear-gradient(180deg,#061012_0%,#081112_48%,#030707_100%)]" />

                <Image
                    src="/priscilla/backfiodeouro.png"
                    alt=""
                    fill
                    className="object-cover opacity-[0.08] mix-blend-screen"
                />
            </div>

            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 26 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{ duration: 0.85, ease: "easeOut" }}
                    className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.6rem] border border-champagne/18 bg-white/[0.045] px-6 py-14 text-center shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-10 lg:px-16 lg:py-18"
                >
                    <div className="absolute inset-x-12 top-0 h-px bg-gradient-to-r from-transparent via-champagne/45 to-transparent" />
                    <div className="absolute -right-24 -top-24 size-72 rounded-full bg-champagne/10 blur-3xl" />
                    <div className="absolute -bottom-28 -left-28 size-80 rounded-full bg-emerald-soft/60 blur-3xl" />

                    <div className="relative z-10">
                        <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-champagne">
                            Agendamento
                        </p>

                        <h2 className="mx-auto mt-6 max-w-4xl font-heading text-balance text-4xl font-semibold leading-[0.98] tracking-[-0.035em] text-ivory sm:text-5xl lg:text-6xl">
                            Cuidar dos sintomas é importante.
                            <span className="block text-champagne">
                Entender a causa é transformador.
              </span>
                        </h2>

                        <p className="mx-auto mt-6 max-w-2xl text-sm leading-7 text-ivory/68 sm:text-base">
                            Agende uma consulta para investigar seus sinais com uma abordagem
                            médica individualizada, integrativa e baseada em ciência.
                        </p>

                        <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Button
                                asChild
                                className="group h-11 rounded-full bg-champagne px-7 text-sm font-semibold text-emerald-deep shadow-[0_0_42px_rgba(216,196,163,0.24)] hover:bg-champagne/90"
                            >
                                <a
                                    href={siteLinks.consultationOnline}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <MessageCircle className="size-4" />
                                    Agendar consulta online
                                    <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-11 rounded-full border-white/15 bg-white/[0.03] px-7 text-sm text-ivory hover:bg-white/10 hover:text-ivory"
                            >
                                <a
                                    href={siteLinks.instagram}
                                    target="_blank"
                                    rel="noreferrer"
                                >
                                    <InstagramIcon className="size-4" />
                                    Acompanhar no Instagram
                                </a>
                            </Button>
                        </div>

                        <p className="mx-auto mt-7 max-w-xl text-[11px] leading-5 text-ivory/45">
                            Atendimento presencial e por telemedicina. A avaliação médica é
                            individual e não substitui acompanhamento contínuo quando
                            necessário.
                        </p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}