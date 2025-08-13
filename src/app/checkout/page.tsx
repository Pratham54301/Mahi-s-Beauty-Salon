
"use client";

import Header from '@/components/header';
import Footer from '@/components/footer';
import CheckoutForm from '@/components/checkout-form';
import OrderSummary from '@/components/order-summary';
import { CartProvider } from '@/context/cart-context';
import { useRouter } from 'next/navigation';
import { z } from 'zod';
import { shippingSchema } from '@/lib/schemas';


export default function CheckoutPage() {
    const router = useRouter();

    const handleFormSubmit = (values: z.infer<typeof shippingSchema>) => {
        console.log("Shipping details:", values);
        if (typeof window !== 'undefined') {
            localStorage.setItem('shippingDetails', JSON.stringify(values));
        }
        router.push('/payment');
    };

  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1 py-16 md:py-24">
            <div className="container max-w-7xl">
                <h1 className="text-3xl font-bold font-headline text-center mb-12">Checkout</h1>
                <div className="grid lg:grid-cols-2 lg:gap-12">
                    <CheckoutForm onSubmit={handleFormSubmit} />
                    <OrderSummary />
                </div>
            </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
