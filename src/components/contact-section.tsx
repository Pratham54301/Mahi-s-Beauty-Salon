import { Mail, MapPin, Phone } from "lucide-react";
import ContactForm from "./contact-form";

const contactDetails = [
  {
    icon: <MapPin className="h-8 w-8 text-primary" />,
    title: "Corporate Office",
    detail: "123 Beauty Avenue, Glamour City, GC 12345",
  },
  {
    icon: <Phone className="h-8 w-8 text-primary" />,
    title: "Call Us",
    detail: "+91 98765 43210",
  },
  {
    icon: <Mail className="h-8 w-8 text-primary" />,
    title: "Email Us",
    detail: "contact@mahisbeautysalon.com",
  },
];


export default function ContactSection() {
  return (
    <section id="contact" className="py-16 md:py-24 bg-muted">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold text-primary">Get In Touch</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Have a question or want to book an appointment? We'd love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-16 items-start">
            <div className="space-y-8">
                {contactDetails.map((item) => (
                    <div key={item.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0 mt-1">{item.icon}</div>
                        <div>
                            <h3 className="text-xl font-headline font-bold">{item.title}</h3>
                            <p className="text-muted-foreground">{item.detail}</p>
                        </div>
                    </div>
                ))}
            </div>
            <div>
                <ContactForm />
            </div>
        </div>
      </div>
    </section>
  );
}
