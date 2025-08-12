import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

const pricingData = [
  { service: "Women's Haircut & Style", price: "₹1,500" },
  { service: "Men's Haircut", price: "₹800" },
  { service: "Full Hair Color", price: "Starts at ₹3,000" },
  { service: "Highlights / Balayage", price: "Starts at ₹4,500" },
  { service: "Signature Facial", price: "₹2,500" },
  { service: "Event Makeup", price: "₹4,000" },
  { service: "Bridal Makeup Package", price: "Contact us" },
  { service: "Classic Manicure", price: "₹700" },
  { service: "Gel Pedicure", price: "₹1,200" },
];

export default function PricingSection() {
  return (
    <section id="pricing" className="py-16 md:py-24 bg-background">
      <div className="container max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="font-headline text-4xl md:text-5xl font-bold">Our Services & Pricing</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Transparent pricing for our premium quality services.
          </p>
        </div>
        <Card className="max-w-4xl mx-auto shadow-lg rounded-xl overflow-hidden border-primary/20">
          <CardHeader className="bg-primary/5">
            <CardTitle className="font-headline text-3xl text-primary flex items-center gap-2">
              Service Menu
            </CardTitle>
            <CardDescription className="text-primary/80">All prices are inclusive of taxes. Gratuity is not included.</CardDescription>
          </CardHeader>
          <CardContent className="p-0">
            <Table>
              <TableHeader>
                <TableRow className="hover:bg-transparent border-b-primary/20">
                  <TableHead className="text-lg font-headline text-primary/90 pl-6">Service</TableHead>
                  <TableHead className="text-right text-lg font-headline text-primary/90 pr-6">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((item) => (
                  <TableRow key={item.service} className="border-b-primary/10 last:border-b-0">
                    <TableCell className="font-medium font-body text-base pl-6 py-4">{item.service}</TableCell>
                    <TableCell className="text-right font-body text-base pr-6 py-4">{item.price}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
