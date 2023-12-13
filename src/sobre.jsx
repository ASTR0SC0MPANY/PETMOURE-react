import React from 'react';
import App from './App.jsx'
import Footer from "./Footer.jsx"
import './sobre.css'
import {register} from 'swiper/element/bundle'
import Provider from './context/Provider.jsx';


register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function sobre(){

    return(
        <Provider>
        <React.StrictMode>
        <App />




       <div className='container'>
        <h2>Sobre a PetMoure</h2>
       
        
        <div className="informes-texto" id="desenvolvimento-profissional">
      


            <div className="informes">

                <p>Bem-vindo ao PetMoure, onde a paixão pelos animais de estimação se encontra com a conveniência da tecnologia. Somos mais do que um petshop online; somos um destino dedicado ao cuidado e felicidade dos seus companheiros peludos.

                    Embarque em uma jornada única conosco, onde o amor pelos animais é a essência de tudo o que fazemos. Na PetMoure, reunimos uma vasta gama de produtos cuidadosamente selecionados para atender às necessidades específicas de seus animais de estimação, desde alimentos nutritivos até acessórios encantadores.</p>

            </div>

            <div className="informes">

                <p>Encorajamos uma cultura de feedback construtivo, proporcionando avaliações regulares e apoio para o crescimento profissional.</p>

            </div>
            
        </div>

        <div className="informes-texto">

            <div className="informes">

                <p className="numero" id="missao">Missão: </p>
                <p>A PetMoure busca fornecer produtos de qualidade para o bem-estar do seu melhor amigo.</p>

        </div>
        
        <div className="informes">

            <p className="numero" id="visao">Visão: </p>
            <p>Trazer conforto e alegria para o seu a cada dia.</p>

        </div> 

        <div className="informes">

            <p className="numero" id="valores">Valores: </p>
            <p>Excelência, sustentabilidade, qualidade e inovação.</p>

        </div>

        </div>
        
        </div> 


        <Footer />
        </React.StrictMode>
        </Provider>

    );
}

export default sobre;