
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Heart } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";
import { useState, useEffect } from "react";

const initialWishlistItems = [
  { id: 2, name: "Vitamin C Radiance Serum", price: 2500, category: "Skin", image: "https://placehold.co/400x400.png", aiHint: "serum bottle" },
  { id: 7, name: "Argan Oil Hair Treatment", price: 1800, category: "Hair", image: "https://placehold.co/400x400.png", aiHint: "hair oil" },
];

const EmptyWishlist = () => (
    <div className="text-center py-20">
        <Heart className="mx-auto h-16 w-16 text-muted-foreground mb-4" />
        <h2 className="text-2xl font-bold mb-4">Your Wishlist is Empty</h2>
        <p className="text-muted-foreground mb-8">Create your wishlist and get the products you love.</p>
        <Button asChild>
            <Link href="/shop">Explore Products</Link>
        </Button>
    </div>
)

export default function WishlistItems() {
    const { addToCart } = useCart();
    const { toast } = useToast();
    const [wishlistItems, setWishlistItems] = useState(initialWishlistItems);
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
        // Here you would fetch wishlist items from localStorage or an API
    }, []);

    const handleAddToCart = (product: any) => {
        addToCart(product);
        toast({
            title: "Added to Cart",
            description: `${product.name} has been added to your cart.`,
        });
    };

    const handleRemoveFromWishlist = (productId: number) => {
        setWishlistItems(prev => prev.filter(item => item.id !== productId));
        toast({
            title: "Removed from Wishlist",
            description: `The item has been removed from your wishlist.`,
        });
    }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl">
        {!isMounted ? (
            <div className="text-center py-20">
                <h2 className="text-2xl font-bold mb-4">Loading Wishlist...</h2>
            </div>
        ) : wishlistItems.length === 0 ? (
            <EmptyWishlist />
        ) : (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {wishlistItems.map((product) => (
                    <Card key={product.id} className="group relative overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 flex flex-col border hover:border-primary">
                        <div className="block">
                            <CardContent className="p-0 relative">
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
                                <Button variant="secondary" size="icon" onClick={() => handleRemoveFromWishlist(product.id)} className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white text-destructive">
                                    <Heart className="h-4 w-4 fill-current"/>
                                </Button>
                            </CardContent>
                        </div>
                        <div className="p-4 bg-white text-center flex flex-col flex-grow">
                            <h3 className="font-headline text-lg font-semibold truncate">
                                <Link href={`/shop/${product.id}`} className="hover:text-primary">{product.name}</Link>
                            </h3>
                            <p className="font-body text-primary font-bold text-xl my-2">INR {product.price.toLocaleString()}</p>
                            <div className="mt-auto">
                                <Button className="w-full" onClick={() => handleAddToCart(product)}>Add to Cart</Button>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        )}
      </div>
    </section>
  );
}
