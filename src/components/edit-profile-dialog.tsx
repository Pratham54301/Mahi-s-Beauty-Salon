
"use client";

import { useState, ChangeEvent, useRef } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter, DialogClose } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { getAvatarColor } from '@/lib/utils';
import { Camera } from 'lucide-react';

export interface UserProfile {
    fullName: string;
    email: string;
    phone: string;
    dob: string;
    address: string;
    avatarUrl: string;
    membership: string;
}

interface EditProfileDialogProps {
    isOpen: boolean;
    onClose: () => void;
    user: UserProfile;
    onSave: (updatedUser: UserProfile) => void;
}

export default function EditProfileDialog({ isOpen, onClose, user, onSave }: EditProfileDialogProps) {
    const [editedUser, setEditedUser] = useState<UserProfile>(user);
    const [previewImage, setPreviewImage] = useState<string | null>(user.avatarUrl);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setEditedUser(prev => ({ ...prev, [name]: value }));
    };

    const handleImageChange = (e: ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                const result = reader.result as string;
                setPreviewImage(result);
                setEditedUser(prev => ({ ...prev, avatarUrl: result }));
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSave = () => {
        onSave(editedUser);
    };
    
    const getInitials = (name: string) => {
        const names = name.split(' ');
        if (names.length > 1) {
            return `${names[0][0]}${names[names.length - 1][0]}`;
        }
        return name.substring(0, 2);
    };

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent className="sm:max-w-[480px]">
                <DialogHeader>
                    <DialogTitle>Edit Profile</DialogTitle>
                </DialogHeader>
                <div className="grid gap-6 py-4">
                    <div className="flex justify-center">
                        <div className="relative">
                             <Avatar className="w-32 h-32 border-4 border-primary">
                                <AvatarImage src={previewImage || editedUser.avatarUrl} alt={editedUser.fullName} />
                                <AvatarFallback
                                    className="text-primary-foreground font-bold text-4xl"
                                    style={{ backgroundColor: getAvatarColor(editedUser.fullName) }}
                                >
                                    {getInitials(editedUser.fullName)}
                                </AvatarFallback>
                            </Avatar>
                            <Button variant="outline" size="icon" className="absolute bottom-1 right-1 rounded-full h-10 w-10 bg-white" onClick={() => fileInputRef.current?.click()}>
                                <Camera className="h-5 w-5"/>
                                <span className="sr-only">Change profile picture</span>
                            </Button>
                            <Input type="file" ref={fileInputRef} className="hidden" accept="image/*" onChange={handleImageChange} />
                        </div>
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="fullName">Full Name</Label>
                        <Input id="fullName" name="fullName" value={editedUser.fullName} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input id="email" name="email" type="email" value={editedUser.email} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="phone">Phone</Label>
                        <Input id="phone" name="phone" value={editedUser.phone} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="dob">Date of Birth</Label>
                        <Input id="dob" name="dob" type="date" value={editedUser.dob} onChange={handleChange} />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="address">Address</Label>
                        <Input id="address" name="address" value={editedUser.address} onChange={handleChange} />
                    </div>
                </div>
                <DialogFooter>
                    <DialogClose asChild>
                        <Button type="button" variant="secondary">Cancel</Button>
                    </DialogClose>
                    <Button type="button" onClick={handleSave}>Save Changes</Button>
                </DialogFooter>
            </DialogContent>
        </Dialog>
    );
}
