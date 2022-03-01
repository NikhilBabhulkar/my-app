import React from 'react'
import "./test.css"
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import { Pagination } from 'swiper';
import { Scrollbar } from 'swiper';
import Img1 from "../../assets/g.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';

const data = [
  {
    id: 1,
    images: Img1,
    name: 'jay Maharastara'
  },
  {
    id: 1,
    images: Img1,
    name: 'jay shivray'
  },
  {
    id: 1,
    images: Img1,
    name: 'jay '
  }
]

const Test = () => {
  return (
    <section id='test'>
      <h5>Review From Clients</h5>
      <h2>Testimonials</h2>

      <Swiper className="container test_container" 
      modules={[ Pagination, Scrollbar]}
    
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      onSwiper={(swiper) => console.log(swiper)}
      onSlideChange={() => console.log('slide change')}>
        {
          data.map(({ id, images, name }, index) => {
            return (
              <SwiperSlide key={index} className='test'>
                <div className="client_avtar">
                  <img src={images} alt="" />
                </div>
                <h5 client_name>{name}</h5>
                <small client_review>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, aliquid culpa quos aperiam minus eum quod tempora sint natus
                  similique quia, animi doloribus rerum fugiat laboriosam sunt odit fugit debitis.
                </small>
              </SwiperSlide>
            )
          })
        }
      </Swiper>
    </section>
  )
}

export default Test