"use client"
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import { useLoginMutation } from '@/services/auth'
import { showError, showSuccess } from '@/utils/Toasts'
import React, { useState } from 'react'

const Login:React.FC = ()=>{
  const loginMutation = useLoginMutation();
  const [formData, setFormData] = useState({
    email:'',
    password:'',
  });

  const handlerChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData({...formData , [e.target.name]:e.target.value});
  };

  const handlerLoginForm = (e:React.FormEvent)=>{
    e.preventDefault();
    loginMutation.mutate(formData,{
      onSuccess:(data)=>{
        console.log("data f =>", data)
        showSuccess(`Welcome ${'ad'}`)
      },
      onError:(error:any)=>{
        showError(error.message || 'Login failed')
      }
    })
  }

  return (
    <form action="#" onSubmit={handlerLoginForm} className="space-y-4 mt-4">
        <div className="space-y-2">
            <Label htmlFor='login-email'>Email</Label>
            <Input 
            id='login-email'
            name='email'
            type='email'
            placeholder='you@example.com'
            value={formData.email}
            onChange={handlerChange}
            required
            />
        </div>
        <div className="space-y-2">
            <Label htmlFor='login-password'>Password</Label>
            <Input 
            id='login-password'
            name='password'
            type='password'
            placeholder='*******'
            value={formData.password}
            onChange={handlerChange}
            required
            />
        </div>
        <Button
        type='submit'
        size='lg'
        className='w-full h-12'
        variant='accent'
        >
            Sign In
        </Button>
    </form>
  )
}

export default Login