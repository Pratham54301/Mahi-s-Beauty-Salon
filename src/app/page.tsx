import Header from "@/components/header";
import HeroSection from "@/components/hero-section";
import ServicesSection from "@/components/services-section";
import ShopSection from "@/components/shop-section";
import BridalSection from "@/components/bridal-section";
import RunwayRewardsSection from "@/components/runway-rewards-section";
import OfferSection from "@/components/offer-section";
import FranchiseSection from "@/components/franchise-section";
import SalonLocatorSection from "@/components/salon-locator-section";
import ContactSection from "@/components/contact-section";
import ContentHubSection from "@/components/content-hub-section";
import TestimonialsSection from "@/components/testimonials-section";
import PricingSection from "@/components/pricing-section";
import BookingSection from "@/components/booking-section";
import WhatsappButton from "@/components/whatsapp-button";

export default function Home() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="flex min-h-screen w-full flex-col bg-background">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <ServicesSection />
        <ShopSection />
        <BridalSection />
        <RunwayRewardsSection />
        <OfferSection />
        <FranchiseSection />
        <SalonLocatorSection />
        <ContactSection />
        <ContentHubSection />
        <TestimonialsSection />
        <PricingSection />
        <BookingSection />
      </main>
      <footer className="bg-muted py-6 text-center text-sm text-muted-foreground">
        <p>&copy; {currentYear} Mahi's Beauty Salon. All rights reserved.</p>
      </footer>
      <WhatsappButton />
    </div>
  );
}
