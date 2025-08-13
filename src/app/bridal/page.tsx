import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import BridalHero from '@/components/bridal-hero';
import BridalIntro from '@/components/bridal-intro';
import BridalPackages from '@/components/bridal-packages';
import TestimonialsSection from '@/components/testimonials-section';
import BridalCTA from '@/components/bridal-cta';


export default function BridalPage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <BridalHero />
          <BridalIntro />
          <BridalPackages />
          <TestimonialsSection />
          <BridalCTA />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}
