import React from 'react'
import BannerBackground from "./imgsbt/home-banner-background.png"
import BannerImage from "./imgsbt/cat.png"
import {FiArrowRight} from "react-icons/fi"


const Home = () => {
  return (


    <div className='home-container'>
        <div className='home-banner-container'>
          <div className='home-bannerImage-container'>
            <img className='img-animals' src={BannerBackground} alt=''/>
          </div>
          <div className='home-text-section'>
            <div className='text-align'>
              <h1 className='primary-heading'>
              Respeito e Cuidado, Cada Toque uma Expressão de Amor!
              </h1>
              <p className='primary'>
                Acesse nosso app pela Google play
              </p>
              <button className='secondary-button'>
                Baixe<FiArrowRight />
              </button>
            </div>
            </div>

          <div className='home-image-container'>
            <img className='img-animals' src={BannerImage} alt='' />
          </div>
        </div>
    </div>


  )
}


export default Home