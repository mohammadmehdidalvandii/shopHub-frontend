"use client"
import AdminLayout from '@/components/layout/AdminLayout';
import React from 'react';
import UsersHeader from '@/components/templates/admin/users/UsersHeader/UsersHeader';
import UsersStats from '@/components/templates/admin/users/UsersStats/UsersStats';
import UserList from '@/components/templates/admin/users/UserList/UserList';
import { useGetAllUsers } from '@/services/userServices';


const page:React.FC  = ()=>{

  const {data , isError ,isLoading} = useGetAllUsers()
  return (
    <AdminLayout>
        <UsersHeader/>
        <UsersStats orders={data}/>
        <UserList users={data} error={isError} loading={isLoading}/>
    </AdminLayout>
  )
}

export default page