"use client"
import React from 'react'
import AdminLayout from '@/components/layout/AdminLayout';
import OrdersHeader from '@/components/templates/admin/orders/OrdersHeader/OrdersHeader';
import OrdersStats from '@/components/templates/admin/orders/OrdersStats/OrdersStats';
import OrderList from '@/components/templates/admin/orders/OrderList/OrderList';
import { useGetAllOrders } from '@/services/orderServices';



const page:React.FC = ()=>{
  const {data , isLoading , isError} = useGetAllOrders();

  console.log("data =>" , data);

  return (
    <AdminLayout>
        <OrdersHeader/>
        <OrdersStats orders={data}/>
        <OrderList orders={data} error={isError} loading={isLoading}/>
    </AdminLayout>
  )
}

export default page