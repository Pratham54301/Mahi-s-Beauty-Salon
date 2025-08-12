import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Card, CardContent } from "./ui/card";
import { Heart } from "lucide-react";

const wishlistItems = [
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

    if (wishlistItems.length === 0) {
        return (
            <section className="py-16 md:py-24">
                <div className="container max-w-7xl">
                    <EmptyWishlist />
                </div>
            </section>
        )
    }

  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
            {wishlistItems.map((product) => (
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
                <Button variant="secondary" size="icon" className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/80 hover:bg-white text-destructive">
                    <Heart className="h-4 w-4 fill-current"/>
                </Button>
                </CardContent>
                <div className="p-4 bg-white text-center">
                <h3 className="font-headline text-lg font-semibold truncate">{product.name}</h3>
                <p className="font-body text-primary font-bold text-xl my-2">INR {product.price.toLocaleString()}</p>
                <Button className="w-full">Add to Cart</Button>
                </div>
            </Card>
            ))}
        </div>
      </div>
    </section>
  );
}
