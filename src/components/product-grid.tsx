"use client";

import { useState } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Checkbox } from "@/components/ui/checkbox";
import { Filter } from "lucide-react";

const products = [
  { id: 1, name: "Intense Hydration Shampoo", price: 1200, category: "Hair", image: "https://placehold.co/400x400.png", aiHint: "shampoo bottle" },
  { id: 2, name: "Vitamin C Radiance Serum", price: 2500, category: "Skin", image: "https://placehold.co/400x400.png", aiHint: "serum bottle" },
  { id: 3, name: "Matte Velvet Lipstick", price: 850, category: "Makeup", image: "https://placehold.co/400x400.png", aiHint: "lipstick" },
  { id: 4, name: "Keratin Smooth Conditioner", price: 1350, category: "Hair", image: "https://placehold.co/400x400.png", aiHint: "conditioner bottle" },
  { id: 5, name: "24K Gold Face Mask", price: 3200, category: "Skin", image: "https://placehold.co/400x400.png", aiHint: "face mask tube" },
  { id: 6, name: "Pro-Filter Foundation", price: 2800, category: "Makeup", image: "https://placehold.co/400x400.png", aiHint: "foundation bottle" },
  { id: 7, name: "Argan Oil Hair Treatment", price: 1800, category: "Hair", image: "https://placehold.co/400x400.png", aiHint: "hair oil" },
  { id: 8, name: "Hyaluronic Acid Moisturizer", price: 2100, category: "Skin", image: "https://placehold.co/400x400.png", aiHint: "moisturizer jar" },
  { id: 9, name: "Lakme Absolute Shine Line", price: 500, category: "Brands", image: "https://placehold.co/400x400.png", aiHint: "eyeliner" },
  { id: 10, name: "De Fabulous Reviver Hair Repair", price: 950, category: "Brands", image: "https://placehold.co/400x400.png", aiHint: "hair repair" },
];

const filters = {
  "Category": ["Hair", "Skin", "Makeup"],
  "Brands": ["Lakme", "De Fabulous", "Christine Valmy", "Brillare"],
};

const FilterSidebar = () => (
    <div className="space-y-6">
        <Accordion type="multiple" defaultValue={["Category", "Brands"]} className="w-full">
            {Object.entries(filters).map(([title, options]) => (
                <AccordionItem value={title} key={title}>
                    <AccordionTrigger className="text-lg font-headline">{title}</AccordionTrigger>
                    <AccordionContent>
                        <div className="grid gap-4 p-1">
                        {options.map(option => (
                            <div key={option} className="flex items-center space-x-2">
                                <Checkbox id={`${title}-${option}`} />
                                <label
                                    htmlFor={`${title}-${option}`}
                                    className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                                >
                                    {option}
                                </label>
                            </div>
                        ))}
                        </div>
                    </AccordionContent>
                </AccordionItem>
            ))}
        </Accordion>
    </div>
);


export default function ProductGrid() {
  const [sortOrder, setSortOrder] = useState("newest");
  
  // Dummy sort logic
  const sortedProducts = [...products].sort((a, b) => {
    if (sortOrder === "price-asc") return a.price - b.price;
    if (sortOrder === "price-desc") return b.price - a.price;
    return 0; // newest is default
  });

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl">
        <div className="flex flex-col md:flex-row gap-12">
          {/* Desktop Sidebar */}
          <aside className="hidden md:block w-full md:w-1/4 lg:w-1/5">
            <h2 className="text-2xl font-headline font-bold mb-6">Filters</h2>
            <FilterSidebar />
          </aside>

          {/* Main Content */}
          <main className="w-full md:w-3/4 lg:w-4/5">
            <div className="flex justify-between items-center mb-8">
                {/* Mobile Filter Trigger */}
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="outline" className="md:hidden">
                            <Filter className="mr-2 h-4 w-4" /> Filters
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                        <div className="p-6">
                            <h2 className="text-2xl font-headline font-bold mb-6">Filters</h2>
                            <FilterSidebar />
                        </div>
                    </SheetContent>
                </Sheet>

              <div className="flex items-center gap-4">
                <span className="text-sm text-muted-foreground hidden sm:inline">Sort by:</span>
                <Select onValueChange={setSortOrder} defaultValue={sortOrder}>
                  <SelectTrigger className="w-[180px]">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="newest">Newest</SelectItem>
                    <SelectItem value="price-asc">Price: Low to High</SelectItem>
                    <SelectItem value="price-desc">Price: High to Low</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
                  <CardContent className="p-0">
                    <Image
                      src={product.image}
                      alt={product.name}
                      data-ai-hint={product.aiHint}
                      width={400}
                      height={400}
                      className="object-cover w-full h-auto aspect-square transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <Button variant="secondary">View Details</Button>
                    </div>
                  </CardContent>
                  <div className="p-4 bg-white text-center">
                    <h3 className="font-headline text-lg font-semibold truncate">{product.name}</h3>
                    <p className="font-body text-primary font-bold text-xl my-2">INR {product.price.toLocaleString()}</p>
                    <Button className="w-full">Add to Cart</Button>
                  </div>
                </Card>
              ))}
            </div>
          </main>
        </div>
      </div>
    </section>
  );
}
