import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';
import CartHero from '@/components/cart-hero';
import CartSummary from '@/components/cart-summary';


export default function CartPage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <CartHero />
          <CartSummary />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </Fragment>
  );
}
