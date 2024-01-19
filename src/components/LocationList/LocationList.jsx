import React from 'react'
import {useFetch} from '../../hooks/useFetch'
import LocationItems from './LocationItems'

function LocationList() {
        const {locationData,loading} = useFetch("https://json-server-s6rb.onrender.com/hotels")

        if(loading){
            return(
                <div className='Loading'>
                    <h2>Loading...</h2>
                </div>
            )
        }
  return (
    <div className='nearbyLocation'>
        <h2>Nearby Location</h2>
        <div className='locationList'>
        {
            locationData?.map(location=>(
                <LocationItems key={location.id} location={location}/>
            ))
        }
        </div>
    </div>
  )
}

export default LocationList