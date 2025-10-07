import { Button } from '@/components/ui/Button';
import { Heart, Share2, ShoppingCart, Star } from 'lucide-react';
import React from 'react';

const ProductInfo:React.FC = ()=>{
  return (
    <div className="flex flex-col">
        <div className="mb-4">
            <p className="text-gray-medium mb-2 text-xl">Product category</p>
            <h1 className="text-4xl font-robotoBold font-bold mb-4">Product Name</h1>
            <div className="flex items-center gap-2 mb-6">
                <div className="flex">
                    <Star className='h-5 w-5 fill-accent text-accent'/>
                    <Star className='h-5 w-5 fill-accent text-accent'/>
                    <Star className='h-5 w-5 fill-accent text-accent'/>
                    <Star className='h-5 w-5 fill-accent text-accent'/>
                    <Star className='h-5 w-5'/>
                </div>
                <span className="text-gray-medium">(247 reviews)</span>
            </div>
                <p className="text-4xl font-robotoBold font-bold text-primary mb-6">$899.99</p>
                <p className="text-gray-medium mb-8">Stay connected with the latest smart watch technology. Track your fitness, monitor your health, and stay in touch with notifications right on your wrist.</p>
        </div>
        <div className="flex gap-6 mb-8">
            <Button
            size='lg'
            variant='accent'
            className='flex-1'
            >
                <ShoppingCart className='mr-2 h-5 w-5'/>
                Add to Cart
            </Button>
            <Button
            size='icon'
            variant='outline'
            >
                <Heart className='h-5 w-5'/>
            </Button>
            <Button
            size='icon'
            variant='outline'
            >
                <Share2 className='h-5 w-5'/>
            </Button>
        </div>

        <div className="border-t border-border pt-6">
            <h3 className="font-semibold font-robotBold text-2xl mb-4">Key Features</h3>
            <ul className="space-y-2">
                <li className="flex items-center gap-2 text-gray-medium text-xl">
                    <div className='h-2.5 w-2.5 rounded-full bg-primary'/>
                    Heart Rate Monitor
                </li>
                <li className="flex items-center gap-2 text-gray-medium text-xl">
                    <div className='h-2.5 w-2.5 rounded-full bg-primary'/>
                    Heart Rate Monitor
                </li>
                <li className="flex items-center gap-2 text-gray-medium text-xl">
                    <div className='h-2.5 w-2.5 rounded-full bg-primary'/>
                    Heart Rate Monitor
                </li>
                <li className="flex items-center gap-2 text-gray-medium text-xl">
                    <div className='h-2.5 w-2.5 rounded-full bg-primary'/>
                    Heart Rate Monitor
                </li>
                <li className="flex items-center gap-2 text-gray-medium text-xl">
                    <div className='h-2.5 w-2.5 rounded-full bg-primary'/>
                    Heart Rate Monitor
                </li>
            </ul>
        </div>
    </div>
  )
}

export default ProductInfo