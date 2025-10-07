import Image from 'next/image';
import React from 'react';
import Product from '../../../../../public/assets/images/product.png';

const ProductImage:React.FC = ()=>{
  return (
    <div className="aspect-square rounded-lg overflow-hidden bg-gray-light">
        <Image src={Product} alt='product details' width={1000} height={1000} className='w-full h-full '/>
    </div>
  )
}

export default ProductImage