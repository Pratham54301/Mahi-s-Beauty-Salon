
"use client";

import Image from "next/image";

const items = [
    { id: 1, name: "Intense Hydration Shampoo", price: 1200, quantity: 1, image: "https://placehold.co/64x64.png", aiHint: "shampoo bottle" },
    { id: 2, name: "Vitamin C Radiance Serum", price: 2500, quantity: 1, image: "https://placehold.co/64x64.png", aiHint: "serum bottle" },
];

export default function OrderSummary() {
    const subtotal = items.reduce((acc, item) => acc + item.price * item.quantity, 0);
    const shipping = 50; // Flat rate shipping
    const total = subtotal + shipping;

  return (
    <div className="lg:col-span-1 p-8 bg-muted rounded-lg h-fit sticky top-28">
        <h2 className="text-xl font-semibold mb-6">Order Summary</h2>
        <div className="space-y-4">
            {items.map(item => (
                <div key={item.id} className="flex items-center gap-4">
                    <div className="relative">
                        <Image src={item.image} alt={item.name} data-ai-hint={item.aiHint} width={64} height={64} className="rounded-md" />
                        <span className="absolute -top-2 -right-2 bg-primary text-primary-foreground text-xs w-5 h-5 rounded-full flex items-center justify-center">{item.quantity}</span>
                    </div>
                    <div className="flex-1">
                        <p className="font-medium">{item.name}</p>
                    </div>
                    <p className="font-semibold">INR {(item.price * item.quantity).toLocaleString()}</p>
                </div>
            ))}
        </div>
        <div className="mt-6 pt-6 border-t space-y-4">
             <div className="flex justify-between">
                <span>Subtotal</span>
                <span className="font-semibold">INR {subtotal.toLocaleString()}</span>
            </div>
            <div className="flex justify-between">
                <span>Shipping</span>
                <span className="font-semibold">INR {shipping.toLocaleString()}</span>
            </div>
             <div className="flex justify-between text-lg font-bold">
                <span>Total</span>
                <span>INR {total.toLocaleString()}</span>
            </div>
        </div>
    </div>
  );
}
