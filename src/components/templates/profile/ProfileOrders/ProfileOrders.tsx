"use client"
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { useGetOrderByUser } from '@/services/orderServices';
import Link from 'next/link';
import React from 'react';

const ProfileOrders:React.FC = ()=>{
    const {data , isLoading , isError} = useGetOrderByUser();
    if(isLoading){
        return <p>Loading...</p>
    };

    if(isError){
        return <p>Failed to load orders 😢</p>
    };

    if(data.length === 0){
        return(
             <Card className="text-center py-10">
        <CardHeader>
          <CardTitle>No Orders Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-medium font-robotoBlack font-black text-lg">
            You haven’t placed any orders yet.
          </p>
          <Link href='/Products'>
          <Button variant="accent" size="sm" className="mt-4">
            Start Shopping 🛍️
          </Button>
          </Link>
        </CardContent>
      </Card>
        )
    }
  return (
    <Card className='max-h-[60dvh] overflow-y-auto'>
        <CardHeader>
            <CardTitle>OrderHistory</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                    {data.map((order:any)=>(
                <Card key={order._id}>
                    <CardContent >
                        <div className="flex items-center justify-between mb-4 pt-2">
                            <div>
                                <p className="font-robotoBold font-semibold text-xl">#ORD-{order._id}</p>
                                <p className="text-lg text-gray-medium">Ordered on {new Date(order.createdAt).toLocaleDateString()}</p>
                            </div>
                            <Badge
                            variant='default'
                            >
                                {order.status}
                            </Badge>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-t-border">
                            <div>
                                <p className="text-sm text-gray-medium">{order.items.length} items</p>
                                <p className="text-xl font-robotoBold font-bold text-primary">${order.totalAmount}</p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant='outline' size='sm'>View Details</Button>
                                {/* status order ==== delivered buy again */}
                                {/* <Button variant='outline' size='sm'>Buy Again</Button> */}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                    ))}

            </div>
        </CardContent>
    </Card>
  )
}

export default ProfileOrders