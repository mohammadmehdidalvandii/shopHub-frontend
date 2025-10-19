"use client"
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { useRegisterMutation } from '@/services/auth'
import { showError, showSuccess } from '@/utils/Toasts'
import { Label } from '@radix-ui/react-label'
import { useRouter } from 'next/navigation'
import React, { useState } from 'react'

const Register:React.FC = ()=>{
    const registerMutation = useRegisterMutation();
    const initialFormData = {
  firstName: '',
  lastName: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: '',
};
    const [formData , setFormData] = useState({
        firstName:'',
        lastName:'',
        email:'',
        phone:'',
        password:'',
        confirmPassword:'',
    });

    const handlerChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        setFormData({...formData , [e.target.name]:e.target.value});
    };

    const handlerSubmitRegister = (e:React.FormEvent)=>{
        e.preventDefault();
        if(formData.password !== formData.confirmPassword){
            return showError('Password and Confirm password do no match');
        };

        registerMutation.mutate(formData,{
            onSuccess:(data)=>{
                showSuccess('Registration successful ! Please Login');
                setFormData(initialFormData)
            },
            onError:(error)=>{
                showError(error.message||'Registration failed')
            }
        })
    }

  return (
       <form action="#" onSubmit={handlerSubmitRegister} className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <Label htmlFor='firstName'>First Name</Label>
            <Input 
            id='firstName'
            name='firstName'
            type='text'
            placeholder='John'
            value={formData.firstName}
            onChange={handlerChange}
            required
            />
        </div>
        <div className="space-y-2">
            <Label htmlFor='lastName'>Last Name</Label>
            <Input 
            id='lastName'
            name='lastName'
            type='text'
            placeholder='Doe'
            value={formData.lastName}
            onChange={handlerChange}
            required
            />
        </div>

        </div>
        <div className="space-y-2">
            <Label htmlFor='signup-email'>Email</Label>
            <Input 
            id='signup-email'
            name='email'
            type='email'
            placeholder='you@example.com'
            value={formData.email}
            onChange={handlerChange}
            required
            />
        </div>
        <div className="space-y-2">
            <Label htmlFor='signup-phone'>Phone</Label>
            <Input 
            id='signup-phone'
            name='phone'
            type='tel'
            placeholder='09129999999'
            value={formData.phone}
            onChange={handlerChange}
            required
            />
        </div>
        <div className="space-y-2">
            <Label htmlFor='signup-password'>Password</Label>
            <Input 
            id='signup-password'
            name='password'
            type='password'
            placeholder='********'
            value={formData.password}
            onChange={handlerChange}
            required
            />
        </div>
        <div className="space-y-2">
            <Label htmlFor='confirmPassword'>confirmPassword</Label>
            <Input 
            id='confirmPassword'
            name='confirmPassword'
            type='password'
            placeholder='*******'
            value={formData.confirmPassword}
            onChange={handlerChange}
            required
            />
        </div>
        <Button
        type='submit'
        size='lg'
        className='w-full h-12'
        variant='accent'
        disabled={registerMutation.isPending}
        >
            {registerMutation.isPending ? 'Registering....':'Create Account'}
        </Button>
    </form>
  )
}

export default Register