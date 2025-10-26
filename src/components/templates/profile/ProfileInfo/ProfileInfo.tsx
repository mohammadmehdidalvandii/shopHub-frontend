"use client";
import { Button } from "@/components/ui/Button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/Cart";
import { Input } from "@/components/ui/Input";
import { Label } from "@/components/ui/Label";
import { useUpdatedProfileMutation } from "@/services/profileServices";
import { useAuthStore } from "@/store/authStore";
import { showError, showSuccess } from "@/utils/Toasts";
import { User } from "lucide-react";
import React, { useState } from "react";

interface ProfileFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
}

const ProfileInfo: React.FC = () => {
  const { user, updateUser } = useAuthStore();
  const [formData, setFormData] = useState<ProfileFormData>({
    firstName: user?.firstName || "",
    lastName: user?.lastName || "",
    email: user?.email || "",
    phone: user?.phone || "",
  });
  const id = (user as any)?._id;

  const updateProfileMutation = useUpdatedProfileMutation();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlerUpdatedProfile = (e: React.FormEvent) => {
    e.preventDefault();

    const updatedFields: Partial<ProfileFormData> = {};
    for (const key in formData) {
      const typedKey = key as keyof ProfileFormData;   
      if (formData[typedKey] !== (user as any)[typedKey]) {
        updatedFields[typedKey] = formData[typedKey];
      }
    }

    updateProfileMutation.mutate(
        {id , formData},
        {
            onSuccess:(data)=>{
                updateUser(data);
                showSuccess('Updated Profile successfully');
                window.location.reload();
            },
            onError:(error)=>{
                showError(error.message || 'Updated profile Failed')
            }
        }
    )
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Personal Information</CardTitle>
      </CardHeader>
      <CardContent>
        <form action="#" className="space-y-6" onSubmit={handlerUpdatedProfile}>
          <div className="flex items-center gap-6 mb-6">
            <div className="w-20 h-20 rounded-full bg-primary/10  flex items-center justify-center">
              <User className="h-10 w-10 text-primary" />
            </div>
            <div>
              <Button variant="default" size="lg">
                Upload Photo
              </Button>
              <p className="text-lg text-gray-medium mt-2">
                JPG, PNG or GIF (max. 2MB)
              </p>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="firstName">First Name</Label>
              <Input
                id="firstName"
                name="firstName"
                value={formData.firstName}
                onChange={handlerChange}
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="lastName">Last Name</Label>
              <Input
                id="lastName"
                name="lastName"
                value={formData.lastName}
                onChange={handlerChange}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              value={formData.email}
              onChange={handlerChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handlerChange}
            />
          </div>
          <Button type="submit" variant="accent" size="sm" className="mt-4">
            Save Change
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default ProfileInfo;
