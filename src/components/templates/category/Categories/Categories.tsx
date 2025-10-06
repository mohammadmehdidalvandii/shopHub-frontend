"use client"
import ProductCard from '@/components/modules/ProductCard/ProductCard'
import { Button } from '@/components/ui/Button'
import { Card, CardContent } from '@/components/ui/Cart'
import { Checkbox } from '@/components/ui/Checkbox'
import { Label } from '@/components/ui/Label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/Select'
import { Slider } from '@/components/ui/Slider'
import { SlidersHorizontal } from 'lucide-react'
import React, { useState } from 'react'



const brands = ["Apple", "Samsung", "Sony", "Bose", "Nike"];
const Categories:React.FC = ()=>{
    const [priceRange , setPriceRange] = useState([0, 10_000]);
  return (
    <section>
        <div className="container mx-auto px-4 py-8">
            <div className="mb-8">
                <h1 className="text-4xl font-robotoBlack font-black mb-2">Category Name</h1>
                <p className="text-gray-medium text-xl">Showing counts Products </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
                {/* Filters Sidebar */}
                <aside className=''>
                    <Card>
                        <CardContent className='p-6 space-y-6'>
                            <div>
                                <div className="flex items-center gap-2 mb-4">
                                    <SlidersHorizontal className='h-5 w-5'/>
                                    <h3 className="font-robotoBold font-bold text-2xl">Filters</h3>
                                </div>
                            </div>
                            {/* Price Range */}
                            <div>
                                <Label className='text-lg font-robotBold font-bold mb-4 block'>
                                    Price Range
                                </Label>
                                <Slider
                                min={0}
                                max={10000}
                                step={50}
                                className='mb-4'
                                value={priceRange}
                                onValueChange={setPriceRange}
                                />
                                <div className="flex justify-between text-lg text-gray-dark">
                                    <span>${priceRange[0]}</span>
                                    <span>${priceRange[1]}</span>
                                </div>
                            </div>
                            {/* Brands */}
                            <div>
                                <Label className='text-lg font-robotBold font-bold mb-4 block'>
                                    Brands
                                </Label>
                                <div className="space-y-3">
                                    {brands.map((brand)=>(
                                        <div className="flex items-center space-x-2" key={brand}>
                                        <Checkbox
                                        id={brand}
                                        />
                                        <Label htmlFor={brand} 
                                        className='text-lg font-robotoMedium font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 cursor-pointer'
                                        >{brand}</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            {/* Rating Filter */}
                            <div>
                                <Label className='text-lg font-robotBold font-bold mb-4 block'>
                                    Rating
                                </Label>
                                <div className="space-y-2">
                                    {[5,4,3,2,1].map((rating)=>(
                                        <div className="flex items-center space-x-2" key={rating}>
                                            <Checkbox id={`rating-${rating}`}/>
                                            <Label htmlFor={`rating-${rating}`} className='text-lg cursor-pointer'>{rating}★ & above</Label>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <Button variant='outline' className='w-full h-12'>Clear Filter</Button>
                        </CardContent>
                    </Card>
                </aside>
                <div className="col-span-3">
                    <div className="flex justify-between items-center mb-6">
                        <p className="text-lg text-gray-dark">Counts products found</p>
                        <Select>
                            <SelectTrigger className='w-[170px]'>
                                <SelectValue placeholder='Sort by'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='popular' className='font-robotBold font-bold hover:text-white'>Most Popular</SelectItem>
                                <SelectItem value='price-low' className='font-robotBold font-bold hover:text-white'>Price:Low to High</SelectItem>
                                <SelectItem value='price-hight' className='font-robotBold font-bold hover:text-white'>Price:High to Low</SelectItem>
                                <SelectItem value='rating' className='font-robotBold font-bold hover:text-white'>Highest Rated</SelectItem>
                                <SelectItem value='newest' className='font-robotBold font-bold hover:text-white'>Newest</SelectItem>
                            </SelectContent>
                        </Select>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                        <ProductCard/>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Categories