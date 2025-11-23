"use client"
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { useGetAllOrders } from '@/services/orderServices';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardOrders:React.FC = ()=>{
    const {data , isError , isLoading} = useGetAllOrders();
            if (isLoading) {
      return  <div className="content_title">
        <p className="title">Loading Orders...</p>
      </div>
    }
    if (isError) {
      return (
              <div className="content_error">
        <p className="error">Failed to load Orders</p>
      </div>
      )
    }
  return (
    <div className="container mx-auto">
        <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle>Recent Orders</CardTitle>
                <Link href='/Admin/Orders'>
                <Button variant='outline' size='sm'>
                    View All
                    <ArrowUpRight className='ml-2 h-4 h w-4'/>    
                </Button>
                </Link>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                {data.slice(0 ,  3).map((order:any)=>(
                <div className="flex items-center justify-between p-4 rounded-lg border border-border" key={order._id}>
                    <div>
                        <p className="font-semibold">#ORD-{order._id}</p>
                        <p className="text-lg text-gray-medium">{order.customerInfo.firstName}{order.customerInfo.lastName}</p>
                        <p className="text-sm text-gray-medium mt-1">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div className="text-right">
                        <p className="font-robotoBold font-bold text-primary">${Number(order.totalAmount).toFixed(2)}</p>
                        <Badge
                          variant={
                            order.status === "completed"
                              ? "default"
                              : order.status === "shipped"
                              ? "secondary"
                              : order.status === "cancelled"
                              ? "destructive"
                              : "outline"
                          }
                          className='mt-2'
                        >
                          {order.status}
                        </Badge>
                    </div>
                </div>
                ))}

                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default DashboardOrders