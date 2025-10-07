import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/RadioGroup';
import { Textarea } from '@/components/ui/Textarea';
import { CreditCard, Lock, Truck } from 'lucide-react';
import React from 'react';

const CheckoutInfo:React.FC = ()=>{
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
                                        <Label htmlFor=''>First Name</Label>
                                        <Input id='First Name' required/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor='lastName'>Last Name</Label>
                                        <Input id='lastName' required/>
                                    </div>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor='email'>Email</Label>
                                    <Input id='email' required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor='phone'>Phone Number</Label>
                                    <Input id='phone' required/>
                                </div>
                                <div className="space-y-2">
                                    <Label htmlFor=''>Street Address</Label>
                                    <Input id='address' required/>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor='city'>City</Label>
                                        <Input id='city' required/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor='state'>State/Province</Label>
                                        <Input id='state' required/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <Label htmlFor='zip'>ZIP Code</Label>
                                        <Input id='zip' required/>
                                    </div>
                                    <div className="space-y-2">
                                        <Label htmlFor='country'>Country</Label>
                                        <Input id='country' required/>
                                    </div>
                                </div>
                                    <div className="space-y-2">
                                        <Label htmlFor='notes'>Order Notes (Optional)</Label>
                                        <Textarea id='notes' 
                                        placeholder='Any special instructions for your order'
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
                            <RadioGroup defaultValue='card' className='space-y-4'>
                                <div className="flex items-center space-x-2 border border-border rounded-lg p-4">
                                    <RadioGroupItem value='card' id='card'/>
                                    <Label htmlFor='card' className='flex-1 cursor-pointer'>Credit / Debit Card</Label>
                                    <CreditCard className='h-5 w-5 text-gary-medium'/>
                                </div>
                                <div className="flex items-center space-x-2 border border-border rounded-lg p-4">
                                    <RadioGroupItem value='paypal' id='paypal'/>
                                    <Label htmlFor='paypal' className='flex-1 cursor-pointer'>paypal</Label>
                                    <CreditCard className='h-5 w-5 text-gary-medium'/>
                                </div>
                                <div className="flex items-center space-x-2 border border-border rounded-lg p-4">
                                    <RadioGroupItem value='code' id='code'/>
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
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-medium">productName x 1</span>
                                    <span className="font-semibold">$989.99</span>
                                </div>
                            </div>
                            <div className="border-t border-border pt-4 space-y-2">
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-medium">Subtotal</span>
                                    <span className="font-semibold">$899.99</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-medium">Shipping</span>
                                    <span className="font-semibold">free</span>
                                </div>
                                <div className="flex justify-between text-lg">
                                    <span className="text-gray-medium">Tax</span>
                                    <span className="font-semibold">$90.00</span>
                                </div>
                                <div className="border-t border-border pt-2">
                                    <div className="flex justify-between text-2xl">
                                        <span className="font-black">Total</span>
                                        <span className="font-bold text-primary">$90.00</span>
                                    </div>
                                </div>
                            </div>
                            <Button className='w-full' size='lg' variant="accent">
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