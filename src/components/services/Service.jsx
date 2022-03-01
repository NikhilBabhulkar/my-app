import React from 'react'
import "./services.css"
import { BiCheck } from "react-icons/bi"

const Service = () => {
  return (
    <section id='services'>
      <h5>What i offers</h5>
      <h2>Services</h2>

      <div className="container services_container">
        <article className="service">
          <div className="service_head">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>

          </ul>

        </article>

        <article className="service">
          <div className="service_head">
            <h3>Web-development</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>

        </article>

        <article className="service">
          <div className="service_head">
            <h3>Cyber-Security</h3>
          </div>
          <ul className="service_list">
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            <li>
              <BiCheck className='service_list_icons' />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
            </li>
            
          </ul>

        </article>


      </div>
    </section>
  )
}

export default Service