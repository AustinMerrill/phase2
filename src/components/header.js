import * as React from "react"
import {Link} from "gatsby"
import IMG from "../images/austin.jpeg"
import {HiMenu} from "react-icons/hi"
import {GrClose} from "react-icons/gr"
import {useState} from 'react'

const Header = ({ siteTitle }) => {
  {/*  react hooks -> const [value, setValue] = React.useState(false/true)  */}

  const [toggleMenu, setToggleMenu] = React.useState(true) 
  return (
    <header className="items-center justify-between w-full md:flex ">
      {/* div with image and toggle buttons */}
      <div className="flex items-center justify-between w-full p-5">
       <Link to="/">
         <img className="w-20 h-20 rounded-full" src={IMG}/>
       </Link>
       <div className="">
          {/* menuOpen && ( ) */}
          {toggleMenu && ( <button onClick={() => setToggleMenu(!toggleMenu) } className="text-4xl focus:outline-none md:hidden"><span><HiMenu /></span></button>)}
         {!toggleMenu && (<button onClick={() => setToggleMenu(!toggleMenu)} classname="text-4xl focus:outline-none md:hidden"><span><GrClose/></span></button>)}
        
       </div> 
      </div>
      {/* menu global navigation links */}
    
      <div className={"h-screen flex justify-center items-center flex-col text-4xl md:flex md:h-full  " + (toggleMenu ? "hidden" : "block")}>
        <ul className="space-x-4 md:flex md:text-lg md:w-full md:items-center">
            <Link to="/"><li><h2 className="font-bold transition duration-500 hover:text-blue-500">Home</h2></li> </Link>
            <Link to="/work"><li><h2 className="font-bold transition duration-500 hover:text-blue-500">Work</h2></li></Link>
           <Link to="/services"><li><h2 className="font-bold transition duration-500 hover:text-blue-500">Services</h2></li></Link> 
            <Link to="/contact"><li><h2 className="font-bold text-center transition duration-500 md:hover:text-white hover:text-blue-500 md:hover:bg-gray-600 md:hover:shadow-xl md:bg-gray-800 md:text-white md:px-4 md:py-2 md:rounded md:w-40">Let's Talk</h2></li></Link>
        </ul>
      </div>
    </header>
  )

}


export default Header
