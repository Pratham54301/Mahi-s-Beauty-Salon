import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[90vh] w-full min-h-[600px] max-h-[800px] flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1600x900.png"
          alt="Interior of a beautiful salon"
          data-ai-hint="salon interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/50" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg leading-tight">
          Mahi's Beauty Salon
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl font-body drop-shadow-md">
          Experience the art of beauty, where expertise meets elegance.
        </p>
        <Button asChild size="lg" className="mt-10 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg px-12 py-7 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
          <Link href="#booking">Book an Appointment</Link>
        </Button>
      </div>
    </section>
  );
}
