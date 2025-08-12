"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import Link from "next/link";
import { useState } from "react";
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
import { Loader2, MailCheck } from "lucide-react";

const formSchema = z.object({
  email: z.string().email({ message: "Please enter a valid email address." }),
});

export default function ForgotPasswordForm() {
  const [submissionStatus, setSubmissionStatus] = useState({ state: 'idle' }); // idle, loading, success

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { email: "" },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    console.log("Forgot password for:", values.email);
    setSubmissionStatus({ state: 'loading' });
    // Simulate API call to send temporary password
    await new Promise(resolve => setTimeout(resolve, 1500));
    setSubmissionStatus({ state: 'success' });
  }

  if (submissionStatus.state === 'success') {
    return (
        <Card className="w-full max-w-md shadow-lg">
            <CardHeader className="text-center">
                <MailCheck className="mx-auto h-12 w-12 text-primary"/>
                <CardTitle className="text-3xl font-bold font-headline mt-4">Check Your Email</CardTitle>
                <CardDescription>
                We have sent a temporary password to your email address. Please use it to reset your password.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <Button asChild>
                    <Link href="/reset-password">Reset Your Password</Link>
                </Button>
                <div className="text-center text-sm text-muted-foreground mt-6">
                    Didn't receive the email? <Button variant="link" onClick={() => {form.reset(); setSubmissionStatus({state: 'idle'})}} className="px-1">Resend</Button>
                </div>
            </CardContent>
        </Card>
    )
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="text-center">
        <CardTitle className="text-3xl font-bold font-headline">Forgot Password</CardTitle>
        <CardDescription>Enter your email to receive a temporary password.</CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
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
            <Button type="submit" className="w-full" disabled={submissionStatus.state === 'loading'}>
              {submissionStatus.state === 'loading' ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                "Send Temporary Password"
              )}
            </Button>
            <div className="text-center text-sm text-muted-foreground">
                Remember your password? <Link href="/login" className="font-semibold text-primary hover:underline">Login</Link>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
