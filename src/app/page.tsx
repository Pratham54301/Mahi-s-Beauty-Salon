import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ShopSection from "@/components/shop-section";
import TestimonialsSection from "@/components/testimonials-section";
import BookingSection from "@/components/booking-section";
import WhatsappButton from "@/components/whatsapp-button";
import Footer from "@/components/footer";
import { CartProvider } from "@/context/cart-context";

export default function Home() {
  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1">
          <HeroSection />
          <ServicesSection />
          <ShopSection />
          <TestimonialsSection />
          <BookingSection />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </CartProvider>
  );
}
