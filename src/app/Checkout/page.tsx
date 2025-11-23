"use client"
import Footer from '@/components/modules/Footer/Footer';
import Navigation from '@/components/modules/Navigation/Navigation';  
import { useAuthStore } from '@/store/authStore';
import { showError } from '@/utils/Toasts';
import dynamic from 'next/dynamic';
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react';
const CheckoutInfo = dynamic(()=>import('@/components/templates/checkout/CheckoutInfo/CheckoutInfo'),{ssr:false})


const page:React.FC = ()=>{
  const {user} = useAuthStore();
  const router =  useRouter()
  useEffect(()=>{
    if(!user){
      showError('Please sign in to continue.');
      router.push('/Auth')
    }
  },[user])



  return (
    <div className="min-h-screen bg-white">
        <Navigation/>
        <CheckoutInfo/>
        <Footer/>
    </div>
  )
}

export default page