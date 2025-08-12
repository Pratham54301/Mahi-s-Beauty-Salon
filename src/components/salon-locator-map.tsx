"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, MapPin, Phone, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import Link from "next/link";


const salon = { 
  name: "Mahi's Beauty Salon", 
  address: "No.02 441/2537 G.H. Board, Opp. Navrang Flat, Ahmedabad-380024", 
  phone: "+91 7405271422", 
  services: ["Hair", "Skin", "Bridal", "Offers"],
  mapLink: "https://www.google.com/maps/dir//SHOP+NO+2,+G.H.Board,+441%2F2537,+opp.+Navrang+Flat+Road,+Ambika+Nagar+Society,+Bapunagar,+Ahmedabad,+Gujarat+380024/@23.0337418,72.5416941,12z/data=!4m8!4m7!1m0!1m5!1m1!1s0x395e877b1a35eb37:0x1e3eaf9f6d224b74!2m2!1d72.6240957!2d23.0337631?entry=ttu"
};


export default function SalonLocatorMap() {
  return (
    <section id="salon-locator" className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
            <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Find Our Salon</h2>
            <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
                We are conveniently located to serve you.
            </p>
        </div>
        <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="relative h-96 md:h-full w-full rounded-lg overflow-hidden shadow-lg">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3671.905943739777!2d72.6215207758342!3d23.02693951608674!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395e877b1a35eb37%3A0x1e3eaf9f6d224b74!2sSHOP%20NO%202%2C%20G.H.Board%2C%20441%2F2537%2C%20opp.%20Navrang%20Flat%20Road%2C%20Ambika%20Nagar%20Society%2C%20Bapunagar%2C%20Ahmedabad%2C%20Gujarat%20380024!5e0!3m2!1sen!2sin!4v1716982855585!5m2!1sen!2sin" 
                    width="100%" 
                    height="100%" 
                    style={{ border:0 }} 
                    allowFullScreen={true} 
                    loading="lazy" 
                    referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>
             <Card className="shadow-lg">
                <CardContent className="p-6">
                    <h3 className="font-headline font-bold text-2xl text-primary">{salon.name}</h3>
                    <div className="flex items-start gap-4 text-muted-foreground mt-4">
                        <MapPin className="h-5 w-5 shrink-0 mt-1"/>
                        <span>{salon.address}</span>
                    </div>
                        <div className="flex items-center gap-4 text-muted-foreground mt-3">
                        <Phone className="h-5 w-5 shrink-0"/>
                        <a href={`tel:${salon.phone}`} className="hover:underline">{salon.phone}</a>
                    </div>
                    <div className="flex gap-2 mt-4">
                        {salon.services.map(service => (
                            <span key={service} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{service}</span>
                        ))}
                    </div>
                    <div className="flex items-center gap-1 mt-4 text-amber-500">
                        <Star className="h-4 w-4 fill-current"/>
                        <Star className="h-4 w-4 fill-current"/>
                        <Star className="h-4 w-4 fill-current"/>
                        <Star className="h-4 w-4 fill-current"/>
                        <Star className="h-4 w-4 fill-current"/>
                        <span className="text-xs text-muted-foreground ml-1">(250+)</span>
                    </div>

                    <div className="flex gap-4 mt-6">
                        <Button asChild className="flex-1">
                            <Link href="/#booking">Book Now</Link>
                        </Button>
                        <Button asChild variant="outline" className="flex-1">
                           <a href={salon.mapLink} target="_blank" rel="noopener noreferrer">Get Directions</a>
                        </Button>
                    </div>
                </CardContent>
            </Card>
        </div>
      </div>
    </section>
  );
}
