import { useAuthStore } from "@/store/authStore";
import { useQuery } from "@tanstack/react-query";
import { fetchWithAuth } from "./fetchWithAuth";
const API_URL = 'http://localhost:3000/api/orders/'

export const useGetOrderByUser = ()=>{
    const {user} = useAuthStore();
    const userID = (user as any)?._id;
    return useQuery({
        queryKey:['userOrders', userID],
        queryFn:async()=>{
            const res = await fetch(`${API_URL}UserOrders/${userID}`,{
                method:"GET",
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'get Orders by userID Failed');
            };
            const data = await res.json();
            return data.data
        },
        enabled:!!userID,
        retry:2,
        staleTime: 1000 * 60 * 60 * 24,
        refetchOnWindowFocus:false,
    })
};

export const useGetAllOrders = ()=>{
    return useQuery({
        queryKey:['Orders'],
        queryFn: async ()=>{
            const res = await fetch(`${API_URL}`,{
                method:"GET",
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'get orders failed')
            };
            const data = await res.json();
            return data.data
        },
        retry:2,
        staleTime: 5 * 60 * 1000,
        refetchInterval: 1 * 60 * 1000,
        refetchOnWindowFocus:false
    })
}