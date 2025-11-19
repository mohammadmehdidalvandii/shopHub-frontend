"use client"
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { useGetAllProducts } from '@/services/productServices';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

const DashboardProducts:React.FC = ()=>{
       const {data , isError , isLoading} = useGetAllProducts();    
            if (isLoading) {
      return  <div className="content_title">
        <p className="title">Loading products...</p>
      </div>
    }
    if (isError) {
      return (
              <div className="content_error">
        <p className="error">Failed to load products</p>
      </div>
      )
    }
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
                    {data.slice(0,3).map((product:any)=>(
                    <div className="flex items-center justify-between p-4 rounded-lg border border-border" key={product._id}>
                        <div className="flex items-center gap-4">
                            <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center">
                                <span className="font-bold text-primary">{product.productName[0]}</span>
                            </div>
                            <div>
                                <p className="font-semibold">{product.productName}</p>
                                <p className="text-lg text-gray-medium">{product.stockQuantity} items</p>
                            </div>
                        </div>
                        <div className="text-right">
                            <p className="font-roboto-bold text-primary">${Number(product.price).toFixed(2)}</p>
                        </div>
                    </div>
                    ))}
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default DashboardProducts