"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";

const hubContent = [
    {
        title: "Monsoon Hair Care Guide",
        description: "Don't let the rains ruin your hair. Follow these simple tips to keep your tresses healthy and frizz-free this season.",
        image: "https://placehold.co/600x400.png",
        aiHint: "woman long hair",
        link: "#",
    },
    {
        title: "The Ultimate Bridal Skincare Routine",
        description: "Get that perfect bridal glow! Our experts share a step-by-step skincare guide for brides-to-be.",
        image: "https://placehold.co/600x400.png",
        aiHint: "bride skincare",
        link: "#",
    },
    {
        title: "Decoding Makeup Trends",
        description: "From glass skin to bold lips, we break down the hottest makeup trends and how you can achieve them.",
        image: "https://placehold.co/600x400.png",
        aiHint: "makeup trends",
        link: "#",
    },
];

export default function ContentHubSection() {
    return (
        <section id="content-hub" className="py-16 md:py-24 bg-background">
            <div className="container max-w-7xl">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-4xl md:text-5xl font-bold">Content Hub</h2>
                    <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Your one-stop destination for beauty tips, trends, and tutorials.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
                    {hubContent.map((item, index) => (
                        <Card key={index} className="group overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                            <Link href={item.link} className="block">
                                <div className="overflow-hidden">
                                    <Image
                                        src={item.image}
                                        alt={item.title}
                                        data-ai-hint={item.aiHint}
                                        width={600}
                                        height={400}
                                        className="object-cover w-full h-auto aspect-[4/3] transition-transform duration-300 group-hover:scale-110"
                                    />
                                </div>
                                <CardContent className="p-6">
                                    <h3 className="font-headline text-xl font-bold mb-3 group-hover:text-primary transition-colors">{item.title}</h3>
                                    <p className="text-muted-foreground">{item.description}</p>
                                </CardContent>
                            </Link>
                        </Card>
                    ))}
                </div>
                <div className="text-center">
                    <Button variant="outline" size="lg">Load More</Button>
                </div>
            </div>
        </section>
    );
}
