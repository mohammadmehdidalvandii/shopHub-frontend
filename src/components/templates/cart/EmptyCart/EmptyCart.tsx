import Navigation from '@/components/modules/Navigation/Navigation';
import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Cart';
import Link from 'next/link';
import React from 'react';

const EmptyCart:React.FC = ()=>{
  return (
    <div className="min-h-screen bg-white">
        <div className="container mx-auto px-4 py-16">
            <Card className='max-w-2xl mx-auto text-center py-16'>
                <CardContent>
                    <h2 className="text-4xl font-robotoBlack font-black mb-4">Your cart is empty</h2>
                    <p className="text-gray-medium text-2xl">Looks like haven't add anything to your cart yet.</p>
                    <Link href='/Products'>
                    <Button size='lg' variant='accent' className='mt-4'>
                        Continue Shopping
                    </Button>
                    </Link>
                </CardContent>
            </Card>
        </div>
    </div>
  )
}

export default EmptyCart