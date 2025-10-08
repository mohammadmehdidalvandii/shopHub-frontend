import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import React from 'react';

const ProfileOrders:React.FC = ()=>{
  return (
    <Card className='max-h-[60dvh] overflow-y-auto'>
        <CardHeader>
            <CardTitle>OrderHistory</CardTitle>
        </CardHeader>
        <CardContent>
            <div className="space-y-4">
                <Card>
                    <CardContent>
                        <div className="flex items-center justify-between mb-4 pt-2">
                            <div>
                                <p className="font-robotoBold font-semibold text-xl">#ORD-001</p>
                                <p className="text-lg text-gray-medium">Ordered on 3/15/2025</p>
                            </div>
                            <Badge
                            variant='default'
                            >
                                Delivered
                            </Badge>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-t-border">
                            <div>
                                <p className="text-sm text-gray-medium">2 items</p>
                                <p className="text-xl font-robotoBold font-bold text-primary">$329.98</p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant='outline' size='sm'>View Details</Button>
                                {/* status order ==== delivered buy again */}
                                {/* <Button variant='outline' size='sm'>Buy Again</Button> */}
                            </div>
                        </div>
                    </CardContent>
                </Card>
                <Card>
                    <CardContent>
                        <div className="flex items-center justify-between mb-4 pt-2">
                            <div>
                                <p className="font-robotoBold font-semibold text-xl">#ORD-001</p>
                                <p className="text-lg text-gray-medium">Ordered on 3/15/2025</p>
                            </div>
                            <Badge
                            variant='default'
                            >
                                Delivered
                            </Badge>
                        </div>
                        <div className="flex items-center justify-between pt-4 border-t border-t-border">
                            <div>
                                <p className="text-sm text-gray-medium">2 items</p>
                                <p className="text-xl font-robotoBold font-bold text-primary">$329.98</p>
                            </div>
                            <div className="flex gap-2">
                                <Button variant='outline' size='sm'>View Details</Button>
                                {/* status order ==== delivered buy again */}
                                {/* <Button variant='outline' size='sm'>Buy Again</Button> */}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </CardContent>
    </Card>
  )
}

export default ProfileOrders