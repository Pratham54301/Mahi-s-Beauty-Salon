import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <section id="home" className="relative h-[80vh] w-full min-h-[500px] max-h-[700px]">
      <Image
        src="https://placehold.co/1600x900.png"
        alt="Interior of a beautiful salon"
        data-ai-hint="salon interior"
        fill
        className="object-cover"
        priority
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-black/20" />
      <div className="relative z-10 flex h-full flex-col items-center justify-center text-center text-white p-4">
        <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg">
          Mahi's Beauty Salon
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl drop-shadow-md">
          Experience the art of beauty. Where expertise meets elegance.
        </p>
        <Button asChild size="lg" className="mt-8">
          <Link href="#booking">Book an Appointment</Link>
        </Button>
      </div>
    </section>
  );
}
