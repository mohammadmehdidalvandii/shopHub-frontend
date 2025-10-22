"use client"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Cart';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/Tabs';
import React, { useState } from 'react';
import Login from '../Login/Login';
import Register from '../Register/Register';
import { getToken } from '@/services/auth';
import { redirect } from 'next/navigation';

const LoginOrRegister:React.FC = ()=>{
    
    const [activeTab , setActiveTab] = useState<string>('login');

    const token = getToken();
    if(token){
        redirect('/')
    }

  return (
    <section>
        <Card className='w-full max-w-md flex-1 items-center justify-center mx-auto py-4 my-16'>
            <CardHeader className='text-center'>
                <CardTitle className='Text-4xl font-robotBold font-bold'>Welcome</CardTitle>
                <CardDescription className='text-lg'>Sign in to your account or create a new one</CardDescription>
            </CardHeader>
            <CardContent>
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                    <TabsList className='grid w-full grid-cols-2'>
                        <TabsTrigger value='login'>Login</TabsTrigger>
                        <TabsTrigger value='signup'>Sign UP</TabsTrigger>
                    </TabsList>
                    <TabsContent value='login'>
                        <Login/>
                    </TabsContent>
                    <TabsContent value='signup'>
                        <Register/>
                    </TabsContent>
                </Tabs>
            </CardContent>
        </Card>
    </section>
  )
}

export default LoginOrRegister