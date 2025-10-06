import Link from 'next/link'
import React from 'react'

function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gray-light">
        <div className="text-center">
            <h1 className="mb-2 text-8xl font-robotoBlack font-black text-accent">404</h1>
            <p className="mb-4 text-5xl text-gray-dark font-robotBold font-bold">Oops! Page Not Found </p>
            <Link href='/' className='text-2xl text-blue-700 underline hover:text-blue-500'>Return to Home</Link>
        </div>
    </div>
  )
}

export default NotFound