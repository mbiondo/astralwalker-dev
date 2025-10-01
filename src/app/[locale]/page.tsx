import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { ManifestoSection } from "@/components/ManifestoSection";
import { ServicesSection } from "@/components/ServicesSection";
import { UniquenessSection } from "@/components/UniquenessSection";
import { TeamSection } from "@/components/TeamSection";
import { CaseStudiesSection } from "@/components/CaseStudiesSection";
import { PricingSection } from "@/components/PricingSection";
import { DeliverablesSection } from "@/components/DeliverablesSection";
import { PostMVPSection } from "@/components/PostMVPSection";
import { CTASection } from "@/components/CTASection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";
import { ScrollProgressIndicator, ScrollToTopButton } from "@/components/ScrollIndicators";
import { generateMetadata as generateSEOMetadata } from '@/lib/seo';
import type { Metadata } from 'next';

interface HomeProps {
  params: Promise<{ locale: string }>;
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  
  return generateSEOMetadata({
    locale,
    url: `https://indigoprod.com/${locale}`, // Cambia por tu dominio real
  });
}

export default async function Home({ params }: HomeProps) {
  // We await params but don't need to use locale here since components handle it
  await params;
  
  return (
    <>
      <ScrollProgressIndicator />
      <main className="min-h-screen bg-background">
        <Navigation />
        <HeroSection />
        <ManifestoSection />
        <ServicesSection />
        <UniquenessSection />
        <TeamSection />
        <CaseStudiesSection />
        <PricingSection />
        <DeliverablesSection />
        <PostMVPSection />
        <CTASection />
        <ContactSection />
        <Footer />
      </main>
      <ScrollToTopButton />
    </>
  );
}