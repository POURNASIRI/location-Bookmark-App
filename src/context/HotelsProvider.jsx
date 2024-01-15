import { createContext, useContext, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import axios from "axios";

const HotelContext = createContext()


export function HotelsProvider({children}) {

        const[searchParams,setSearchParams] = useSearchParams()
        const destination = searchParams.get("destination")
        const[singleHotel,setSingleHotel] = useState("")
        const room = JSON.parse(searchParams.get("options"))?.room
        const[singleLoading,setSingleLoading] = useState(false)

        const{locationData,loading} = useFetch("http://localhost:5000/hotels",
        `q=${destination || ""}&accommodates_gte=${room || 1}`)



        async function getSigleHotel(id){

            if(id === singleHotel.id) return;
                setSingleLoading(true)
            try {
                const{data} = await axios.get(`http://localhost:5000/hotels/${id}`)
                setSingleHotel(data)
                setSingleLoading(false)
            } catch (error) {
                
            }
        }

    return (
        <HotelContext.Provider value={{ locationData,loading,singleHotel,
            singleLoading,getSigleHotel}}>
            {children}
        </HotelContext.Provider>
    )
}


export default function useHotels() {
    return useContext(HotelContext)
}