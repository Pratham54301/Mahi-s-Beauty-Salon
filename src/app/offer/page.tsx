import { Fragment } from 'react';
import Header from '@/components/header';
import OfferHero from '@/components/offer-hero';
import OfferGrid from '@/components/offer-grid';
import TermsSection from '@/components/terms-section';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';

export default function OfferPage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <OfferHero />
          <OfferGrid />
          <TermsSection />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </Fragment>
  );
}
