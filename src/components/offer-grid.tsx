"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const offers = [
    {
        title: "20% Off on All Facials",
        description: "Rejuvenate your skin this season with a special discount on our entire range of facial treatments.",
        image: "https://placehold.co/600x400.png",
        aiHint: "facial treatment",
        buttonLink: "#",
    },
    {
        title: "Student Special: Haircut + Style",
        description: "Get a trendy new look! Show your student ID and get a haircut and styling session for just INR 999.",
        image: "https://placehold.co/600x400.png",
        aiHint: "woman getting haircut",
        buttonLink: "#",
    },
    {
        title: "Bridal Package Discount",
        description: "Book your complete bridal package and receive a complimentary pre-bridal facial for free!",
        image: "https://placehold.co/600x400.png",
        aiHint: "bride smiling",
        buttonLink: "/#bridal",
    },
    {
        title: "Manicure Monday Madness",
        description: "Start your week right! Get 15% off on all manicure and pedicure services every Monday.",
        image: "https://placehold.co/600x400.png",
        aiHint: "manicure nails",
        buttonLink: "#",
    },
    {
        title: "Hair Spa Happy Hours",
        description: "Enjoy a relaxing hair spa with a 25% discount on weekdays between 12 PM and 4 PM.",
        image: "https://placehold.co/600x400.png",
        aiHint: "hair spa",
        buttonLink: "#",
    },
    {
        title: "Refer a Friend, Get Rewarded",
        description: "Bring a friend along and you both get INR 500 off on services worth INR 2000 or more.",
        image: "https://placehold.co/600x400.png",
        aiHint: "friends laughing",
        buttonLink: "#",
    },
];

export default function OfferGrid() {
  return (
    <section id="offers" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {offers.map((offer, index) => (
                <Card key={index} className="group overflow-hidden rounded-lg text-center transition-all duration-300 border hover:border-primary hover:shadow-lg">
                    <div className="overflow-hidden">
                        <Image src={offer.image} alt={offer.title} data-ai-hint={offer.aiHint} width={600} height={400} className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-110"/>
                    </div>
                    <CardContent className="p-6">
                        <h3 className="font-headline text-2xl font-bold mb-3">{offer.title}</h3>
                        <p className="text-muted-foreground mb-6">{offer.description}</p>
                        <Button asChild variant="outline" className="mt-auto w-fit px-8 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
                            <Link href={offer.buttonLink}>Know More</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
