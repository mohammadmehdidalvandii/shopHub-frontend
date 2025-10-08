import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { User } from 'lucide-react';
import React from 'react';

const ProfileInfo:React.FC = ()=>{
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
                        <Input id='firstName' defaultValue='John'/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='lastName'>Last Name</Label>
                        <Input id='lastName' defaultValue='Doe'/>
                    </div>
                </div>
                    <div className="space-y-2">
                        <Label htmlFor='email'>Email</Label>
                        <Input id='email' defaultValue='JohnDoe@example.com'/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='phone'>Phone Number</Label>
                        <Input id='phone' defaultValue='+1 (555) 123-4567'/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='address'>Address</Label>
                        <Input id='address' defaultValue='123 Main St, New York , NY 10001'/>
                    </div>
            </form>
            <Button type='submit' variant='accent' size='sm' className='mt-4'>Save Change</Button>
        </CardContent>
    </Card>
  )
}

export default ProfileInfo