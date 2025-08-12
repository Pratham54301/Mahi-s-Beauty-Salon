import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";

const offers = [
    {
        title: "20% Off on All Facials",
        description: "Rejuvenate your skin this season with a special discount on our entire range of facial treatments.",
        image: "https://placehold.co/600x400.png",
        aiHint: "facial treatment",
        buttonLink: "#booking",
    },
    {
        title: "Student Special: Haircut + Style",
        description: "Get a trendy new look! Show your student ID and get a haircut and styling session for just ₹999.",
        image: "https://placehold.co/600x400.png",
        aiHint: "woman getting haircut",
        buttonLink: "#booking",
    },
    {
        title: "Bridal Package Discount",
        description: "Book your complete bridal package and receive a complimentary pre-bridal facial for free!",
        image: "https://placehold.co/600x400.png",
        aiHint: "bride smiling",
        buttonLink: "#bridal",
    },
];

export default function OfferSection() {
  return (
    <section id="offer" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Special Offers</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't miss out on our exclusive deals and seasonal promotions.
          </p>
        </div>

        <Carousel
            opts={{
                align: "start",
                loop: true,
            }}
            plugins={[
                Autoplay({
                  delay: 4000,
                }),
            ]}
            className="w-full max-w-5xl mx-auto"
        >
            <CarouselContent>
            {offers.map((offer, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                    <div className="p-2 h-full">
                        <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300 h-full flex flex-col">
                            <Image src={offer.image} alt={offer.title} data-ai-hint={offer.aiHint} width={600} height={400} className="w-full h-48 object-cover"/>
                            <CardContent className="p-6 flex flex-col flex-grow">
                                <h3 className="font-headline text-xl font-bold mb-2 text-primary">{offer.title}</h3>
                                <p className="text-muted-foreground mb-4 flex-grow">{offer.description}</p>
                                <Button asChild className="mt-auto w-full">
                                    <Link href={offer.buttonLink}>Claim Offer</Link>
                                </Button>
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
