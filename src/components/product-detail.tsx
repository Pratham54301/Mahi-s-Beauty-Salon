"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { Star } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { useToast } from "@/hooks/use-toast";

const ProductDetail = ({ product }: { product: any }) => {
    const { addToCart } = useCart();
    const { toast } = useToast();

    const handleAddToCart = () => {
        addToCart(product);
        toast({
            title: "Added to Cart",
            description: `${product.name} has been added to your cart.`,
        });
    };

  return (
    <section className="py-16 md:py-24">
      <div className="container max-w-7xl">
        <div className="grid md:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div>
            <div className="mb-4">
              <Image
                src={product.gallery[0]}
                alt={product.name}
                width={800}
                height={800}
                className="w-full h-auto object-cover rounded-lg shadow-lg"
              />
            </div>
            <div className="grid grid-cols-4 gap-4">
              {product.gallery.map((img: string, index: number) => (
                <div key={index} className="border rounded-lg overflow-hidden cursor-pointer">
                  <Image
                    src={img}
                    alt={`${product.name} thumbnail ${index + 1}`}
                    width={200}
                    height={200}
                    className="w-full h-auto object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div>
            <h1 className="text-3xl md:text-4xl font-headline font-bold mb-4">{product.name}</h1>
            <div className="flex items-center gap-2 mb-4">
                <div className="flex items-center text-amber-500">
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5 fill-current" />
                    <Star className="w-5 h-5" />
                </div>
                <span className="text-muted-foreground text-sm">({product.reviews.length} reviews)</span>
            </div>
            <p className="text-3xl font-bold text-primary mb-6">INR {product.price.toLocaleString()}</p>
            <p className="text-muted-foreground mb-6">{product.description}</p>
            
            <div className="mb-8">
                <h3 className="font-bold text-lg mb-2">Key Features:</h3>
                <ul className="list-disc list-inside text-muted-foreground space-y-1">
                    {product.features.map((feature: string, index: number) => (
                        <li key={index}>{feature}</li>
                    ))}
                </ul>
            </div>

            <Button size="lg" className="w-full md:w-auto" onClick={handleAddToCart}>Add to Cart</Button>
          </div>
        </div>

        {/* Reviews Section */}
        <div className="mt-16 md:mt-24">
            <h2 className="text-2xl font-bold font-headline mb-6">Customer Reviews</h2>
            {product.reviews.length > 0 ? (
                <div className="space-y-6">
                    {product.reviews.map((review: any, index: number) => (
                        <div key={index} className="border-b pb-4">
                             <div className="flex items-center text-amber-500 mb-2">
                                {[...Array(review.rating)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
                                {[...Array(5 - review.rating)].map((_, i) => <Star key={i} className="w-5 h-5" />)}
                            </div>
                            <p className="text-muted-foreground">{review.comment}</p>
                        </div>
                    ))}
                </div>
            ) : (
                <p className="text-muted-foreground">No reviews yet for this product.</p>
            )}
        </div>
      </div>
    </section>
  );
};

export default ProductDetail;
