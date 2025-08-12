import Link from "next/link";
import { Button } from "./ui/button";

export default function ShopSection() {
  return (
    <section id="shop" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Shop Our Products</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Browse our curated selection of premium beauty products.
          </p>
        </div>
        <div className="text-center">
            <Button asChild size="lg">
                <Link href="/shop">Explore Products</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
