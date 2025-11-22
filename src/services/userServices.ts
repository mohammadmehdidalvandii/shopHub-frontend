import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query"
import { fetchWithAuth } from "./fetchWithAuth";
import { showError, showSuccess } from "@/utils/Toasts";
const API_URL = 'https://shophubapi.chbk.app/api/users/';


interface UpdatedUser{
    firstName:string,
    lastName:string,
    email:string,
    role:string,
    phone:string,
    isActive:boolean,
};

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
};

export const useDeleteUser = ()=>{
    const queryClient = useQueryClient()
    return useMutation({
        mutationFn: async(id:string)=>{
            const res = await fetchWithAuth(`${API_URL}${id}`,{
                method:"DELETE",
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Delete User Failed');
            };

            const data = await res.json();
            return data.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({ queryKey: ['users'], exact:true });
            showSuccess('Delete user Successfully')
        },
        onError:(error:any)=>{
            showError( error?.message ||'Delete user Failed')
        }
    })
};


export const useUpdateUser = ()=>{
    return useMutation({
        mutationFn: async ({formUser , id}:{id:string, formUser:UpdatedUser})=>{
            console.log("formUser=>", formUser)
            const res =  await fetchWithAuth(`${API_URL}${id}`,{
                method:"PATCH",
                headers:{
                    'Content-Type':'application/json',
                },
                body:JSON.stringify(formUser),
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Updated User failed');
            };
            const data = await res.json();
            return data.data
        }
    })
}