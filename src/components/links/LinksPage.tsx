"use client";

import Image from "next/image";
import { motion } from "motion/react";
import {
    CalendarCheck,
    ChevronRight,
    Globe2,
    MapPin,
    MessageCircle,
    Users,
} from "lucide-react";
import { siInstagram } from "simple-icons";
import { siteLinks } from "@/lib/links";

function InstagramIcon({ className = "" }: { className?: string }) {
    return (
        <svg role="img" viewBox="0 0 24 24" className={className} fill="currentColor">
            <path d={siInstagram.path} />
        </svg>
    );
}

const links = [
    {
        title: "Visite meu site",
        description: "Conheça meu trabalho",
        href: siteLinks.website,
        icon: Globe2,
        primary: true,
    },
    {
        title: "Comunidade no WhatsApp",
        description: "Entre para o grupo",
        href: siteLinks.communityWhatsapp,
        icon: Users,
        primary: false,
    },
    {
        title: "Agende sua consulta online",
        description: "Atendimento por telemedicina",
        href: siteLinks.consultationOnline,
        icon: CalendarCheck,
        primary: false,
    },
    {
        title: "Consulta presencial",
        description: "Alphaville · São Paulo",
        href: siteLinks.clinicWhatsapp,
        icon: MapPin,
        primary: false,
    },
];

const socials = [
    {
        label: "Instagram",
        href: siteLinks.instagram,
        icon: InstagramIcon,
    },
    {
        label: "WhatsApp",
        href: siteLinks.consultationOnline,
        icon: MessageCircle,
    },
];

export function LinksPage() {
    return (
        <main className="relative min-h-dvh overflow-hidden bg-[#f7f2e7] px-5 py-8 text-[#33403a] sm:py-12">
            <div className="absolute inset-0 -z-0">
                <div
                    className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-8%,rgba(201,168,106,0.22),transparent_38%),radial-gradient(circle_at_18%_22%,rgba(31,58,51,0.08),transparent_34%),radial-gradient(circle_at_82%_72%,rgba(201,168,106,0.12),transparent_34%),linear-gradient(180deg,#fffaf0_0%,#f7f2e7_42%,#efe5d1_100%)]"/>

                <Image
                    src="/priscilla/backfiodeouro.png"
                    alt=""
                    fill
                    priority
                    className="object-cover opacity-[0.16] mix-blend-multiply"
                />

                <Image
                    src="/priscilla/backcolmeia.png"
                    alt=""
                    fill
                    priority
                    className="object-cover object-right opacity-[0.075] mix-blend-multiply"
                />

                <div
                    className="absolute inset-0 bg-[linear-gradient(90deg,rgba(247,242,231,0.78)_0%,rgba(247,242,231,0.46)_50%,rgba(247,242,231,0.74)_100%)]"/>

                <div
                    className="absolute inset-0 opacity-[0.18] [background-image:radial-gradient(rgba(31,58,51,0.16)_0.7px,transparent_0.7px)] [background-size:18px_18px]"/>
            </div>

            <section className="relative z-10 mx-auto flex w-full max-w-[430px] flex-col items-center">
                <motion.div
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.75}}
                    className="mb-4 flex items-center gap-4 font-heading text-lg font-semibold uppercase tracking-[0.38em] text-[#b6924e]"
                >
                    <span className="h-px w-7 bg-gradient-to-r from-transparent to-[#c9a86a]"/>

                    <motion.div
                        initial={{opacity: 0, y: -14}}
                        animate={{opacity: 1, y: 0}}
                        transition={{duration: 0.8}}
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

                    <span className="h-px w-7 bg-gradient-to-r from-[#c9a86a] to-transparent"/>
                </motion.div>

                <motion.div
                    initial={{opacity: 0, scale: 0.94}}
                    animate={{opacity: 1, scale: 1}}
                    transition={{duration: 0.85, delay: 0.08}}
                    className="relative mb-6 grid size-[200px] place-items-center rounded-full"
                >
                    <div className="absolute -inset-10 rounded-full bg-[#c9a86a]/10 blur-3xl"/>

                    <div
                        className="absolute inset-0 rounded-full border border-[#c9a86a] bg-gradient-to-br from-[#e4d2a6] to-transparent opacity-90"/>

                    <div
                        className="relative size-[172px] overflow-hidden rounded-full border border-[#c9a86a]/55 bg-[#fbf8f0] shadow-[0_18px_40px_-18px_rgba(31,58,51,0.45)]">
                        <Image
                            src="/priscilla/dra-priscilla-hero.jpeg"
                            alt="Dra. Priscilla Henriques"
                            width={900}
                            height={1200}
                            priority
                            className="scale-[1.2] object-cover object-[50%_12%]"
                        />
                    </div>
                </motion.div>

                <motion.h1
                    initial={{opacity: 0, y: 16}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.75, delay: 0.16}}
                    className="text-center font-heading text-[38px] font-semibold leading-[1.04] text-[#1f3a33]"
                >
                    Dra. Priscilla
                    <br/>
                    Henriques
                </motion.h1>

                <motion.p
                    initial={{opacity: 0, y: 14}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.75, delay: 0.22}}
                    className="mt-3 max-w-[310px] text-center text-[12.5px] leading-6 tracking-[0.04em] text-[#2e4a41]"
                >
                    Médica | Saúde Hormonal, Metabólica e Medicina Integrativa
                </motion.p>

                <motion.p
                    initial={{opacity: 0, y: 14}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.75, delay: 0.28}}
                    className="mt-3 text-[10.5px] font-medium uppercase tracking-[0.26em] text-[#b6924e]"
                >
                    CRM-SP 276652
                </motion.p>

                <div className="relative my-7 h-px w-12 bg-gradient-to-r from-transparent via-[#c9a86a] to-transparent">
                    <span
                        className="absolute left-1/2 top-1/2 size-1.5 -translate-x-1/2 -translate-y-1/2 rotate-45 bg-[#c9a86a]"/>
                </div>

                <nav className="flex w-full flex-col gap-3.5" aria-label="Links principais">
                    {links.map((item, index) => {
                        const Icon = item.icon;

                        return (
                            <motion.a
                                key={item.title}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                initial={{opacity: 0, y: 16}}
                                animate={{opacity: 1, y: 0}}
                                transition={{duration: 0.7, delay: 0.34 + index * 0.06}}
                                className={
                                    item.primary
                                        ? "group flex w-full items-center gap-4 rounded-2xl bg-gradient-to-br from-[#f0e3c2] via-[#c9a86a] to-[#b6924e] px-4 py-4 text-[#1f3a33] shadow-[0_14px_30px_-12px_rgba(182,146,78,0.65)] transition duration-300 hover:-translate-y-1"
                                        : "group flex w-full items-center gap-4 rounded-2xl border border-[#c9a86a]/50 bg-[#fbf8f0] px-4 py-4 text-[#1f3a33] shadow-[0_8px_22px_-16px_rgba(31,58,51,0.5)] transition duration-300 hover:-translate-y-1 hover:border-[#c9a86a]"
                                }
                            >
                <span
                    className="relative grid size-11 shrink-0 place-items-center rounded-full bg-white/20 text-[#b6924e]">
                  <span className="absolute inset-0 rounded-full border border-current opacity-55"/>
                  <span className="absolute inset-1 rounded-full border border-current opacity-35"/>
                  <Icon strokeWidth={1.4} className="size-5"/>
                </span>

                                <span className="flex min-w-0 flex-col">
                  <b className="text-[14.5px] font-semibold leading-tight">
                    {item.title}
                  </b>
                  <span className="mt-1 text-[11px] opacity-70">
                    {item.description}
                  </span>
                </span>

                                <ChevronRight
                                    className="ml-auto size-4 opacity-50 transition group-hover:translate-x-1 group-hover:opacity-80"/>
                            </motion.a>
                        );
                    })}
                </nav>

                <motion.div
                    initial={{opacity: 0, y: 14}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.75, delay: 0.64}}
                    className="mt-8 flex items-center justify-center gap-4"
                >
                    {socials.map((item) => {
                        const Icon = item.icon;

                        return (
                            <a
                                key={item.label}
                                href={item.href}
                                target="_blank"
                                rel="noreferrer"
                                aria-label={item.label}
                                className="relative grid size-12 place-items-center rounded-full text-[#b6924e] transition duration-300 hover:-translate-y-1 hover:text-[#c9a86a]"
                            >
                                <span className="absolute inset-0 rounded-full border border-[#c9a86a]/60"/>
                                <Icon className="size-5"/>
                            </a>
                        );
                    })}
                </motion.div>

                <motion.footer
                    initial={{opacity: 0, y: 12}}
                    animate={{opacity: 1, y: 0}}
                    transition={{duration: 0.75, delay: 0.72}}
                    className="mt-9 text-center text-[10px] font-medium uppercase tracking-[0.22em] text-[#b6924e]/85"
                >
                    © 2026 Dra. Priscilla Henriques · Medicina Integrativa
                </motion.footer>
            </section>
        </main>
    );
}