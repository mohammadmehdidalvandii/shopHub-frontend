import Image from 'next/image';
import React from 'react';
import Product from '../../../../../public/assets/images/product.png';
interface ImageProps{
  images:string
}

const ProductImage:React.FC<ImageProps> = ({images})=>{
  return (
    <div className="aspect-square rounded-lg overflow-hidden bg-gray-light">
        <Image src={images} alt='product details' width={1000} height={1000} className='w-full h-full '/>
    </div>
  )
}

export default ProductImage