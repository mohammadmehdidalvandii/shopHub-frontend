import React from 'react';

const DashboardHeader:React.FC = () => {
  return (
            <div className="container mx-auto">
              <div className="mb-8">
                <h1 className="text-4xl font-robotoBlack font-black mb-2">Admin Dashboard</h1>
                <p className="text-xl text-gray-medium">Welcome back ! Here's what's happening with your store</p>
              </div>
            </div>
  )
}

export default DashboardHeader