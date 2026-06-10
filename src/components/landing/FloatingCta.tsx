"use client";

import { motion } from "motion/react";
import { ArrowRight, MessageCircle } from "lucide-react";
import { siteLinks } from "@/lib/links";

export function FloatingCta() {
    return (
        <motion.a
            href={siteLinks.consultationOnline}
            target="_blank"
            rel="noreferrer"
            initial={{ opacity: 0, y: 18, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.7, delay: 1.1, ease: "easeOut" }}
            className="group fixed bottom-5 right-5 z-50 flex items-center gap-2 rounded-full border border-champagne/30 bg-champagne px-5 py-3 text-xs font-semibold uppercase tracking-[0.12em] text-emerald-deep shadow-[0_0_42px_rgba(216,196,163,0.28)] transition duration-300 hover:-translate-y-1 hover:bg-champagne/90"
            aria-label="Agendar consulta pelo WhatsApp"
        >
            <MessageCircle className="size-4" />
            <span className="hidden sm:inline">Agendar consulta</span>
            <span className="sm:hidden">Agendar</span>
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
        </motion.a>
    );
}