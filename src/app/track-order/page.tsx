import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import TrackOrderHero from '@/components/track-order-hero';
import TrackOrderForm from '@/components/track-order-form';


export default function TrackOrderPage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <TrackOrderHero />
          <TrackOrderForm />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}
