import React from 'react';
import { AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent, AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger } from '../ui/AlertDialog';
import { Button } from '../ui/Button';
import { Trash2 } from 'lucide-react';

const DeleteUserModel:React.FC = ()=>{
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
                <AlertDialogDescription>This operation cannot be undone. User John Doe will be permanently deleted.</AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
                <AlertDialogCancel>Cancel</AlertDialogCancel>
                <AlertDialogAction
                >
                    Delete User
                </AlertDialogAction>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default DeleteUserModel