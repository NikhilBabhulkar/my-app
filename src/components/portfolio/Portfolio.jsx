import React from 'react'
import Img from "../../assets/csesa.png"
import Img2 from "../../assets/game.png"
import Img3 from "../../assets/compress.png"
import "./portfolio.css"

const data=[
  {
    id:1,
    image:Img2,
    title:"Tic Toc Toe Game",
    github:"https://github.com/NikhilBabhulkar/",
    demo:'https://nikhilbabhulkar.github.io/Projects/Game/index.html'
  },
  {
    id:2,
    image:Img,
    title:"Csesa Official Page",
    github:"https://github.com/NikhilBabhulkar/",
    demo:'https://nikhilbabhulkar.github.io/Csesa-website/Csesa-website/index.html'
  },
  {
    id:3,
    image:Img3,
    title:"Img Compresser Using React",
    github:"https://github.com/NikhilBabhulkar/",
    demo:'https://nikhilbabhulkar.github.io/React/'
  },
  // {
  //   id:4,
  //   image:Img1,
  //   title:"Nikhil Da",
  //   github:"https://github.com",
  //   demo:'www.google.com'
  // }
]

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>My Recent Work </h5>
      <h2>Portfolio</h2>

      <div className="container portfolio_container">
        {
          data.map(({id,image,title,github,demo})=>{
            return(
              <article key={id} className="portfolio_item">
                <div className="portfolio_item_img">
                <img src={image} alt="" />
                </div>
                <h5>{title}</h5>
                <div className="portfolio_item_cta">
                  <a href={github} className="btn btn-primary" target="_blank">GitHub</a>
                  <a href={demo} className="btn " target="_blank">Live Site</a>
                </div>
              </article>
            )
          })
        }
      </div>
    </section>
  )
}

export default Portfolio