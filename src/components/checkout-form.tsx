
"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
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
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { shippingSchema } from "@/lib/schemas";

type CheckoutFormProps = {
    onSubmit: (values: z.infer<typeof shippingSchema>) => void;
}

export default function CheckoutForm({ onSubmit }: CheckoutFormProps) {
  const form = useForm<z.infer<typeof shippingSchema>>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
        email: "",
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        pincode: "",
        phone: "",
        saveInfo: false,
    },
  });

  return (
    <div className="lg:col-span-1">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Email</FormLabel>
                  <FormControl>
                    <Input placeholder="you@example.com" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Shipping Address</h3>
            <div className="grid grid-cols-2 gap-4">
                <FormField control={form.control} name="firstName" render={({ field }) => ( <FormItem> <FormLabel>First Name</FormLabel> <FormControl><Input {...field} /></FormControl><FormMessage /> </FormItem> )} />
                <FormField control={form.control} name="lastName" render={({ field }) => ( <FormItem> <FormLabel>Last Name</FormLabel> <FormControl><Input {...field} /></FormControl><FormMessage /> </FormItem> )} />
            </div>
            <FormField control={form.control} name="address" render={({ field }) => ( <FormItem> <FormLabel>Address</FormLabel> <FormControl><Input placeholder="1234 Main St" {...field} /></FormControl><FormMessage /> </FormItem> )} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <FormField control={form.control} name="city" render={({ field }) => ( <FormItem> <FormLabel>City</FormLabel> <FormControl><Input {...field} /></FormControl><FormMessage /> </FormItem> )} />
                <FormField control={form.control} name="pincode" render={({ field }) => ( <FormItem> <FormLabel>Pincode</FormLabel> <FormControl><Input {...field} /></FormControl><FormMessage /> </FormItem> )} />
                <FormField control={form.control} name="state" render={({ field }) => ( <FormItem> <FormLabel>State</FormLabel> <FormControl>
                    <Select onValueChange={field.onChange} defaultValue={field.value}><SelectTrigger><SelectValue placeholder="Select State" /></SelectTrigger><SelectContent><SelectItem value="Gujarat">Gujarat</SelectItem></SelectContent></Select></FormControl><FormMessage /> </FormItem> )} />
            </div>
            <FormField control={form.control} name="phone" render={({ field }) => ( <FormItem> <FormLabel>Phone</FormLabel> <FormControl><Input {...field} /></FormControl><FormMessage /> </FormItem> )} />
            <FormField
                control={form.control}
                name="saveInfo"
                render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0">
                    <FormControl>
                    <Checkbox
                        checked={field.value}
                        onCheckedChange={field.onChange}
                    />
                    </FormControl>
                    <div className="space-y-1 leading-none">
                    <FormLabel>
                        Save this information for next time
                    </FormLabel>
                    </div>
                </FormItem>
                )}
            />
          </div>
          <div className="flex items-center justify-between">
            <Button variant="link" asChild><Link href="/cart">Return to cart</Link></Button>
            <Button type="submit" size="lg">Continue to Payment</Button>
          </div>
        </form>
      </Form>
    </div>
  );
}
