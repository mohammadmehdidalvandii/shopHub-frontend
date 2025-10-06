import { Card, CardContent } from '@/components/ui/Cart';
import { Mail } from 'lucide-react';
import React from 'react';

const ContactHeader:React.FC = ()=>{
  return (
    <section>
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-5xl font-robotoBold font-bold mb-4">Get in Touch</h1>
                    <p className="text-2xl text-gray-medium">
                        Have a question? We'd lover to hear from you
                    </p>
                </div>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-12">
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <div className="w-12 h-12 bg-primary-10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <h3 className="text-2xl font-robotoBlack font-black mb-2">Email Us</h3>
                            <p className="text-xl text-gray-medium">support@shophub.com</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <div className="w-12 h-12 bg-primary-10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <h3 className="text-2xl font-robotoBlack font-black mb-2">Call Us</h3>
                            <p className="text-xl text-gray-medium">+1 (555) 123-4567</p>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-6 text-center'>
                            <div className="w-12 h-12 bg-primary-10 rounded-full flex items-center justify-center mx-auto mb-4">
                                <Mail className='h-6 w-6 text-primary'/>
                            </div>
                            <h3 className="text-2xl font-robotoBlack font-black mb-2">Visit Us</h3>
                            <p className="text-xl text-gray-medium">123 Shop Street, NY 10001</p>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactHeader