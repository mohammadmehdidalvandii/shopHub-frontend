import { Card, CardContent } from '@/components/ui/Cart';
import { Input } from '@/components/ui/Input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select';
import { Edit, Search, Trash2 } from 'lucide-react';
import Image from 'next/image';
import React from 'react';
import Product from '../../../../../../public/assets/images/product.png'
import { Badge } from '@/components/ui/Badge';
import { Button } from '@/components/ui/Button';
import EditProductModel from '@/components/models/EditProductModel';

const ProductList:React.FC = ()=>{
  return (
    <div className="container mx-auto">
        <Card>
            <CardContent className='p-6'>
                <div className="flex flex-col md:flex-row items-center gap-4 mb-6">
                    <div className="relative flex-1">
                        <Search className='absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-medium'/>
                        <Input className='pl-10 h-10' placeholder='Search products bg name or category ...'/>
                    </div>
                    <Select defaultValue='all'>
                        <SelectTrigger className='w-full h-10 md:w-[180px]'>
                            <SelectValue placeholder='Filter by category'/>
                        </SelectTrigger>
                        <SelectContent>
                            <SelectItem value='all'>All Categories</SelectItem>
                            <SelectItem value='electronics'>Electronics</SelectItem>
                            <SelectItem value='audio'>Audio</SelectItem>
                            <SelectItem value='wearables'>Wearables</SelectItem>
                            <SelectItem value='accessories'>accessories</SelectItem>
                        </SelectContent>
                    </Select>
                </div>
                <div className="space-y-4">
                    <Card>
                        <CardContent className='p-4 sm:p-6'>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-light shrink-0">
                                    <Image src={Product} alt='product name'width={200} height={200} className='w-full h-full'/>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="font-robotoBold font-bold sm:text-lg">product name</h3>
                                        <Badge variant='default'>category</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium text-sm">price</p>
                                            <p className="font-robotoBold font-bold text-primary">$899.99</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium text-sm">Stock</p>
                                            <p className="font-robotoBold font-bold">units</p>
                                        </div>
                                        <div className='col-span-2 sm:col-span-1'>
                                            <p className="text-gray-medium text-sm">Status</p>
                                            <p className="font-robotoBold font-semibold">In stock</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="flex gap-2 w-full sm:w-auto">
                                        <EditProductModel/>
                                        <Button variant='outline' size='icon'>
                                            <Trash2 className='h-4 w-4'/>
                                        </Button>
                                    </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-4 sm:p-6'>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-light shrink-0">
                                    <Image src={Product} alt='product name'width={200} height={200} className='w-full h-full'/>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="font-robotoBold font-bold sm:text-lg">product name</h3>
                                        <Badge variant='default'>category</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium text-sm">price</p>
                                            <p className="font-robotoBold font-bold text-primary">$899.99</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium text-sm">Stock</p>
                                            <p className="font-robotoBold font-bold">units</p>
                                        </div>
                                        <div className='col-span-2 sm:col-span-1'>
                                            <p className="text-gray-medium text-sm">Status</p>
                                            <p className="font-robotoBold font-semibold">In stock</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="flex gap-2 w-full sm:w-auto">
                                        <EditProductModel/>
                                        <Button variant='outline' size='icon'>
                                            <Trash2 className='h-4 w-4'/>
                                        </Button>
                                    </div>
                            </div>
                        </CardContent>
                    </Card>
                    <Card>
                        <CardContent className='p-4 sm:p-6'>
                            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
                                <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg overflow-hidden bg-gray-light shrink-0">
                                    <Image src={Product} alt='product name'width={200} height={200} className='w-full h-full'/>
                                </div>
                                <div className="flex-1 w-full">
                                    <div className="flex flex-wrap items-center gap-2 mb-2">
                                        <h3 className="font-robotoBold font-bold sm:text-lg">product name</h3>
                                        <Badge variant='default'>category</Badge>
                                    </div>
                                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 text-lg">
                                        <div>
                                            <p className="text-gray-medium text-sm">price</p>
                                            <p className="font-robotoBold font-bold text-primary">$899.99</p>
                                        </div>
                                        <div>
                                            <p className="text-gray-medium text-sm">Stock</p>
                                            <p className="font-robotoBold font-bold">units</p>
                                        </div>
                                        <div className='col-span-2 sm:col-span-1'>
                                            <p className="text-gray-medium text-sm">Status</p>
                                            <p className="font-robotoBold font-semibold">In stock</p>
                                        </div>
                                    </div>
                                </div>
                                    <div className="flex gap-2 w-full sm:w-auto">
                                        <EditProductModel/>
                                        <Button variant='outline' size='icon'>
                                            <Trash2 className='h-4 w-4'/>
                                        </Button>
                                    </div>
                            </div>
                        </CardContent>
                    </Card>

                </div>
            </CardContent>
        </Card>
    </div>
  )
}

export default ProductList