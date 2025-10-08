import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardOrders:React.FC = ()=>{
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
                <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                        <p className="font-semibold">#ORD-001</p>
                        <p className="text-lg text-gray-medium">John Doe</p>
                        <p className="text-sm text-gray-medium mt-1">12/10/2025</p>
                    </div>
                    <div className="text-right">
                        <p className="font-robotoBold font-bold text-primary">$899.99</p>
                        <Badge
                        variant='default'
                        className='mt-2'
                        >
                            Delivered
                        </Badge>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                        <p className="font-semibold">#ORD-001</p>
                        <p className="text-lg text-gray-medium">John Doe</p>
                        <p className="text-sm text-gray-medium mt-1">12/10/2025</p>
                    </div>
                    <div className="text-right">
                        <p className="font-robotoBold font-bold text-primary">$899.99</p>
                        <Badge
                        variant='default'
                        className='mt-2'
                        >
                            Delivered
                        </Badge>
                    </div>
                </div>
                <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                    <div>
                        <p className="font-semibold">#ORD-001</p>
                        <p className="text-lg text-gray-medium">John Doe</p>
                        <p className="text-sm text-gray-medium mt-1">12/10/2025</p>
                    </div>
                    <div className="text-right">
                        <p className="font-robotoBold font-bold text-primary">$899.99</p>
                        <Badge
                        variant='default'
                        className='mt-2'
                        >
                            Delivered
                        </Badge>
                    </div>
                </div>

                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default DashboardOrders