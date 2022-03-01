import React from 'react'
import "./header.css"
import CTA from './CTA'
import ME from '../../assets/try.png'
import Headersocial from './Headersocial'

const Header = () => {
  return (
    <header>
      <div className="container header_container">
        <h5>Hello I'm</h5>
        <h1>Nikhil Babhulkar</h1>
        <h5 className="text_light">2nd Year Computer Science Student</h5>
        <CTA/>
        <Headersocial/>
        <div className="me">
          <img src={ME} alt="" srcset="" />
        </div>
        <a href="#contact" className='scroll-down'>Scroll Down</a>
      </div>
    </header>
    
  )
}

export default Header