"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/Dialog'
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';

const OrdersUserModel:React.FC = ()=>{
    const [isShow, setIsShow] = useState<boolean>(false);
  return (
    <Dialog open={isShow} onOpenChange={setIsShow}>
        <DialogTrigger asChild>
            <Button variant='outline' size='sm'>View Details</Button>
        </DialogTrigger>
        <DialogContent className='max-w-2xl'>
            <DialogHeader>
                <DialogTitle>Order Details</DialogTitle>
            </DialogHeader>
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-lg text-gray-medium">Order Number</p>
                        <p className="font-robotBold font-semibold">#ORD-4984645646545</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-medium">Order Date</p>
                        <p className="font-robotBold font-semibold">11/11/2025</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-medium">Status</p>
                        <Badge variant='default'>Shipped</Badge>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <h3 className='font-robotBold font-semibold mb-4'>Order Items</h3>
                    <div className="space-y-3">
                        <div className="flex item-center justify-between p-3 bg-gray-light rounded-lg">
                            <div>
                                <p className="font-bold">Product Name</p>
                                <p className="text-lg font-robotBold text-gray-medium">Quantity: 2</p>
                            </div>
                            <p className="font-robotBold font-semibold">$2400.00</p>
                        </div>   
                    </div>
                </div>
                <div className="border-t pt-4 space-y-3">
                    <div>
                        <p className="font-robotBold font-semibold text-gray-medium">Shipping Address</p>
                        <p className="font-bold">ny bork</p>
                    </div>
                    <div>
                        <p className="font-robotBold font-semibold text-gray-medium">Payment Method</p>
                        <p className="font-bold font-robotBold">credit</p>
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default OrdersUserModel