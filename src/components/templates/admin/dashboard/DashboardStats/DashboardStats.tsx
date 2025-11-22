"use client"
import { Badge } from "@/components/ui/Badge";
import { Card, CardContent } from "@/components/ui/Cart";
import { useGetAllOrders } from "@/services/orderServices";
import { useGetAllProducts } from "@/services/productServices";
import { useGetAllUsers } from "@/services/userServices";
import { ArrowDownRight, DollarSign, ShoppingBag, TrendingUp, Users } from "lucide-react";
import React from "react";

const DashboardStats: React.FC = () => {
  const {data:orders=[]} = useGetAllOrders();
  const {data:users=[]} = useGetAllUsers();  
  const {data:products=[]} = useGetAllProducts();

const totalRevenue = orders.reduce((sum: number, order: any) => {
  return sum + Number(order.totalAmount || 0);
}, 0);

  const totalOrders = orders.length ?? 0;
  const totalUser = users.length ?? 0;
  const totalProducts = products.length ?? 0;

  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:gird-cols-4 gap-6 mb-8">
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                <DollarSign className="h-6 w-6 text-primary" />
              </div>
              <Badge variant="default" className="gap-1">
                <TrendingUp className="h-3 w-3" />
                12.5%
              </Badge>
            </div>
            <div>
                <p className="text-lg text-gray-medium mb-1">Total Revenue</p>
                <p className="text-3xl font-bold">${Number(totalRevenue).toFixed(2)}</p>
                <p className="text-lg text-gray-medium mt-2">+5,231 from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center">
                <ShoppingBag className="h-6 w-6 text-accent" />
              </div>
              <Badge variant="default" className="gap-1">
                <TrendingUp className="h-3 w-3" />
                8.2%
              </Badge>
            </div>
            <div>
                <p className="text-lg text-gray-medium mb-1">Total Orders</p>
                <p className="text-3xl font-bold">{totalOrders}</p>
                <p className="text-lg text-gray-medium mt-2">+156 from last month</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center">
                <Users className="h-6 w-6 text-blue-500" />
              </div>
              <Badge variant="default" className="gap-1">
                <TrendingUp className="h-3 w-3" />
                5.1%
              </Badge>
            </div>
            <div>
                <p className="text-lg text-gray-medium mb-1">Total Users</p>
                <p className="text-3xl font-bold">{totalUser}</p>
                <p className="text-lg text-gray-medium mt-2">+201 new users</p>
            </div>
          </CardContent>
        </Card>
        <Card>
          <CardContent className="p-6">
            <div className="flex items-center justify-between mb-4">
              <div className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center">
                <ArrowDownRight className="h-6 w-6 text-green-500" />
              </div>
              <Badge variant="default" className="gap-1">
                <TrendingUp className="h-3 w-3" />
                2.3%
              </Badge>
            </div>
            <div>
                <p className="text-lg text-gray-medium mb-1">Total Products</p>
                <p className="text-3xl font-bold">{totalProducts}</p>
                <p className="text-lg text-gray-medium mt-2">-12 from last month</p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardStats;
