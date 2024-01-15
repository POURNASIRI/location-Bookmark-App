import React from 'react'
import { Outlet } from 'react-router-dom'
import Map from '../Map/Map'
import { useFetch } from '../../hooks/useFetch'

function AppLayout() {

    const {locationData} = useFetch("http://localhost:5000/hotels")
  return (
    <div className='appLayout'>
        <div className="sidebar">
            <Outlet/>
        </div>
        <Map locations={locationData}/>
    </div>
  )
}

export default AppLayout