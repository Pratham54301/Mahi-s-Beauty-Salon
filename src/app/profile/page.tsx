import { Fragment } from 'react';
import Header from '@/components/header';
import Footer from '@/components/footer';
import ProfileCard from '@/components/profile-card';


export default function ProfilePage() {
  return (
    <Fragment>
      <div className="flex min-h-screen w-full flex-col bg-background">
        <Header />
        <main className="flex-1 flex items-center justify-center py-16 md:py-24 bg-muted">
            <ProfileCard />
        </main>
        <Footer />
      </div>
    </Fragment>
  );
}
