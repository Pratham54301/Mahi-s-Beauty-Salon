
import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import LoginForm from '@/components/login-form';
import { CartProvider } from '@/context/cart-context';
import { AuthProvider } from '@/context/auth-context';


export default function LoginPage() {
  return (
    <CartProvider>
      <AuthProvider>
        <div className="flex min-h-screen w-full flex-col bg-background">
          <Header />
          <main className="flex-1 flex items-center justify-center py-16 md:py-24">
              <LoginForm />
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </CartProvider>
  );
}
