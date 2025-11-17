"use client"
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { useChangePassword } from '@/services/auth';
import { showError, showSuccess } from '@/utils/Toasts';
import React, { useState } from 'react';

const ProfileSettings:React.FC = ()=>{
    const [oldPassword, setOldPassword] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword , setConfirmPassword] = useState('');
    const changePassword = useChangePassword();

    const handlerChangePassword = ()=>{
        if(!oldPassword || !newPassword){
            showError('Old and new password are required');
        };
        if(newPassword === confirmPassword){
            showError('New password is not match')
        }

        changePassword.mutate({oldPassword ,newPassword},{
            onSuccess:()=>{
                showSuccess('Change password successfully');
                setOldPassword('')
                setNewPassword('')
                setConfirmPassword('')
            },
            onError:(err:any)=>{
                showError(err.message||'Change password failed')
            }
        })

    }


  return (
   <Card>
    <CardHeader>
        <CardTitle>Account Settings</CardTitle>
    </CardHeader>
    <CardContent>
        <div className='pb-6'>
            <h3 className="text-xl font-semibold mb-4">Change Password</h3>
            <form action="#" className="space-y-4" onSubmit={handlerChangePassword}>
                <div className="space-y-2">
                    <Label htmlFor='currentPassword'>Current Password</Label>
                    <Input id='currentPassword' type='password'
                    value={oldPassword}
                    onChange={(e)=>setOldPassword(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor='newPassword'>New Password</Label>
                    <Input id='newPassword' type='password'
                    value={newPassword}
                    onChange={(e)=>setNewPassword(e.target.value)}
                    />
                </div>
                <div className="space-y-2">
                    <Label htmlFor='confirmPassword'>Confirm New Password</Label>
                    <Input id='confirmPassword' type='password'
                    value={confirmPassword}
                    onChange={(e)=>setConfirmPassword(e.target.value)}
                    />
                </div>
                <Button type='submit' variant='accent' size='sm'>Update Password</Button>
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