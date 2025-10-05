import Link from 'next/link';
import React from 'react';

const Footer:React.FC = ()=>{
  return (
    <footer className='bg-white border-t border-border py-12'>
        <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
                <div>
                    <h3 className="text-xl font-robotoBold font-bold mb-4 text-primary">ShopHub</h3>
                    <p className="text-gray-medium">Your one-stop for premium products.</p>
                </div>
                <div>
                    <h4 className="font-robotoBold mb-4 text-2xl">Shop</h4>
                    <ul className="space-y-2 text-gray-medium">
                        <li>
                            <Link href="/Products" className='hover:text-primary transition-colors text-xl'>All Products</Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-primary transition-colors text-xl'>Electronics</Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-primary transition-colors text-xl'>Audio</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-robotoBold mb-4 text-2xl">Company</h4>
                    <ul className="space-y-2 text-gray-medium">
                         <li>
                            <Link href="" className='hover:text-primary transition-colors text-xl'>About Us</Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-primary transition-colors text-xl'>Contact</Link>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="font-robotoBold mb-4 text-2xl">Legal</h4>
                    <ul className="space-y-2 text-gray-medium">
                         <li>
                            <Link href="" className='hover:text-primary transition-colors text-xl'>Privacy Policy</Link>
                        </li>
                        <li>
                            <Link href="" className='hover:text-primary transition-colors text-xl'>Terms of Service</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer