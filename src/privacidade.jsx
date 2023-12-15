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

function privacidade(){

    return(
        <Provider>
        <React.StrictMode>
        <Header/>

        <div className='container'>
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

        </div>

        <div className="informes-texto" id="cookies">

            <div className="titulo">

                <h3 className="">5. </h3>
                <h3>Cookies e Tecnologias Semelhantes:</h3>

            </div>

            <div className="informes">

                <p className="numero" id="5.1">5.1 Cookies: </p>
                <p>Utilizamos cookies e tecnologias semelhantes para melhorar a funcionalidade do site e personalizar sua experiência.</p>

            </div>

            <div className="informes">

<p className="numero" id="5.2">5.2 Opções do Usuário </p>
<p>Você pode configurar seu navegador para recusar cookies, mas isso pode afetar a funcionalidade do site.</p>

</div>

</div>

<div className="informes-texto" id="seus-direitos">

<div className="titulo">

    <h3 className="">6. </h3>
    <h3>Seus Direitos</h3>

</div>

<div className="informes">

<p className="numero" id="6.1">6.1 Acesso e Correção: </p>
<p> Você tem o direito de acessar e corrigir suas informações pessoais a qualquer momento.</p>

</div>

<div className="informes">

<p className="numero" id="6.2">6.2 Exclusão de Conta: </p>
<p>Você pode excluir sua conta a qualquer momento, sujeito a requisitos legais.</p>

</div>

</div>
        
        <div className="informes-texto" id="criancas">

            <div className="titulo">

                <h3 className="">7. </h3>
                <h3>Crianças</h3>

            </div>

            <div className="informes">

<p className="numero" id="7.1">7.1 Crianças: </p>
<p> Não coletamos intencionalmente informações de crianças menores de 13 anos.</p>

</div>

</div>

 
<div className="informes-texto" id="alteracoes">

<div className="titulo">

    <h3 className="">8. </h3>
    <h3>Alterações na Política de Privacidade</h3>

</div>

<div className="informes">

<p className="numero" id="8.1">8.1 Parceiros de Serviços: </p>
<p>Notificaremos os usuários sobre alterações significativas nesta Política de Privacidade por meio do site ou por e-mail.</p>

</div>

</div>
</div>
</div>
        <Footer />
        </React.StrictMode>
        </Provider>

    );
}

export default privacidade;