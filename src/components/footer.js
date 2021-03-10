import React from 'react'
import {FaTwitter, FaDribbble, FaGithub} from 'react-icons/fa'

export default function footer() {
    return (
        <div className="w-full text-xl md:flex md:justify-between md:flex-row-reverse md:items-center ">
           <div className="flex mb-4 space-x-6 md:mb-0 m md:flex md:items-center md:justify-center">
                <span><FaTwitter /></span>
                <span><FaDribbble /></span>
                <span><FaGithub /></span>
            </div>
            <p> &#169; Austin Merrill {new Date().getFullYear()}</p>
         
        </div>
    )
}
