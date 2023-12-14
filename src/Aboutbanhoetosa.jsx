import React from 'react'
import AboutBackground from "./imgsbt/about-background.png"
import AboutBackgroundImage from "./imgsbt/dog.png"
import {BsFillPlayCircleFill} from "react-icons/bs"


const About = () => {
  return (
    <div className='about-section-container'>
        <div className='about-background-image-container'>
            <img src={AboutBackground} alt=''/>
        </div>
        <div className='about-section-image-container'>
            <img  src={AboutBackgroundImage} style={{width:"660px", height:"auto"}} alt=''/>
        </div>
        <div className='about-section-text-content'>
            <p className='primary-subheading'>Sobre</p>
            <h1 className='primary-heading'>
                Para um banho de Qualidade
            </h1>


            <p className='primary-text'>
            TRANSFORMANDO PELOS EM CARINHOS, CADA TOQUE É UM GESTO DE AMOR.
            </p>
            <p className='primary-text'>
            MAIS DO QUE CUIDAR DE PELAGEM, É ACARICIAR COM AMOR CADA PEDACINHO DE PELO.
            </p>
            <p className='primary-text'>
            NO MUNDO DOS PETS, BANHO E TOSA SÃO SINÔNIMOS DE CARINHO, CUIDADO E FOFURA.
            </p>
            <div className='about-buttons-container'>
                <button style={{backgroundColor:"#fff"}} className='watch-video-button'>
                   
                    <BsFillPlayCircleFill /> Video
                </button>
            </div>
        </div>
    </div>
  )
}


export default About