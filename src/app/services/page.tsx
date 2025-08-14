
import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider } from '@/context/cart-context';
import ServicesHero from '@/components/services-hero';
import ServicesTabs from '@/components/services-tabs';


export default function ServicesPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <ServicesHero />
          <ServicesTabs />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
