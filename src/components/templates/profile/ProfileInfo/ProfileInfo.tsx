"use client"
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useAuthStore } from '@/store/authStore';
import { User } from 'lucide-react';
import React from 'react';

const ProfileInfo:React.FC = ()=>{
    const {user} = useAuthStore();
    console.log("user =>" , user) 
  return (
    <Card>
        <CardHeader>
            <CardTitle>Personal Information</CardTitle>
        </CardHeader>
        <CardContent>
            <form action="#" className="space-y-6">
                <div className="flex items-center gap-6 mb-6">
                    <div className="w-20 h-20 rounded-full bg-primary/10  flex items-center justify-center">
                    <User className='h-10 w-10 text-primary'/>
                    </div>
                    <div>
                        <Button variant='default' size='lg'>Upload Photo</Button>
                        <p className="text-lg text-gray-medium mt-2">JPG, PNG or GIF (max. 2MB)</p>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor='firstName'>First Name</Label>
                        <Input id='firstName' defaultValue={user?.firstName}/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input id='lastName' defaultValue={user?.lastName}/>
                    </div>
                </div>
                    <div className="space-y-2">
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' defaultValue={user?.email}/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='phone'>Phone Number</Label>
                        <Input id='phone' defaultValue={user?.phone}/>
                    </div>
            </form>
            <Button type='submit' variant='accent' size='sm' className='mt-4'>Save Change</Button>
        </CardContent>
    </Card>
  )
}

export default ProfileInfo