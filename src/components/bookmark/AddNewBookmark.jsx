import React, { useEffect, useState } from 'react'
import { useUrlLocation } from '../../hooks/useUrlLocation'
import axios from 'axios'
import ReactCountryFlag from 'react-country-flag'
import { useNavigate } from 'react-router-dom'


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



     
      

  return (
    <div>
    <h2>Bookmark New Location</h2>
    <form
    className='form' >
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
            <button className='btn btn--back'>&larr;Back</button>
            <button className='btn btn--primary'>Add</button>
        </div>
    </form>
</div>
  )
}

export default AddNewBookmark