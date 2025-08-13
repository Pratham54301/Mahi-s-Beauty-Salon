
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "./ui/button";

const favoriteServices = [
    { id: 1, name: "Luxury Hair Spa", image: "https://placehold.co/400x400.png", aiHint: "hair spa" },
    { id: 2, name: "Gel Manicure", image: "https://placehold.co/400x400.png", aiHint: "manicure" },
    { id: 3, name: "Vitamin C Facial", image: "https://placehold.co/400x400.png", aiHint: "facial treatment" },
];

export default function FavoritesCard() {
    return(
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">My Favorites</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {favoriteServices.map(service => (
                        <div key={service.id} className="border rounded-lg overflow-hidden group">
                           <Image src={service.image} alt={service.name} data-ai-hint={service.aiHint} width={400} height={400} className="h-40 w-full object-cover"/>
                           <div className="p-4">
                                <p className="font-semibold truncate">{service.name}</p>
                                <Button size="sm" className="w-full mt-3">Book Again</Button>
                           </div>
                        </div>
                    ))}
                    {favoriteServices.length === 0 && <p className="text-muted-foreground text-center py-8 col-span-full">You haven't saved any services yet.</p>}
                </div>
            </CardContent>
        </Card>
    )
}
