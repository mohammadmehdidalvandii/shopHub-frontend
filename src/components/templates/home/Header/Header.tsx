import Image from 'next/image'
import React from 'react'
import Banner from '../../../../../public/assets/images/banner.jpg'
import Link from 'next/link'
import { Button } from '@/components/ui/Button'

const Header:React.FC = ()=>{
  return (
    <section className="relative h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
            <Image src={Banner} alt='banner' width={1000} height={1000} className='w-full h-full object-cover'/>
            <div className="absolute inset-0 bg-gradient-to-r from-white/90 to-white/50"></div>
        </div>
        <div className="relative z-10 container mx-auto px-4 text-left max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-robotBold mb-6 leading-tight">
                Discover Your
                <span className="block text-primary">Perfect Style</span>
            </h1>
            <p className="text-xl text-gray-medium mb-8">Shop the latest trends in electronics, fashion, and lifestyle products</p>
            <div className="flex flex-col sm:flex-row gap-4 ">
                <Link href='/products'>
                    <Button size='lg' variant="accent">Shop Now</Button>
                </Link>
                <Link href='/Products'>
                <Button size='lg' variant="outline">View Collection</Button>
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Header