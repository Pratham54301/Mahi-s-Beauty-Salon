import Image from "next/image";

export default function OfferHero() {
  return (
    <section className="relative h-[50vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1600x600.png"
          alt="Woman enjoying a salon treatment"
          data-ai-hint="salon promotion"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-accent/40" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-lg leading-tight">
          Offers & Promotions
        </h1>
        <p className="mt-6 max-w-3xl text-lg md:text-xl font-body drop-shadow-md">
          Discover our latest salon offers and save on your favorite services.
        </p>
      </div>
    </section>
  );
}
