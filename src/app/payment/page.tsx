
import Header from '@/components/header';
import Footer from '@/components/footer';
import PaymentForm from '@/components/payment-form';
import OrderSummary from '@/components/order-summary';
import { CartProvider } from '@/context/cart-context';

export default function PaymentPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1 py-16 md:py-24">
            <div className="container max-w-7xl">
                <h1 className="text-3xl font-bold font-headline text-center mb-12">Payment</h1>
                <div className="grid lg:grid-cols-2 lg:gap-12">
                    <PaymentForm />
                    <OrderSummary />
                </div>
            </div>
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
