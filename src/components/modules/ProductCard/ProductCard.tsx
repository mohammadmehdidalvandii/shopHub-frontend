"use client"
import Link from 'next/link'
import React from 'react';
import { Card ,CardContent ,CardFooter  } from '@/components/ui/Cart';
import Image from 'next/image';
import { Button } from '@/components/ui/Button';
import { Heart, ShoppingCart } from 'lucide-react';
import { useAddToWishlist } from '@/services/wishlistServices';
import { showError, showSuccess } from '@/utils/Toasts';

interface productProps{
    id:string,
    images:string[],
    productName:string,
    category:string,
    price:string,
};


const ProductCard:React.FC<productProps> = ({id , images , productName , category , price})=>{

  const addToWishlist =  useAddToWishlist();

    const handlerAddToWishlist = (productID:string , e:React.MouseEvent)=>{
      e.preventDefault();
      e.stopPropagation();
        addToWishlist.mutate(productID ,{
          onSuccess:()=>{
            showSuccess('Add product to wishlist');
          },
          onError:(error:any)=>{
            showError(error.message || 'Add to wishlist failed')
          }
        })
    }

  return (
  <Link href={`/Products/${id}`} className='text-xl font-robotoBold font-bold mb-2 line-clamp-1'>
      <Card className='group overflow-hidden hover:shadow-lg transition-all duration-300' >
        <CardContent>
<div className="aspect-square bg-gray-light relative">
  <Image 
    src={images[0]} 
    alt="product name" 
    width={1000} 
    height={1000} 
    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300 z-0 pointer-events-none"
  />
  <Button
    size="icon"
    variant="outline"
    className="absolute top-2 right-2 bg-gray-light backdrop-blur-sm z-50"
    onClick={(e) => handlerAddToWishlist(id ,e)}
  >
    <Heart className="h-4 w-4"/>
  </Button>
</div>

            <div className="p-4">
                <p className="text-lg text-gray-dark mb-1">{category}</p>
                <h3 className="text-xl font-robotoBold font-bold mb-2 line-clamp-1">{productName}</h3>
                <p className="text-3xl font-robotoBlack font-black  text-primary">${price}</p>
            </div>
        </CardContent>
        <CardFooter className='p-4 pt-0'>
            <Button className='w-full h-10' variant="accent"
            >
            <ShoppingCart className='mr-2 h-4 w-4' />
            Add to Cart
            </Button>
        </CardFooter>
    </Card>
              </Link>
  )
}

export default ProductCard