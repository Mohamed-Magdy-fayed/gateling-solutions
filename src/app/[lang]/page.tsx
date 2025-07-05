import { HeroSection } from '@/features/landing/hero-section';
import { ValuePropositionSection } from '@/features/landing/value-proposition-section';
import { TemplatePreviewSection } from '@/features/landing/template-preview-section';
import { ProcessSection } from '@/features/landing/process-section';
import { TestimonialsSection } from '@/features/landing/testimonials-section';
import { FinalCtaSection } from '@/features/landing/final-cta-section';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

export default function HomePage() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <ValuePropositionSection />
        <TemplatePreviewSection />
        <ProcessSection />
        <TestimonialsSection />
        <FinalCtaSection />
      </main>
      <Footer />
    </>
  );
}

