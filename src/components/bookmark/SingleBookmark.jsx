import axios from 'axios'
import React, { useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { UseBookmarks } from '../../context/BookmarksProvider'

function SingleBookmark() {

  const {id} = useParams()
  const{singleBookmark,getSingleBookmark,loading} = UseBookmarks()
  const{cityName,country,countryCode,latitude,longitude} = singleBookmark
  const navigate = useNavigate()




    useEffect(()=>{
        getSingleBookmark(id)
    },[id])

    const handleback = ()=>{
      navigate("/bookmarks")
    }
    

    if(loading ||!singleBookmark ) return <h2>Loading...</h2>
      

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