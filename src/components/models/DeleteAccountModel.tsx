'use client'
import React from 'react'
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/AlertDialog'
import { Button } from '../ui/Button'
import { useDeleteAccount } from '@/services/auth'
import { useAuthStore } from '@/store/authStore'
import { useRouter } from 'next/navigation'

const DeleteAccountModel:React.FC = ()=>{
    const router =  useRouter()
    const deleteAccount = useDeleteAccount();
    const {logout} = useAuthStore.getState()
    const handlerDeleteAccount = ()=>{
        console.log("click")
        deleteAccount.mutate();
        window.location.reload();
    }

  return (
    <AlertDialog>
        <AlertDialogTrigger asChild>
            <Button variant='destructive' size='lg'>
                Delete Account
            </Button>
        </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
                <AlertDialogTitle>Are you sure ?</AlertDialogTitle>
                <AlertDialogDescription>Are you sure the Account is irreversible ?</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction 
                onClick={handlerDeleteAccount}
                >Delete Account</AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteAccountModel