import { Button } from "./ui/button";
import Link from "next/link";

export default function BridalCTA() {
  return (
    <section className="py-16 md:py-24 bg-primary/5">
      <div className="container max-w-4xl text-center">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-6">Book Your Bridal Consultation</h2>
        <p className="text-lg text-muted-foreground mb-8">
          Let's start planning your perfect bridal look. Schedule a consultation with our experts today.
        </p>
        <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
            <Link href="/#booking">Book an Appointment</Link>
        </Button>
      </div>
    </section>
  );
}
