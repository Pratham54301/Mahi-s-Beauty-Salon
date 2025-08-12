import Image from "next/image";

export default function SalonLocatorHero() {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1600x600.png"
          alt="Woman in a salon"
          data-ai-hint="salon interior"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-wider">
          Salon Locator
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl font-body">
          Find a Mahi's Beauty Salon near you.
        </p>
      </div>
    </section>
  );
}
