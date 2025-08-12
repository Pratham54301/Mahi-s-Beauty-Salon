import { Fragment } from 'react';
import Header from '@/components/header';
import ShopHero from '@/components/shop-hero';
import ProductGrid from '@/components/product-grid';
import WhatsappButton from '@/components/whatsapp-button';

export default function ShopPage() {
  const currentYear = new Date().getFullYear();
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <ShopHero />
          <ProductGrid />
        </main>
        <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
          <p>&copy; {currentYear} Mahi's Beauty Salon. All rights reserved.</p>
        </footer>
        <WhatsappButton />
      </div>
    </Fragment>
  );
}
