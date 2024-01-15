import React, { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import useHotels from '../../context/HotelsProvider'

function SingleHotel() {

    const {id} = useParams()
    const{singleHotel,getSigleHotel,singleLoading} = useHotels()
    useEffect(()=>{
        getSigleHotel(id)
    },[id])

    if(singleLoading){
        return <h1>Loading...</h1>
    }
  return (
      <div className='room'>
          <div className="roomDetail">
              <h2>{singleHotel.name}</h2>
              <div>
                  {singleHotel.number_of_reviews} reviews &bull;
                   {singleHotel.smart_location}
              </div>
              <img src={singleHotel.xl_picture_url} alt={singleHotel.name} />
          </div>
      </div>
    )
}

export default SingleHotel