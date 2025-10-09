import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Edit, Search, Trash2 } from 'lucide-react';
import React from 'react';

const UserList:React.FC = ()=>{
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
                        />
                    </div>
                    <Select defaultValue='all'>
                        <SelectTrigger className='w-full md:w-[180px]'>
                            <SelectValue placeholder='Filter by role'/>
                        </SelectTrigger>
                        <SelectContent className='font-robotBold font-bold'>
                            <SelectItem value='all'> All Users</SelectItem>
                            <SelectItem value='admin'>Admin</SelectItem>
                            <SelectItem value='moderator'>moderators</SelectItem>
                            <SelectItem value='customer'>Customers</SelectItem>
                        </SelectContent>
                    </Select>
                    <Select defaultValue='active'>
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
                    <Card>
                        <CardContent className='p-6'>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-primary font-bold font-robotoBold text-xl">
                                                j
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-robotoBold text-xl">user name</p>
                                            <p className="text-lg text-gray-medium">user@gmail.com</p>
                                        </div>
                                        <Badge variant='default'>Admin</Badge>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium">Join Date</p>
                                            <p className="font-semibold">12/2/2024</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Order</p>
                                            <p className="font-semibold">123 orders</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Spent</p>
                                            <p className="font-semibold">$8,765.82</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="flex gap-2">
                                        <Button variant='outline' size='icon'>
                                            <Edit className='h-4 w-4'/>
                                        </Button>
                                        <Button variant='outline' size='sm'>
                                            Suspend
                                        </Button>
                                        <Button variant='outline' size='icon'>
                                            <Trash2 className='h-4 w-4'/>
                                        </Button>
                                    </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6'>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-primary font-bold font-robotoBold text-xl">
                                                j
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-robotoBold text-xl">user name</p>
                                            <p className="text-lg text-gray-medium">user@gmail.com</p>
                                        </div>
                                        <Badge variant='default'>Admin</Badge>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium">Join Date</p>
                                            <p className="font-semibold">12/2/2024</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Order</p>
                                            <p className="font-semibold">123 orders</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Spent</p>
                                            <p className="font-semibold">$8,765.82</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="flex gap-2">
                                        <Button variant='outline' size='icon'>
                                            <Edit className='h-4 w-4'/>
                                        </Button>
                                        <Button variant='outline' size='sm'>
                                            Suspend
                                        </Button>
                                        <Button variant='outline' size='icon'>
                                            <Trash2 className='h-4 w-4'/>
                                        </Button>
                                    </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6'>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-3 mb-3">
                                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                                            <span className="text-primary font-bold font-robotoBold text-xl">
                                                j
                                            </span>
                                        </div>
                                        <div>
                                            <p className="font-robotoBold text-xl">user name</p>
                                            <p className="text-lg text-gray-medium">user@gmail.com</p>
                                        </div>
                                        <Badge variant='default'>Admin</Badge>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium">Join Date</p>
                                            <p className="font-semibold">12/2/2024</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Order</p>
                                            <p className="font-semibold">123 orders</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Spent</p>
                                            <p className="font-semibold">$8,765.82</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="flex gap-2">
                                        <Button variant='outline' size='icon'>
                                            <Edit className='h-4 w-4'/>
                                        </Button>
                                        <Button variant='outline' size='sm'>
                                            Suspend
                                        </Button>
                                        <Button variant='outline' size='icon'>
                                            <Trash2 className='h-4 w-4'/>
                                        </Button>
                                    </div>
                            </div>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default UserList