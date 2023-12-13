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




        <h2>Políticas de Privacidade</h2>

        <div className="informes-texto">
            <p>
                Bem-vindo ao PetMoure, um petshop online dedicado ao bem-estar e cuidado de seus animais de estimação. A sua privacidade é uma prioridade para nós. Esta Política de Privacidade explica como coletamos, usamos, divulgamos e protegemos as informações pessoais dos usuários do PetMoure.
            </p>
        </div>

        <div className="informes-texto" id="informacoes-coletadas">

<div className="titulo">

    <h3 className="">1. </h3>
    <h3>Informações coletadas</h3>

</div>
<div className="informes">

<p className="numero" id="1.1">1.1 Informações de Registro: </p>
<p> Ao criar uma conta no PetMoure, coletamos informações como nome, endereço de e-mail e senha.</p>

</div>
<div className="informes">

<p className="numero" id="1.2">1.2 Informações de Compra: </p>
<p>Ao efetuar uma compra, podemos coletar informações de pagamento, endereço de entrega e detalhes dos produtos </p>

</div>  
<div className="informes">

<p className="numero" id="1.3">1.3 Informações Automáticas: </p>
<p> Podemos coletar automaticamente informações sobre o seu dispositivo, navegador, endereço IP e padrões de uso do site.</p>

</div>

</div>

        <div className="informes-texto" id="uso-das-informacoes">

            <div className="titulo">

                <h3 className="">2. </h3>
                <h3>Uso das Informações</h3>

            </div>
            <div className="informes">

<p className="numero" id="2.1">2.1 Melhoria dos Serviços: </p>
<p>Utilizamos as informações coletadas para personalizar sua experiência, entender suas preferências e melhorar nossos produtos e serviços.</p>

</div>

<div className="informes">

<p className="numero" id="2.2">2.2 Processamento de Pedidos: </p>
<p>As informações de compra são utilizadas para processar e entregar seus pedidos com eficiência.</p>

</div>
<div className="informes">

<p className="numero" id="2.3">2.3 Comunicações: </p>
<p>Podemos utilizar seu endereço de e-mail para enviar informações sobre promoções, novos produtos e atualizações relevantes. Você pode optar por não receber essas comunicações.</p>

</div>
</div>

<div className="informes-texto" id="compartilhamento-de-informacoes">

            <div className="titulo">

                <h3 className="">3. </h3>
                <h3>Compartilhamento de Infomações</h3>

            </div>

            <div className="informes">

<p className="numero" id="3.1">3.1 Parceiros de Serviços: </p>
<p>Podemos compartilhar suas informações com provedores de serviços terceirizados que nos ajudam a operar nosso site, processar transações e fornecer serviços relacionados.</p>

</div>

<div className="informes">

<p className="numero" id="3.2">3.2 Requisitos Legais: </p>
<p>Podemos divulgar informações pessoais em resposta a uma intimação ou quando exigido por lei.</p>

</div>

</div>

<div className="informes-texto" id="seguranca">

<div className="titulo">

    <h3 className="">4. </h3>
    <h3>Segurança</h3>


</div>

<div className="informes">

<p className="numero" id="4.1">4.1 Medidas de Segurança: </p>
<p>Implementamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração, divulgação ou destruição.</p>

</div>

<div className="informes">

                <p className="numero" id="4.2">4.2 Senha: </p>
                <p> É sua responsabilidade proteger a senha da sua conta. Recomendamos o uso de senhas fortes e a alteração regular da senha.</p>

            </div>

        <Footer />
        </React.StrictMode>
        </Provider>

    );
}

export default sobre;