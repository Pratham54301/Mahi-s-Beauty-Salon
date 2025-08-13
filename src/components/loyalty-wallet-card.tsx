
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Coins, Gift } from "lucide-react";

export default function LoyaltyWalletCard() {
  return (
    <Card className="shadow-sm">
      <CardHeader>
        <CardTitle className="font-headline text-2xl">Loyalty & Wallet</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="p-4 bg-primary/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Coins className="h-8 w-8 text-primary"/>
                <div>
                    <p className="font-bold text-lg">1,250</p>
                    <p className="text-sm text-muted-foreground">Loyalty Points</p>
                </div>
            </div>
            <Button size="sm">Redeem</Button>
        </div>
        <div className="p-4 bg-accent/10 rounded-lg flex items-center justify-between">
            <div className="flex items-center gap-4">
                <Gift className="h-8 w-8 text-accent"/>
                <div>
                    <p className="font-bold text-lg">INR 500</p>
                    <p className="text-sm text-muted-foreground">Wallet Balance</p>
                </div>
            </div>
            <Button size="sm" variant="secondary">Add Money</Button>
        </div>
      </CardContent>
    </Card>
  );
}
