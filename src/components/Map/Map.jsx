import React, { useEffect, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import { useSearchParams } from 'react-router-dom'
import useHotels from '../../context/HotelsProvider'

function Map({markedPlace}) {

    const[searchParams,setSearchParams] = useSearchParams()
    const latitude = searchParams.get("lat")
    const longitude = searchParams.get("lon")
    const[mapCenter,setMapCenter] = useState([50,5])

    const{locationData} = useHotels()

   

    useEffect(()=>{
      if(latitude && longitude){
        setMapCenter([latitude,longitude])
      }
    },[latitude,longitude])
   
   
  return (
    <div className='mapContainer'>
          <MapContainer 
          className='map'
          center={mapCenter} zoom={5} scrollWheelZoom={true}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <ChangeCenter position={mapCenter}/>
            {
              locationData.map(item=>(
                <Marker 
                key={item.id}
                position={[item.latitude,item.longitude]}>
                <Popup>
                {item.host_location} <br /> {item.name}
                </Popup>
              </Marker>
              ))
            }
           
          </MapContainer>
    </div>
  )
}

export default Map



 function ChangeCenter({position}){
  const map = useMap()
  map.setView(position)
  return null;
}