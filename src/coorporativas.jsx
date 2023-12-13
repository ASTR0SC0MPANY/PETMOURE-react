import React from 'react';
import Footer from "./Footer.jsx"
import './sobre.css'
import {register} from 'swiper/element/bundle'
import Provider from './context/Provider.jsx';


register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Header from './Header.jsx';

function coorporativas(){

    return(
        <Provider>
        <React.StrictMode>
        <Header />

        <div className='container'>

        <h2>Informações Coorporativas</h2>
        <div className="informes-texto">
            <p>
                Bem-vindo ao PetMoure, onde nos dedicamos ao cuidado e bem-estar dos animais de estimação. Nossas políticas corporativas são fundamentais para orientar nossas operações e assegurar que todos os membros da equipe estejam alinhados com os valores e objetivos do PetMoure.
            </p>
        </div>
        <div className="informes-texto" id="etica">

<div className="titulo">

    <h3 className="">1. </h3>
    <h3>Ética e Integridade</h3>

</div>

<div className="informes">

    <p className="numero" id="1.1">1.1 Conformidade Legal: </p>
    <p>Comprometemo-nos a agir em conformidade com todas as leis e regulamentações aplicáveis relacionadas às nossas operações.</p>

</div>

<div className="informes">

    <p className="numero" id="1.2">1.2 Integridade nos Negócios: </p>
    <p>Praticamos princípios éticos nos negócios, promovendo transparência, honestidade e responsabilidade.</p>

</div>

</div>


<div className="informes-texto" id="diversidade">

<div className="titulo">

    <h3 className="">2. </h3>
    <h3>Diversidade e Inclusão</h3>

</div>

<div className="informes">

    <p className="numero" id="2.1">2.1 Ambiente Inclusivo: </p>
    <p>Valorizamos a diversidade e nos esforçamos para criar um ambiente de trabalho inclusivo, onde todos os colaboradores são respeitados e valorizados.</p>

</div>

<div className="informes">

    <p className="numero" id="2.2">2.2 Oportunidades Iguais: </p>
    <p>Comprometemo-nos a oferecer oportunidades iguais de desenvolvimento e promoção para todos os membros da equipe, independentemente de origem, gênero, orientação sexual, entre outros.</p>

</div>

</div>

<div className="informes-texto" id="hst">

<div className="titulo">

    <h3 className="">3. </h3>
    <h3>Saúde e Segurança no Trabalho</h3>

</div>

<div className="informes">

    <p className="numero" id="3.1">3.1 Ambiente Seguro: </p>
    <p>Priorizamos a segurança no local de trabalho, implementando práticas e políticas que garantam um ambiente seguro para todos os colaboradores.</p>

</div>

<div className="informes">

    <p className="numero" id="3.2">3.2 Bem-Estar dos Colaboradores: </p>
    <p>Promovemos o bem-estar físico e mental dos colaboradores, oferecendo suporte e recursos necessários.</p>

</div>

</div>


<div className="informes-texto" id="sustentabilidade">

<div className="titulo">

    <h3 className="">4. </h3>
    <h3>Sustentabilidade</h3>

</div>

<div className="informes">

    <p className="numero" id="4.1">4.1 Responsabilidade Ambiental: </p>
    <p>Comprometemo-nos a adotar práticas sustentáveis em nossas operações, reduzindo nosso impacto ambiental sempre que possível.</p>

</div>

<div className="informes">

    <p className="numero" id="4.2">4.2 Conscientização: </p>
    <p>Buscamos conscientizar nossos colaboradores sobre a importância da sustentabilidade e incentivamos práticas sustentáveis em suas atividades cotidianas.</p>

</div>

</div>

<div className="informes-texto" id="desenvolvimento-profissional">

<div className="titulo">

    <h3 className="">5. </h3>
    <h3>Desenvolvimento Profissional</h3>

</div>

<div className="informes">

    <p className="numero" id="5.1">5.1 Crescimento Contínuo </p>
    <p> Oferecemos oportunidades de desenvolvimento profissional para todos os colaboradores, incentivando a aprendizagem contínua e o aprimoramento de habilidades.</p>

</div>

<div className="informes">

    <p className="numero" id="5.2">5.2 Feedback Construtivo: </p>
    <p>Encorajamos uma cultura de feedback construtivo, proporcionando avaliações regulares e apoio para o crescimento profissional.</p>

</div>

</div>

<div className="informes-texto" id="responsabilidade-social">

<div className="titulo">

    <h3 className="numero">6. </h3>
    <h3>Responsabilidade Social</h3>

</div>

<div className="informes">

    <p className="numero" id="6.1">6.1 Envolvimento na Comunidade: </p>
    <p>Contribuímos positivamente para as comunidades em que operamos, apoiando iniciativas sociais e causas beneficentes.</p>

</div>

<div className="informes">

    <p className="numero" id="6.2">6.2 Voluntariado: </p>
    <p>Incentivamos os colaboradores a participarem de atividades voluntárias que impactem positivamente a sociedade.</p>

</div>

</div>





        </div>
        
        <Footer />
        </React.StrictMode>
        </Provider>

    );
}

export default coorporativas;