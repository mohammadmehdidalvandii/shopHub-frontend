import { useQuery } from "@tanstack/react-query"
import { fetchWithAuth } from "./fetchWithAuth";
const API_URL = 'http://localhost:3000/api/users/'
export const useGetAllUsers = ()=>{
    return useQuery({
        queryKey:['users'],
        queryFn: async ()=>{
            const res = await fetchWithAuth(`${API_URL}`,{
                method:"GET",
            });
            if(!res.ok){
                const errorData = await res.json();
                throw  new Error(errorData.message || 'get users Failed');
            };
            const data = await res.json();
            return data.data;
        },
        retry:2,
        staleTime: 5 * 60 * 1000,
        refetchInterval: 2 * 60 * 1000,
        refetchOnWindowFocus:false,
    });
}