import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React from 'react'
import {Search , Menu, User ,  ShoppingCart} from 'lucide-react'

const Navigation = ()=>{
  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-border">
        <div className="container mx-auto px-4">
           <div className="flex items-center justify-between h-16">
            <Link href='/' className='text-3xl font-robotoBlack font-black text-primary'>ShopHub</Link>
            <div className="hidden md:flex items-center gap-8">
                <Link href='/' className= 'font-robotBold text-xl text-text  hover:text-primary transition-colors'>Home</Link>
                <Link href='/Products' className= 'font-robotBold text-xl text-text  hover:text-primary transition-colors'>Products</Link>
                <Link href='/Category' className= 'font-robotBold text-xl text-text  hover:text-primary transition-colors'>Electronics</Link>
                <Link href='/Category' className= 'font-robotBold text-xl text-text  hover:text-primary transition-colors'>Audio</Link>
                <Link href='/About' className= 'font-robotBold text-xl text-text  hover:text-primary transition-colors'>About</Link>
                <Link href='/Contact' className= 'font-robotBold text-xl text-text  hover:text-primary transition-colors'>Contact</Link>
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Search className='h-5 w-5'/>
                </Button>
                <Link href='/auth'>
                 <Button variant="ghost" size="icon">
                    <User className='h-5 w-5'/>
                 </Button>
                </Link>
                <Link href="/cart">
                    <Button variant="ghost" size="icon"  className='relative'>
                        <ShoppingCart className='h-5 w-5'/>
                        <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">0</span>
                    </Button>
                </Link>
                <Button variant="ghost" size='icon' className='md:hidden'>
                    <Menu className='h-5 w-5'/>
                </Button>
            </div>
           </div>
        </div>
    </nav>
  )
}

export default Navigation