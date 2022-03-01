import React from 'react'
import "./experience.css"
import { BsPatchCheckFill } from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
      <h5>What Skills I Have </h5>
      <h2>My Experience</h2>

      <div className="container experience_container">
        <div className="experient_frontend">
          <h3>Frontend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>HTML</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>JavaScript</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>React</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>Python</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>

        <div className="experience_detail">
          <h3>Backend Development</h3>
          <div className="experience_content">
            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>Django</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>Nodejs</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>Php</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>MySql</h4>
                <small className='text-light'>Intermidiate</small>
              </div>
            </article>

            <article className="experience_details">
              <BsPatchCheckFill className='experient_detail_icons' />
              <div>
                <h4>Java</h4>
                <small className='text-light'>Experienced</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience