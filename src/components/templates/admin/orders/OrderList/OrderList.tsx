import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Eye, Search, Truck } from 'lucide-react';
import React, { useMemo, useState } from 'react';
import { Order } from '@/types/order';
import OrdersAdminModel from '@/components/models/OrdersAdminModel';


type OrdersListProps = {
  orders: Order[];
  error?:boolean,
  loading?: boolean, 
};

const OrderList:React.FC<OrdersListProps> = ({orders , error , loading})=>{
    const [searchItem ,setSearchItem] = useState('');
    const [statusFilter, setStatusFilter] = useState<string>('all');

    
    const filteredOrders = useMemo(()=>{
            return orders?.filter((order)=>{
            const fullName = `${order.customerInfo.firstName} ${order.customerInfo.lastName}`.toLowerCase();
            const email = order.customerInfo.email.toLowerCase();
            const id = order._id.toLowerCase();
            const search = searchItem.toLowerCase();
            const matchSearch = fullName.includes(search) || email.includes(search) || id.includes(search);
            const matchStatus = statusFilter === 'all' ? true :order.status === statusFilter;

            return matchSearch && matchStatus;
        })
    },[orders , searchItem , statusFilter])
    
    if(loading){
        return <p>Loading...</p>
    };
     if(error){
        return <p>Failed to load orders</p>
    };

    if(orders.length === 0 ){
                return(
             <Card className="text-center py-10">
        <CardHeader>
          <CardTitle>No Orders Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-medium font-robotoBlack font-black text-lg">
            No orders have been placed..
          </p>
        </CardContent>
      </Card>
        )
    };


  return (
    <div className="container mx-auto">
        <Card>
            <CardContent className='p-6'>
                <div className="flex flex-col items-center md:flex-row gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-medium'/>
                        <Input
                        className='pl-10'
                        placeholder='Search orders by ID , customer name or email ...'
                        value={searchItem}
                        onChange={(e)=>setSearchItem(e.target.value)}
                        />
                    </div>
                    <Select 
                    value={statusFilter}
                    onValueChange={setStatusFilter}
                    >
                        <SelectTrigger className='w-full md:w-[180px]'>
                            <SelectValue placeholder='Filter by status' className='font-robotBold font-bold'/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='all'>All Orders</SelectItem>
                            <SelectItem value='pending'>Pending</SelectItem>
                            <SelectItem value='paid'>Paid</SelectItem>
                            <SelectItem value='shipped'>Shipped</SelectItem>
                            <SelectItem value='completed'>completed</SelectItem>
                            <SelectItem value='cancelled'>Cancelled</SelectItem>
                        </SelectContent>
                    </Select>
                </div>

                <div className="space-y-4">
                    {filteredOrders.map((order)=>(
                    <Card key={order._id}>
                        <CardContent className='p-6'>
                            <div className="flex items-start justify-between">
                                <div className="flex-1">
                                    <div className="flex items-center gap-4 mb-2">
                                        <p className="font-bold text-xl">#ORD-{order._id}</p>
                                        <Badge variant='default'>{order.status}</Badge>
                                    </div>
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium">Customer</p>
                                            <p className="font-semibold">{order.customerInfo.firstName}-{order.customerInfo.lastName}</p>
                                            <p className="text-gray-medium">{order.customerInfo.email}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Order Date</p>
                                            <p className="font-semibold">{new Date(order.createdAt).toLocaleDateString()}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium">Total Amount</p>
                                            <p className="font-semibold text-primary text-xl">${order.totalAmount}</p>
                                            <p className="text-gray-medium">{orders.length} items</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <OrdersAdminModel/>
                                    <Button variant='outline' size='icon'>
                                        <Truck className='h-4 w-4'/>
                                    </Button>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default OrderList