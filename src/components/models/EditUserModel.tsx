"use client";
import React, { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/Dialog";
import { Button } from "../ui/Button";
import { Edit } from "lucide-react";
import { Label } from "../ui/Label";
import { Input } from "../ui/Input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/Select";
import { UserProps } from "@/types/users";
import { useUpdateUser } from "@/services/userServices";
import { showError, showSuccess } from "@/utils/Toasts";
import { error } from "console";

interface IUser {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  role: string;
  phone: string;
  isActive?: boolean | undefined | string;
}

type FormDataType = {
  firstName?: string;
  lastName?: string;
  email?: string;
  role?: string;
  phone?: string;
  isActive?: string | boolean;
};

const EditUserModel: React.FC<IUser> = ({
  id,
  firstName,
  lastName,
  email,
  role,
  phone,
  isActive,
}) => {

  const [isEditUser, setIsEditUser] = useState<boolean>(false);
  const [formData, setFormData] = useState({
    firstName: firstName || "",
    lastName: lastName || "",
    email: email || "",
    role: role || "",
    phone: phone || "",
    isActive:
      typeof isActive === "boolean"
        ? isActive
          ? "active"
          : "suspended"
        : isActive || "active",
  });


  const updataUserMutation = useUpdateUser();

  const handlerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  const handleSelectChange = (name: keyof typeof formData, value: string) => {
    setFormData((prev) => ({ ...prev, [name]: value }));
  };
  const handlerUpdateUser = (e: React.FormEvent, userId:string) => {
    e.preventDefault();

    const updateFields: Partial<FormDataType> = {};

    for (const key in formData) {
      const typedKey = key as keyof FormDataType;
      if (formData[typedKey] !== formData[typedKey]) continue;
      if (typedKey === "isActive") {
        updateFields[typedKey] = formData[typedKey] === "active";
      } else {
        updateFields[typedKey] = formData[typedKey];
      }
    }
    updataUserMutation.mutate({id:userId , formUser:updateFields as any},{
        onSuccess:()=>{
            showSuccess('Updated user successfully')
            window.location.reload();
        },
        onError:(error:any)=>{
            showError(error.message)
        }
    })
  };

  return (
    <Dialog open={isEditUser} onOpenChange={setIsEditUser}>
      <DialogTrigger asChild>
        <Button type="button" variant="outline" size="icon">
          <Edit className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Edit User</DialogTitle>
          <DialogDescription>Update user information</DialogDescription>
        </DialogHeader>
        <form action="#" className="space-y-4" onSubmit={(e)=>handlerUpdateUser(e , id)}>
          <div className="space-y-2">
            <Label htmlFor="editName">FirstName</Label>
            <Input
              id="editName"
              required
              name="firstName"
              value={formData.firstName}
              onChange={handlerChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="editName">LastName</Label>
            <Input
              id="editName"
              required
              name="lastName"
              value={formData.lastName}
              onChange={handlerChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="editEmail">Email</Label>
            <Input
              id="editEmail"
              required
              name="email"
              value={formData.email}
              onChange={handlerChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="editEmail">Phone</Label>
            <Input
              id="editPhone"
              required
              name="phone"
              value={formData.email}
              onChange={handlerChange}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="editRole" className="block mb-4">
              Role
            </Label>
            <Select
              value={formData.role}
              onValueChange={(value) => handleSelectChange("role", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="ADMIN">Admin</SelectItem>
                <SelectItem value="CUSTOMER">Customer</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="space-y-2">
            <Label htmlFor="editStatus" className="block mb-4">
              Status
            </Label>
            <Select
              value={formData.isActive}
              onValueChange={(value) => handleSelectChange("isActive", value)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="suspended">Suspended</SelectItem>
              </SelectContent>
            </Select>
          </div>
          <div className="flex gap-2 justify-end">
            <Button
              type="button"
              variant="outline"
              size="sm"
              onClick={() => setIsEditUser(false)}
            >
              Cancel
            </Button>
            <Button type="submit" variant="default" size="sm">
              Update User
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default EditUserModel;
