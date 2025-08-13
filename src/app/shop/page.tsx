import { Fragment } from 'react';
import Header from '@/components/header';
import ShopHero from '@/components/shop-hero';
import ProductGrid from '@/components/product-grid';
import Footer from '@/components/footer';
import { CartProvider } from '@/context/cart-context';


export default function ShopPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <ShopHero />
          <ProductGrid />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
