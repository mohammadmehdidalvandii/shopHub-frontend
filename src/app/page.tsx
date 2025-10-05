import Footer from '@/components/modules/Footer/Footer'
import Navigation from '@/components/modules/Navigation/Navigation'
import Categories from '@/components/templates/home/Categories/Categories'
import FeaturedProducts from '@/components/templates/home/FeaturedProducts/FeaturedProducts'
import Header from '@/components/templates/home/Header/Header'
import React from 'react'

function Home(){
  return (
    <div className="min-h-screen bg-white">
      <Navigation/>
      <Header/>
      <FeaturedProducts/>
      <Categories/>
      <Footer/>
    </div>
  )
}

export default Home