import { useMutation } from "@tanstack/react-query";
import { fetchWithAuth } from "./fetchWithAuth";
import { useAuthStore } from "@/store/authStore";
const API_URL = 'https://shophubapi.chbk.app/api/users/';


interface UpdateProfile {
    firstName:string,
    lastName:string,
    email:string,
    phone:string,
};

export const useUpdatedProfileMutation = ()=>{
    return useMutation({
        mutationFn: async ({formData, id}:{id:string ,formData:UpdateProfile})=>{
            const res = await fetchWithAuth(`${API_URL}${id}`,{
                method:"PATCH",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formData)
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Updated Profile failed');
            };
            const data =  await res.json();

            return data.data
        }
    })
}