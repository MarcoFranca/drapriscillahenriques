"use client";

import Image from "next/image";
import { motion } from "motion/react";
import { MapPin, MessageCircle, MonitorCheck, ShieldCheck } from "lucide-react";
import { Button } from "@/components/ui/button";
import {siInstagram} from "simple-icons";

const whatsappUrl = "https://wa.me/5500000000000";
const instagramUrl = "https://www.instagram.com/drapriscillahenriques?igsh=MWg2M3R4azYxODZwMQ==";

const trustItems = [
    "Atendimento presencial",
    "Telemedicina",
    "Estratégia individualizada",
    "Baseado em ciência",
];

function InstagramIcon({
                           className = "",
                       }: {
    className?: string;
}) {
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

export function FooterSection() {
    return (
        <footer className="relative isolate overflow-hidden bg-[#030707] text-ivory">
            <section className="border-y border-champagne/15 bg-[#061012] py-7">
                <div className="premium-container">
                    <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                        {trustItems.map((item, index) => (
                            <motion.div
                                key={item}
                                initial={{ opacity: 0, y: 14 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.45, delay: index * 0.04 }}
                                className="flex items-center justify-center gap-2 rounded-full border border-white/10 bg-white/[0.035] px-4 py-3 text-center text-[11px] font-medium uppercase tracking-[0.14em] text-ivory/70"
                            >
                                <ShieldCheck strokeWidth={1.35} className="size-4 text-champagne" />
                                {item}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <section className="relative overflow-hidden py-14 sm:py-16">
                <div className="absolute inset-0 -z-10">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(216,196,163,0.10),transparent_32%),linear-gradient(180deg,#030707_0%,#061012_100%)]" />
                    <Image
                        src="/priscilla/backfiodeouro.png"
                        alt=""
                        fill
                        className="object-cover opacity-[0.08] mix-blend-screen"
                    />
                </div>

                <div className="premium-container">
                    <motion.div
                        initial={{ opacity: 0, y: 18 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.7 }}
                        className="mx-auto max-w-4xl text-center"
                    >
                        <p className="font-heading text-3xl font-semibold leading-tight tracking-[-0.025em] text-ivory sm:text-4xl">
                            Saúde não é apenas viver mais.
                            <span className="block text-champagne">É viver melhor.</span>
                        </p>

                        <div className="mt-10 flex justify-center">
                            <Image
                                src="/priscilla/logo-horizontal.png"
                                alt="Dra. Priscilla Henriques"
                                width={420}
                                height={160}
                                className="h-auto w-[230px] sm:w-[270px]"
                            />
                        </div>

                        <p className="mx-auto mt-6 max-w-xl text-sm leading-7 text-ivory/58">
                            Medicina hormonal, metabólica e integrativa com foco em
                            longevidade, qualidade de vida e cuidado individualizado.
                        </p>

                        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
                            <Button
                                asChild
                                variant="outline"
                                className="h-10 rounded-full border-champagne/20 bg-white/[0.03] px-5 text-xs text-champagne hover:bg-champagne/10 hover:text-champagne"
                            >
                                <a href={whatsappUrl} target="_blank" rel="noreferrer">
                                    <MessageCircle className="size-4" />
                                    WhatsApp
                                </a>
                            </Button>

                            <Button
                                asChild
                                variant="outline"
                                className="h-10 rounded-full border-champagne/20 bg-white/[0.03] px-5 text-xs text-champagne hover:bg-champagne/10 hover:text-champagne"
                            >
                                <a href={instagramUrl} target="_blank" rel="noreferrer">
                                    <InstagramIcon className="size-4" />
                                    Instagram
                                </a>
                            </Button>
                        </div>

                        <div className="mt-10 grid gap-4 border-t border-white/10 pt-8 text-xs text-ivory/48 sm:grid-cols-3">
                            <div className="flex items-center justify-center gap-2">
                                <MapPin className="size-4 text-champagne/70" />
                                São Paulo • Brasil
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <MonitorCheck className="size-4 text-champagne/70" />
                                Presencial e telemedicina
                            </div>

                            <div className="flex items-center justify-center gap-2">
                                <ShieldCheck className="size-4 text-champagne/70" />
                                CRM-SP 276652
                            </div>
                        </div>

                        <div className="mt-8 text-[11px] leading-5 text-ivory/35">
                            <p>Dra. Priscilla Costa Henriques — CRM-SP 276652</p>
                            <p className="mt-2">
                                Este site possui caráter informativo e não substitui consulta
                                médica individualizada.
                            </p>
                            <p className="mt-4">
                                © {new Date().getFullYear()} Dra. Priscilla Henriques. Todos os
                                direitos reservados.
                            </p>
                            <p className="text-xs text-[#F5EFE6]/28">
                                Desenvolvido por Marco Tullio França
                            </p>
                        </div>
                    </motion.div>
                </div>
            </section>
        </footer>
    );
}