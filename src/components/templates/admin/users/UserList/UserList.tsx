"use client"
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Search } from 'lucide-react';
import dynamic from 'next/dynamic';
import React, { useMemo, useState } from 'react';
import { UserProps } from '@/types/users';

interface userList {
    users:UserProps[],
    error:boolean,
    loading:boolean,
}

const EditUserModel = dynamic(()=>import('@/components/models/EditUserModel'),{
    ssr:false,
    loading:()=> <Button variant='ghost' size='sm' className='text-blue-700'>Loading</Button>
})
const DeleteUserModel = dynamic(()=>import('@/components/models/DeleteUserModel'),{
    ssr:false,
    loading:()=> <Button variant='ghost' size='sm' className='text-blue-700'>Loading</Button>
})



const UserList:React.FC<userList> = ({users , error , loading})=>{
    const [searchItem , setSearchItem] = useState('');
    const [roleFilter, setRoleFilter] = useState('all')
    const [activeFilter , setActiveFilter] = useState('all')

    const filteredUsers = useMemo(()=>{
        return users?.filter((user)=>{
            const fullName = `${user.firstName} ${user.lastName}`.toLowerCase();
            const email = user.email.toLowerCase();
            const id = user._id.toLowerCase();
            const search = searchItem.toLowerCase();
            const matchSearch = fullName.includes(search) || email.includes(search) || id.includes(search);
            const matchRole = roleFilter === 'all'? true : user.role.toLowerCase() === roleFilter;
            const matchActive = activeFilter === 'all'? true : activeFilter === 'active' ? user.isActive === true : user.isActive === false;

            return matchSearch && matchRole && matchActive
        })
    },[users , searchItem , roleFilter , activeFilter]);

    if(loading){
        return <p>Loading...</p>
    };
     if(error){
        return <p>Failed to load orders</p>
    };

  return (
    <div className="container mx-auto">
        <Card>
            <CardContent className='p-6'>
                <div className="flex flex-col items-center md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-medium '/>
                        <Input
                        className='pl-10'
                        placeholder='Search users by name or email ...'
                        value={searchItem}
                        onChange={(e)=>setSearchItem(e.target.value)}
                        />
                    </div>
                    <Select
                    value={roleFilter}
                    onValueChange={setRoleFilter}
                    >
                        <SelectTrigger className='w-full md:w-[180px]'>
                            <SelectValue placeholder='Filter by role'/>
                        </SelectTrigger>
                        <SelectContent className='font-robotBold font-bold'>
                            <SelectItem value='all'> All Users</SelectItem>
                            <SelectItem value='admin'>Admin</SelectItem>
                            <SelectItem value='customer'>Customers</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select 
                    value={activeFilter}
                    onValueChange={setActiveFilter}
                    >
                        <SelectTrigger className='w-full md:w-[180px]'>
                            <SelectValue placeholder='Filter by Status'/>
                        </SelectTrigger>
                        <SelectContent className='font-robotBold font-bold'>
                            <SelectItem value='all'> All Status</SelectItem>
                            <SelectItem value='active'>Active</SelectItem>
                            <SelectItem value='suspended'>Suspended</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-4">
                    {filteredUsers.map((user)=>(
                    <Card key={user._id}>
                        <CardContent className='p-6'>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-primary font-bold font-robotoBold text-xl">
                                                {user.firstName[0]}{user.lastName[0]}
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-robotoBold text-xl">{user.firstName} {user.lastName}</p>
                                            <p className="text-lg text-gray-medium">{user.email}</p>
                                        </div>
                                        <Badge variant='default'>{user.role}</Badge>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium">Join Date</p>
                                            <p className="font-semibold">12/2/2024</p>
                                        </div>
                                        {/* <div>
                                            <p className="text-gray-medium">Total Order</p>
                                            <p className="font-semibold">123 orders</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Spent</p>
                                            <p className="font-semibold">$8,765.82</p>
                                        </div> */}
                                    </div>
                                </div>
                                    <div className="flex gap-2">
                                        <EditUserModel/>
                                        <DeleteUserModel id={user._id} firstName={user.firstName} lastName={user.lastName}/>
                                    </div>
                            </div>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default UserList