"use client"
import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import dynamic from "next/dynamic";
import React from "react";

const AddProductModel = dynamic(()=>import('@/components/models/AddProductModel'),{
  ssr:false,
  loading:()=> <Button variant="ghost" size="lg" className="text-blue-700"> Loading </Button>
})

const ProductsHeader: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row item-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-robotoBlack font-black mb-2">
           Product Management
          </h1>
          <p className="text-xl text-gray-medium">
            Manage your product inventory
          </p>
        </div>
        <AddProductModel/>
      </div>
    </div>
  );
};

export default ProductsHeader;
