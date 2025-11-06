import { Card, CardContent } from '@/components/ui/Cart';
import React from 'react';
import { ProductProps } from '@/types/product';

interface ProductInter {
    products:ProductProps[]
}

const ProductsStats:React.FC<ProductInter> = ({products})=>{

    const totalProducts = products?.length ?? 0;

    const inStock = products?.filter(p => Number(p.stockQuantity) > 10).length ?? 0;
    const lowStock = products?.filter(p => Number(p.stockQuantity) > 0 && Number(p.stockQuantity) <= 10).length ?? 0;
    const outOfStock = products?.filter(p => Number(p.stockQuantity) === 0).length ?? 0;

  return (
    <div className="container mx-auto">
        <Card className='mb-6'>
            <CardContent className='p-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-3xl font-robotoBold font-bold text-primary">{totalProducts}</p>
                            <p className="text-lg text-gray-medium">Total Products</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-3xl font-robotoBold font-bold text-green-500">{inStock}</p>
                            <p className="text-lg text-gray-medium">In Stock</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-3xl font-robotoBold font-bold text-accent">{lowStock}</p>
                            <p className="text-lg text-gray-medium">Low Stock</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-3xl font-robotoBold font-bold text-danger">{outOfStock}</p>
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