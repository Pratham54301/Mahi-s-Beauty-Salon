"use client";

import Link from "next/link";
import Image from "next/image";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";

const featuredProducts = [
  { id: 1, name: "Intense Hydration Shampoo", price: 1200, category: "Hair", image: "https://placehold.co/400x400.png", aiHint: "shampoo bottle" },
  { id: 2, name: "Vitamin C Radiance Serum", price: 2500, category: "Skin", image: "https://placehold.co/400x400.png", aiHint: "serum bottle" },
  { id: 3, name: "Matte Velvet Lipstick", price: 850, category: "Makeup", image: "https://placehold.co/400x400.png", aiHint: "lipstick" },
  { id: 4, name: "Keratin Smooth Conditioner", price: 1350, category: "Hair", image: "https://placehold.co/400x400.png", aiHint: "conditioner bottle" },
];

export default function ShopSection() {
  const { addToCart } = useCart();
  const { toast } = useToast();

  const handleAddToCart = (product: any) => {
    addToCart(product);
    toast({
        title: "Added to Cart",
        description: `${product.name} has been added to your cart.`,
    })
  };

  return (
    <section id="shop-spotlight" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Featured Products</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of premium beauty products.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {featuredProducts.map((product) => (
            <Card key={product.id} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
              <CardContent className="p-0">
                <Link href={`/shop/${product.id}`}>
                    <Image
                    src={product.image}
                    alt={product.name}
                    data-ai-hint={product.aiHint}
                    width={400}
                    height={400}
                    className="object-cover w-full h-auto aspect-square transition-transform duration-300 group-hover:scale-105"
                    />
                </Link>
                 <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                   <Button variant="secondary" asChild>
                     <Link href={`/shop/${product.id}`}>View Details</Link>
                   </Button>
                </div>
              </CardContent>
              <div className="p-4 bg-white text-center">
                <h3 className="font-headline text-lg font-semibold truncate">
                    <Link href={`/shop/${product.id}`}>{product.name}</Link>
                </h3>
                <p className="font-body text-primary font-bold text-xl my-2">INR {product.price.toLocaleString()}</p>
                <Button className="w-full" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
              </div>
            </Card>
          ))}
        </div>
        <div className="text-center">
            <Button asChild size="lg" variant="outline">
                <Link href="/shop">Explore All Products</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
