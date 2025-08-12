import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

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
        <Card className="max-w-4xl mx-auto shadow-lg">
          <CardHeader>
            <CardTitle className="font-headline text-3xl">Service Menu</CardTitle>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead className="text-lg">Service</TableHead>
                  <TableHead className="text-right text-lg">Price</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {pricingData.map((item) => (
                  <TableRow key={item.service}>
                    <TableCell className="font-medium">{item.service}</TableCell>
                    <TableCell className="text-right">{item.price}</TableCell>
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
