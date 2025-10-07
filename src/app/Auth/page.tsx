import Footer from '@/components/modules/Footer/Footer'
import Navigation from '@/components/modules/Navigation/Navigation'
import React from 'react'

function page() {
  return (
    <div className="min-h-screen bg-white bg-gradient-to-br from-white via-white to-primary/5 p-4">
        <Navigation/>
        THIS IS Auhts page
        <Footer/>
    </div>
  )
}

export default page