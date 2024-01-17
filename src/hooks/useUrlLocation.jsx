import { useSearchParams } from "react-router-dom";


export function useUrlLocation(){

    const[searchParams,setSearchParams] = useSearchParams()
    const latitude =searchParams.get("lat") 
    const longitude =searchParams.get("lng") 

    return[latitude,longitude]
}