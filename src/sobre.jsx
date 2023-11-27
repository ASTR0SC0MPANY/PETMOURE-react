import React from 'react';
import App from './App.jsx'
import Footer from "./Footer.jsx"
import './sobre.css'
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';



function sobre(){
   

    return(
        <React.StrictMode>
        <App />
        {/*parte da informação*/}
        <h3>Sobre a PetMoure</h3>
        
        <div className="informes-textoo" id="desenvolvimento-profissional"> 
            <div className="informess">
                <p>Bem-vindo ao PetMoure, onde a paixão pelos animais de estimação se encontra com a conveniência da tecnologia. Somos mais do que um petshop online; somos um destino dedicado ao cuidado e felicidade dos seus companheiros peludos.  Embarque em uma jornada única conosco, onde o amor pelos animais é a essência de tudo o que fazemos. Na PetMoure, reunimos uma vasta gama de produtos cuidadosamente selecionados para atender às necessidades específicas de seus animais de estimação, desde alimentos nutritivos até acessórios encantadores.</p>
                 <p>Encorajamos uma cultura de feedback construtivo, proporcionando avaliações regulares e apoio para o crescimento profissional.</p>
            </div>
        </div>

        <div className="informes-textoo">

        <div class="informess">
            <p class="numero" id="missao">Missão: </p>
            <p>A PetMoure busca fornecer produtos de qualidade para o bem-estar do seu melhor amigo.</p>
        </div>

        <div className="informess">
            <p class="numero" id="valores">Valores: </p>
            <p>Excelência, sustentabilidade, qualidade e inovação.</p>

        </div>

        </div>

        <Footer />
        </React.StrictMode>
      

    );
}

export default sobre;