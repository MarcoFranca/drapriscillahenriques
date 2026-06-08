import { DoctorSection } from "@/components/landing/DoctorSection";
import { FinalCtaSection } from "@/components/landing/FinalCtaSection";
import { FooterSection } from "@/components/landing/FooterSection";
import { HeroSection } from "@/components/landing/HeroSection";
import { MethodSection } from "@/components/landing/MethodSection";
import { SpecialtiesSection } from "@/components/landing/SpecialtiesSection";
import { SymptomsSection } from "@/components/landing/SymptomsSection";
import { TransformationSection } from "@/components/landing/TransformationSection";

export default function Page() {
    return (
        <main className="min-h-dvh overflow-hidden bg-background text-foreground">
            <HeroSection />
            <SymptomsSection />
            <MethodSection />
            <TransformationSection />
            <DoctorSection />
            <SpecialtiesSection />
            <FinalCtaSection />
            <FooterSection />
        </main>
    );
}