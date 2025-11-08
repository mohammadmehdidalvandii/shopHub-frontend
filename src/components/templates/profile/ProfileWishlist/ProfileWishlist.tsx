"use client"
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Heart, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import { Button } from '@/components/ui/Button';
import { useGetAllWishlistUserId } from '@/services/wishlistServices';

const ProfileWishlist:React.FC = ()=>{

    const {data , isError , isLoading} = useGetAllWishlistUserId();
        if(isLoading){
        return <p>Loading...</p>
    };

    if(isError){
        return <p>Failed to load Wishlist 😢</p>
    };

    if(data.length === 0){
        return (
             <div className="text-center py-12">
                <Heart className='h-16 w-16 mx-auto text-gray-medium mb-4'/>
                <p className="text-xl text-gray-medium">Your wishlist is empty</p>
                <p className="text-lg text-gray-medium mt-2">Add products you love to keep track of them</p>
            </div> 
        )
    }


  return (
    <Card className='max-h-[60vh] overflow-y-auto'>
        <CardHeader>
            <CardTitle>My Wishlist</CardTitle>
        </CardHeader>
        <CardContent>   
            <div className="grid gap-4 md:grid-cols-2">
                <Card className='p-2'>
                    <CardContent>
                        {data.items.map((item:any)=>(
                            <div className="flex flex-col md:flex-row gap-4" key={item.product._id}>
                            <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-light">
                                <Image src={item.product.images[0]} alt='products' width={200} height={200} className='w-full h-full '/>
                            </div>
                            <div className="flex-1 min-w-0">
                                <h3 className="font-robotoBold font-semibold text-xl mb-1 truncate">{item.product.productName}</h3>
                                <p className="text-lg text-gray-medium">{item.product.category.title}</p>
                                <p className="text-2xl font-robotoBold font-bold text-primary mb-3">${item.product.price}</p>
                                <div className="flex gap-2">
                                    <Button variant='accent' size='sm' className='flex-1'>Add to Cart</Button>
                                    <Button variant='outline' size='sm'><Trash2 className='h-4 w-4'/></Button>
                                </div>
                            </div>
                        </div>
                        ))}
                    </CardContent>
                </Card>

            </div>
        </CardContent>
    </Card>
  )
}

export default ProfileWishlist