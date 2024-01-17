import { Outlet } from 'react-router-dom'
import Map from '../Map/Map'
import { UseBookmarks } from '../../context/BookmarksProvider'

function BookmarkLayout() {
  const{bookmarks} = UseBookmarks()
   
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