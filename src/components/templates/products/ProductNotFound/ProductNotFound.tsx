import { Button } from '@/components/ui/Button';
import Link from 'next/link';
import React from 'react';

const ProductNotFound:React.FC = ()=>{
  return (
    <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl font-robotoBold font-bold mb-4">Product Not Found</h1>
        <Link href='/Products'>
        <Button
        variant='default'
        size="lg"
        >
            Back to Products
        </Button>
        </Link>
    </div>
  )
}

export default ProductNotFound