import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@radix-ui/react-label'
import React from 'react'

const Register:React.FC = ()=>{
  return (
       <form action="#" className="space-y-4 mt-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
            <Label htmlFor='firstName'>First Name</Label>
            <Input 
            id='firstName'
            name='firstName'
            type='text'
            placeholder='John'
            required
            />
        </div>
        <div className="space-y-2">
            <Label htmlFor='lastName'>Last Name</Label>
            <Input 
            id='lastName'
            name='lastName'
            type='email'
            placeholder='Doe'
            required
            />
        </div>

        </div>
        <div className="space-y-2">
            <Label htmlFor='signup-email'>Email</Label>
            <Input 
            id='signup-email'
            name='signup-email'
            type='email'
            placeholder='you@example.com'
            required
            />
        </div>
        <div className="space-y-2">
            <Label htmlFor='signup-password'>Password</Label>
            <Input 
            id='signup-password'
            name='signup-password'
            type='password'
            placeholder='*******'
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
            required
            />
        </div>
        <Button
        type='submit'
        size='lg'
        className='w-full h-12'
        variant='accent'
        >
            Create Account
        </Button>
    </form>
  )
}

export default Register