import { Button } from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { Textarea } from '@/components/ui/Textarea';
import React from 'react';

const ContactForm:React.FC = ()=>{
  return (
    <section>
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-5xl mx-auto">
               <Card>
                <CardContent className='p-8'>
                    <h2 className="text-3xl font-robotoBold font-bold mb-6">Send us a message</h2>
                    <form className='space-y-6'>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="space-y-2">
                                <Label htmlFor='name'>Name</Label>
                                <Input id='name' type='text' placeholder='Your name' className='mt-3' required/>
                            </div>
                            <div className="space-y-2">
                                <Label htmlFor='email'>Email</Label>
                                <Input id='email' type='email' placeholder='your@gmail.com' className='mt-3' required/>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor='subject'>Subject</Label>
                            <Input id='subject' type='text' placeholder='How can we help?' className='mt-3' required/>
                        </div>
                        <div className="space-y-2">
                            <Label htmlFor='message'>Message</Label>
                            <Textarea
                            id='message'
                            placeholder='Tell us more about your inquiry'
                            className='min-h-[150px] mt-3'
                            required
                            />
                        </div>
                        <Button type='submit' size='lg' variant='accent' className='w-full'>Send Message</Button>
                    </form>
                </CardContent>
               </Card>
            </div>
        </div>
    </section>
  )
}

export default ContactForm