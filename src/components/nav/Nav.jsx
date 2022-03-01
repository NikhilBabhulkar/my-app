import React from 'react'
import "./nav.css"
import {FcHome} from "react-icons/fc"
import {BiUser} from "react-icons/bi"
import {GiNotebook} from "react-icons/gi"
import {FcServices} from "react-icons/fc"
import {FcBusinessContact} from "react-icons/fc"
import { useState } from 'react'

const Nav = () => {
  const [active, setactive] = useState('#')
  return (
    <nav>
      <a href="#" className={active==='#' ? 'active':''}><FcHome/></a>
      <a href="#about" onClick={()=>setactive('#about')} className={active==='#about' ? 'active':''}><BiUser/></a>
      <a href="#experience" onClick={()=>setactive('#experience')} className={active==='#experience' ? "active":''}><GiNotebook/></a>
      <a href="#services" onClick={()=>setactive('#services')} className={active==='#services' ? "active":''}><FcServices/></a>
      <a href="#contact" onClick={()=>setactive('#contact')} className={active==='#contact' ? "active":''}><FcBusinessContact/></a>
    </nav>
  )
}

export default Nav