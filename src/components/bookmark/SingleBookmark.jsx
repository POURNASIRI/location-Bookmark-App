import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UseBookmarks } from '../../context/BookmarksProvider'

function SingleBookmark() {

  const {id} = useParams()
  const{singleBookmark,getSingleBookmark,loading} = UseBookmarks()

    useEffect(()=>{
        getSingleBookmark(id)
    },[id])

    const navigate = useNavigate()
    console.log(loading)

    if(loading ||!singleBookmark ) return <h2>Loading...</h2>
      

    const handleback = ()=>{
      navigate("/bookmarks")
    }
    const{cityName,country,countryCode,latitude,longitude} = singleBookmark
  return (
    <div>
        <button
        onClick={handleback} 
        className='btn btn--back'>Back</button>
        <ul style={{marginTop:"20px", fontWeight:"bold"}}>
          <li className='bookmarkItem'>CityName: {cityName}</li>
          <li className='bookmarkItem'>Country : {country}</li>
          <li className='bookmarkItem'>countryCode: {countryCode}</li>
          <li className='bookmarkItem'>Latitude: {latitude}</li>
          <li className='bookmarkItem'>Longitude: {longitude}</li>
        
        </ul>
    </div>
  )
}

export default SingleBookmark