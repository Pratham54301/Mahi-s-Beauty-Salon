"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const slides = [
  {
    image: "https://placehold.co/1600x800.png",
    aiHint: "modern salon interior",
    title: "Mahi's Beauty Salon",
    subtitle: "Experience the art of beauty, where expertise meets elegance.",
    buttonText: "Book an Appointment",
    buttonLink: "#booking",
  },
  {
    image: "https://placehold.co/1600x800.png",
    aiHint: "premium beauty products",
    title: "Discover Our Collection",
    subtitle: "Handpicked products to elevate your beauty regimen.",
    buttonText: "Shop Now",
    buttonLink: "/shop",
  },
  {
    image: "https://placehold.co/1600x800.png",
    aiHint: "bride getting makeup",
    title: "Unforgettable Bridal Looks",
    subtitle: "Look your absolute best on your special day.",
    buttonText: "Explore Bridal Services",
    buttonLink: "#bridal",
  },
];

export default function HeroSection() {
  return (
    <section id="home" className="relative w-full h-[90vh] min-h-[600px] max-h-[800px] overflow-hidden">
      <Carousel
        className="w-full h-full"
        plugins={[
          Autoplay({
            delay: 5000,
          }),
        ]}
        opts={{
          loop: true,
        }}
      >
        <CarouselContent>
          {slides.map((slide, index) => (
            <CarouselItem key={index}>
              <div className="relative h-[90vh] min-h-[600px] max-h-[800px] w-full flex items-center justify-center text-center text-white">
                <div className="absolute inset-0">
                  <Image
                    src={slide.image}
                    alt={slide.title}
                    data-ai-hint={slide.aiHint}
                    fill
                    className="object-cover"
                    priority={index === 0}
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-primary/80 to-accent/50" />
                </div>
                <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
                  <h1 className="font-headline text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-lg leading-tight">
                    {slide.title}
                  </h1>
                  <p className="mt-6 max-w-3xl text-lg md:text-xl font-body drop-shadow-md">
                    {slide.subtitle}
                  </p>
                  <Button asChild size="lg" className="mt-10 bg-gradient-to-r from-primary to-accent text-primary-foreground font-bold text-lg px-12 py-7 rounded-full shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105">
                    <Link href={slide.buttonLink}>{slide.buttonText}</Link>
                  </Button>
                </div>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 border-none" />
        <CarouselNext className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-white bg-black/30 hover:bg-black/50 border-none" />
      </Carousel>
    </section>
  );
}
