import {create} from 'zustand';

interface User{
    firstName:string,
    lastName:string,
    email:string,
    role:string,
    phone:string,
    isActive:string,
    address:string[],
};
interface AuthState {
  token: string | null;
  user: User | null;
  isAuthenticated: boolean ;
  login: (token: string, user: User) => void;
//   logout: () => void;
}
export const useAuthStore = create<AuthState>((set)=>({
    token:localStorage.getItem('token')|| null,
    user:null,
    isAuthenticated:!!localStorage.getItem('token'),

    login:(token:string , user:User)=>{
        localStorage.setItem('token', token);
        set({token , user , isAuthenticated:true})
    }
})) 