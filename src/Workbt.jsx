import React from 'react'
import PickMeals from "./imgsbt/pick-meals-image.png"
import ChooseMeals from "./imgsbt/choose-image.png"
import DeliveryMeals from "./imgsbt/delivery-image.png"


const Work = () => {
    const workInfoData =[
        {
        image: PickMeals,
        title: "Qualidade",
        text: "Um trabalho feito por excelentes profissionais. "  
        },
        {
        image: ChooseMeals,
        title: "Inovação",
        text: "Tecnologia de última geração para um melhor tratamento. "  
        },
        {
        image: DeliveryMeals,
        title: "Sustentável",
        text: "Protegendo a natureza e fazendo um serviço com o meio ambiente. "  
        }
    ]
    return <div className='work-section-wrapper'>
        <div className='work-section-top'>
            <p className='primary-subheading'>
                Como funciona?
            </p>
            <p className='primary-text'>
                A operação é feita através de um aplicativo que faz o agendamento dos clientes e o horarário do serviço.
            </p>
        </div>
        <div className='work-section-bottom'>
            {
                workInfoData.map((data) => (
                    <div className='work-section-info'>
                        <div className='info-boxes-img-container'>
                            <img img={data.image} alt='' />
                        </div>
                        <h2>{data.title}</h2>
                        <p>{data.text}</p>
                    </div>
                ))}
        </div>
    </div>
}


export default Work