
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Scissors, Sparkles, Hand, Gem, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button } from "./ui/button";

const serviceCategories = [
  {
    icon: <Scissors className="h-10 w-10 text-primary" />,
    title: "Hair",
    services: ["Cut & Style", "Colour", "Texture", "Hair Spa", "Treatments"],
    href: "/services"
  },
  {
    icon: <Sparkles className="h-10 w-10 text-primary" />,
    title: "Skin",
    services: ["Facials", "Clean-Ups", "Body Care", "Manicure", "Pedicure"],
    href: "/services"
  },
  {
    icon: <Gem className="h-10 w-10 text-primary" />,
    title: "Bridal",
    services: ["Bridal Makeup", "Groom Makeup", "Pre-Bridal", "Hair Styling"],
    href: "/bridal"
  },
  {
    icon: <Hand className="h-10 w-10 text-primary" />,
    title: "Hands & Feet",
    services: ["Manicure", "Pedicure", "Nail Art", "Gel Polish", "Extensions"],
    href: "/services"
  },
];

export default function HomeServicesSection() {
  return (
    <section id="services" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Services</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Indulge in a wide range of services, from hair and skin to bridal and beyond.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {serviceCategories.map((category) => (
            <Card key={category.title} className="group text-center shadow-lg hover:shadow-xl transition-all duration-300 flex flex-col border-transparent hover:border-primary">
              <CardHeader className="items-center">
                <div className="mb-2 p-4 bg-primary/10 rounded-full">{category.icon}</div>
                <CardTitle className="font-headline text-2xl font-bold">{category.title}</CardTitle>
              </CardHeader>
              <CardContent className="flex-grow">
                <ul className="space-y-2 text-muted-foreground">
                    {category.services.map((service) => (
                        <li key={service}>{service}</li>
                    ))}
                </ul>
              </CardContent>
              <CardFooter className="justify-center pt-4">
                 <Button asChild variant="link" className="text-primary font-semibold group-hover:underline">
                    <Link href={category.href}>
                        Know More <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        <div className="text-center mt-16">
            <Button asChild size="lg">
                <Link href="/services">View All Services</Link>
            </Button>
        </div>
      </div>
    </section>
  );
}
