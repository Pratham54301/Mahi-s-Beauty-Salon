import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import SalonLocatorMap from '@/components/salon-locator-map';
import ContactSection from '@/components/contact-section';
import ContentHubSection from '@/components/content-hub-section';


export default function ContactPage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <SalonLocatorMap />
          <ContactSection />
          <ContentHubSection />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}
