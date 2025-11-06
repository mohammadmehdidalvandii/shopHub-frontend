import { getValidToken } from "./auth";

export const fetchWithAuth = async (url:string, options:RequestInit = {})=>{
    const token = await getValidToken();
    if(!token){
        window.location.replace('/Auth')
    };

    return fetch(url,{
        ...options,
        headers:{
            ...options.headers,
            Authorization: `Bearer ${token}`,
        },
        credentials:'include',
    })
}