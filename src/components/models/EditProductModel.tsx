"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Edit } from 'lucide-react';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';

const EditProductModel:React.FC = ()=>{
    const [isEditProduct , setIsEditProduct] = useState<boolean>(false);
  return (
    <Dialog open={isEditProduct} onOpenChange={setIsEditProduct}>
        <DialogTrigger asChild>
            <Button variant='outline' size='icon'>
                <Edit className='h-4 w-5'/>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Edit Product</DialogTitle>
                <DialogDescription>Update product details</DialogDescription>
            </DialogHeader>
            <form action="#" className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor='editProductName'>Product Name</Label>
                        <Input id='editProductName' defaultValue='' required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='editProductPrice'>Price</Label>
                        <Input id='editProductPrice' type='number' step='0.01' defaultValue='' required/>
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor='editProductCategory' className='block mb-4'>Category</Label>
                        <Select defaultValue=''>
                            <SelectTrigger>
                                <SelectValue placeholder='Select Category'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='electronics'>Electronics</SelectItem>
                                <SelectItem value='audio'>Audio</SelectItem>
                                <SelectItem value='wearables'>Wearable</SelectItem>
                                <SelectItem value='accessories'>Accessories</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='editProductStock'>Stock Quantity</Label>
                        <Input id='editProductStock' type='number' defaultValue='' required/>
                    </div>
                </div>
                    <div className="space-y-2">
                        <Label htmlFor='editProductImage'>Product Image</Label>
                        <Input id='editProductImage' type='file' accept='image/*'/>
                    </div>    
                    <div className="flex gap-2 justify-end">
                        <Button type='button' variant='outline' size='sm'
                        onClick={()=>setIsEditProduct(false)}
                        >
                        Cancel
                        </Button>    
                        <Button type='submit' variant='default' size='sm'>UpdateProduct</Button>    
                    </div>            
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default EditProductModel