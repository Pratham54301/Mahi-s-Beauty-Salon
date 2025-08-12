import AppointmentForm from "./appointment-form";

export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to book an appointment? Fill out the form below and we'll get back to you shortly.
          </p>
        </div>
        <div className="max-w-2xl mx-auto">
          <AppointmentForm />
        </div>
      </div>
    </section>
  );
}
