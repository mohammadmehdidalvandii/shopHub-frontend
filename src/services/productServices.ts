import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "./fetchWithAuth";
const API_URL = 'http://localhost:3000/api/products/';


export const useCreateProduct = ()=>{
    return useMutation({
        mutationFn:async (formData:FormData)=>{
            const res = await fetchWithAuth(`${API_URL}create`,{
                method:'POST',
                body: formData
            });
        if(!res.ok){
            const errorData = await res.json();
            throw new Error(errorData.message || 'created product failed');
        }
            const data = await res.json();
            return data.data
        }
    })
};

export const useGetAllProducts = ()=>{
    return useQuery({
        queryKey:['products'],
        queryFn:async ()=>{
            const res = await fetch(`${API_URL}`,{
                method:"GET",
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'get products Failed');
            };

            const data = await res.json();
            return data.data
        },

    })
};

export const useGetProductById = (id:any)=>{
    return useQuery({
        queryKey:['product', id],
        queryFn:async ()=>{
            const res  = await fetch(`${API_URL}${id}`,{
                method:"GET",
            });

            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Failed to fetch product');
            };
            const data = await res.json();
            return data.data
        },
        enabled: !!id,
        retry:2,
        refetchOnWindowFocus:false,
    })
}

export const useDeleteProduct = ()=>{
    return useMutation({
        mutationFn:async (id:string)=>{
            const res = await fetchWithAuth(`${API_URL}${id}`,{
                method:"DELETE",
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Delete Product Failed')
            };
            const data = await res.json();
            return data.data
        },
    })
}

export const useUpdateProduct= ()=>{
    return useMutation({
        mutationFn: async ({formData , id}:{id:string ,formData:FormData})=>{
            const res = await fetchWithAuth(`${API_URL}${id}`,{
                method:"PATCH",
                body:formData,
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Updated product Failed')
            };

            const data = await res.json();
            return data.data
        }
    })
}