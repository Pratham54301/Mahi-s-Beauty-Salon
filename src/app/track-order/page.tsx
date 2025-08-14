
import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import TrackOrderForm from '@/components/track-order-form';
import { CartProvider } from '@/context/cart-context';


export default function TrackOrderPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <TrackOrderForm />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
