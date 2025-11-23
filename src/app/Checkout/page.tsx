"use client"
import Footer from '@/components/modules/Footer/Footer';
import Navigation from '@/components/modules/Navigation/Navigation';  
import dynamic from 'next/dynamic';
import React from 'react';
const CheckoutInfo = dynamic(()=>import('@/components/templates/checkout/CheckoutInfo/CheckoutInfo'),{ssr:false})


const page:React.FC = ()=>{
  return (
    <div className="min-h-screen bg-white">
        <Navigation/>
        <CheckoutInfo/>
        <Footer/>
    </div>
  )
}

export default page