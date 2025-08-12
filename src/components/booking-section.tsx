import AppointmentForm from "./appointment-form";

export default function BookingSection() {
  return (
    <section id="booking" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Book Your Appointment</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Ready to be pampered? Fill out the form below to schedule your visit.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
