import React from 'react'

const loading:React.FC = ()=>{
  return (
    <div className="flex h-screen items-center justify-center">
        <div className="animate-ping duration-500 ease-in-out rounded-full border-b border-gray-light">
            <p className="flex font-robotoBlack font-black text-7xl text-primary">Loading...</p>
        </div>
    </div>
  )
}

export default loading