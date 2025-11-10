"use client"
import { Button } from '@/components/ui/Button';
import { useAddToWishlist } from '@/services/wishlistServices';
import { showError, showSuccess } from '@/utils/Toasts';
import { Heart, Share2, ShoppingCart, Star } from 'lucide-react';
import React from 'react';

interface ProductInfoProps{
    id:string
    category:string,
    name:string,
    price:string,
    description:string,
}

const ProductInfo:React.FC<ProductInfoProps> = ({id, category, name , price , description})=>{

    const addToWishlist = useAddToWishlist();

    const handlerAddToWishlist = (productID:string)=>{
        addToWishlist.mutate(productID,{
            onSuccess:()=>{
                showSuccess('Add product to wishlist');
            },
            onError:(error:any)=>{
                showError(error.message || 'Add to wishlist failed')
            }
        })
    }


  return (
    <div className="flex flex-col">
        <div className="mb-4">
            <p className="text-gray-medium mb-2 text-xl">{category}</p>
            <h1 className="text-4xl font-robotoBold font-bold mb-4">{name}</h1>
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
                <p className="text-4xl font-robotoBold font-bold text-primary mb-6">${price}</p>
                <p className="text-gray-medium mb-8">{description}</p>
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
            onClick={()=>handlerAddToWishlist(id)}
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