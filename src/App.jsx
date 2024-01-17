import './App.css'
import AppLayout from './components/Layout/AppLayout'
import LocationList from './components/LocationList/LocationList'
import Navbar from './components/navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Hotels from './components/hotels/Hotels'
import SingleHotel from './components/hotels/SingleHotel'
import BookmarkLayout from './components/Layout/BookmarkLayout'
import Bookmarks from './components/bookmark/Bookmarks'
import SingleBookmark from './components/bookmark/SingleBookmark'
import AddNewBookmark from './components/bookmark/AddNewBookmark'

function App() {


  return (
    <div>
        <Navbar/>
        <Routes>
          <Route path='/' element={<LocationList/>}/>
          <Route path='/hotels' element={<AppLayout/>}>
            <Route  index element={<Hotels/>}/>
            <Route  path=':id' element={<SingleHotel/>}/>
          </Route>
          <Route path='/bookmarks' element={<BookmarkLayout/>}>
            <Route  index element={<Bookmarks/>}/>
            <Route  path=':id' element={<SingleBookmark/>}/>
            <Route  path='add' element={<AddNewBookmark/>}/>
          </Route>
        </Routes>
    </div>
  )
}

export default App