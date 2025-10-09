import { Card, CardContent } from '@/components/ui/Cart';
import React from 'react';

const ProductsStats:React.FC = ()=>{
  return (
    <div className="container mx-auto">
        <Card className='mb-6'>
            <CardContent className='p-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-3xl font-robotoBold font-bold text-primary">89</p>
                            <p className="text-lg text-gray-medium">Total Products</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-3xl font-robotoBold font-bold text-green-500">72</p>
                            <p className="text-lg text-gray-medium">In Stock</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-3xl font-robotoBold font-bold text-accent">12</p>
                            <p className="text-lg text-gray-medium">Low Stock</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-3xl font-robotoBold font-bold text-danger">5</p>
                            <p className="text-lg text-gray-medium">Out of Stock</p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default ProductsStats