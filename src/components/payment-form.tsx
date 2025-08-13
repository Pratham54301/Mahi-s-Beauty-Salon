
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "./ui/card";
import { Loader2 } from "lucide-react";

const paymentSchema = z.object({
  paymentMethod: z.enum(["card", "upi", "netbanking"]),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
  upiId: z.string().optional(),
}).refine(data => {
    if (data.paymentMethod === 'card') {
        return !!data.cardNumber && !!data.cardExpiry && !!data.cardCvc;
    }
    return true;
}, { message: "Card details are required", path: ["cardNumber"] });

export default function PaymentForm() {
    const router = useRouter();

  const form = useForm<z.infer<typeof paymentSchema>>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
        paymentMethod: "card",
        cardNumber: "",
        cardExpiry: "",
        cardCvc: "",
        upiId: "",
    },
  });

  async function onSubmit(values: z.infer<typeof paymentSchema>) {
    console.log("Processing payment with:", values);
    // Simulate payment processing
    await new Promise(resolve => setTimeout(resolve, 2000));
    router.push("/order-success");
  }

  return (
    <div className="lg:col-span-1">
      <Tabs defaultValue="card" className="w-full" onValueChange={(value) => form.setValue('paymentMethod', value as any)}>
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="card">Credit/Debit Card</TabsTrigger>
          <TabsTrigger value="upi">UPI</TabsTrigger>
          <TabsTrigger value="netbanking">Net Banking</TabsTrigger>
        </TabsList>
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
                <TabsContent value="card">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                            <FormField control={form.control} name="cardNumber" render={({ field }) => ( <FormItem> <FormLabel>Card Number</FormLabel><FormControl><Input placeholder="0000 0000 0000 0000" {...field} /></FormControl><FormMessage /></FormItem> )} />
                            <div className="grid grid-cols-2 gap-4">
                                <FormField control={form.control} name="cardExpiry" render={({ field }) => ( <FormItem> <FormLabel>Expiry Date</FormLabel><FormControl><Input placeholder="MM/YY" {...field} /></FormControl><FormMessage /></FormItem> )} />
                                <FormField control={form.control} name="cardCvc" render={({ field }) => ( <FormItem> <FormLabel>CVC</FormLabel><FormControl><Input placeholder="123" {...field} /></FormControl><FormMessage /></FormItem> )} />
                            </div>
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="upi">
                    <Card>
                        <CardContent className="p-6 space-y-4">
                             <FormField control={form.control} name="upiId" render={({ field }) => ( <FormItem> <FormLabel>UPI ID</FormLabel><FormControl><Input placeholder="yourname@bank" {...field} /></FormControl><FormMessage /></FormItem> )} />
                             <p className="text-sm text-muted-foreground">A payment request will be sent to your UPI app.</p>
                        </CardContent>
                    </Card>
                </TabsContent>
                 <TabsContent value="netbanking">
                    <Card>
                        <CardContent className="p-6 text-center">
                            <p className="text-muted-foreground">You will be redirected to your bank's website to complete the payment.</p>
                        </CardContent>
                    </Card>
                </TabsContent>

                <Button type="submit" size="lg" className="w-full" disabled={form.formState.isSubmitting}>
                    {form.formState.isSubmitting ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Processing...
                        </>
                    ) : "Pay Now"}
                </Button>
            </form>
        </Form>
      </Tabs>
    </div>
  );
}
