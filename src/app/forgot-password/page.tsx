
import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ForgotPasswordForm from '@/components/forgot-password-form';
import { CartProvider } from '@/context/cart-context';


export default function ForgotPasswordPage() {
  return (
    <CartProvider>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16 md:py-24">
            <ForgotPasswordForm />
        </main>
        <Footer />
      </div>
    </CartProvider>
  );
}
