import { Card, CardContent } from '@/components/ui/Cart';
import React from 'react';

const UsersStats:React.FC = ()=>{
  return (
    <div className="container mx-auto">
        <Card className='mb-6'>
            <CardContent className='p-6'>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-primary">1,234</p>
                            <p className="text-lg text-gray-medium">Total Users</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-green-500">1,180</p>
                            <p className="text-lg text-gray-medium">Active Users</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-blue-500">45</p>
                            <p className="text-lg text-gray-medium">New This month</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <p className="text-4xl font-robotoBold font-bold text-accent">9</p>
                            <p className="text-lg text-gray-medium">Suspended</p>
                        </CardContent>
                    </Card>
                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default UsersStats