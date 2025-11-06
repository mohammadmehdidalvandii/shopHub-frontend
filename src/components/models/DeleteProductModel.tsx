import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/AlertDialog';
import { Button } from '../ui/Button';
import { Trash2 } from 'lucide-react';
import { useDeleteProduct } from '@/services/productServices';
import { showError, showSuccess } from '@/utils/Toasts';

interface DeleteProps{
    id:string
}

const DeleteProductModel:React.FC<DeleteProps> = ({id})=>{
    const deleteProduct = useDeleteProduct();

    const handlerDeleteProduct = (userID:string)=>{
        deleteProduct.mutate(userID,{
            onSuccess:()=>{
                showSuccess('Delete Product Successfully')
                window.location.reload()
            },
            onError:(error:any)=>{
                showError(error.message ||'Delete Product Failed')
            }
        })
    }

  return (
        <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant='outline' size='icon'>
                <Trash2 className='h-4 w-4'/>
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure ?</AlertDialogTitle>
                <AlertDialogDescription>Are you sure the product is irreversible?</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                onClick={()=>handlerDeleteProduct(id)}
                >
                    Delete User
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteProductModel