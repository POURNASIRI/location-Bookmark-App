import { MdLocationOn} from 'react-icons/md'
import {HiCalendar ,HiSearch} from 'react-icons/hi'
import { useState } from 'react'
import { format } from 'date-fns'
import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file
import { DateRange } from 'react-date-range'; //date fns
import { Link, createSearchParams, useNavigate, useSearchParams } from 'react-router-dom'
import GuestOptions from './GuesOptions';
import { useSidebar } from '../../context/SidebarProvider';



function Headers() {

        // states:
        const [searchParams,setSearchParams] = useSearchParams()
        const[destination,setDestination] = useState(searchParams.get("destination") || "")
        const[openOptions,setOpenOptions] = useState(false)
        const[openDate,setopenDate] = useState(false)
        const{showSidebar,setShowSidebar} = useSidebar()
    
        // default options
        const[options,setOptions] = useState({
            adult:1,
            children:0,
            room:1
        })

        // fore Date picker
        const[date,setDate] = useState(
            {
                startDate: new Date(),
                endDate: new Date(),
                key: 'selection',
            }
        )
            
       

        // handleOptions to select options
        const handleOptions = (type,operation)=>{
           setOptions(prev=>{
            return(
                {
                   ...prev,
                   [type] : operation === "inc" ? options[type] + 1 : options[type] -1 
                }
            )
           })
        }



        // NOTE: when we want pass object as query to url
        // we must use createSearchParams from react router dom
        // then we use search and setSearchParams
        // createSearchParams is an Object
        const navigate = useNavigate()
       

        //search btn and set query string
         const handleSearch = ()=>{
            const encoded = createSearchParams({
                date:JSON.stringify(date),
                destination,
                options:JSON.stringify(options)
            })
            navigate({
                pathname:"hotels",
                search:encoded.toString()
            })
            
            
        }
       
  return (
    <div className='header'>
        <div className="headerSearch">
            {
                !showSidebar && 
                <button
                className='homeBtn'
               onClick={()=>setShowSidebar(!showSidebar)}
               >
                   Menu
               </button>
            }
       
            {/* search location div */}
            <div className="headerSearchItem">
                <MdLocationOn className='headerIcon locationIcon'/>
                <input 
                value={destination}
                onChange={(e)=>setDestination(e.target.value)}
                type="text"
                placeholder='where to go...?'
                className='headerSearchInput'
                name='destination'
                id='destination'
                 />
                 <span className="seperator"></span>
            </div>


            {/* calender div */}
            <div className="headerSearchItem">
                <HiCalendar className="headerIcon dateIcon"/>
                <div
                onClick={()=>setopenDate(!openDate)} 
                // date fns library
                className="dateDropDown">
                 {`${format(date.startDate, "MM/dd/yyyy")} to ${format(
                    date.endDate,
                    "MM/dd/yyyy"
                    )}`}
                </div>
                {/* dateRange library */}
                {
                    openDate && 
                    <DateRange
                    onChange={(e)=>setDate(e.selection)}
                    className='date'
                    ranges={[date]}
                    minDate={date.startDate}
                     
                    />
                }
                <span className="seperator"></span>
            </div>


            {/* options div */}
            <div className="headerSearchItem">
                <div id="optionDropDown"onClick={()=>setOpenOptions(!openOptions)} >
                    {options["adult"]} adult 
                     &bull;
                     {' '}  
                     {options["children"]} children 
                    &bull;
                    {' '} 
                     {options["room"]} room
                </div>
                {
                    openOptions 
                    && 
                    <GuestOptions
                    setOpenOptions={setOpenOptions}
                    handleOptions={handleOptions}
                    options={options}
                    setOptions={setOptions}
                    />
                }
            <span className="seperator"></span>
            </div>



            {/* header search div */}
            <div className="headerSearchItem">
                <button onClick={handleSearch} className='headerSearchBtn'>
                    <HiSearch className='headerIcon'/>
                </button>
            </div>
        </div>
    </div>
  )
}

export default Headers




