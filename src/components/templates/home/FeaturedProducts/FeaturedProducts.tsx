"use client"
import ProductCard from '@/components/modules/ProductCard/ProductCard'
import { Button } from '@/components/ui/Button'
import { useGetAllProducts } from '@/services/productServices'
import Link from 'next/link'
import React from 'react'

const FeaturedProducts:React.FC = ()=>{
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
    <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-robotoBlack font-black mb-4">Featured Products</h2>
            <p className="text-gary-medium text-lg">Handpicked items just for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
                        {data.map((product:any)=>(
                        <ProductCard
                            key={product._id}
                            id={product._id}
                            images={product.images}
                            productName={product.productName}
                            category={product.category.title}
                            price={product.price}
                        />
                    ))}
        </div>
        <div className="text-center">
          <Link href='/Products'>
          <Button size='lg' variant="outline">View All Products</Button>
          </Link>
        </div>
    </section>
  )
}

export default FeaturedProducts