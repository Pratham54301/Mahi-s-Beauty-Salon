
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";
import { Ticket } from "lucide-react";

const offers = [
    { id: 1, title: "20% off on your next booking", code: "SPOOKY20" },
    { id: 2, title: "Free Hair Spa with any facial", code: "FREESPA" },
];

export default function SpecialOffersCard() {
    return(
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Special Offers For You</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                 {offers.map(offer => (
                    <div key={offer.id} className="p-4 border border-dashed rounded-lg flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 bg-primary/5">
                        <div className="flex items-center gap-4">
                            <Ticket className="h-8 w-8 text-primary shrink-0"/>
                            <div>
                                <p className="font-bold">{offer.title}</p>
                                <p className="text-sm text-muted-foreground">Use code: <span className="font-semibold text-primary">{offer.code}</span></p>
                            </div>
                        </div>
                        <Button size="sm" variant="outline" className="self-end sm:self-center">Copy Code</Button>
                    </div>
                ))}
                {offers.length === 0 && <p className="text-muted-foreground text-center py-8">No special offers available right now.</p>}
            </CardContent>
        </Card>
    );
}
