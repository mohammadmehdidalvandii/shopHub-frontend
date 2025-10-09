import React from 'react'

function UsersHeader() {
  return (
    <div className="container mx-auto">
        <div className="flex items-center justify-between mb-8">
            <div>
                <h1 className="text-4xl font-robotoBlack font-black  mb-2">User Management</h1>
                <p className="text-xl text-gray-medium">Manage and monitor all users</p>
            </div>
        </div>
    </div>
  )
}

export default UsersHeader