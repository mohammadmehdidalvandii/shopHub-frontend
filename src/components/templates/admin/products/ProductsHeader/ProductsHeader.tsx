import { Button } from "@/components/ui/Button";
import { Plus } from "lucide-react";
import React from "react";

const ProductsHeader: React.FC = () => {
  return (
    <div className="container mx-auto">
      <div className="flex flex-col sm:flex-row item-start sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-4xl font-robotoBlack font-black mb-2">
            Admin Dashboard
          </h1>
          <p className="text-xl text-gray-medium">
            Welcome back ! Here's what's happening with your store
          </p>
        </div>
        <Button variant="default" size="lg">
          <Plus className="mr-2 h-4 w-4" />
          Add Product
        </Button>
      </div>
    </div>
  );
};

export default ProductsHeader;
