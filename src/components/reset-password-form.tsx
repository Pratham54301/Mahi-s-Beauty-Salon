
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

const validationSchema = z.object({
    email: z.string().email({ message: "Please enter a valid email address." }),
    tempPassword: z.string().min(1, { message: "Temporary password is required." }),
});

const resetSchema = z.object({
    newPassword: z.string().min(8, { message: "Password must be at least 8 characters." }),
    confirmPassword: z.string()
}).refine(data => data.newPassword === data.confirmPassword, {
    message: "Passwords do not match.",
    path: ["confirmPassword"],
});


function ValidatePasswordForm({ onSuccess, onLoading, onError, isLoading, error }: { onSuccess: () => void, onLoading: (loading: boolean) => void, onError: (error: string | null) => void, isLoading: boolean, error: string | null }) {
    const form = useForm<z.infer<typeof validationSchema>>({
        resolver: zodResolver(validationSchema),
        defaultValues: {
          email: '',
          tempPassword: '',
        },
      });

      async function onSubmit(values: z.infer<typeof validationSchema>) {
        onLoading(true);
        onError(null);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
        
        if (values.tempPassword === FAKE_TEMP_PASSWORD) {
          onSuccess();
        } else {
          onError("The temporary password you entered is incorrect. Please try again.");
        }
        onLoading(false);
      }
    
    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="email" render={({ field }) => ( <FormItem> <FormLabel>Email</FormLabel> <FormControl> <Input placeholder="you@example.com" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="tempPassword" render={({ field }) => ( <FormItem> <FormLabel>Temporary Password</FormLabel> <FormControl> <Input placeholder="Enter the temporary password" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
                {error && <p className="text-sm font-medium text-destructive">{error}</p>}
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Validate Password'}
                </Button>
            </form>
        </Form>
    )
}

function SetNewPasswordForm({ onSuccess, onLoading, isLoading }: { onSuccess: () => void, onLoading: (loading: boolean) => void, isLoading: boolean }) {
    const form = useForm<z.infer<typeof resetSchema>>({
        resolver: zodResolver(resetSchema),
        defaultValues: {
          newPassword: '',
          confirmPassword: '',
        },
      });
    
      async function onSubmit(values: z.infer<typeof resetSchema>) {
        onLoading(true);
        await new Promise(resolve => setTimeout(resolve, 1500)); // Simulate API call
        console.log("Password has been reset successfully:", values.newPassword);
        onSuccess();
        onLoading(false);
      }

    return (
        <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField control={form.control} name="newPassword" render={({ field }) => ( <FormItem> <FormLabel>New Password</FormLabel> <FormControl> <Input type="password" placeholder="••••••••" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <FormField control={form.control} name="confirmPassword" render={({ field }) => ( <FormItem> <FormLabel>Confirm New Password</FormLabel> <FormControl> <Input type="password" placeholder="••••••••" {...field} /> </FormControl> <FormMessage /> </FormItem> )}/>
                <Button type="submit" className="w-full" disabled={isLoading}>
                    {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : 'Reset Password'}
                </Button>
            </form>
        </Form>
    )
}


export default function ResetPasswordForm() {
  const [formStep, setFormStep] = useState<'validate' | 'reset' | 'success'>('validate');
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);


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
        {formStep === 'validate' && (
            <ValidatePasswordForm
                onSuccess={() => setFormStep('reset')}
                onLoading={setIsLoading}
                onError={setError}
                isLoading={isLoading}
                error={error}
            />
        )}
        {formStep === 'reset' && (
            <SetNewPasswordForm
                onSuccess={() => setFormStep('success')}
                onLoading={setIsLoading}
                isLoading={isLoading}
            />
        )}
      </CardContent>
    </Card>
  );
}
