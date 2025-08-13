
"use client";

import { useState } from 'react';
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Mail, Phone, Home, Edit } from "lucide-react";
import { getAvatarColor } from "@/lib/utils";
import EditProfileDialog from './edit-profile-dialog';

export interface UserProfile {
    fullName: string;
    email: string;
    phone: string;
    address: string;
    avatarUrl: string;
}

const initialUser: UserProfile = {
    fullName: "Anjali Sharma",
    email: "anjali.sharma@example.com",
    phone: "+91 98765 43210",
    address: "123, Rose Villa, Juhu, Mumbai, Maharashtra",
    avatarUrl: "",
};


export default function ProfileCard() {
    const [user, setUser] = useState(initialUser);
    const [isEditDialogOpen, setIsEditDialogOpen] = useState(false);
    
    const getInitials = (name: string) => {
        const names = name.split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`;
        }
        return name.substring(0, 2);
    };

    const handleSave = (updatedUser: UserProfile) => {
        setUser(updatedUser);
        setIsEditDialogOpen(false);
    }

    return (
        <>
            <Card className="w-full max-w-2xl shadow-lg">
                <CardHeader className="flex flex-col md:flex-row items-center gap-6 p-6 bg-primary/5">
                    <div className="relative">
                        <Avatar className="w-32 h-32 border-4 border-primary">
                            <AvatarImage src={user.avatarUrl} alt={user.fullName} />
                            <AvatarFallback 
                                className="text-primary-foreground font-bold text-4xl"
                                style={{ backgroundColor: getAvatarColor(user.fullName) }}
                            >
                                {getInitials(user.fullName)}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                    <div className="text-center md:text-left">
                        <h1 className="text-3xl font-headline font-bold text-primary">{user.fullName}</h1>
                        <p className="text-muted-foreground">Loyal Customer</p>
                    </div>
                    <Button variant="outline" size="icon" className="md:ml-auto" onClick={() => setIsEditDialogOpen(true)}>
                        <Edit className="h-5 w-5"/>
                        <span className="sr-only">Edit Profile</span>
                    </Button>
                </CardHeader>
                <CardContent className="p-8 space-y-6">
                    <div className="flex items-center gap-4">
                        <Mail className="h-6 w-6 text-primary"/>
                        <div>
                            <p className="font-semibold">Email</p>
                            <a href={`mailto:${user.email}`} className="text-muted-foreground hover:underline">{user.email}</a>
                        </div>
                    </div>
                    <div className="flex items-center gap-4">
                        <Phone className="h-6 w-6 text-primary"/>
                        <div>
                            <p className="font-semibold">Phone</p>
                            <p className="text-muted-foreground">{user.phone}</p>
                        </div>
                    </div>
                     <div className="flex items-center gap-4">
                        <Home className="h-6 w-6 text-primary"/>
                        <div>
                            <p className="font-semibold">Address</p>
                            <p className="text-muted-foreground">{user.address}</p>
                        </div>
                    </div>
                </CardContent>
            </Card>

            <EditProfileDialog 
                isOpen={isEditDialogOpen} 
                onClose={() => setIsEditDialogOpen(false)} 
                user={user}
                onSave={handleSave}
            />
        </>
    )
}
