import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import React from 'react';

const ProfileSettings:React.FC = ()=>{
  return (
   <Card>
    <CardHeader>
        <CardTitle>Account Settings</CardTitle>
    </CardHeader>
    <CardContent>
        <div className='pb-6'>
            <h3 className="text-xl font-semibold mb-4">Change Password</h3>
            <form action="#" className="space-y-4">
                <div className="space-y-2">
                    <Label htmlFor='currentPassword'>Current Password</Label>
                    <Input id='currentPassword' type='password'/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor='newPassword'>New Password</Label>
                    <Input id='newPassword' type='password'/>
                </div>
                <div className="space-y-2">
                    <Label htmlFor='confirmPassword'>Confirm New Password</Label>
                    <Input id='confirmPassword' type='password'/>
                </div>
                <Button variant='accent' size='sm'>Update Password</Button>
            </form>
        </div>
        <div className="border-t border-t-border pt-6">
            <h3 className="text-xl font-semibold mb-4 text-danger">Danger Zone</h3>
            <Button variant='destructive' size='sm'>Delete Account</Button>
        </div>
    </CardContent>
   </Card>
  )
}

export default ProfileSettings