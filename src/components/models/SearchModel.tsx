"use client"
import React, { useMemo, useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '../ui/Dialog';
import { Button } from '../ui/Button';
import { Search } from 'lucide-react';
import { Input } from '../ui/Input';
import { ScrollArea } from '../ui/ScrollArea';
import { useGetAllProducts } from '@/services/productServices';
import Image from 'next/image';
import { useRouter } from 'next/navigation';



const SearchModel:React.FC = ()=>{  
    const router = useRouter()
    const [searchOpen , setSearchOpen] = useState(false);
    const [search , setSearch] = useState('');

    const {data} = useGetAllProducts();

const filteredProducts = useMemo(() => {
  if (!search.trim()) return [];
  return (
    data?.filter((product: any) => {
      return (
        product.productName.toLowerCase().includes(search.toLowerCase()) ||
        product.category.title.toLowerCase().includes(search.toLowerCase())
      );
    }) || []
  );
}, [search, data]);

  const handleProductClick = (productId: number) => {
    setSearchOpen(false);
    setSearch("");
   router.replace(`/Products/${productId}`);
  };

  return (
    <Dialog open={searchOpen} onOpenChange={setSearchOpen}>
        <DialogTrigger asChild>
            <Button variant="ghost" size="icon">
                <Search className='h-5 w-5'/>
            </Button>
        </DialogTrigger>
        <DialogContent>
            <DialogHeader>
                <DialogTitle>Search Products</DialogTitle>
            </DialogHeader>
            <div className="space-y-4">
                <Input
                placeholder='Search Products, Categories...'
                className='w-full'
                onChange={(e)=>setSearch(e.target.value)}
                autoFocus
                />
                <ScrollArea className='h-[400px] pr-4'>
                    {search && filteredProducts.length === 0 &&(
                        <div className="text-center py-8 text-gray-medium">No Products found</div>
                    )}
                    {search && filteredProducts.length > 0 &&(
                        <div className="space-y-2">
                            {filteredProducts.map((product:any)=>(
                                <button
                                key={product._id}
                                onClick={()=>handleProductClick(product._id)}
                                className='w-full flex items-center gap-4 p-3 rounded-lg hover:bg-gray-light transition-colors text-left cursor-pointer'
                                >   
                                    <Image src={product.images[0]} alt={product.productName} width={100} height={100}
                                    className='w-16 h-16 object-cover rounded-md'
                                    />
                                    <div className="flex-1">
                                        <h3 className="font-robotBold font-semibold text-lg">{product.productName}</h3>
                                        <p className="text-xl text-gray-medium">{product.category.title}</p>
                                    </div>
                                    <div className="text-lg font-robotBold font-semibold text-primary">${product.price}</div>
                                </button>
                            ))}
                        </div>
                    )}
                </ScrollArea>

            </div>
        </DialogContent>
    </Dialog>
  )
}

export default SearchModel