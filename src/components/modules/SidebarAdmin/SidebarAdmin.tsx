import { LayoutDashboard, Package, ShoppingBag, Users } from 'lucide-react';
import Link from 'next/link';
import React from 'react';

interface SidebarAdminProps{
    text:boolean
}

const SidebarAdmin:React.FC<SidebarAdminProps> = ({text})=>{
    console.log("text -" ,text)
  return (
    <div className="min-h-screen bg-white border-r border-r-border p-3">
        <ul>
            <li className="mb-3">
                <Link href="/Admin" className='text-xl font-robotBold font-bold flex items-center gap-2 duration-300 hover:text-primary'>
                    <LayoutDashboard className='h-6 w-6'/>
                    {text && <span>Dashboard</span> }
                </Link>
            </li>
            <li className="mb-3">
                <Link href="/Admin/Products" className='text-xl font-robotBold font-bold flex items-center gap-2 duration-300 hover:text-primary'>
                    <Package className='h-6 w-6'/>
                    {text && <span>Products</span> }
                </Link>
            </li>
            <li className="mb-3">
                <Link href="/Admin/Orders" className='text-xl font-robotBold font-bold flex items-center gap-2 duration-300 hover:text-primary'>
                    <ShoppingBag className='h-6 w-6'/>
                    {text && <span>Orders</span> }
                </Link>
            </li>
            <li className="mb-3">
                <Link href="/Admin/Users" className='text-xl font-robotBold font-bold flex items-center gap-2 duration-300 hover:text-primary'>
                    <Users className='h-6 w-6'/>
                    {text && <span>Users</span> }
                </Link>
            </li>
        </ul>
    </div>
  )
}

export default SidebarAdmin