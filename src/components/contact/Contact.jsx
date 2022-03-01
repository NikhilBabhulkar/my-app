import React from 'react'
import "./contact.css"
import { useRef } from 'react';
import emailjs from 'emailjs-com';
import {MdOutlineEmail} from "react-icons/md"
import {ImWhatsapp} from "react-icons/im"
import {BsTwitter, BsWhatsapp} from "react-icons/bs"
const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_gptsmid', 'template_72q05lk', form.current, '8SBud-49LTY_AGEWO')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
      
  };
  return (
    <section id='contact'>
      <h5>Get In Touch</h5>
      <h2>Contact Me</h2>

      <div className="container contact_container">
        <div className='contact_options'>
        <article className="contact_option">
          <MdOutlineEmail className='contact_icon'/>
          <h4>Email</h4>
          <h5>nikhilbahulkar2019@gmail.com</h5>
          <a href="https://twitter.com/i/flow/login?input_flow_data=%7B%22requested_variant%22%3A%22eyJsYW5nIjoiZW4ifQ%3D%3D%22%7D"></a>
        </article>

        <article className="contact_option">
          <BsTwitter className='contact_icon'/>
          <h4>Twitter</h4>
          <h5>Nikhil Babhulkar</h5>
        </article>

        <article className="contact_option">
          <ImWhatsapp className='contact_icon'/>
          <h4>WhatApp</h4>
          <h5>Message me</h5>
          <a href="https://api.whatapp.com/send?phone+919359016910">Send Message</a>
        </article>
        </div>

        {
          <form ref={form} onSubmit={sendEmail}>
            <input type="text" name="name" placeholder='Enter Your Name' required/>
            <input type="email" name="email" placeholder='email' required />
            <textarea name="message" name='message' rows="7" required placeholder='Message'></textarea>
            <button className='btn btn-primary'>Send Message</button>
          </form>
        }

      </div>
    </section>
  )
}

export default Contact

