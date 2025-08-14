
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
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import Link from "next/link";
import { products } from "@/data/products";

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
  const { addToCart, isMounted } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
    })
  };
  
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

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {sortedProducts.map((product) => (
                <Card key={product.id} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border hover:border-primary">
                  <Link href={`/shop/${product.id}`} className="block">
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
                  </Link>
                  <div className="p-4 bg-white text-center flex flex-col flex-grow">
                    <h3 className="font-headline text-lg font-semibold truncate"><Link href={`/shop/${product.id}`} className="hover:text-primary">{product.name}</Link></h3>
                    <p className="font-body text-primary font-bold text-xl my-2">INR {product.price.toLocaleString()}</p>
                    <div className="mt-auto">
                        {isMounted && <Button className="w-full" onClick={() => handleAddToCart(product)}>Add to Cart</Button>}
                    </div>
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
