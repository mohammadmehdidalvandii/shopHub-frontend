import Footer from '@/components/modules/Footer/Footer';
import Navigation from '@/components/modules/Navigation/Navigation';
import ProductDetails from '@/components/templates/products/ProductDetails/ProductDetails';
import React from 'react';

const page:React.FC = ()=>{
  return (
    <div className="min-h-screen bg-white">
        <Navigation/>
        <ProductDetails/>
        <Footer/>
    </div>
  )
}

export default page