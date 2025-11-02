"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/Dialog";
import { Button } from "../ui/Button";
import { Eye } from "lucide-react";
import { Badge } from "../ui/Badge";
import { Order } from "@/types/order";

interface orderProps {
    order:Order
}

const OrdersAdminModel: React.FC<orderProps> = ({order}) => {
  const [isShow, setIsShow] = useState<boolean>(false);

    console.log("order =>" , order)

  return (
    <Dialog open={isShow} onOpenChange={setIsShow}>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Eye className="h-4 w-4" />
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
        <DialogHeader>
            <DialogTitle>Order Details</DialogTitle>
        </DialogHeader>
            <div className="space-y-6">
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <p className="text-lg text-gray-medium">Order Number</p>
                        <p className="text-xl font-robotBold font-semibold">#ORD-{order._id}</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-medium">Order Date</p>
                        <p className="text-xl font-robotBold font-semibold">{new Date(order.createdAt).toLocaleDateString()}</p>
                    </div>
                    <div>
                        <p className="text-lg text-gary-medium">Status</p>
                        <Badge variant={
                            order.status ==='completed'
                            ?'default': 
                            order.status ==='shipped'
                            ?'secondary':
                            order.status === 'cancelled'
                            ?'destructive':'outline'
                        }>
                            {order.status}
                        </Badge>
                    </div>
                    <div>
                        <p className="text-lg text-gray-medium">Total Amount</p>
                        <p className="text-xl font-robotBold font-semibold">${order.totalAmount}</p>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <h3 className="font-robotBold font-semibold text-xl mb-4">Customer Information</h3>
                    <div className="grid grid-cols-2 gap-4 bg-gray-light p-4 rounded-lg">
                        <div>
                            <p className="text-lg text-gray-medium">Name</p>
                            <p className="font-robotoMedium">{order.customerInfo.firstName} {order.customerInfo.lastName}</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-medium">Email</p>
                            <p className="font-robotoMedium">{order.customerInfo.email}</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-medium">Phone</p>
                            <p className="font-robotoMedium">{order.customerInfo.phone}</p>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <h3 className="font-robotBold font-semibold text-xl mb-4">Order Items</h3>
                    {order.items.map((item)=>(
                    <div className="space-y-3" key={item.product._id}>
                        <div className="flex items-center justify-between p-4 bg-gray-light rounded-lg">
                            <div className="flex-1">
                                <p className="font-robotoMedium text-xl">Name:{item.product.productName}</p>
                                <div className="flex gap-4 mt-1">
                                    <p className="text-lg text-gray-medium">SKU:{item.product.productSKU}</p>
                                    <p className="text-lg text-gray-medium">Quantity:2</p>
                                </div>
                            </div>
                            <p className="font-robotoBold font-semibold text-lg">${item.product.price}</p>
                        </div>
                        <div className="mt-4 pt-4 border-t flex justify-between items-center">
                            <p className="font-robotBold font-semibold text-xl">Subtotal</p>
                            <p className="font-robotBold font-bold text-2xl text-primary">${item.product.price}</p>
                        </div>
                    </div>
                    ))}
                </div>
                <div className="border-t pt-4 grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-robotBold font-semibold text-lg mb-4">Shipping Address</h3>
                        <div className="bg-gray-light rounded-lg p-4">
                            <p className="font-robotoMedium"></p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-robotBold font-semibold text-lg mb-4">Payment Method</h3>
                        <div className="bg-gray-light rounded-lg p-4">
                            <p className="font-robotoMedium">{order.paymentMethod}</p>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <h3 className="font-robotBold font-semibold text-lg mb-4">Tracking Information</h3>
                   <div className="bg-gray-light rounded-lg p-4 ">
                    <p className="text-lg text-gray-medium mb-1">Tracking Number</p>
                    <p className="font-robotoBold font-semibold">789866556445645665</p>
                   </div>
                </div>
            </div>
      </DialogContent>
    </Dialog>
  );
};

export default OrdersAdminModel;
