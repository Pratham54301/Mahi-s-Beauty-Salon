import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import WhatsappButton from '@/components/whatsapp-button';
import ForgotPasswordForm from '@/components/forgot-password-form';


export default function ForgotPasswordPage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16 md:py-24">
            <ForgotPasswordForm />
        </main>
        <Footer />
        <WhatsappButton />
      </div>
    </Fragment>
  );
}
