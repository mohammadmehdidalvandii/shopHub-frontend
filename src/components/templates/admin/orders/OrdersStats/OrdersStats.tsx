import { Card, CardContent } from '@/components/ui/Cart';
import React from 'react';
import { Order } from '@/types/order';

type StatusList = {
    orders?:Order[],
}

const OrdersStats:React.FC<StatusList> = ({orders})=>{
const totalOrders = orders?.length ?? 0;
const pendingCount = orders?.filter((order) => order.status === "pending").length ?? 0;
const shippedCount = orders?.filter((order) => order.status === "shipped").length ?? 0;
const completedCount = orders?.filter((order) => order.status === "completed").length ?? 0;
const cancelledCount = orders?.filter((order) => order.status === "cancelled").length ?? 0;
  return (
    <div className="container mx-auto">
        <Card className='mb-6'>
            <CardContent className='p-6'>
                <div className="grid grid-cols-1  sm:grid-cols-3 md:grid-cols-5 gap-4">
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-primary">{totalOrders}</p>
                            <p className="text-lg text-gray-medium">Total Orders</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-accent">{pendingCount}</p>
                            <p className="text-lg text-gray-medium">Pending</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-blue-500">{shippedCount}</p>
                            <p className="text-lg text-gray-medium">Shipped</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-green-500">{completedCount}</p>
                            <p className="text-lg text-gray-medium">Completed</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-red-500">{cancelledCount}</p>
                            <p className="text-lg text-gray-medium">Cancelled</p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default OrdersStats