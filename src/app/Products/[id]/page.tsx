import Footer from '@/components/modules/Footer/Footer';
import Navigation from '@/components/modules/Navigation/Navigation';
import ProductDetails from '@/components/templates/products/ProductDetails/ProductDetails';
import React from 'react';

interface ParamsProps {
  params:{
    id:string
  }
}

const page:React.FC<ParamsProps> = ({params})=>{
  const {id }= params;

  return (
    <div className="min-h-screen bg-white">
        <Navigation/>
        <ProductDetails id={id}/>
        <Footer/>
    </div>
  )
}

export default page