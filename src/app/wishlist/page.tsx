import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';
import WishlistHero from '@/components/wishlist-hero';
import WishlistItems from '@/components/wishlist-items';
import { CartProvider } from '@/context/cart-context';


export default function WishlistPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <WishlistHero />
          <WishlistItems />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </CartProvider>
  );
}
