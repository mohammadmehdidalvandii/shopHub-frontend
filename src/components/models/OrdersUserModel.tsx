"use client"
import React, { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/Dialog'
import { Button } from '../ui/Button';
import { Badge } from '../ui/Badge';
import { Order } from '@/types/order';

interface OrdersProps {
    orders:Order
}

const OrdersUserModel:React.FC<OrdersProps> = ({orders})=>{
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
                        <p className="font-robotBold font-semibold">#ORD-{orders._id}</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-medium">Order Date</p>
                        <p className="font-robotBold font-semibold">{new Date(orders.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-medium">Status</p>
                                                <Badge
                                                  variant={
                                                    orders.status === "completed"
                                                      ? "default"
                                                      : orders.status === "shipped"
                                                      ? "secondary"
                                                      : orders.status === "cancelled"
                                                      ? "destructive"
                                                      : "outline"
                                                  }
                                                >
                                                  {orders.status}
                                                </Badge>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <h3 className='font-robotBold font-semibold mb-4'>Order Items</h3>
                    <div className="space-y-3">
                        {orders.items.map((item)=>(
                        <div className="flex item-center justify-between p-3 bg-gray-light rounded-lg" key={item.product._id}>
                            <div>
                                <p className="font-bold">{item.product.productName}</p>
                                <p className="text-lg font-robotBold text-gray-medium">Quantity: {item.quantity}</p>
                            </div>
                            <p className="font-robotBold font-semibold">${item.price}</p>
                        </div>   
                        ))}
                    </div>
                </div>
                <div className="border-t pt-4 space-y-3">
                    <div>
                        <p className="font-robotBold font-semibold text-gray-medium">Shipping Address</p>
                        <p className="font-bold">{orders.customerInfo.country}-{orders.customerInfo.city} | {orders.customerInfo.address}</p>
                    </div>
                    <div>
                        <p className="font-robotBold font-semibold text-gray-medium">Payment Method</p>
                        <p className="font-bold font-robotBold">{orders.paymentMethod}</p>
                    </div>
                </div>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default OrdersUserModel