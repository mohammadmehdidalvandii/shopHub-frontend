"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Edit, Search, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React, { useMemo, useState } from 'react';
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import dynamic from 'next/dynamic';
import { ProductProps } from '@/types/product';

const EditProductModel = dynamic(()=>import('@/components/models/EditProductModel'),{
    ssr:false,
    loading:()=> <Button variant='ghost' size='sm' className='text-blue-700'>Loading</Button>
})
const DeleteProductModel = dynamic(()=>import('@/components/models/DeleteProductModel'),{
    ssr:false,
    loading:()=> <Button variant='ghost' size='sm' className='text-blue-700'>Loading</Button>
})

type productData = {
    products:ProductProps[],
    error?:boolean,
    loading?:boolean,
}

const ProductList:React.FC<productData> = ({products , error , loading})=>{
    const [searchItem , setSearchItem] = useState('');
    const [categoryFilter , setCategoryFilter] = useState('all');

    const filteredProducts = useMemo(()=>{
        return products?.filter((product)=>{
            const name = product.productName.toLowerCase();
            const category = product.category.title.toLowerCase();
            const stock = product.stockQuantity;
            const status = product.status.toLowerCase();
            
            const matchCategory = categoryFilter === 'all' ? true : product.category.title.toLowerCase() === categoryFilter

            const matchSearch = name.includes(searchItem)||category.includes(searchItem)||stock.includes(searchItem)||status.includes(searchItem);
            return matchSearch && matchCategory
        })
    },[products, searchItem , categoryFilter])

      if (loading) {
    return <p>Loading...</p>;
  }
  if (error) {
    return <p>Failed to load orders</p>;
  }


    if (products.length === 0) {
    return (
      <Card className="text-center py-10">
        <CardHeader>
          <CardTitle>No Products Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-gray-medium font-robotoBlack font-black text-lg">
            No Products have been placed..
          </p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="container mx-auto">
        <Card>
            <CardContent className='p-6'>
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-medium'/>
                        <Input className='pl-10 h-10' placeholder='Search products bg name or category ...'
                        value={searchItem}
                        onChange={(e)=>setSearchItem(e.target.value)}
                        />
                    </div>
                    <Select value={categoryFilter} onValueChange={setCategoryFilter}>
                        <SelectTrigger className='w-full h-10 md:w-[180px]'>
                            <SelectValue placeholder='Filter by category'/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='all'>All Categories</SelectItem>
                            <SelectItem value='electronics'>Electronics</SelectItem>
                            <SelectItem value='audio'>Audio</SelectItem>
                            <SelectItem value='wearables'>Wearables</SelectItem>
                            <SelectItem value='accessories'>accessories</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-4">
                    {filteredProducts.map((product)=>(
                    <Card key={product._id}>
                        <CardContent className='p-4 sm:p-6' >
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-light shrink-0">
                                    {product.images?.map((img , index)=>(
                                        <Image key={index} src={img} alt='product name'width={200} height={200} className='w-full h-full'/>
                                    ))}
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="font-robotoBold font-bold sm:text-lg">{product.productName}</h3>
                                        <Badge variant='default'>{product?.category?.title}</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium text-sm">price</p>
                                            <p className="font-robotoBold font-bold text-primary">${product.price}</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium text-sm">Stock</p>
                                            <p className="font-robotoBold font-bold">{product.stockQuantity}</p>
                                        </div>
                                        <div className='col-span-2 sm:col-span-1'>
                                            <p className="text-gray-medium text-sm">Status</p>
                                            <p className="font-robotoBold font-semibold">{product.status}</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="flex gap-2 w-full sm:w-auto">
                                        <EditProductModel
                                        id={product._id}
                                        productName={product.productName}
                                        category={product.category.title}
                                        price={product.price}
                                        images={product.images}
                                        stockQuantity={product.stockQuantity}
                                        />
                                        <DeleteProductModel id={product._id}/>
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

export default ProductList