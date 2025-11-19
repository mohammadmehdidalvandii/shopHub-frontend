"use client"
import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
import { Textarea } from '@/components/ui/Textarea';
import { useCreateOrder } from '@/services/orderServices';
import { useCartStore } from '@/store/cartStore';
import { showError, showSuccess } from '@/utils/Toasts';
import { CreditCard, Lock, Truck } from 'lucide-react';
import React, { useState } from 'react';

const CheckoutInfo:React.FC = ()=>{
    const {cart , clearCart} = useCartStore();
    const [customerInfo, setCustomerInfo] =  useState({
        firstName:"",
        lastName:"",
        email:"",
        phone:"",
        address:"",
        city:"",
        state:"",
        postalCode:"",
        country:"",
        orderNote:"",
    });
    const [paymentMethod , setPaymentMethod] = useState('Credit');



    const subtotal = cart.reduce((total , item)=>total + Number(item.price) * (item.quantity || 1),0);
    const shipping = 0;
    const tax = subtotal * 0.1;
    const total = subtotal + tax + shipping ;

    const addOrder = useCreateOrder();

    const handlerPayOrder =()=>{
        if(!cart || cart.length === 0){
            return showError('Basket is empty')
        };

        const items = cart.map((item)=>({
            product:item?._id,
            quantity:Number(item.quantity),
            price:Number(item.price)
        }));

        const payload ={
            items,
            customerInfo,
            paymentMethod,
            totalAmount:total,
            status:'pending',
        };

        addOrder.mutate(payload,{
            onSuccess:()=>{
                showSuccess('Your order has been registered');
                clearCart();
                    setCustomerInfo({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        address: "",
                        city: "",
                        state: "",
                        postalCode: "",
                        country: "",
                        orderNote: "",
                    });
      setPaymentMethod("Credit");
            },
            onError:(error:any)=>{
                showError(error.message || 'Order Failed ')
            }
        })
    }




  return (
    <section>
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-4xl font-robotoBold font-bold mb-8">Checkout</h1>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                <div className="col-span-2 space-y-6">
                    <Card>
                        <CardHeader >
                           <CardTitle className='flex items-center gap-2'>
                             <Truck className='h-5 w-5'/>
                            Shipping Information
                           </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form action="#" className="space-y-4">
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor='firstName'>First Name</Label>
                                        <Input id='firstName' 
                                        value={customerInfo.firstName}
                                        onChange={(e)=>setCustomerInfo((prev)=>({...prev , firstName:e.target.value}))}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor='lastName'>Last Name</Label>
                                        <Input id='lastName' 
                                        value={customerInfo.lastName}
                                        onChange={(e)=>setCustomerInfo((prev)=>({...prev ,  lastName:e.target.value}))}
                                        />
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor='email'>Email</Label>
                                    <Input id='email' 
                                    value={customerInfo.email}
                                    onChange={(e)=>setCustomerInfo((prev)=>({...prev , email:e.target.value}))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor='phone'>Phone Number</Label>
                                    <Input id='phone' 
                                    value={customerInfo.phone}
                                    onChange={(e)=>setCustomerInfo((prev)=>({...prev, phone:e.target.value}))}
                                    />
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor=''>Street Address</Label>
                                    <Input id='address' 
                                    value={customerInfo.address}
                                    onChange={(e)=>setCustomerInfo((prev)=>({...prev,address:e.target.value}))}
                                    />
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor='city'>City</Label>
                                        <Input id='city' 
                                        value={customerInfo.city}
                                        onChange={(e)=>setCustomerInfo((prev)=>({...prev , city:e.target.value}))}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor='state'>State/Province</Label>
                                        <Input id='state' 
                                            value={customerInfo.state}
                                            onChange={(e)=>setCustomerInfo((prev)=>({...prev ,  state:e.target.value}))}
                                        />
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor='zip'>ZIP Code</Label>
                                        <Input id='zip' 
                                        value={customerInfo.postalCode}
                                        onChange={(e)=>setCustomerInfo((prev)=>({...prev , postalCode:e.target.value}))}
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor='country'>Country</Label>
                                        <Input id='country' 
                                            value={customerInfo.country}
                                            onChange={(e)=>setCustomerInfo((prev)=>({...prev , country:e.target.value}))}
                                        />
                                    </div>
                                </div>
                                    <div className="space-y-2">
                                        <Label htmlFor='notes'>Order Notes (Optional)</Label>
                                        <Textarea id='notes' 
                                        placeholder='Any special instructions for your order'
                                        value={customerInfo.orderNote}
                                        onChange={(e)=>setCustomerInfo((prev)=>({...prev , orderNote:e.target.value}))}
                                        />
                                    </div>
                            </form>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle className='flex items-center gap-2'>
                                <CreditCard className='h-5 w-5'/>
                                Payment Method
                            </CardTitle>
                        </CardHeader>
                        <CardContent>
                            <RadioGroup value={paymentMethod}  onValueChange={setPaymentMethod} className='space-y-4'>
                                <div className="flex items-center space-x-2 border border-border rounded-lg p-4">
                                    <RadioGroupItem value='credit' id='card'/>
                                    <Label htmlFor='card' className='flex-1 cursor-pointer'>Credit / Debit Card</Label>
                                    <CreditCard className='h-5 w-5 text-gary-medium'/>
                                </div>
                                <div className="flex items-center space-x-2 border border-border rounded-lg p-4">
                                    <RadioGroupItem value='paypal' id='paypal'/>
                                    <Label htmlFor='paypal' className='flex-1 cursor-pointer'>paypal</Label>
                                    <CreditCard className='h-5 w-5 text-gary-medium'/>
                                </div>
                                <div className="flex items-center space-x-2 border border-border rounded-lg p-4">
                                    <RadioGroupItem value='cash' id='code'/>
                                    <Label htmlFor='code' className='flex-1 cursor-pointer'>Cash on Delivery</Label>
                                    <CreditCard className='h-5 w-5 text-gary-medium'/>
                                </div>
                            </RadioGroup>
                        </CardContent>
                    </Card>
                </div>
                <div className="col-span-1">
                    <Card className='sticky top-24'>
                        <CardHeader>
                            <CardTitle>Order Summary</CardTitle>
                        </CardHeader>
                        <CardContent className='space-y-4'>
                            <div className="space-y-3">
                                {cart.map((product)=>(
                                <div className="flex justify-between text-lg" key={product._id}>
                                    <span className="text-gray-medium">({product.productName}) x {product.quantity}</span>
                                    <span className="font-semibold">${(Number(product.price) * Number(product.quantity)).toFixed(2)}</span>
                                </div>
                                ))}
                            </div>
                            <div className="border-t border-border pt-4 space-y-2">
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-medium">Subtotal</span>
                                    <span className="font-semibold">${subtotal.toFixed(2)}</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-medium">Shipping</span>
                                    <span className="font-semibold">free</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-medium">Tax</span>
                                    <span className="font-semibold">${tax.toFixed(2)}</span>
                                </div>
                                <div className="border-t border-border pt-2">
                                    <div className="flex justify-between text-2xl">
                                        <span className="font-black">Total</span>
                                        <span className="font-bold text-primary">${total.toFixed(2)}</span>
                                    </div>
                                </div>
                            </div>
                            <Button type='button' className='w-full' size='lg' variant="accent" 
                                onClick={handlerPayOrder}
                            >
                                <Lock className='mr-2 h-4 w-4'/>
                                Place Order
                            </Button>
                            <p className="text-lg text-center text-gray-medium">
                                Your payment information is secure and encrypted
                            </p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CheckoutInfo