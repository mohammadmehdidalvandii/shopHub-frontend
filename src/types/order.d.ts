export type Product = {
  _id: string;
  productName: string;
  productSKU: string;
  price: number;
  category: string;
  brand: string;
  description: string;
  stockQuantity: number;
  weight: number;
  dimensions: string;
  tags: string[];
  images: string[];
  status: string;
  vender: string;
  createdAt: string;
  updatedAt: string;
  __v: number;
};

export type Order = {
  _id: string;
  user: string;
  items: {
    product:  Product;
    quantity: number;
    price: number;
  }[];
  customerInfo: {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    address: string;
    city: string;
    state: string;
    postalCode: string;
    country: string;
    orderNote?: string;
  };
  totalAmount: string;
  status: 'pending' | 'paid' | 'shipped' | 'completed' | 'cancelled';
  paymentMethod: string;
  createdAt: string;
  isActive:boolean,
};