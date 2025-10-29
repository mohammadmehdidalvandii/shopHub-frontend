"use client"
import React, { useState } from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/AlertDialog';
import { Button } from '../ui/Button';
import { Trash2 } from 'lucide-react';
import { useDeleteUser } from '@/services/userServices';
import { showError } from '@/utils/Toasts';

interface UserDeleted {
    id:string,
    firstName: string,
    lastName: string,
}

const DeleteUserModel:React.FC<UserDeleted> = ({id ,firstName , lastName})=>{
    const [open , setOpen] = useState(false);
    const deleteUser = useDeleteUser() 
    const handlerDeleteUsers = (userID:string)=>{
        if(!userID){
            showError('ID is required');
        };
        deleteUser.mutate(userID)
    }

  return (
    <AlertDialog open={open} onOpenChange={setOpen}>
        <AlertDialogTrigger asChild>
            <Button variant='outline' size='icon'>
                <Trash2 className='h-4 w-4'/>
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure ?</AlertDialogTitle>
                <AlertDialogDescription>This operation cannot be undone. User <span className='font-black font-robotoBlack text-2xl'>{firstName} {lastName}</span> will be permanently deleted.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                onClick={()=>handlerDeleteUsers(id)}
                >
                    Delete User
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteUserModel