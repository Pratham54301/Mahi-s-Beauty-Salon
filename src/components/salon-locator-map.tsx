"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Search, MapPin, Phone, Sparkles, Filter, List, Star } from "lucide-react";
import { Card, CardContent } from "./ui/card";
import { ScrollArea } from "./ui/scroll-area";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { Checkbox } from "./ui/checkbox";

const salons = [
  { name: "Mahi's Salon - Indiranagar", address: "123, 100 Feet Road, Indiranagar, Bangalore", phone: "+91 98765 43210", services: ["Hair", "Skin", "Bridal"] },
  { name: "Mahi's Salon - Koramangala", address: "456, 5th Block, Koramangala, Bangalore", phone: "+91 98765 43211", services: ["Hair", "Skin", "Offers"] },
  { name: "Mahi's Salon - Whitefield", address: "789, ITPL Main Road, Whitefield, Bangalore", phone: "+91 98765 43212", services: ["Hair", "Skin"] },
  { name: "Mahi's Salon - Jayanagar", address: "101, 11th Main, Jayanagar, Bangalore", phone: "+91 98765 43213", services: ["Skin", "Bridal", "Offers"] },
  { name: "Mahi's Salon - MG Road", address: "212, MG Road, Bangalore", phone: "+91 98765 43214", services: ["Hair", "Bridal"] },
];

const serviceFilters = ["Bridal", "Hair", "Skin", "Offers"];

export default function SalonLocatorMap() {
  return (
    <div className="flex flex-col md:flex-row h-[calc(100vh-80px)] bg-background">
      {/* Sidebar / Filters and List */}
      <aside className="w-full md:w-[450px] border-r flex flex-col">
        <div className="p-4 border-b">
          <div className="relative">
            <Input placeholder="Search by city, pincode, or area" className="pl-10" />
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          </div>
          <Button variant="outline" className="w-full mt-2">
            Use My Location
          </Button>
        </div>

        <div className="p-4 border-b">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-headline text-lg font-bold flex items-center gap-2"><Filter className="h-5 w-5"/> Filters</h2>
            <div className="flex items-center gap-2">
                <span className="text-sm">Sort By:</span>
                 <Select defaultValue="distance">
                    <SelectTrigger className="w-[120px]">
                        <SelectValue placeholder="Sort" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="distance">Distance</SelectItem>
                        <SelectItem value="alphabetical">A-Z</SelectItem>
                    </SelectContent>
                </Select>
            </div>
          </div>
           <div className="grid grid-cols-2 gap-4">
            {serviceFilters.map(service => (
              <div key={service} className="flex items-center space-x-2">
                <Checkbox id={service} />
                <label
                  htmlFor={service}
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  {service}
                </label>
              </div>
            ))}
          </div>
        </div>
        
        <ScrollArea className="flex-1">
            <div className="p-4 space-y-4">
                {salons.map((salon, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardContent className="p-4">
                            <h3 className="font-headline font-bold text-lg text-primary">{salon.name}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                                <MapPin className="h-4 w-4 shrink-0"/>
                                <span>{salon.address}</span>
                            </div>
                             <div className="flex items-center gap-2 text-sm text-muted-foreground mt-2">
                                <Phone className="h-4 w-4 shrink-0"/>
                                <a href={`tel:${salon.phone}`} className="hover:underline">{salon.phone}</a>
                            </div>
                            <div className="flex gap-2 mt-2">
                                {salon.services.map(service => (
                                    <span key={service} className="text-xs bg-primary/10 text-primary px-2 py-1 rounded-full">{service}</span>
                                ))}
                            </div>
                            <div className="flex items-center gap-1 mt-2 text-amber-500">
                                <Star className="h-4 w-4 fill-current"/>
                                <Star className="h-4 w-4 fill-current"/>
                                <Star className="h-4 w-4 fill-current"/>
                                <Star className="h-4 w-4 fill-current"/>
                                <Star className="h-4 w-4"/>
                                <span className="text-xs text-muted-foreground ml-1">(123)</span>
                            </div>

                            <div className="flex gap-2 mt-4">
                                <Button className="flex-1">Book Now</Button>
                                <Button variant="outline" className="flex-1">Get Directions</Button>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </ScrollArea>
      </aside>

      {/* Map View */}
      <main className="flex-1 h-64 md:h-full relative">
        <Image src="https://placehold.co/1200x800.png" alt="Map of salons" data-ai-hint="city map" fill className="object-cover" />
        <div className="absolute inset-0 bg-primary/10 pointer-events-none"></div>
      </main>
    </div>
  );
}
