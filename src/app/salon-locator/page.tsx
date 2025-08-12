import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';
import SalonLocatorHero from '@/components/salon-locator-hero';
import SalonLocatorMap from '@/components/salon-locator-map';


export default function SalonLocatorPage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          {/* The hero is removed to match the reference site which has no hero on the locator page */}
          {/* <SalonLocatorHero /> */}
          <SalonLocatorMap />
        </main>
        {/* Footer removed to maximize map view on this specific page */}
        {/* <Footer /> */}
        <WhatsappButton />
      </div>
    </Fragment>
  );
}
