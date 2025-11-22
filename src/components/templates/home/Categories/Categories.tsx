import Link from 'next/link';
import React from 'react';

const Categories:React.FC = ()=>{
  return (
    <section className="py-16 bg-gray-light/40">
        <div className="container mx-auto px-4">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-robotBold font-bold mb-4">Shop by Category</h2>
                <p className="text-gray-medium text-lg">Find exactly you're looking for</p>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                {['Electronics','Audio','Wearables','Accessories'].map((category)=>(
                    <Link 
                        key={category}
                        href={`/Category/${category}`}
                        className='group'
                    >
                        <div className="bg-white rounded-lg p-8 text-center hover:shadow-lg transition-all duration-300 border  border-border">
                            <h3 className="text-xl font-robotBold font-bold group-hover:text-primary transition-colors">
                                {category}
                            </h3>
                        </div>
                    </Link>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Categories