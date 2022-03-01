import React from 'react'
import CV from "../../assets/Resume.pdf"

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Downlode CV</a>
        <a href="#contact" className='btn-primary btn'>Contact Me</a>
    </div>
  )
}

export default CTA