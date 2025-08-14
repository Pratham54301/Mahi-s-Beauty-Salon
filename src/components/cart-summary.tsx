
"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Minus, Plus, Trash2 } from "lucide-react";
import { useCart } from "@/context/cart-context";
import { Loader2 } from "lucide-react";

const EmptyCart = () => (
    <div className="text-center py-20">
        <h2 className="text-2xl font-bold mb-4">Your Cart is Empty</h2>
        <p className="text-muted-foreground mb-8">Looks like you haven't added anything to your cart yet.</p>
        <Button asChild>
            <Link href="/shop">Continue Shopping</Link>
        </Button>
    </div>
)

export default function CartSummary() {
    const { cart, removeFromCart, updateQuantity, isMounted } = useCart();

    if (!isMounted) {
        return (
             <section className="py-16 md:py-24">
                <div className="container max-w-7xl">
                    <div className="text-center py-20 flex flex-col items-center justify-center">
                        <Loader2 className="h-8 w-8 animate-spin text-primary mb-4" />
                        <h2 className="text-2xl font-bold">Loading Cart...</h2>
                    </div>
                </div>
            </section>
        );
    }

    if (cart.length === 0) {
        return (
            <section className="py-16 md:py-24">
                <div className="container max-w-7xl">
                    <EmptyCart />
                </div>
            </section>
        )
    }

    const subtotal = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const tax = subtotal * 0.18; // 18% GST
    const total = subtotal + tax;

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container max-w-7xl">
        <div className="grid lg:grid-cols-3 gap-12">
            <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Your Cart ({cart.length} items)</h2>
                <div className="space-y-6">
                    {cart.map(item => (
                        <div key={item.id} className="flex items-center gap-6 p-4 border rounded-lg">
                           <Image src={item.image} alt={item.name} data-ai-hint={item.aiHint} width={100} height={100} className="rounded-md" />
                           <div className="flex-1">
                                <h3 className="font-bold">{item.name}</h3>
                                <p className="text-sm text-muted-foreground">{item.category}</p>
                                <p className="text-lg font-bold text-primary mt-2">INR {item.price.toLocaleString()}</p>
                           </div>
                           <div className="flex items-center gap-2">
                                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity - 1)} disabled={item.quantity <= 1}><Minus className="h-4 w-4"/></Button>
                                <Input type="number" value={item.quantity} readOnly className="h-8 w-14 text-center" />
                                <Button variant="outline" size="icon" className="h-8 w-8" onClick={() => updateQuantity(item.id, item.quantity + 1)}><Plus className="h-4 w-4"/></Button>
                           </div>
                           <Button variant="ghost" size="icon" className="text-muted-foreground hover:text-destructive" onClick={() => removeFromCart(item.id)}>
                                <Trash2 className="h-5 w-5" />
                           </Button>
                        </div>
                    ))}
                </div>
            </div>
            <div className="lg:col-span-1">
                <div className="p-6 bg-muted rounded-lg sticky top-28">
                    <h3 className="text-2xl font-bold mb-6">Order Summary</h3>
                    <div className="space-y-4">
                        <div className="flex justify-between">
                            <span>Subtotal</span>
                            <span>INR {subtotal.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Taxes (18% GST)</span>
                            <span>INR {tax.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg border-t pt-4 mt-4">
                            <span>Total</span>
                            <span>INR {total.toLocaleString()}</span>
                        </div>
                    </div>
                    <Button asChild size="lg" className="w-full mt-8">
                        <Link href="/checkout">Proceed to Checkout</Link>
                    </Button>
                </div>
            </div>
        </div>
      </div>
    </section>
  );
}
