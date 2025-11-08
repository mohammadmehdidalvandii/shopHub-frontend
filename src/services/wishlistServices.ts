import { useMutation, useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "./fetchWithAuth";
import { useAuthStore } from "@/store/authStore";

const API_URL = 'http://localhost:3000/api/wishlist/';

export  const useAddToWishlist = ()=>{
    const {user} = useAuthStore.getState()
    return useMutation({
        mutationFn:async (productID:string)=>{
            const res =  await fetch(`${API_URL}add/${user?._id}`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({product:productID}),
            });

            if(!res.ok){
                const errorData =  await res.json();
                throw  new Error(errorData.message || 'Add product to wishlist failed')
            };
            const data = await res.json();
            return data.data;
        }
    })
};

export const useGetAllWishlistUserId = ()=>{
     const {user} = useAuthStore.getState()
    return useQuery({
        queryKey:['wishlist'],
        queryFn:async ()=>{
            const res = await fetch(`${API_URL}${user?._id}`,{
                method:'GET'
            });
            if(!res.ok){
                const errorData =  await res.json();
                throw new Error(errorData.message || 'get wishlist userID failed');
            };

            const data = await res.json();
            return data.data
        },
        enabled:!!user?._id,
        retry:2,
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnWindowFocus:false,
    })
}