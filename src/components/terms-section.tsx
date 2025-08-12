export default function TermsSection() {
  return (
    <section className="py-16 md:py-24 bg-background">
      <div className="container max-w-4xl">
        <h2 className="font-headline text-3xl md:text-4xl font-bold text-center mb-8">Terms & Conditions</h2>
        <div className="prose max-w-none text-muted-foreground mx-auto">
          <ul className="list-disc space-y-2 pl-5">
            <li>
              All offers are valid for a limited period only and are subject to availability.
            </li>
            <li>
              Offers cannot be combined with any other ongoing promotions, discounts, or packages.
            </li>
            <li>
              A valid student ID must be presented to avail of the student-specific offers.
            </li>
            <li>
              Mahi's Beauty Salon reserves the right to modify or withdraw any offer without prior notice.
            </li>
            <li>
              All services are subject to prior appointment and availability of stylists.
            </li>
            <li>
              Prices are exclusive of all applicable taxes.
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
