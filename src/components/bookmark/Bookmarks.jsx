import { Link } from 'react-router-dom'
import ReactCountryFlag from 'react-country-flag'
import {HiTrash} from 'react-icons/hi'
import { UseBookmarks } from '../../context/BookmarksProvider'

function Bookmarks() {

 
    const{bookmarks,loading,singleBookmark} = UseBookmarks()
    
   if(loading) return <h2>Loading...</h2>
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
                            className={`bookmarkItem ${singleBookmark.id === bookmark.id ? "current-bookmark":""}`}>
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