"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Plus } from 'lucide-react';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { useGetCategory } from '@/services/categoryServices';

const AddProductModel:React.FC = ()=>{
    const [isAddProduct , setIsAddProducts] = useState<boolean>(false);
    
    
    const {data , isError , isLoading} = useGetCategory();
      if (isLoading) {
    return <p>Loading...</p>;
  }
  if (isError) {
    return <p>Failed to load orders</p>;
  }

  return (
    <Dialog open={isAddProduct} onOpenChange={setIsAddProducts}>
        <DialogTrigger asChild>
            <Button variant='default' size='sm'>
                <Plus className='mr-2 h-4 w-4'/>
                Add Product
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-2xl max-h-[90vh] overflow-y-auto'>
            <DialogHeader>
                <DialogTitle>Add New Product</DialogTitle>
                <DialogDescription>
                    Fill in the details to add a new product to your store
                </DialogDescription>
            </DialogHeader>
             <form action="#" className='space-y-4'>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor='productName'>Product Name</Label>
                        <Input id='productName' placeholder='e.g.,premium Wireless headphones' required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='productSKU'>SKU</Label>
                        <Input id='productSKU' placeholder='e.g.,WH-1000XM5' required/>
                    </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor='productPrice'>Price</Label>
                        <Input id='productPrice' placeholder='299.99' step='0.01' type='number' required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='productComparePrice'>Compare at Price</Label>
                        <Input id='productComparePrice' type='number' step='0.01' placeholder='399.99' required/>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='productCost'>Cost per Item</Label>
                        <Input id='productCost' type='number' step='0.01' placeholder='150.00' required/>
                    </div>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor='productCategory' className='block mb-4'>Category</Label>
                        <Select>
                            <SelectTrigger>
                                <SelectValue placeholder='Select Category'/>
                            </SelectTrigger>
                            <SelectContent>
                                {data.map((item:any)=>(
                                    <SelectItem key={item._id} value={item._id}>{item.title}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='productBrand'>Brand</Label>
                        <Input id='productBrand' placeholder='e.g.,Sony' required/>
                    </div>
                </div>
                    <div className="space-y-2">
                        <Label htmlFor='productDescription'>Description</Label>
                        <Input id='productDescription' placeholder='Detailed product description...' className='min-h-[180px]' required/>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor='productStock'>Stock Quantity</Label>
                            <Input id='productStock' type='number' placeholder='50' required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor='productWeight'>weight (kg)</Label>
                            <Input id='productWeight' type='number' placeholder='0.25' step='0.01'  required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor='productBarcode'>Barcode</Label>
                            <Input id='productBarcode' placeholder='123456789012' required/>
                        </div>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor='productLength'>Length (cm)</Label>
                            <Input id='productLength' type='number' step='0.01' placeholder='20' required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor='productWidth'>Width (cm)</Label>
                            <Input id='productWidth' type='number' step='0.1' placeholder='18' required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor='productHight'>Hight (cm)</Label>
                            <Input id='productHight' type='number' step='0.01'  placeholder='8' required/>
                        </div>
                    </div>
                        <div className="space-y-2">
                            <Label htmlFor='productTags'>Tags (comma separated)</Label>
                            <Input id='productTags' placeholder='wireless , premium , noise-cancelling' required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor='productImage'>Product Image</Label>
                            <Input id='productImage' type='file' accept='image/*' multiple required/>
                            <p className="text-lg text-gray-medium">You can upload multiple images</p>
                        </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                            <Label htmlFor='productStatus' className='block mb-4'>Status</Label>
                            <Select defaultValue='active' >
                                <SelectTrigger>
                                    <SelectValue placeholder='Select status'/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value='active'>Active</SelectItem>
                                    <SelectItem value='draft'>Draft</SelectItem>
                                    <SelectItem value='archived'>Archived</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor='productVender'>Vender</Label>
                            <Input id='productVender' placeholder='e.g., Sony Corporation' required/>
                        </div>
                    </div>
                    <div className="flex gap-2 justify-end pt-4 border-t border-t-border">
                        <Button type='button' variant='outline' size='sm'
                        onClick={()=>setIsAddProducts(false)}
                        >
                            Cancel
                        </Button>
                        <Button type='submit' variant='default' size='sm'>Add Product</Button>
                    </div>
             </form>
        </DialogContent>
    </Dialog>
  )
}

export default AddProductModel