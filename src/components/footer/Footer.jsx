import React from 'react'
import {GrFacebook} from "react-icons/gr"
import {BsInstagram} from "react-icons/bs"
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href="" className='footer_logo'></a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Exoerience</a></li>
        <li><a href="#portfolio">Porifolio</a></li>
        <li><a href="#contact">Contact</a></li>
        <li><a href="#test">Testimonials</a></li>
      </ul>

    <div className="footer_socials">
      <a href="www.facebook.com"><GrFacebook/></a>
      <a href=""><BsInstagram/></a>
    </div>
    <div className="footer_copyright">
      <small>&copy; Nikhil Babhulkar</small>
    </div>
      </footer> 
  )
}

export default Footer