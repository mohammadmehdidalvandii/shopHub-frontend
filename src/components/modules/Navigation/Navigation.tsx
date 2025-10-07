"use client"
import { Button } from '@/components/ui/Button'
import Link from 'next/link'
import React, { useState } from 'react'
import {Search , User ,  ShoppingCart, Menu} from 'lucide-react'
import { Sheet, SheetContent, SheetHeader, SheetTitle, SheetTrigger } from '@/components/ui/Sheet'

const Navigation = ()=>{
    const [isOpen , setIsOpen] = useState(false)

    const navLinks = [
        {href:"/",label:"Home"},
        {href:"/Products",label:"Products"},
        {href:"/Category/Electronics",label:"Electronics"},
        {href:"/Category/Audio",label:"Audio"},
        {href:"/About",label:"About"},
        {href:"/Contact",label:"Contact"},
    ]

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-border">
        <div className="container mx-auto px-4">
           <div className="flex items-center justify-between h-16">
            <Link href='/' className='text-3xl font-robotoBlack font-black text-primary'>ShopHub</Link>
            <div className="hidden md:flex items-center gap-8">
                {navLinks.map((link)=>(
                    <Link key={link.href} href={link.href} className= 'font-robotBold text-xl text-text  hover:text-primary transition-colors'>{link.label}</Link>
                ))}
            </div>
            <div className="flex items-center gap-4">
                <Button variant="ghost" size="icon">
                    <Search className='h-5 w-5'/>
                </Button>
                <Link href='/Auth'>
                 <Button variant="ghost" size="icon">
                    <User className='h-5 w-5'/>
                 </Button>
                </Link>
                <Link href="/Cart">
                    <Button variant="ghost" size="icon"  className='relative'>
                        <ShoppingCart className='h-5 w-5'/>
                        <span className="absolute -top-1 -right-1 bg-accent text-white text-xs rounded-full h-5 w-5 flex items-center justify-center font-semibold">0</span>
                    </Button>
                </Link>
                {/* Mobile menu */}
                <Sheet open={isOpen} onOpenChange={setIsOpen}> 
                    <SheetTrigger asChild>
                        <Button variant="ghost" size='icon' className='md:hidden cursor-pointer'>
                            <Menu className='h-5 w-5'/>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="right" className='w-[280px] sm:w-[350px]' aria-describedby={undefined}>
                        <SheetHeader>
                            <SheetTitle className='text-left text-primary'>Menu</SheetTitle>
                        </SheetHeader>
                        <div className="flex flex-col gap-4 mt-12">
                             {navLinks.map((link)=>(
                                 <Link key={link.href} href={link.href} className= 'font-robotBold text-xl text-text  hover:text-primary transition-colors'
                                onClick={()=>setIsOpen(false)}
                                 >{link.label}</Link>
                             ))}
                        </div>
                        <div className="flex flex-col gap-4 pt-4 mt-4 border-t border-border">
                            <Link href='/auth'
                                onClick={()=>setIsOpen(false)}
                                className='flex items-center gap-3 text-text hover:text-primary transition-colors py-2'
                            >
                                <User className='h-5 w-5'/>
                                <span className="text-base">Account</span>
                            </Link>
                             <button 
                             onClick={()=>setIsOpen(false)}
                             className='flex items-center gap-3 text-text hover:text-primary transition-colors text-left'
                             >
                                <Search className='h-5 w-5'/>
                                <span className="text-base">Search</span>
                             </button>
                        </div>
                    </SheetContent>
                </Sheet>
            </div>
           </div>
        </div>
    </nav>
  )
}

export default Navigation