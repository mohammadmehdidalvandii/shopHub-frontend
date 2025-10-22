import { useAuthStore } from "@/store/authStore";
import { showSuccess } from "@/utils/Toasts";
import { useMutation } from "@tanstack/react-query";
const API_URL = 'http://localhost:3000/api/auth/';

interface LoginFormData {
    email:string,
    password:string,
}

interface RegisterFormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  password: string;
}
export const useRegisterMutation = ()=>{
    return useMutation<
    any,      
    Error,        
    RegisterFormData            
  >({
        mutationFn: async (formData)=>{
            const res = await fetch(`${API_URL}register`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData),
            });


            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Registration failed')
            };

            return res.json();
        }
    })
};


export const useLoginMutation = ()=>{
      const authStore = useAuthStore()
    return useMutation({
        mutationFn: async (formData:LoginFormData)=>{
            const res = await fetch(`${API_URL}login`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                credentials:'include',
                body:JSON.stringify(formData),
            });

            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'Login failed');
            };
            const data = await res.json();
            const token = data.data.accessToken;

            const userRes = await fetch(`${API_URL}profile`,{
                headers:{Authorization :`Bearer ${token}`},
            });

            if(!userRes.ok){
                throw new Error('Failed to fetch user info');
            };

            const user = await userRes.json();

            authStore.login(token , user.data)

            return user.data;
        }
    })
};

export const useLogoutMutation = ()=>{
    const authStore = useAuthStore();
    return useMutation({
        mutationFn: async ()=>{
            const res = await fetch(`${API_URL}logout`,{
                method:'POST',
                credentials:'include',
            });
            if(res.ok){
               authStore.logout(); 
               return true
            }
        },
        onSuccess: ()=>{
            showSuccess('Logout successfully')
        }
        
    })
} 

export  const getToken = ()=>{
    const authStore = useAuthStore()
    const token = authStore.token;
    const expiry = authStore.accessTokenExpiry;


    if(!token || !expiry){
        return null
    };
    if(Date.now() >= Number(expiry)){
        return null
    }; 

    return token
};

export const getUserInfo = ()=>{
    const authStore = useAuthStore();
    const user = authStore.user;

    if(!user){
        return null;
    };

    return user
}
