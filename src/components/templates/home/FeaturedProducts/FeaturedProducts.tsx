import ProductCard from '@/components/modules/ProductCard/ProductCard'
import React from 'react'

const FeaturedProducts:React.FC = ()=>{
  return (
    <section className="py-16 container mx-auto px-4">
        <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-robotoBlack font-black mb-4">Featured Products</h2>
            <p className="text-gary-medium text-lg">Handpicked items just for you</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
            <ProductCard/>
        </div>
    </section>
  )
}

export default FeaturedProducts