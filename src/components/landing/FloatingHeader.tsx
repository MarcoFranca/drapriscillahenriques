"use client";

import Image from "next/image";
import { motion, useScroll, useTransform } from "motion/react";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { siteLinks } from "@/lib/links";

export function FloatingHeader() {
    const { scrollY } = useScroll();

    const opacity = useTransform(scrollY, [120, 220], [0, 1]);
    const y = useTransform(scrollY, [120, 220], [-16, 0]);
    const pointerEvents = useTransform(scrollY, (value) =>
        value > 160 ? "auto" : "none"
    );

    return (
        <motion.header
            style={{ opacity, y, pointerEvents }}
            className="fixed left-0 right-0 top-4 z-50 px-4"
        >
            <div className="mx-auto flex h-20 w-full max-w-5xl items-center justify-between rounded-full border border-champagne/15 bg-[#081112]/78 px-4 shadow-2xl shadow-black/30 backdrop-blur-xl sm:px-5">
                <a href="#" aria-label="Voltar ao início" className="flex items-center">
                    <Image
                        src="/priscilla/logo-horizontal.png"
                        alt="Dra. Priscilla Henriques"
                        width={320}
                        height={120}
                        className="h-auto w-[170px] sm:w-[210px]"
                    />
                </a>

                <Button
                    asChild
                    className="group h-9 rounded-full bg-champagne px-5 text-xs font-semibold text-emerald-deep hover:bg-champagne/90"
                >
                    <a href={siteLinks.consultationOnline} target="_blank" rel="noreferrer">
                        Agendar consulta
                        <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                    </a>
                </Button>
            </div>
        </motion.header>
    );
}