import React, { useEffect } from 'react'
import { Link, useSearchParams } from 'react-router-dom'
import useHotels from '../../context/HotelsProvider'

function Hotels() {


            const {locationData,loading} = useHotels()
  
      
     
        if(loading){
            return <h1>Loading...</h1>
        }
      return (
        <div className='searchList'>
            <h2>Search Reasult({locationData.length})</h2>
            {
                locationData.map(item=>(
                    <Link
                    to={`/hotels/${item.id}?lat=${item.latitude}&lon=${item.longitude}`} 
                    key={item.id}>
                        <div className={`searchItem`}>
                            <img src={item.picture_url.url} alt={item.name} />
                            <div className="searchItemDesc">
                                <p className="location">{item.smart_location}</p>
                                <p className="name">{item.name}</p>
                                <p className='price'>
                                    €&nbsp;{item.price} &nbsp;
                                    <span>Night</span>
                                </p>
                            </div>
                        </div>
                    </Link>
                ))
            }
        </div>
      )
}

export default Hotels



