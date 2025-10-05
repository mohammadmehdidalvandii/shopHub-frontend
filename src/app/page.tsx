import Navigation from '@/components/modules/Navigation/Navigation'
import Header from '@/components/templates/home/Header/Header'
import React from 'react'

function Home(){
  return (
    <div className="min-h-screen bg-white">
      <Navigation/>
      <Header/>
    </div>
  )
}

export default Home