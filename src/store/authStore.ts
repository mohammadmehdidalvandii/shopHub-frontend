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
  accessTokenExpiry:string|null;
  user: User | null;
  isAuthenticated: boolean ;
  login: (token: string, user: User) => void;
  logout: () =>Promise<void>;
}
export const useAuthStore = create<AuthState>((set)=>({
    token:typeof window !== 'undefined' ? localStorage.getItem('token'): null,
    accessTokenExpiry:typeof window !== 'undefined' ? localStorage.getItem('accessTokenExpiry'): null,
    user:null,
    isAuthenticated:typeof window !== 'undefined' && !!localStorage.getItem('token'),
    login:(token:string , user:User)=>{
        localStorage.setItem('token', token);
        localStorage.setItem('accessTokenExpiry', (Date.now()+15 * 60 *1000).toString());
        set({token , user , isAuthenticated:true})
    },

    logout:async ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('accessTokenExpiry');
        set({token:null , accessTokenExpiry:null ,  user:null , isAuthenticated:false})
    }
})) 