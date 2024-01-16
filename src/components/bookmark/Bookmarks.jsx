import { Link } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import {HiTrash} from 'react-icons/hi'


const bookmarks =  [
    {
      "cityName": "Hombleux",
      "country": "France",
      "countryCode": "FR",
      "latitude": "49.761308205624985",
      "longitude": "2.96630859375",
      "host_location": "Hombleux France",
      "id": 2
    },
    {
      "cityName": "Erlenbach",
      "country": "Germany",
      "countryCode": "DE",
      "latitude": "49.1008472617129",
      "longitude": "7.902680741190748",
      "host_location": "Erlenbach Germany",
      "id": 3
    },
  ]


function Bookmarks() {

 
    
    
   


  return (
    <div>
        <h2>Bookmark List</h2>
        <div className="bookmarkList">
            {
                bookmarks.map((bookmark)=>{
                    return (
                        <Link
                        key={bookmark.id} 
                        to={`${bookmark.id}?lat=${bookmark.latitude}&lng=${bookmark.longitude}`}>
                         <div
                            key={bookmark.id} 
                            className={`bookmarkItem`}>
                            <ReactCountryFlag svg countryCode={bookmark.countryCode}/>
                            &nbsp;<strong>{bookmark.cityName}</strong>
                            &nbsp;<span>{bookmark.country}</span>
                        <span
                        className='trash'>
                            <HiTrash/>
                        </span>
                        </div>
                        </Link>
                    )
                   
                })

            }
        </div>
    </div>
  )
}

export default Bookmarks