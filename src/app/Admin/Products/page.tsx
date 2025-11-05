"use client"
import React from 'react'
import AdminLayout from '@/components/layout/AdminLayout';
import ProductsHeader from '@/components/templates/admin/products/ProductsHeader/ProductsHeader';
import ProductsStats from '@/components/templates/admin/products/ProductsStats/ProductsStats';
import ProductList from '@/components/templates/admin/products/ProductList/ProductList';
import { useGetAllProducts } from '@/services/productServices';



const page:React.FC = ()=>{
    const {data , isLoading , isError} = useGetAllProducts();
  return (
    <AdminLayout>
        <ProductsHeader/>
        <ProductsStats/>
        <ProductList products={data} loading={isLoading} error={isError}/>
    </AdminLayout>
  )
}

export default page