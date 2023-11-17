
import './Carrossel.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState, useEffect } from 'react';
import {Swiper, SwiperSlide} from 'swiper/react'

function Carrossel() {

  const [slidesPerView, setSliderPerView] = useState(2)
  const data = [
    { id: 1, image: 'carrossel1.png'},
    { id: 2, image: 'carrossel2.png'},
    { id: 3, image: 'carrossel3.png'},
  ]

  useEffect(() => {

    function handleResize(){
      if(window.innerWidth < 720) {
        setSliderPerView(1);
      }else{
        setSliderPerView(1);
      }
    }

    handleResize();

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }

  }, [])

  return (
    <div className='container-carrossel'>
      <Swiper
        slidesPerView={slidesPerView}
        pagination={{ clickable: true}}
        navigation
      >
        {data.map( (item) => (
          <SwiperSlide key={item.id}>
            <img 
              src={item.image}
              alt='Slider'
              className='slide-item'
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Carrossel;

