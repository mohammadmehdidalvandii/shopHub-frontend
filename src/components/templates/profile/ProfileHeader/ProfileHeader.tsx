import { Button } from '@/components/ui/Button';
import { LogOut } from 'lucide-react';
import React from 'react';

const ProfileHeader:React.FC = ()=>{
  return (
    <section>
        <div className="container max-auto px-4 py-8">
            <div className="max-w-5xl mx-auto">
                <div className="flex items-center justify-between mb-8">
                    <h1 className="text-4xl font-robotoBold font-bold">My Account</h1>
                    <Button variant='outline' size='lg'>
                        <LogOut className='mr-2 h-4 w-4'/>
                        Logout
                    </Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ProfileHeader