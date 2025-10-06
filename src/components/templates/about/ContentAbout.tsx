import React from 'react'

const ContentAbout:React.FC = ()=>{
  return (
    <section>
        <div className="container mx-auto px-4 py-16">
            <div className="max-w-3xl mx-auto">
                <h1 className="text-5xl font-robotoBlack font-black mb-6">About ShopHub</h1>
                <div className="prose prose-lg">
                    <p className="text-2xl text-gray-medium mb-8">
                        Welcome to ShopHub, your premier destination for quality products and exceptional service.
                    </p>
                </div>
                <div className="mb-12">
                    <h2 className="text-3xl font-robotBold font-bold mb-4">Our Story</h2>
                    <p className="text-gray-medium text-xl">
                        Founded in 2025, ShopHub began with a simple mission: to make high-quality products accessible to everyone. We believe that shopping should be an enjoyable experience, which is why we've curated a collection of products that combine style, functionality, and value.
                    </p>
                    <p className="text-gray-medium text-xl" >
                        Today, we serve thousands of satisfied customers worldwide, offering everything from cutting-edge electronics to stylish accessories. Our commitment to excellence drives everything we do, from product selection to customer service.
                    </p>
                </div>
                <div className="mb-12">
                    <h2 className="text-3xl font-robotBold font-bold mb-4">Our Values</h2>
                    <div className="grid grid-col-1 md:grid-cols-2 gap-6">
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-robotoBold font-bold mb-2">Quality First</h3>
                            <p className="text-xl text-gray-medium">We carefully select every product to ensure it meets our high standards.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-robotoBold font-bold mb-2">Customer Focus</h3>
                            <p className="text-xl text-gray-medium">Your satisfaction is our top priority, and we're here to help every step of the way.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-robotoBold font-bold mb-2">Innovation</h3>
                            <p className="text-xl text-gray-medium">We stay ahead of trends to bring you the latest and greatest products.</p>
                        </div>
                        <div className="bg-white p-6 rounded-lg border border-border">
                            <h3 className="text-2xl font-robotoBold font-bold mb-2">Sustainability</h3>
                            <p className="text-xl text-gray-medium">We're committed to reducing our environmental impact through responsible practices.</p>
                        </div>
                    </div>
                </div>
                 <div className="mb-12">
                    <h2 className="text-3xl font-robotBold font-bold mb-4">Why Choose Us?</h2>
                    <ul className="space-y-3 text-gray-medium">
                        <li className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className='h-2 w-2 rounded-full bg-primary'/>
                            </div>
                            <span className="text-xl text-gray-medium">Wide selection of premium products across multiple categories</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className='h-2 w-2 rounded-full bg-primary'/>
                            </div>
                            <span className="text-xl text-gray-medium">Fast and reliable shipping with tracking</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className='h-2 w-2 rounded-full bg-primary'/>
                            </div>
                            <span className="text-xl text-gray-medium">30-day return policy for your peace of mind</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <div className="h-6 w-6 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                                <div className='h-2 w-2 rounded-full bg-primary'/>
                            </div>
                            <span className="text-xl text-gray-medium">Dedicated customer support team ready to assist you</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContentAbout