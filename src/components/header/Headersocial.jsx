import React from 'react'
import {BsLinkedin} from "react-icons/bs"
import {SiInstagram} from "react-icons/si"
import {FiTwitter} from "react-icons/fi"
const Headersocial = () => {
  return (
    <div className="header_social">
        
        <a href="https://linkedin.com" target="_blank"><BsLinkedin/></a>
        <a href="https://instagram.com" target="_blank"><SiInstagram/></a>
        <a href="https://twiter.com" target="_blank"><FiTwitter/></a>
    </div>
  )
}

export default Headersocial