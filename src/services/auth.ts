import { useMutation } from "@tanstack/react-query";
const API_URL = 'http://localhost:3000/api/auth/';


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
}
