import Image from "next/image";

export default function ShopHero() {
  return (
    <section className="relative h-[50vh] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1600x600.png"
          alt="Premium beauty products on display"
          data-ai-hint="beauty products display"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-primary/70 to-accent/40" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold drop-shadow-lg leading-tight">
          Discover Our Collection
        </h1>
        <p className="mt-6 max-w-2xl text-lg md:text-xl font-body drop-shadow-md">
          Handpicked products to elevate your beauty regimen.
        </p>
      </div>
    </section>
  );
}
