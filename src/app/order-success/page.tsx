
"use client";

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle } from 'lucide-react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { useCart, CartProvider } from '@/context/cart-context';

function OrderSuccessContent() {
    const [orderId, setOrderId] = useState('');
    const { clearCart } = useCart();

    useEffect(() => {
        // Generate order ID on the client side to avoid hydration mismatch
        setOrderId(Math.random().toString(36).substring(2, 10).toUpperCase());
        
        // Clear cart after order is successful
        clearCart();
    }, [clearCart]);

    return (
        <div className="flex-1 flex flex-col items-center justify-center text-center py-16 md:py-24">
            <CheckCircle className="h-20 w-20 text-green-500 mb-6" />
            <h1 className="text-4xl font-headline font-bold mb-4">Order Placed Successfully!</h1>
            {orderId && (
                <p className="text-lg text-muted-foreground mb-2">
                    Your Order ID is: <span className="font-bold text-primary">{orderId}</span>
                </p>
            )}
            <p className="text-muted-foreground mb-8">
                Thank you for your purchase. We've sent a confirmation to your email.
            </p>
            <div className="flex gap-4">
                <Button asChild>
                    <Link href="/">Go to Home</Link>
                </Button>
                <Button variant="outline" asChild>
                    <Link href="/track-order">Track Your Order</Link>
                </Button>
            </div>
        </div>
    )
}

export default function OrderSuccessPage() {
    return (
        <CartProvider>
            <div className="flex min-h-screen w-full flex-col bg-background">
                <Header />
                <main className="flex-1">
                    <OrderSuccessContent />
                </main>
                <Footer />
            </div>
        </CartProvider>
    );
}
