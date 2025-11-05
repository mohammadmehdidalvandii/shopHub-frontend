import { useQuery } from "@tanstack/react-query";
const API_URL = 'http://localhost:3000/api/categories/'

export const useGetCategory = ()=>{
    return useQuery({
        queryKey:['categories'],
        queryFn:async ()=>{
            const res = await fetch(`${API_URL}`,{
                method:'GET'
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Get Categories Failed')
            };
            const data = await res.json();
            return data.data
        },
        
    })
}