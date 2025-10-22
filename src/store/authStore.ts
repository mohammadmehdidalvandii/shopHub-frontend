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
    user: typeof window !== 'undefined' ? JSON.parse(localStorage.getItem('userInfo')||'null') :null,
    isAuthenticated:typeof window !== 'undefined' && !!localStorage.getItem('token'),
    login:(token:string , user:User)=>{
        localStorage.setItem('token', token);
        localStorage.setItem('accessTokenExpiry', (Date.now()+15 * 60 *1000).toString());
        localStorage.setItem('userInfo',JSON.stringify(user))
        set({token , user, isAuthenticated:true})
    },

    logout:async ()=>{
        localStorage.removeItem('token');
        localStorage.removeItem('accessTokenExpiry');
        localStorage.removeItem('userInfo');
        set({token:null , accessTokenExpiry:null ,  user:null , isAuthenticated:false})
    }
})) 