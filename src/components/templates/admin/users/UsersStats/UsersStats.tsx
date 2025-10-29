import { Card, CardContent } from '@/components/ui/Cart';
import React from 'react';
import { Order } from '@/types/order';
type OrdersListProps = {
  orders: Order[];
};
const UsersStats:React.FC<OrdersListProps> = ({orders})=>{
    console.log("orders =>" , orders)
    const totalUsers = orders?.length ?? 0;
    const activeUsers = orders?.filter((user)=>user.isActive == true).length ?? 0;
    const suspendedUsers = orders?.filter((user)=>user.isActive == false).length ?? 0;

    const now = new Date();
    const currentMonth = now.getMonth();
    const currentYear = now.getFullYear();
    const newThisMonth = orders?.filter((user)=>{
        const created = new Date(user.createdAt);
        return created.getMonth() === currentMonth && created.getFullYear () === currentYear;
    }).length ?? 0

  return (
    <div className="container mx-auto">
        <Card className='mb-6'>
            <CardContent className='p-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-primary">{totalUsers}</p>
                            <p className="text-lg text-gray-medium">Total Users</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-green-500">{activeUsers}</p>
                            <p className="text-lg text-gray-medium">Active Users</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-blue-500">{newThisMonth}</p>
                            <p className="text-lg text-gray-medium">New This month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-accent">{suspendedUsers}</p>
                            <p className="text-lg text-gray-medium">Suspended</p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default UsersStats