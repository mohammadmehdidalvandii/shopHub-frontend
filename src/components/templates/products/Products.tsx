"use client"
import ProductCard from '@/components/modules/ProductCard/ProductCard';
import { Button } from '@/components/ui/Button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { useGetAllProducts } from '@/services/productServices';
import React, { useState } from 'react'

const Products:React.FC = ()=>{
    const [selectedCategory, setSelectCategory] = useState<string>('all');
    const [sortOption , setSortOption] = useState<string>('featured');

    const categories = ['all', 'electronics','audio','wearables','accessories'];


    const {data , isError , isLoading} = useGetAllProducts();

const filteredProducts = data ? (selectedCategory === 'all' ? data : data.filter((product: any) => product.category.title === selectedCategory)) : [];
    const sortedProducts = [...filteredProducts].sort((a:any , b:any)=>{
        switch(sortOption){
            case 'price-low':
                return a.price - b.price;
            case 'price-high':
                return b.price - a.price;
            default:
                return 0 
        }
    })

    if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Failed to load Products</p>;
  }

  return (
    <section>
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-robotoBlack font-black mb-2">All Products</h1>
                <p className="text-gray-medium text-xl">Browse our complete collection</p>
            </div>
            <div className="flex flex-col md:flex-row gap-4 mb-4">
                <div className="flex gap-2 flex-wrap">
                    {categories.map((category)=>(
                        <Button 
                        key={category}
                        variant={selectedCategory === category ? 'default' :'outline'}
                        size='lg'
                        onClick={()=>setSelectCategory(category)}
                        className='capitalize'
                        >
                        {category}
                        </Button>
                    ))}
                </div>
                <div className="md:ml-auto">
                    <Select onValueChange={(value)=>setSortOption(value)}>
                        <SelectTrigger className='w-[140px]'>
                            <SelectValue placeholder="Sort by"/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='featured' className='font-robotBold font-bold hover:text-white'>Featured</SelectItem>
                            <SelectItem value='price-low' className='font-robotBold font-bold hover:text-white'>Price: Low to High</SelectItem>
                            <SelectItem value='price-high' className='font-robotBold font-bold hover:text-white'>Price: High to Low</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
            </div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
  {sortedProducts.length === 0 ? (
    <p className="text-gray-medium text-2xl col-span-full text-center"> 
      No products found in this category.
    </p>
  ) : (
    sortedProducts.map((product: any) => (
      <ProductCard
        key={product._id}
        id={product._id}
        images={product.images}
        productName={product.productName}
        category={product.category.title}
        price={product.price}
      />
    ))
  )}
</div>
        </div>
    </section>
  )
}

export default Products