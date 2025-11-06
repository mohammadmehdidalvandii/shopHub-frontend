"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Edit } from 'lucide-react';
import { Label } from '../ui/Label';
import { Input } from '../ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '../ui/Select';
import { useGetCategory } from '@/services/categoryServices';
import { useUpdateProduct } from '@/services/productServices';
import { showError, showInfo, showSuccess } from '@/utils/Toasts';

type UpdateProductProps = {
    id:string,
    productName:string,
    price:string,
    category:string,
    stockQuantity:string,
    images:(string | File)[]
}

const EditProductModel:React.FC<UpdateProductProps> = ({id , productName , price , category , stockQuantity , images})=>{
    const [isEditProduct , setIsEditProduct] = useState<boolean>(false);
    const [formValues , setFormValues] = useState({
        productName,
        price,
        category,
        stockQuantity,
        images
    });

    const {data } = useGetCategory();
    const updatedProduct = useUpdateProduct()

const handlerChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
  const { name, value, files } = e.target as HTMLInputElement;

 
  if (files) {
    setFormValues(prev => ({
      ...prev,
      images: Array.from(files),
    }));
  } else {
    setFormValues(prev => ({
      ...prev,
      [name]: value,
    }));
  }
};

    const handlerUpdateProducts = (e:React.FormEvent)=>{
        e.preventDefault();

        const updatedFields = new FormData();
        if(formValues.productName !== productName){
            updatedFields.append('productName',formValues.productName)
        }
        if(formValues.price !== price){
            updatedFields.append('price',formValues.price)
        }
        if(formValues.category !== category ){
            updatedFields.append('category', formValues.category)
        }
        if(formValues.stockQuantity !==  stockQuantity){
            updatedFields.append('stockQuantity', formValues.stockQuantity)
        }

        const imageInput = (e.target as HTMLFormElement).editProductImage as HTMLInputElement;
        if(imageInput?.files?.length){
            updatedFields.append('image',imageInput.files[0])
        };

          if ([...updatedFields.keys()].length === 0) {
                showInfo('The value has not changed')
                return;
          }

          
          updatedProduct.mutate({id , formData:updatedFields},{  
            onSuccess:()=>{
                showSuccess('Updated product successfully');
                window.location.reload();
            },
            onError:(error:any)=>{
                showError( error.message ||'Update product failed')
            }
          })    

    }

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
            <form action="#" onSubmit={handlerUpdateProducts} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor='editProductName'>Product Name</Label>
                        <Input id='editProductName' name='productName' value={formValues.productName} required 
                        onChange={handlerChange}
                        />
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='editProductPrice'>Price</Label>
                        <Input id='editProductPrice' name='price' value={formValues.price} required 
                        onChange={handlerChange}
                        />
                    </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                        <Label htmlFor='editProductCategory' className='block mb-4'>Category</Label>
                        <Select value={formValues.category} onValueChange={(value)=>setFormValues(prev =>({...prev, category:value}))}>
                            <SelectTrigger>
                                <SelectValue placeholder='Select Category'/>
                            </SelectTrigger>
                            <SelectContent>
                                {data && data.map((cate:any)=>(
                                    <SelectItem key={cate._id} value={cate._id}>{cate.title}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="space-y-2">
                        <Label htmlFor='editProductStock'>Stock Quantity</Label>
                        <Input id='editProductStock' name='stockQuantity' value={formValues.stockQuantity} required 
                        onChange={handlerChange}
                        />
                    </div>
                </div>
                    <div className="space-y-2">
                        <Label htmlFor='editProductImage'>Product Image</Label>
                        <Input id='editProductImage' type='file' accept='image/*' 
                        onChange={handlerChange}
                        />
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