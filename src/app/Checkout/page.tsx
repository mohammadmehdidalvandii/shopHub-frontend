"use client"
import Footer from '@/components/modules/Footer/Footer';
import Navigation from '@/components/modules/Navigation/Navigation';
import CheckoutInfo from '@/components/templates/checkout/CheckoutInfo/CheckoutInfo';
import React from 'react';

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