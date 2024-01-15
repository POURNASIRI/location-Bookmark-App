import './App.css'
import AppLayout from './components/Layout/AppLayout'
import LocationList from './components/LocationList/LocationList'
import Navbar from './components/Navbar/Navbar'
import {Route,Routes} from 'react-router-dom'
import Hotels from './components/hotels/Hotels'
import SingleHotel from './components/hotels/SingleHotel'

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
        </Routes>
    </div>
  )
}

export default App