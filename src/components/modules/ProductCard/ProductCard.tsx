import Link from 'next/link'
import React from 'react';
import { Card ,CardContent ,CardFooter  } from '@/components/ui/Cart';
import Image from 'next/image';
import product from '../../../../public/assets/images/product.png'
import { Button } from '@/components/ui/Button';
import { Heart, ShoppingCart } from 'lucide-react';

const ProductCard:React.FC = ()=>{
  return (
   <Link href='/products/id'>
    <Card className='group overflow-hidden hover:shadow-lg transition-all duration-300'>
        <CardContent>
            <div className="aspect-square overflow-hidden bg-gray-light relative">
                <Image src={product} alt='product name' width={1000} height={1000} className='w-full h-ful object-cover group-hover:scale-105 transition-transform duration-300'/>
                <Button size="icon" variant="outline" className='absolute top-2 right-2 bg-gray-light backdrop-blur-sm' aria-label='add-to-wishlist'
                >
                <Heart className='h-4 w-4'/>
                </Button>
            </div>
            <div className="p-4">
                <p className="text-lg text-gray-dark mb-1">Electronics</p>
                <h3 className="text-xl font-robotoBold font-bold mb-2 line-clamp-1">Flagship Smartphone</h3>
                <p className="text-3xl font-robotoBlack font-black  text-primary">$899.99</p>
            </div>
        </CardContent>
        <CardFooter className='p-4 pt-0'>
            <Button className='w-full h-10' variant="accent">
            <ShoppingCart className='mr-2 h-4 w-4'/>
            Add to Cart
            </Button>
        </CardFooter>
    </Card>
   </Link>
  )
}

export default ProductCard