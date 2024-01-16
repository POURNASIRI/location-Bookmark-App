import { Outlet } from 'react-router-dom'
import Map from '../Map/Map'
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

function BookmarkLayout() {
   
  return (
    <div className='appLayout'>
        <div className='sidebar'>
            <Outlet/>
        </div>
        <Map markerLocation={bookmarks} />
    </div>
  )
}

export default BookmarkLayout