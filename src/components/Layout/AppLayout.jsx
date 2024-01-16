import React from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../Map/Map'
import useHotels from '../../context/HotelsProvider'

function AppLayout() {

  const{locationData} = useHotels()
    
  return (
    <div className='appLayout'>
        <div className="sidebar">
            <Outlet/>
        </div>
        <Map markerLocation={locationData}/>
    </div>
  )
}

export default AppLayout