import React from 'react'
import IMG from '../images/austin.jpeg'
import {Link} from 'gatsby'
import {HiMenu} from 'react-icons/hi'
import {GrClose} from 'react-icons/gr'
import {useState} from 'react'

const Header2 = () => {
const [toggleOpen, setToggleOpen] = React.useState(true)
    
    return (
        <header className="w-full p-5 text-3xl  md:flex md:justify-between md:items-center">
            <div className="flex items-center justify-between">
                <Link to="/">
                    <img src={IMG} className="w-20 h-20 rounded-full"></img>
                </Link>
                <div>
                   {toggleOpen && (<button onClick={() => setToggleOpen(!toggleOpen)} className="md:hidden"><HiMenu /></button>)} 
                   {!toggleOpen && (<button onClick={() => setToggleOpen(!toggleOpen)} className="md:hidden"><GrClose /></button>)} 
                </div>
                
            </div>
            <div className={"flex items-center justify-center h-screen md:flex md:h-full  " + (toggleOpen ? "hidden" : "block")}>
                <ul className="md:space-x-4 md:flex md:text-xl justify-center items-center">
                   <Link to="/"> <li>Home</li> </Link>
                   <Link to="/services"> <li>Services</li></Link>
                   <Link to="/work"> <li>Work</li></Link>
                   <Link to="/contact"> <li className="px-3 py-2 text-white bg-gray-700 rounded">Let's Talk</li></Link>
                </ul>
            </div>
        </header>
    )
    
}

export default Header2