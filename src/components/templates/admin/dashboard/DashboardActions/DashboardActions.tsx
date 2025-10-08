import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Package, ShoppingBag, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardActions:React.FC = ()=>{
  return (
    <div className="container mx-auto">
        <Card>
            <CardHeader>
                <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent>
                <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-col-3 gap-4">
                    <Link href='/Admin/Orders'>
                        <Button variant='outline' size='lg' className='w-full h-auto py-6'>
                            <div className="flex flex-col items-center gap-2">
                                <ShoppingBag className='h-8 w-8'/>
                                <span>Manage Orders</span>
                            </div>
                        </Button>
                    </Link>
                    <Link href='/Admin/Products'>
                        <Button variant='outline' size='lg' className='w-full h-auto py-6'>
                            <div className="flex flex-col items-center gap-2">
                                <Package className='h-8 w-8'/>
                                <span>Manage Products</span>
                            </div>
                        </Button>
                    </Link>
                    <Link href='/Admin/Users'>
                        <Button variant='outline' size='lg' className='w-full h-auto py-6'>
                            <div className="flex flex-col items-center gap-2">
                                <Users className='h-8 w-8'/>
                                <span>Manage Users</span>
                            </div>
                        </Button>
                    </Link>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default DashboardActions