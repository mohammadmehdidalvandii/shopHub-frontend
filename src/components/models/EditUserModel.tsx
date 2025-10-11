"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Edit } from 'lucide-react';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';

const EditUserModel:React.FC = ()=>{
    const [isEditUser , setIsEditUser] = useState<boolean>(false);
  return (
    <Dialog open={isEditUser} onOpenChange={setIsEditUser}>
        <DialogTrigger asChild>
            <Button type='button' variant='outline' size='icon'>
                <Edit className='h-4 w-4'/>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit User</DialogTitle>
                <DialogDescription>Update user information</DialogDescription>
            </DialogHeader>
            <form action="#" className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor='editName'>Name</Label>
                    <Input id='editName' defaultValue='' required/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor='editEmail'>Email</Label>
                    <Input id='editEmail' defaultValue='' required/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor='editRole' className='block mb-4'>Role</Label>
                    <Select defaultValue=''>
                        <SelectTrigger>
                            <SelectValue placeholder='Select Role'/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='admin'>Admin</SelectItem>
                            <SelectItem value='moderator'>Moderator</SelectItem>
                            <SelectItem value='customer'>Customer</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-2">
                    <Label htmlFor='editStatus' className='block mb-4'>Status</Label>
                    <Select defaultValue=''>
                        <SelectTrigger>
                            <SelectValue placeholder='Select Status'/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='active'>Active</SelectItem>
                            <SelectItem value='suspended'>Suspended</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="flex gap-2 justify-end">
                    <Button type='button' variant='outline' size='sm'
                    onClick={()=>setIsEditUser(false)}
                    >
                        Cancel
                    </Button>
                    <Button type='submit' variant='default' size='sm'>
                        Update User
                    </Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default EditUserModel