
"use client";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Separator } from "@/components/ui/separator";
import { useRouter } from 'next/navigation';
import { useAuth } from "@/context/auth-context";


export default function SettingsCard() {
    const router = useRouter();
    const { logout } = useAuth();

    const handleLogout = () => {
        logout();
        router.push('/login');
    };

    return (
        <Card className="shadow-sm">
            <CardHeader>
                <CardTitle className="font-headline text-2xl">Settings</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
                <div>
                    <h4 className="font-semibold mb-4">Account</h4>
                    <Button variant="outline" className="w-full justify-start">Change Password</Button>
                </div>
                
                <Separator />
                
                <div>
                    <h4 className="font-semibold mb-4">Notification Preferences</h4>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <Label htmlFor="email-notifications">Email</Label>
                            <Switch id="email-notifications" defaultChecked />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="sms-notifications">SMS</Label>
                            <Switch id="sms-notifications" />
                        </div>
                        <div className="flex items-center justify-between">
                            <Label htmlFor="whatsapp-notifications">WhatsApp</Label>
                            <Switch id="whatsapp-notifications" defaultChecked />
                        </div>
                    </div>
                </div>

                <Separator />

                <Button variant="destructive" className="w-full" onClick={handleLogout}>Logout</Button>
            </CardContent>
        </Card>
    );
}
