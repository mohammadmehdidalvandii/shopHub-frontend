import React from 'react';

const OrdersHeader:React.FC = ()=>{
  return (
    <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-4xl font-robotoBlack font-black  mb-2">Order Management</h1>
                <p className="text-xl text-gray-medium">Manage and track all customer orders</p>
            </div>
        </div>
    </div>
  )
}

export default OrdersHeader