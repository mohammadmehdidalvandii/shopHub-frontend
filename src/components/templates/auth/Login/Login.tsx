import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Label } from '@/components/ui/Label'
import React from 'react'

const Login:React.FC = ()=>{
  return (
    <form action="#" className="space-y-4 mt-4">
        <div className="space-y-2">
            <Label htmlFor='login-email'>Email</Label>
            <Input 
            id='login-email'
            name='email'
            type='email'
            placeholder='you@example.com'
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