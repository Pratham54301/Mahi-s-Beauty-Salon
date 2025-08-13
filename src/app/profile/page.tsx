
import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import { CartProvider } from '@/context/cart-context';
import { AuthProvider } from '@/context/auth-context';
import ProfileHeader from '@/components/profile-header';
import PersonalInfoCard from '@/components/personal-info-card';
import AppointmentsCard from '@/components/appointments-card';
import LoyaltyWalletCard from '@/components/loyalty-wallet-card';
import FavoritesCard from '@/components/favorites-card';
import SpecialOffersCard from '@/components/special-offers-card';
import SettingsCard from '@/components/settings-card';


export default function ProfilePage() {
  return (
    <CartProvider>
      <AuthProvider>
        <div className="flex min-h-screen w-full flex-col bg-muted/40">
          <Header />
          <main className="flex-1 py-8 md:py-12">
              <div className="container max-w-7xl space-y-8">
                  <ProfileHeader />
                  <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                      <div className="lg:col-span-2 space-y-8">
                          <AppointmentsCard />
                          <FavoritesCard />
                          <SpecialOffersCard />
                      </div>
                      <div className="lg:col-span-1 space-y-8">
                          <PersonalInfoCard />
                          <LoyaltyWalletCard />
                          <SettingsCard />
                      </div>
                  </div>
              </div>
          </main>
          <Footer />
        </div>
      </AuthProvider>
    </CartProvider>
  );
}
