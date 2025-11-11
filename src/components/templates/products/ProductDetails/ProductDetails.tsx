"use client"
import React from 'react';
import ProductImage from '../ProductImage/ProductImage';
import ProductInfo from '../ProductInfo/ProductInfo';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import ProductNotFound from '../ProductNotFound/ProductNotFound';
import { useGetProductById } from '@/services/productServices';

interface ProductIdProps {
    id:string
}


const ProductDetails:React.FC<ProductIdProps> = ({id})=>{


  if (!id) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-gray-500">Loading...</p>
      </div>
    );
  }
   const { data, isError, isLoading } = useGetProductById(id);

  if (isLoading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-3xl font-robotoBlack font-black text-gray-medium animate-pulse">Loading product...</p>
      </div>
    );
  }

  if (isError || !data) {
    return <ProductNotFound />;
  }

  return (
    <section>
        <div className="container mx-auto px-4 py-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-12">
                {/* Product Image */}
                <ProductImage images={data.images[0]}/>
                {/* Product Info */}
                <ProductInfo 
                id={data._id}
                category={data.category.title}
                name={data.productName}
                price={data.price}
                description={data.description}
                images={data.images[0]}
                />
            </div>
            {/* Products Details Tabs */}
            <Tabs defaultValue='description' className='mb-16'>
                <TabsList>
                    <TabsTrigger value='description'>Description</TabsTrigger>
                    <TabsTrigger value='specifications'>Specifications</TabsTrigger>
                    <TabsTrigger value='reviews'>Reviews</TabsTrigger>
                </TabsList>
                <TabsContent value='description'>
                    <h3 className="text-2xl font-robotBold font-bold mb-4">Product Description</h3>
                    <p className="text-gray-medium leading-relaxed">{data.description}</p>
                </TabsContent>
                <TabsContent value='specifications'>
                    <h3 className="text-2xl font-robotBold font-bold mb-4">Technical Specifications</h3>
                    <div className="space-y-2">
                        <div className="flex items-center justify-between py-2 border-b border-b-border">
                            <span className="font-robotoBold font-bold">Heart Rate Monitor</span>
                            <span className="text-gray-medium">Included</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-b-border">
                            <span className="font-robotoBold font-bold">Heart Rate Monitor</span>
                            <span className="text-gray-medium">Included</span>
                        </div>
                        <div className="flex items-center justify-between py-2 border-b border-b-border">
                            <span className="font-robotoBold font-bold">Heart Rate Monitor</span>
                            <span className="text-gray-medium">Included</span>
                        </div>
                    </div>
                </TabsContent>
                <TabsContent value='reviews'>
                    <h3 className="text-2xl font-robotBold font-bold mb-4">Customer Reviews</h3>
                    <p className="text-gray-medium text-lg">
                      247 reviews verified customer reviews with an average rating of 5 stars.
                    </p>
                </TabsContent>
            </Tabs>
        </div>
    </section>
  )
}

export default ProductDetails