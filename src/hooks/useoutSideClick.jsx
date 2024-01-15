import { useEffect } from "react";


export default function useoutSideClick(ref,expectedId,setOpenOption){
    useEffect(()=>{
        function handleOutSideClick(event){
            if(ref.current&& !ref.current.contains(event.target) && event.target.id !== expectedId ){
                setOpenOption(false)
            }
        }



        document.addEventListener("mousedown",handleOutSideClick)
    },[ref,expectedId,setOpenOption])



}