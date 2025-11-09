"use client"
import React, { useEffect, useState } from 'react';
import Navigation from '../modules/Navigation/Navigation';
import { QueryProvider } from '@/providers/queryProvider';
import { ToasterProvider } from '@/providers/toasterProvider';
import SidebarAdmin from '../modules/SidebarAdmin/SidebarAdmin';
import { LogOut, PanelLeftClose, PanelLeftOpen } from 'lucide-react';
import { Button } from '../ui/Button';
import { useLogoutMutation } from '@/services/auth';
import { useAuthStore } from '@/store/authStore';
import { useRouter } from 'next/navigation';


interface AdminLayoutProps{
    children:React.ReactNode;
}

export function AdminLayout({children}:AdminLayoutProps):React.JSX.Element {
    const logoutMutation = useLogoutMutation()
    const [sidebarOpen , setSidebarOpen] = useState<boolean>(true);
    const router = useRouter()
    const {token , user} = useAuthStore();
    
    useEffect(()=>{
        if(!token && user?.role !== 'ADMIN'){
            router.push('/Auth')
        }
    },[token, user , router])

    const handlerLogout:React.MouseEventHandler = ()=>{
        logoutMutation.mutate()
    }

  return (
    <div className="min-h-screen bg-white">
        <Navigation/>
            <div className="flex">
                <div className={` transition-all duration-300  ${sidebarOpen ? 'w-54 fixed' : 'w-12 overflow-hidden'}`}>
                    <SidebarAdmin text={sidebarOpen? true :false}/>
                </div>
                <div className={`flex-1 ${sidebarOpen ? 'ml-[220px]':'ml-0'}`}>
                    <div className="flex flex-1 justify-between border-b border-b-input px-4 py-1 ">
                        <Button variant='outline' size='icon'
                        onClick={()=>setSidebarOpen(!sidebarOpen)}
                        >   
                        {sidebarOpen ? (
                            <PanelLeftClose/>
                        ) :(
                            <PanelLeftOpen/>
                        )}
                        </Button>
                        <div className='flex items-center gap-2'>
                            <span className="text-gray-medium text-2xl">welcome back admin</span>
                        <Button
                         variant='outline'
                         size='sm'
                         onClick={handlerLogout}
                         >
                            <LogOut className='h-4 w-4'/>
                            Logout
                         </Button>
                        </div>
                    </div>
                    <main className="flex-1 p-6">
                        {children}
                    </main>
                </div>
            </div>
    </div>
  )
}

export default AdminLayout