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
    <header className="w-full md:flex  items-center justify-between ">
      {/* div with image and toggle buttons */}
      <div className="flex justify-between w-full items-center p-5">
       <Link to="/">
         <img className="w-20 h-20 rounded-full" src={IMG}/>
       </Link>
       <div className="">
          {/* menuOpen && ( ) */}
          {toggleMenu && ( <button onClick={() => setToggleMenu(!toggleMenu) } className="focus:outline-none text-4xl md:hidden"><span><HiMenu /></span></button>)}
         {!toggleMenu && (<button onClick={() => setToggleMenu(!toggleMenu)} classname="focus:outline-none text-4xl md:hidden"><span><GrClose/></span></button>)}
        
       </div> 
      </div>
      {/* menu global navigation links */}
    
      <div className={"h-screen flex justify-center items-center flex-col text-4xl md:flex md:h-full  " + (toggleMenu ? "hidden" : "block")}>
        <div className="md:flex md:text-lg space-x-4  md:w-full  ">
            <h2 className="">Home</h2>
            <h2 className="">Work</h2>
            <h2 className="">Services</h2>
            <h2 className="md:w-20">Let's Talk</h2>
        </div>
      </div>
    </header>
  )

}


export default Header
