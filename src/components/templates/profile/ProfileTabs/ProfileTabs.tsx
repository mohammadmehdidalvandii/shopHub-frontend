import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import { Heart, Package, Settings, User } from 'lucide-react';
import React from 'react';
import ProfileInfo from '../ProfileInfo/ProfileInfo';
import ProfileOrders from '../ProfileOrders/ProfileOrders';
import ProfileWishlist from '../ProfileWishlist/ProfileWishlist';
import ProfileSettings from '../ProfileSettings/ProfileSettings';

const ProfileTabs:React.FC = ()=>{
  return (
    <section>
        <div className="container mx-auto px-4 pb-8">
            <div className="max-w-5xl mx-auto">
                <Tabs defaultValue='profile' className='space-y-6'>
                    <TabsList className='gap-1'>
                        <TabsTrigger value='profile' className='flex gap-0 sm:gap-1'>
                            <User className='h-4 w-4'/>
                            Profile
                        </TabsTrigger>
                        <TabsTrigger value='orders' className='flex gap-0 sm:gap-1'>
                            <Package className='h-4 w-4'/>
                            Orders
                        </TabsTrigger>
                        <TabsTrigger value='wishlist' className='flex gap-0 sm:gap-1'>
                            <Heart className='h-4 w-4'/>
                            Wishlist
                        </TabsTrigger>
                        <TabsTrigger value='settings' className='flex gap-0 sm:gap-1'>
                            <Settings className='h-4 w-4'/>
                            Settings
                        </TabsTrigger>
                    </TabsList>
                    <TabsContent value='profile'>
                        <ProfileInfo/>
                    </TabsContent>
                    <TabsContent value='orders'>
                        <ProfileOrders/>
                    </TabsContent>
                    <TabsContent value='wishlist'>
                        <ProfileWishlist/>
                    </TabsContent>
                    <TabsContent value='settings'>
                        <ProfileSettings/>
                    </TabsContent>
                </Tabs>
            </div>
        </div>
    </section>
)
}

export default ProfileTabs