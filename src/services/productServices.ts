import { useMutation } from "@tanstack/react-query";
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
}