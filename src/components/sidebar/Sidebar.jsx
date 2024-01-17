import React from 'react'
import { useSidebar } from '../../context/SidebarProvider'
import { MdHome } from "react-icons/md";
import { IoLocationSharp } from "react-icons/io5";
import { IoIosBookmark } from "react-icons/io";
import { HiMenu } from 'react-icons/hi';
import { Link } from 'react-router-dom';



const menuItem = [
    {
        path:"/",
        name:"Home",
        icon:<MdHome />
    },
    {
        path:"/hotels",
        name:"Hotels",
        icon:<IoLocationSharp />
    },
    {
        path:"/bookmarks",
        name:"Bookmark List",
        icon:<IoIosBookmark />
    },
]


function Sidebar({children}) {
    const{showSidebar,setShowSidebar} = useSidebar()
  return (
    <div className='side-navbar-container'>
        <div className={`side-navbar ${showSidebar ?"activeSlide": ""}`}>
            <div className="side-navbar__topSection">
                <h1>B&A</h1>
                <HiMenu
                className='menuIcon'
                onClick={()=>setShowSidebar(false)}
                size={30}/>
            </div>
            <div className='menuItem'>
                {
                    menuItem.map(item=>(
                        <Link
                        className='menuLinks'
                        to={item.path} 
                        key={item.name}>
                            <span>{item.icon}</span>
                            <h4>{item.name}</h4>
                        </Link>
                    ))
                }
            </div>
        </div>
        <main>{children}</main>
    </div>
  )
}

export default Sidebar