import { Card, CardContent } from '@/components/ui/Cart';
import React from 'react';

const OrdersStats:React.FC = ()=>{
  return (
    <div className="container mx-auto">
        <Card className='mb-6'>
            <CardContent className='p-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold text-primary">156</p>
                            <p className="text-lg text-gray-medium">Total Orders</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold text-accent">12</p>
                            <p className="text-lg text-gray-medium">Pending</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold text-blue-500">28</p>
                            <p className="text-lg text-gray-medium">Processing</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold text-green-500">116</p>
                            <p className="text-lg text-gray-medium">Delivered</p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default OrdersStats