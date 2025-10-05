import {toast} from 'sonner';

export const  showSuccess = (message:string)=>{
    toast.success(message,{
        duration:5000,
        style:{
            background:"#15803d",
            color:"#fff",
            fontSize:"1.2rem",
            fontWeight:"bold",
            borderRadius:"0.5rem",
            padding:"12px 16px",
        }
    })
}
export const  showError = (message:string)=>{
    toast.success(message,{
        duration:5000,
        style:{
            background:"#ef4444",
            color:"#fff",
            fontSize:"1.2rem",
            fontWeight:"bold",
            borderRadius:"0.5rem",
            padding:"12px 16px",
        }
    })
}
export const  showWarning = (message:string)=>{
    toast.success(message,{
        duration:5000,
        style:{
            background:"#facc15",
            color:"#fff",
            fontSize:"1.2rem",
            fontWeight:"bold",
            borderRadius:"0.5rem",
            padding:"12px 16px",
        }
    })
}
export const  showInfo = (message:string)=>{
    toast.success(message,{
        duration:5000,
        style:{
            background:"#2563eb",
            color:"#fff",
            fontSize:"1.2rem",
            fontWeight:"bold",
            borderRadius:"0.5rem",
            padding:"12px 16px",
        }
    })
}