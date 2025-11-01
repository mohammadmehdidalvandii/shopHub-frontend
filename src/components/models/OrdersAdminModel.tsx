"use client";
import React, { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "../ui/Dialog";
import { Button } from "../ui/Button";
import { Eye } from "lucide-react";
import { Badge } from "../ui/Badge";

const OrdersAdminModel: React.FC = () => {
  const [isShow, setIsShow] = useState<boolean>(false);
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
                        <p className="text-xl font-robotBold font-semibold">#ORD-565565121846556</p>
                    </div>
                    <div>
                        <p className="text-lg text-gray-medium">Order Date</p>
                        <p className="text-xl font-robotBold font-semibold">12/11/2025</p>
                    </div>
                    <div>
                        <p className="text-lg text-gary-medium">Status</p>
                        <Badge variant='default'>
                            Shipped
                        </Badge>
                    </div>
                    <div>
                        <p className="text-lg text-gray-medium">Total Amount</p>
                        <p className="text-xl font-robotBold font-semibold">$2450.00</p>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <h3 className="font-robotBold font-semibold text-xl mb-4">Customer Information</h3>
                    <div className="grid grid-cols-2 gap-4 bg-gray-light p-4 rounded-lg">
                        <div>
                            <p className="text-lg text-gray-medium">Name</p>
                            <p className="font-robotoMedium">Customer</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-medium">Email</p>
                            <p className="font-robotoMedium">Customer</p>
                        </div>
                        <div>
                            <p className="text-lg text-gray-medium">Phone</p>
                            <p className="font-robotoMedium">Customer</p>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-4">
                    <h3 className="font-robotBold font-semibold text-xl mb-4">Order Items</h3>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between p-4 bg-gray-light rounded-lg">
                            <div className="flex-1">
                                <p className="font-robotoMedium text-xl">Product Name</p>
                                <div className="flex gap-4 mt-1">
                                    <p className="text-lg text-gray-medium">SKU:213123</p>
                                    <p className="text-lg text-gray-medium">Quantity:2</p>
                                </div>
                            </div>
                            <p className="font-robotoBold font-semibold text-lg">$2500</p>
                        </div>
                        <div className="mt-4 pt-4 border-t flex justify-between items-center">
                            <p className="font-robotBold font-semibold text-xl">Subtotal</p>
                            <p className="font-robotBold font-bold text-2xl text-primary">$2500.00</p>
                        </div>
                    </div>
                </div>
                <div className="border-t pt-4 grid grid-cols-2 gap-6">
                    <div>
                        <h3 className="font-robotBold font-semibold text-lg mb-4">Shipping Address</h3>
                        <div className="bg-gray-light rounded-lg p-4">
                            <p className="font-robotoMedium">1251615615165</p>
                        </div>
                    </div>
                    <div>
                        <h3 className="font-robotBold font-semibold text-lg mb-4">Payment Method</h3>
                        <div className="bg-gray-light rounded-lg p-4">
                            <p className="font-robotoMedium">credit</p>
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
