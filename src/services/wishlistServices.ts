import { useMutation } from "@tanstack/react-query";
import { fetchWithAuth } from "./fetchWithAuth";

const API_URL = 'http://localhost:3000/api/wishlist/';

export  const useAddToWishlist = ()=>{
    return useMutation({
        mutationFn:async ({id , productID}:{id:string , productID:string})=>{
            const res =  await fetchWithAuth(`${API_URL}add/${id}`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(productID),
            });

            if(!res.ok){
                const errorData =  await res.json();
                throw  new Error(errorData.message || 'Add product to wishlist failed')
            };
            const data = await res.json();
            return data.data;
        }
    })
}