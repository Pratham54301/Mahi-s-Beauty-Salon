
"use client";

import { useState } from 'react';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Edit, Award } from "lucide-react";
import { getAvatarColor } from "@/lib/utils";
import EditProfileDialog from './edit-profile-dialog';
import type { UserProfile } from './edit-profile-dialog';


const initialUser: UserProfile = {
    fullName: "Anjali Sharma",
    email: "anjali.sharma@example.com",
    phone: "+91 98765 43210",
    dob: "1995-08-15",
    address: "123, Rose Villa, Juhu, Mumbai, Maharashtra",
    avatarUrl: "",
    membership: "Gold",
};

export default function ProfileHeader() {
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
            <div className="flex flex-col md:flex-row items-center gap-6 p-6 bg-background rounded-lg shadow-sm">
                <div className="relative">
                    <Avatar className="w-24 h-24 md:w-32 md:h-32 border-4 border-primary">
                        <AvatarImage src={user.avatarUrl} alt={user.fullName} />
                        <AvatarFallback 
                            className="text-primary-foreground font-bold text-4xl"
                            style={{ backgroundColor: getAvatarColor(user.fullName) }}
                        >
                            {getInitials(user.fullName)}
                        </AvatarFallback>
                    </Avatar>
                </div>
                <div className="text-center md:text-left flex-1">
                    <h1 className="text-3xl font-headline font-bold text-primary">{user.fullName}</h1>
                    <div className="flex items-center justify-center md:justify-start gap-2 mt-2 text-amber-500">
                        <Award className="h-5 w-5"/>
                        <p className="font-semibold">{user.membership} Member</p>
                    </div>
                </div>
                <Button variant="outline" onClick={() => setIsEditDialogOpen(true)}>
                    <Edit className="h-4 w-4 mr-2"/>
                    Edit Profile
                </Button>
            </div>

            <EditProfileDialog 
                isOpen={isEditDialogOpen} 
                onClose={() => setIsEditDialogOpen(false)} 
                user={user}
                onSave={handleSave}
            />
        </>
    )
}
