
"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import { getAvatarColor } from "@/lib/utils";

const testimonials = [
  {
    name: "Anjali Sharma",
    quote: "The best salon experience I've ever had! The staff is so talented and friendly. My hair has never looked better. I highly recommend Mahi's!",
    avatarSrc: "https://placehold.co/100x100.png",
    aiHint: "happy person",
  },
  {
    name: "Priya Singh",
    quote: "I came for a facial and it was absolutely divine. So relaxing and my skin is glowing. I can't wait to come back for another treatment.",
    avatarSrc: "https://placehold.co/100x100.png",
    aiHint: "smiling woman",
  },
  {
    name: "Riya Patel",
    quote: "I got my makeup done for a wedding and it was flawless. It lasted all night and I got so many compliments. The makeup artist was a true professional.",
    avatarSrc: "",
    aiHint: "elegant woman",
  },
  {
    name: "Sneha Gupta",
    quote: "Their nail art is out of this world! So creative and precise. The salon has such a beautiful and relaxing atmosphere. A perfect pampering session.",
    avatarSrc: "",
    aiHint: "joyful person",
  },
];

export default function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">What Our Clients Say</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We are proud to have loyal clients who trust us with their beauty.
          </p>
        </div>
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          plugins={[
            Autoplay({
              delay: 5000,
            }),
          ]}
          className="w-full max-w-5xl mx-auto"
        >
          <CarouselContent>
            {testimonials.map((testimonial, index) => (
              <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                <div className="p-2 h-full">
                  <Card className="flex flex-col justify-between h-full shadow-lg bg-background rounded-xl overflow-hidden">
                    <CardContent className="flex flex-col items-center text-center p-8">
                      <Avatar className="w-24 h-24 mb-6 border-4 border-primary/50">
                        <AvatarImage src={testimonial.avatarSrc} alt={testimonial.name} data-ai-hint={testimonial.aiHint} />
                        <AvatarFallback 
                            className="text-primary-foreground font-bold text-3xl"
                            style={{ backgroundColor: getAvatarColor(testimonial.name) }}
                        >
                          {testimonial.name.charAt(0).toUpperCase()}
                        </AvatarFallback>
                      </Avatar>
                      <p className="mt-2 text-muted-foreground italic">
                        "{testimonial.quote}"
                      </p>
                      <p className="mt-6 font-headline text-xl font-semibold text-primary">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="text-primary hover:bg-primary/10 hover:text-primary" />
          <CarouselNext className="text-primary hover:bg-primary/10 hover:text-primary" />
        </Carousel>
      </div>
    </section>
  );
}
