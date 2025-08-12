import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';
import CheckoutForm from '@/components/checkout-form';
import OrderSummary from '@/components/order-summary';
import { CartProvider } from '@/context/cart-context';


export default function CheckoutPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1 py-16 md:py-24">
            <div className="container max-w-7xl">
                <h1 className="text-3xl font-bold font-headline text-center mb-12">Checkout</h1>
                <div className="grid lg:grid-cols-2 lg:gap-12">
                    <CheckoutForm />
                    <OrderSummary />
                </div>
            </div>
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </CartProvider>
  );
}
