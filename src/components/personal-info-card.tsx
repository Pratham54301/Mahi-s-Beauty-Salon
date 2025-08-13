
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Calendar, Home, Edit } from "lucide-react";

const userInfo = {
    email: "anjali.sharma@example.com",
    phone: "+91 98765 43210",
    dob: "August 15, 1995",
    address: "123, Rose Villa, Juhu, Mumbai, Maharashtra",
}

export default function PersonalInfoCard() {
    return (
        <Card className="shadow-sm">
            <CardHeader className="flex flex-row items-center justify-between">
                <CardTitle className="font-headline text-2xl">Personal Info</CardTitle>
                <Button variant="ghost" size="icon">
                    <Edit className="h-5 w-5 text-muted-foreground"/>
                </Button>
            </CardHeader>
            <CardContent className="space-y-6">
                <div className="flex items-start gap-4">
                    <Mail className="h-5 w-5 text-primary mt-1 shrink-0"/>
                    <div>
                        <p className="font-semibold">Email</p>
                        <a href={`mailto:${userInfo.email}`} className="text-muted-foreground hover:underline text-sm">{userInfo.email}</a>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Phone className="h-5 w-5 text-primary mt-1 shrink-0"/>
                    <div>
                        <p className="font-semibold">Phone</p>
                        <p className="text-muted-foreground text-sm">{userInfo.phone}</p>
                    </div>
                </div>
                <div className="flex items-start gap-4">
                    <Calendar className="h-5 w-5 text-primary mt-1 shrink-0"/>
                    <div>
                        <p className="font-semibold">Date of Birth</p>
                        <p className="text-muted-foreground text-sm">{userInfo.dob}</p>
                    </div>
                </div>
                 <div className="flex items-start gap-4">
                    <Home className="h-5 w-5 text-primary mt-1 shrink-0"/>
                    <div>
                        <p className="font-semibold">Address</p>
                        <p className="text-muted-foreground text-sm">{userInfo.address}</p>
                    </div>
                </div>
            </CardContent>
        </Card>
    )
}
