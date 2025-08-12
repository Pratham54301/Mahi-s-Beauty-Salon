import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ScissorsIcon, PaintbrushIcon, LeafIcon, HandIcon } from "lucide-react";

const services = [
  {
    icon: <ScissorsIcon className="h-10 w-10 text-primary" />,
    title: "Hair Styling",
    description: "From classic cuts to the latest trends, our stylists create looks that enhance your natural beauty.",
  },
  {
    icon: <PaintbrushIcon className="h-10 w-10 text-primary" />,
    title: "Professional Makeup",
    description: "Perfect for special occasions or just a day you want to feel extra glamorous. We use top-quality products.",
  },
  {
    icon: <LeafIcon className="h-10 w-10 text-primary" />,
    title: "Skincare Treatments",
    description: "Rejuvenate your skin with our custom facials, peels, and treatments designed for your skin type.",
  },
  {
    icon: <HandIcon className="h-10 w-10 text-primary" />,
    title: "Nail Art & Manicures",
    description: "Indulge in our luxurious manicures, pedicures, and stunning nail art by our talented technicians.",
  },
];

export default function ServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Featured Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a wide range of services to cater to your beauty needs, delivered with care and professionalism.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <Card key={service.title} className="text-center shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardHeader className="items-center">
                <div className="mb-4">{service.icon}</div>
                <CardTitle className="font-headline text-2xl">{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
