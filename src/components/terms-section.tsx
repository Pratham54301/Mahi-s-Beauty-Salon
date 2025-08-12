export default function TermsSection() {
  return (
    <section className="py-16 md:py-24 bg-muted">
      <div className="container max-w-4xl">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Terms & Conditions</h2>
        <div className="prose prose-lg max-w-none text-muted-foreground space-y-4 text-center">
          <p>
            All offers are valid for a limited period only and are subject to availability.
          </p>
          <p>
            Offers cannot be combined with any other ongoing promotions, discounts, or packages.
          </p>
          <p>
            A valid student ID must be presented to avail of the student-specific offers.
          </p>
          <p>
            Mahi's Beauty Salon reserves the right to modify or withdraw any offer without prior notice.
          </p>
          <p>
            All services are subject to prior appointment and availability of stylists.
          </p>
          <p>
            Prices are exclusive of all applicable taxes.
          </p>
        </div>
      </div>
    </section>
  );
}
