import React from 'react'

function LocationItems({location}) {
  return (
    <div  className='locationItem'>
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
    </div>
  )
}

export default LocationItems