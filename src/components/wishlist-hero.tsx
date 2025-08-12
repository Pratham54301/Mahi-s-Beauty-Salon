import Image from "next/image";

export default function WishlistHero() {
  return (
    <section className="relative h-[40vh] min-h-[300px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1600x600.png"
          alt="Woman happily looking at products"
          data-ai-hint="happy shopper"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-wider">
          My Wishlist
        </h1>
      </div>
    </section>
  );
}
