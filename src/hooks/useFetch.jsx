import axios from "axios";
import { useEffect, useState } from "react";


export  function useFetch(url,query= ""){
    const [locationData,setLocationData] = useState([])
    const[loading,setLoading] = useState(false)

    useEffect(()=>{
        setLoading(true)
        async function getData(){
            try {
                const {data} = await axios.get(`${url}?${query}`)
                setLocationData(data)
                setLoading(false)
            } catch (error) {
                
            }
        }

        getData()
    },[url,query])


    return{locationData,loading}
}