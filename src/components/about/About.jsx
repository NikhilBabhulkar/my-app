import React from 'react'
import "./about.css"
import Img from "../../assets/me.jpeg"
import { FaAward } from "react-icons/fa"
import { FiUsers } from "react-icons/fi"
import { VscFolderLibrary } from "react-icons/vsc"

const About = () => {
  return (
    <section id='about'>
      <h5>Get To Know </h5>
      <h2>About Me</h2>

      <div className="container about_container">
        <div className="about_me">
          <div className="about_me_img">
            <img src={Img} alt="" />
          </div>
        </div>

        <div className="about_content">
          <div className="about_cards">
            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Datalytics</h5>
              <small>Inter in datalytics from last 2 months</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Expericece</h5>
              <small>200+ Expericece</small>
            </article>

            <article className='about_card'>
              <FiUsers className='about_icon' />
              <h5>Expericece</h5>
              <small>200+ Expericece</small>
            </article>
          </div>
          <p>Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Nesciunt repellendus officiis
            saepe praesentium repudiandae libero quam, quo optio
            unde voluptates aspernatur nihil incidunt suscipit
            possimus, sed mollitia! Porro, numquam nisi?</p>
            <a href="#contact" className='btn btn-primary'>Lets Talk</a>
        </div>
        
      </div>
    </section>
  )
}

export default About