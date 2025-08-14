
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import type { Service } from "@/data/services";

interface ServiceCategoryCardProps {
    service: Service;
}

export default function ServiceCategoryCard({ service }: ServiceCategoryCardProps) {
    return (
        <Card className="group overflow-hidden shadow-lg hover:shadow-primary/20 transition-all duration-300 bg-background">
            <div className="overflow-hidden">
                 <Image 
                    src={service.image} 
                    alt={service.title}
                    data-ai-hint={service.aiHint}
                    width={400} 
                    height={400} 
                    className="object-cover w-full h-auto aspect-square transition-transform duration-300 group-hover:scale-105"
                />
            </div>
            <CardContent className="p-6 flex flex-col flex-grow">
                <h3 className="font-headline text-xl font-bold mb-2 flex-grow">{service.title}</h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-3 h-[60px]">{service.description}</p>
                <div className="flex justify-between items-center mt-auto">
                    <p className="text-primary font-bold text-lg">{service.price}</p>
                    <Button asChild>
                        <Link href="/#booking">Book Now</Link>
                    </Button>
                </div>
            </CardContent>
        </Card>
    );
}
