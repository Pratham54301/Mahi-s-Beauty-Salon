import Image from "next/image";

export default function BridalHero() {
  return (
    <section className="relative h-[50vh] min-h-[400px] w-full flex items-center justify-center text-center text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1600x800.png"
          alt="Bride getting ready"
          data-ai-hint="elegant bride"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50" />
      </div>
      <div className="relative z-10 flex h-full flex-col items-center justify-center p-4">
        <h1 className="font-headline text-5xl md:text-7xl font-bold uppercase tracking-wider">
          Bridal
        </h1>
        <p className="mt-4 max-w-2xl text-lg md:text-xl font-body">
          Transform into the most beautiful version of yourself.
        </p>
      </div>
    </section>
  );
}
