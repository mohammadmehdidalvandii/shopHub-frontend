"use client"
import React , {useEffect} from "react";
import { getValidToken } from "@/services/auth";

export const AuthRefresher = ()=>{
    useEffect(()=>{
        const interval = setInterval(async ()=>{
            const expiry = localStorage.getItem('accessTokenExpiry');
            if(!expiry) return

            const timeLeft = Number(expiry) - Date.now();
            if(timeLeft < 60 *1000){
                await getValidToken();
            }
        },60 * 1000);

        return ()=>clearInterval(interval)
    },[])  ;

    return null
} 