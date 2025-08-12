import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import BookingSection from "@/components/booking-section";
import WhatsappButton from "@/components/whatsapp-button";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <TestimonialsSection />
        <PricingSection />
        <BookingSection />
      </main>
      <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {new Date().getFullYear()} Mahi's Beauty Salon. All rights reserved.</p>
      </footer>
      <WhatsappButton />
    </div>
  );
}
