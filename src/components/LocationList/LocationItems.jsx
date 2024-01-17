import React from 'react'
import { Link } from 'react-router-dom'

function LocationItems({location}) {
  return (
    <div  className='locationItem'>
       <Link to={`/hotels/${location.id}?lat=${location.latitude}&lng=${location.longitude}`}>
       <img src={location.picture_url.url} alt={location.name} />
        <div className="locationItemDesc">
            <p className='location'>
                {location.smart_location}
            </p>
            <p className='name'>
                {location.name}
            </p>
            <p className='price'>
            €&nbsp;{location.price} &nbsp;
            <span>Night</span>
            </p>
        </div>
       </Link>
    </div>
  )
}

export default LocationItems