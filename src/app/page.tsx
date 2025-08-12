import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ShopSection from "@/components/shop-section";
import TestimonialsSection from "@/components/testimonials-section";
import BookingSection from "@/components/booking-section";
import WhatsappButton from "@/components/whatsapp-button";
import Footer from "@/components/footer";
import SalonLocatorSection from "@/components/salon-locator-section";
import ContactSection from "@/components/contact-section";
import ContentHubSection from "@/components/content-hub-section";

export default function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ShopSection />
        <SalonLocatorSection />
        <ContactSection />
        <ContentHubSection />
        <TestimonialsSection />
        <BookingSection />
      </main>
      <Footer />
      <WhatsappButton />
    </div>
  );
}
