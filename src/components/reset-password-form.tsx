
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
import { Loader2, KeyRound, CheckCircle } from "lucide-react";

// This is a placeholder for the temporary password validation
const FAKE_TEMP_PASSWORD = "TEMP-PASSWORD-123";

const formSchema = z.object({
    step: z.enum(["validate", "reset"]),
    email: z.string().email().optional(),
    tempPassword: z.string().optional(),
    newPassword: z.string().optional(),
    confirmPassword: z.string().optional(),
}).superRefine((data, ctx) => {
    if (data.step === 'validate') {
        if (!data.email) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Email is required.", path: ["email"]});
        }
        if (!data.tempPassword) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Temporary password is required.", path: ["tempPassword"]});
        }
    }
    if (data.step === 'reset') {
        if (!data.newPassword || data.newPassword.length < 8) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Password must be at least 8 characters.", path: ["newPassword"]});
        }
        if (data.newPassword !== data.confirmPassword) {
            ctx.addIssue({ code: z.ZodIssueCode.custom, message: "Passwords do not match.", path: ["confirmPassword"]});
        }
    }
});


export default function ResetPasswordForm() {
  const [formStep, setFormStep] = useState<'validate' | 'reset' | 'success'>('validate');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      step: 'validate',
      email: '',
      tempPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });

  async function onSubmit(values: z.infer<typeof formSchema>) {
    setIsLoading(true);
    setError(null);
    await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
    
    if (values.step === 'validate') {
      if (values.tempPassword === FAKE_TEMP_PASSWORD) {
        setFormStep('reset');
        form.setValue('step', 'reset');
      } else {
        setError("The temporary password you entered is incorrect. Please try again.");
      }
    } else if (values.step === 'reset') {
        console.log("Password has been reset successfully:", values.newPassword);
        setFormStep('success');
    }
    setIsLoading(false);
  }

  if (formStep === 'success') {
    return (
        <Card className="w-full max-w-md shadow-lg">
            <CardHeader className="text-center">
                <CheckCircle className="mx-auto h-12 w-12 text-primary"/>
                <CardTitle className="text-3xl font-bold font-headline mt-4">Password Reset Successful</CardTitle>
                <CardDescription>
                You can now log in with your new password.
                </CardDescription>
            </CardHeader>
            <CardContent className="text-center">
                <Button asChild>
                    <Link href="/login">Return to Login</Link>
                </Button>
            </CardContent>
        </Card>
    );
  }

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="text-center">
        <KeyRound className="mx-auto h-10 w-10 text-primary" />
        <CardTitle className="text-3xl font-bold font-headline mt-4">Reset Your Password</CardTitle>
        <CardDescription>
            {formStep === 'validate' ? "Enter your email and the temporary password sent to you." : "Create a new secure password."}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {formStep === 'validate' ? (
              <>
                <FormField control={form.control} name="email" render={({ field }) => ( <FormItem> <FormLabel>Email</FormLabel> <FormControl> <Input placeholder="you@example.com" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="tempPassword" render={({ field }) => ( <FormItem> <FormLabel>Temporary Password</FormLabel> <FormControl> <Input placeholder="Enter the temporary password" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
              </>
            ) : (
              <>
                <FormField control={form.control} name="newPassword" render={({ field }) => ( <FormItem> <FormLabel>New Password</FormLabel> <FormControl> <Input type="password" placeholder="••••••••" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="confirmPassword" render={({ field }) => ( <FormItem> <FormLabel>Confirm New Password</FormLabel> <FormControl> <Input type="password" placeholder="••••••••" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
              </>
            )}

            {error && <p className="text-sm font-medium text-destructive">{error}</p>}

            <Button type="submit" className="w-full" disabled={isLoading}>
              {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 
               formStep === 'validate' ? 'Validate Password' : 'Reset Password'
              }
            </Button>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
