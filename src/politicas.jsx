import React from 'react';
import Header from './Header.jsx'
import Footer from "./Footer.jsx"
import './sobre.css'
import {register} from 'swiper/element/bundle'
import Provider from './context/Provider.jsx';

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Politicas(){
    return(
        <Provider>
        <React.StrictMode>
        <Header />

        <div className='container'>

            <h2>Políticas PetMoure</h2>

            <div className="informes-texto">
            <p>
                Bem-vindo ao PetMoure, onde o bem-estar do seu animal de estimação é nossa prioridade. Entendemos que, ocasionalmente, pode ser necessário devolver ou trocar produtos. Nossa política de devolução e troca é projetada para ser transparente e justa, garantindo uma experiência satisfatória para você e seu pet.
            </p>
            </div>

            <div className="informes-texto" id="devolucoes-ou-troca">

                <div className="titulo">
                    <h3 className="">1. </h3>
                    <h3>Devoluções e Trocas</h3>
                </div>

                <div className="informes">

                    <p className="numero" id="1.1">1.1 Devoluções: </p>
                    <p>Aceitamos devoluções de produtos não utilizados e em sua embalagem original dentro de [número de dias] dias a partir da data de recebimento.</p>

                </div>

                <div className="informes">

                    <p className="numero" id="1.2">1.2 Número de Trocas: </p>
                    <p>Caso deseje trocar um produto, entre em contato conosco para discutir as opções disponíveis.</p>

                </div>

            </div>

            <div classNmae="informes-texto" id="condicoes-devolucao-ou-troca">

                <div className="titulo">

                    <h3 className="">2. </h3>
                    <h3>Condições para Devolução ou Troca</h3>

                </div>

                <div className="informes">

                <p classNmae="numero" id="2.1">2.1 Estado do Produto: </p>
                <p>O produto deve estar em condições originais, não utilizado e com todas as etiquetas e acessórios intactos.</p>

                </div>

                <div class="informes">

                <p class="numero" id="2.2">2.2 Prazo de Devolução: </p>
                <p> O produto deve ser devolvido dentro do prazo estipulado para devoluções.</p>

                </div>


            </div>

            <div className="informes-texto" id="processo-devolucao-ou-troca">
                
            </div>



        </div>
        
        <Footer />
        </React.StrictMode>
        </Provider>
    );
}

export default Politicas;