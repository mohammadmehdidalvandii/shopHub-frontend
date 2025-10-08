import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardProducts:React.FC = ()=>{
  return (
    <div className="container mx-auto">
        <Card>
            <CardHeader className='flex flex-row items-center justify-between'>
                <CardTitle>Top Products</CardTitle>
                <Link href='/Admin/Products'>
                <Button variant='outline' size='sm'>
                    View All
                    <ArrowUpRight className='ml-2 h-4 w-4'/>
                </Button>
                </Link>
            </CardHeader>
            <CardContent>
                <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary">#1</span>
                            </div>
                            <div>
                                <p className="font-semibold">product name</p>
                                <p className="text-lg text-gray-medium">245 sales</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-roboto-bold text-primary">$7,876.87</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary">#1</span>
                            </div>
                            <div>
                                <p className="font-semibold">product name</p>
                                <p className="text-lg text-gray-medium">245 sales</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-roboto-bold text-primary">$7,876.87</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border">
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary">#1</span>
                            </div>
                            <div>
                                <p className="font-semibold">product name</p>
                                <p className="text-lg text-gray-medium">245 sales</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-roboto-bold text-primary">$7,876.87</p>
                        </div>
                    </div>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default DashboardProducts