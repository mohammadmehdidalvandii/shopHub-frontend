"use client"
import React, { useEffect } from 'react';
import Navigation from '../modules/Navigation/Navigation';
import { QueryProvider } from '@/providers/queryProvider';
import { ToasterProvider } from '@/providers/toasterProvider';
import { useAuthStore } from '@/store/authStore';
import {useRouter } from 'next/navigation';

interface ProfileLayoutProps {
    children:React.ReactNode;
}

const ProfileLayout:React.FC<ProfileLayoutProps> = ({children})=>{
    const router = useRouter()
    const {token} = useAuthStore.getState();
    useEffect(()=>{
        if(!token){
           router.replace('/Auth')
        }
    },[router , token]);

  return (
    <div className="min-h-screen bg-white">
        <Navigation/>
            <ToasterProvider/>
            {children}
    </div>
  )
}

export default ProfileLayout