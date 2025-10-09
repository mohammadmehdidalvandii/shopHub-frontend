import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Eye, Search, Truck } from 'lucide-react';
import React from 'react';

const OrderList:React.FC = ()=>{
  return (
    <div className="container mx-auto">
        <Card>
            <CardContent className='p-6'>
                <div className="flex flex-col items-center md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-medium'/>
                        <Input
                        className='pl-10'
                        placeholder='Search orders by ID , customer name or email ...'
                        />
                    </div>
                    <Select defaultValue='all'>
                        <SelectTrigger className='w-full md:w-[180px]'>
                            <SelectValue placeholder='Filter by status'/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='all'>All Orders</SelectItem>
                            <SelectItem value='pending'>Pending</SelectItem>
                            <SelectItem value='processing'>Processing</SelectItem>
                            <SelectItem value='shipped'>Shipped</SelectItem>
                            <SelectItem value='Delivered'>Delivered</SelectItem>
                            <SelectItem value='cancelled'>Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-4">
                    <Card>
                        <CardContent className='p-6'>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <p className="font-bold text-xl">#ORD-001</p>
                                        <Badge variant='default'>Delivered</Badge>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium">Customer</p>
                                            <p className="font-semibold">order customer</p>
                                            <p className="text-gray-medium">customer@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Order Date</p>
                                            <p className="font-semibold">12/10/2025</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Amount</p>
                                            <p className="font-semibold text-primary text-xl">$899.99</p>
                                            <p className="text-gray-medium">245 items</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant='outline' size='icon'>
                                        <Eye className='h-4 w-4'/>
                                    </Button>
                                    <Button variant='outline' size='icon'>
                                        <Truck className='h-4 w-4'/>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6'>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <p className="font-bold text-xl">#ORD-001</p>
                                        <Badge variant='default'>Delivered</Badge>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium">Customer</p>
                                            <p className="font-semibold">order customer</p>
                                            <p className="text-gray-medium">customer@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Order Date</p>
                                            <p className="font-semibold">12/10/2025</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Amount</p>
                                            <p className="font-semibold text-primary text-xl">$899.99</p>
                                            <p className="text-gray-medium">245 items</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant='outline' size='icon'>
                                        <Eye className='h-4 w-4'/>
                                    </Button>
                                    <Button variant='outline' size='icon'>
                                        <Truck className='h-4 w-4'/>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6'>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <p className="font-bold text-xl">#ORD-001</p>
                                        <Badge variant='default'>Delivered</Badge>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium">Customer</p>
                                            <p className="font-semibold">order customer</p>
                                            <p className="text-gray-medium">customer@gmail.com</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Order Date</p>
                                            <p className="font-semibold">12/10/2025</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Amount</p>
                                            <p className="font-semibold text-primary text-xl">$899.99</p>
                                            <p className="text-gray-medium">245 items</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <Button variant='outline' size='icon'>
                                        <Eye className='h-4 w-4'/>
                                    </Button>
                                    <Button variant='outline' size='icon'>
                                        <Truck className='h-4 w-4'/>
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

export default OrderList