import { Fragment } from 'react';
import Header from '@/components/header';
import ShopHero from '@/components/shop-hero';
import ProductGrid from '@/components/product-grid';
import WhatsappButton from '@/components/whatsapp-button';
import Footer from '@/components/footer';


export default function ShopPage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <ShopHero />
          <ProductGrid />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </Fragment>
  );
}
