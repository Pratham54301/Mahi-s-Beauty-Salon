"use client";

import { Card, CardContent } from "./ui/card";
import { Button } from "./ui/button";
import Image from "next/image";
import Link from "next/link";

const packages = [
    {
        title: "The Classic Radiance",
        description: "A timeless package including bridal makeup, hair styling, and saree draping for a flawless look.",
        image: "https://placehold.co/600x400.png",
        aiHint: "classic bride makeup",
        buttonLink: "#",
    },
    {
        title: "The Royal Affair",
        description: "Experience luxury with our premium services, including airbrush makeup and a pre-bridal facial.",
        image: "https://placehold.co/600x400.png",
        aiHint: "royal bride jewelry",
        buttonLink: "#",
    },
    {
        title: "The Modern Glam",
        description: "For the contemporary bride, this package features modern makeup techniques and chic hair design.",
        image: "https://placehold.co/600x400.png",
        aiHint: "modern bride style",
        buttonLink: "#",
    },
];

export default function BridalPackages() {
  return (
    <section id="packages" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Bridal Packages</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
                <Card key={index} className="group overflow-hidden rounded-lg text-center transition-all duration-300 border hover:border-primary hover:shadow-lg">
                    <div className="overflow-hidden">
                        <Image src={pkg.image} alt={pkg.title} data-ai-hint={pkg.aiHint} width={600} height={400} className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 group-hover:scale-110"/>
                    </div>
                    <CardContent className="p-6">
                        <h3 className="font-headline text-2xl font-bold mb-3">{pkg.title}</h3>
                        <p className="text-muted-foreground mb-6">{pkg.description}</p>
                        <Button asChild variant="outline" className="mt-auto w-fit px-8 border-foreground text-foreground hover:bg-foreground hover:text-background transition-colors duration-300">
                            <Link href={pkg.buttonLink}>Know More</Link>
                        </Button>
                    </CardContent>
                </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
