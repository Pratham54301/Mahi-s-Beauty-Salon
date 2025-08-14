
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { useState } from "react";
import Image from "next/image";

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
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Loader2, CheckCircle, Package, Truck, Home } from "lucide-react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  orderNumber: z.string().min(1, { message: "Order number is required." }),
  emailOrPhone: z.string().min(1, { message: "Email or phone number is required." }),
});

const timelineSteps = [
    { name: "Placed", icon: <CheckCircle /> },
    { name: "Processing", icon: <Package /> },
    { name: "Shipped", icon: <Truck /> },
    { name: "Delivered", icon: <Home /> },
];

export default function TrackOrderForm() {
    const [trackingResult, setTrackingResult] = useState({status: 'idle', currentStep: 0}); // idle, loading, found, not_found

    const form = useForm<z.infer<typeof formSchema>>({
        resolver: zodResolver(formSchema),
        defaultValues: { orderNumber: "", emailOrPhone: "" },
      });

    async function onSubmit(values: z.infer<typeof formSchema>) {
        console.log("Form Submitted", values);
        setTrackingResult({ status: 'loading', currentStep: 0});
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        if (values.orderNumber === "12345") {
            setTrackingResult({ status: 'found', currentStep: 2 }); // e.g. Shipped
        } else {
            setTrackingResult({ status: 'not_found', currentStep: 0 });
        }
      }

  return (
    <section className="py-16 md:py-24 bg-muted">
        <div className="container max-w-7xl">
            <Card className="shadow-lg overflow-hidden grid md:grid-cols-2">
                <div className="p-8 md:p-12 order-2 md:order-1">
                    <div className="max-w-md mx-auto">
                        <h1 className="font-headline text-3xl md:text-4xl font-bold text-primary mb-2">Track Your Order</h1>
                        <p className="text-muted-foreground mb-8">Enter your order details to see its status.</p>
                        
                        <Form {...form}>
                        <form
                            onSubmit={form.handleSubmit(onSubmit)}
                            className="space-y-6"
                        >
                            <FormField
                            control={form.control}
                            name="orderNumber"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Order Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="e.g. 12345" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            <FormField
                            control={form.control}
                            name="emailOrPhone"
                            render={({ field }) => (
                                <FormItem>
                                <FormLabel>Email or Phone Number</FormLabel>
                                <FormControl>
                                    <Input placeholder="you@example.com or 10-digit number" {...field} />
                                </FormControl>
                                <FormMessage />
                                </FormItem>
                            )}
                            />
                            
                            <Button type="submit" size="lg" className="w-full" disabled={trackingResult.status === 'loading'}>
                            {trackingResult.status === 'loading' ? (
                                <> <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Tracking... </>
                            ) : ( "Track My Order" )}
                            </Button>
                        </form>
                        </Form>

                        {trackingResult.status === 'found' && (
                            <div className="mt-12">
                                <h3 className="text-xl font-bold mb-8 text-center">Order Status</h3>
                                <div className="relative flex justify-between items-start">
                                    <div className="absolute top-5 left-0 w-full h-1 bg-muted-foreground/20 -translate-y-1/2 -z-10" />
                                    <div className="absolute top-5 left-0 h-1 bg-primary -translate-y-1/2 -z-10 transition-all duration-500" style={{ width: `${(trackingResult.currentStep / (timelineSteps.length - 1)) * 100}%` }}/>
                                    {timelineSteps.map((step, index) => (
                                        <div key={step.name} className="flex flex-col items-center gap-2 text-center z-0 w-16">
                                            <div className={cn( "h-10 w-10 rounded-full flex items-center justify-center border-2", index <= trackingResult.currentStep ? "bg-primary border-primary text-primary-foreground" : "bg-background border-muted-foreground/30 text-muted-foreground" )}>
                                                {step.icon}
                                            </div>
                                            <p className="text-xs font-medium">{step.name}</p>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                        {trackingResult.status === 'not_found' && (
                            <div className="text-center mt-8 text-destructive font-medium">
                                <p>Order not found. Please check your details and try again.</p>
                            </div>
                        )}
                    </div>
                </div>
                <div className="relative min-h-[300px] md:min-h-full order-1 md:order-2">
                     <Image
                        src="https://placehold.co/800x1000.png"
                        alt="Package tracking illustration"
                        data-ai-hint="delivery package map"
                        fill
                        className="object-cover"
                    />
                </div>
            </Card>
        </div>
    </section>
  );
}
