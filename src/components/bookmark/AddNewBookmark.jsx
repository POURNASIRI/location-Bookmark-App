import React, { useEffect, useState } from 'react'
import { useUrlLocation } from '../../hooks/useUrlLocation'
import axios from 'axios'
import ReactCountryFlag from 'react-country-flag'
import { useNavigate } from 'react-router-dom'
import { UseBookmarks } from '../../context/BookmarksProvider'


const BASE_GEO_URL = "https://api.bigdatacloud.net/data/reverse-geocode-client"

function AddNewBookmark() {


      const[latitude,longitude]  = useUrlLocation()
      const[cityName,setCityName] = useState("")
      const[country,setCountry] = useState("")
      const[countryCode,setCountryCode] = useState("")
      const navigate = useNavigate()

      useEffect(()=>{
          if(!latitude || !longitude) return;
        async function getLocation(){
          try {
              const {data} = await axios.get(`${BASE_GEO_URL}?latitude=${latitude}&longitude=${longitude}`)
              setCityName(data.city)
              setCountry(data.countryName)
              setCountryCode(data.countryCode)
          } catch (error) {
            console.log(error)
          }
        }
        getLocation()

      },[latitude,longitude])

      const{createNewBookmar} = UseBookmarks()

      const handleSubmit = async (e)=>{
        e.preventDefault()
          if(!cityName || !country) return;
          const newBookmar = {
            cityName,
            country,
            countryCode,
            latitude,
            longitude,
            host_location: cityName + " "+ country
          }
          await createNewBookmar(newBookmar)
          navigate("/bookmarks")
       }

     
      

  return (
    <div>
    <h2>Bookmark New Location</h2>
    <form
    className='form'onSubmit={handleSubmit} >
        <div className="formControl">
            <label htmlFor='cityName'>cityName</label>
            <input
            onChange={(e)=>setCityName(e.target.value)}
            value={cityName}
            type="text" 
            name='cityName'id='cityName'/>
        </div>
        <div className="formControl">
            <label htmlFor='country'>Country</label>
            <input
            onChange={(e)=>setCountry(e.target.value)}
            value={country}
            type="text" 
            name='country'id='country'/>
            <span className='flag'>
            <ReactCountryFlag svg countryCode={countryCode}/>
            </span>
           
        </div>
        <div className='buttons'>
            <button 
            onClick={()=>navigate(-1)}
            className='btn btn--back'>&larr;Back</button>
            <button className='btn btn--primary'>Add</button>
        </div>
    </form>
</div>
  )
}

export default AddNewBookmark