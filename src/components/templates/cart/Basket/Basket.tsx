"use client"
import { Card, CardContent } from '@/components/ui/Cart';
import Image from 'next/image';
import React from 'react';
import products from '../../../../../public/assets/images/product.png'
import { Button } from '@/components/ui/Button';
import { Minus, Plus, Trash2 } from 'lucide-react';
import { showError, showSuccess } from '@/utils/Toasts';
import Link from 'next/link';
import EmptyCart from '../EmptyCart/EmptyCart';
import { useCartStore } from '@/store/cartStore';

const Basket:React.FC = ()=>{
    const {cart , removeFromCart , clearCart , decreaseQuantity , increaseQuantity} = useCartStore();

    const subtotal = cart?.reduce((total , item)=>total + Number(item?.price) * (item?.quantity || 1),0);
    const shipping = 0;
    const tax = subtotal * 0.1;
    const total = subtotal + tax + shipping ;


    const handlerRemovedCard = (cartID:string)=>{
        removeFromCart(cartID);
        showSuccess('Delete Product your basket')
    }
    const handlerRemoveAllCart = ()=>{
        if(cart?.length){
            clearCart();
            showSuccess('clear All product for basket')
        }else(
            showError('Basket is empty')
        )
    }

    const handlerDecrease = (cardID:string)=>{
        decreaseQuantity(cardID)
    }
    const handlerIncrease = (cardID:string)=>{
        increaseQuantity(cardID)
    }

  return (
    <section>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-robotoBold font-bold mb-8">Shopping Cart</h1>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
                <div className="col-span-2 space-y-4">
                    {cart?.length === 0 && (
                    <EmptyCart/> 
                    )}
                    {cart?.map((basket)=>(
                    <Card  key={basket?._id}>
                        <CardContent className='p-6'>
                            <div className="flex gap-6">
                                <div className="w-24 h-24 rounded-lg overflow-hidden bg-gray-light shrink-0">
                                        <Image src={basket?.images} loading='lazy' alt='basket product' width={200} height={200} className='w-full h-full object-cover'/>               
                                </div>
                                <div className="flex-1">
                                    <div className="flex justify-between mb-2">
                                        <div>
                                            <h3 className="font-robotoBold font-semibold text-xl">{basket?.productName}</h3>
                                            <p className="text-lg text-gray-medium">{basket?.category?.title}</p>
                                        </div>
                                        <Button
                                        variant="ghost"
                                        size='icon'
                                        onClick={()=>handlerRemovedCard(basket?._id)}
                                        ><Trash2 className='h-4 w-4'/>
                                        </Button>
                                    </div>
                                    <div className="flex items-center justify-between mt-4">
                                        <div className="flex items-center gap-2">
                                            <Button 
                                            variant='outline'
                                            size='icon'
                                            onClick={()=>handlerDecrease(basket?._id)}
                                            >
                                                <Minus className='h-4 w-4'/>
                                            </Button>
                                            <span className="w-12 text-center font-semibold">{basket?.quantity}</span>
                                             <Button 
                                            variant='outline'
                                            size='icon'
                                            onClick={()=>handlerIncrease(basket?._id)}
                                            >
                                                <Plus className='h-4 w-4'/>
                                            </Button>
                                        </div>
                                        <p className="text-2xl font-robotoBold font-bold text-primary">${basket?.price}</p>
                                    </div>
                                </div>
                            </div>
                        </CardContent>
                    </Card>
                    ))}
                    {/* button clear all basket */}
                    <Button
                    variant='outline'
                    size='lg'
                    onClick={handlerRemoveAllCart}
                    >
                        Clear Cart
                    </Button>
                </div>
                <div className="col-span-1">
                    <Card className='sticky top-24'>
                        <CardContent className='p-6'>
                            <h2 className="text-3xl font-robotoBold font-bold mb-6">Order Summery</h2>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-xl">
                                    <span className="text-gray-medium">Subtotal</span>
                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-xl">
                                    <span className="text-gray-medium">Shipping</span>
                                    <span className="font-semibold">free</span>
                                </div>
                            </div>
                            <div className="space-y-4 mb-6">
                                <div className="flex justify-between text-xl">
                                    <span className="text-gray-medium">Tax</span>
                                    <span className="font-semibold">${tax.toFixed(2)}</span>
                                </div>
                            </div>
                            <div className="border-t border-input pt-4">
                                <div className="space-y-4 mb-6">
                                    <div className="flex justify-between text-2xl">
                                        <span className="text-text font-robotoBlack font-black">Total</span>
                                        <span className="font-bold text-primary">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <Link href='/Checkout'>
                                <Button 
                                variant='accent'
                                size="lg"
                                className='w-full'
                                disabled={cart?.length === 0}
                                >
                                    Proceed to CheckOut               
                                </Button>
                            </Link>
                            <Link href='/Products'>
                                <Button 
                                variant='outline'
                                size="lg"
                                className='w-full mt-4'
                                >
                                    Continue Shopping
                                </Button>
                            </Link>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Basket