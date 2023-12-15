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
                <div className="titulo">

                <h3 className="">3. </h3>
                <h3>Processo de Devolução e Troca</h3>

                </div>

                <div className="informes">

                <p className="numero" id="3.1">3.1 Notificação: </p>
                <p>Entre em contato conosco através do nosso serviço de atendimento ao cliente para notificar sobre a intenção de devolução ou troca.</p>

                </div>

                <div className="informes">

                <p className="numero" id="3.2">3.2 instruções: </p>
                <p>Forneceremos instruções sobre como proceder com a devolução ou troca.</p>

                </div>

            </div>

            <div className="informes-texto" id="custos">

            <div className="titulo">

                <h3 className="">4. </h3>
                <h3>Custos de Devolução e Troca</h3>

            </div>

            <div className="informes">

                <p className="numero" id="4.1">4.1 Devolução de Produto com Defeito: </p>
                <p> Se o produto estiver defeituoso ou fora das especificações, cobriremos os custos de devolução.</p>

            </div>

            <div className="informes">

                <p className="numero" id="4.2">4.2 Outras Devoluções e Trocas: </p>
                <p>Os custos de envio para devolução ou troca são de responsabilidade do cliente.</p>

            </div>

            </div>

            <div className="informes-texto" id="reembolso">
                <div className="titulo">

                <h3  className="">5. </h3>
                <h3>Reembolso</h3>

                </div>

                <div  className="informes">

                <p  className="numero" id="5.1">5.1 Processamento </p>
                <p>O reembolso será processado assim que recebermos e avaliarmos o produto devolvido.</p>

                </div>

                <div  className="informes">

                <p  className="numero" id="5.2">5.2 Método de Reembolso: </p>
                <p> O reembolso será feito no mesmo método de pagamento usado na compra.</p>

            </div>

            </div>

            <div className="informes-texto" id="nao-elegiveis">

            <div className="titulo">

                <h3 className="">6. </h3>
                <h3>Produtos não Elegíveis para Devolução ou Troca</h3>

            </div>

            <div className="informes">

                <p className="numero" id="6.1">6.1 Produtos Personalizados: </p>
                <p>Produtos feitos sob medida ou personalizados não são elegíveis para devolução ou troca, a menos que estejam defeituosos.</p>

            </div>

            </div>

            <div className="informes-texto" id="danos-transporte">

            <div className="titulo">

                <h3 className="">7. </h3>
                <h3>Danos Durante o Transporte</h3>

            </div>

            <div className="informes">

                <p className="numero" id="7.1">7.1 Notificação: </p>
                <p>Se o produto for danificado durante o transporte, notifique-nos imediatamente para podermos tomar as medidas adequadas.</p>

            </div>

            </div>

            <div className="informes-texto" id="Contato">

            <div className="titulo">

                <h3 className="">8. </h3>
                <h3>Contato</h3>

            </div>

            <div className="informes">

                <p className="numero" id="8.1">8.1 Atendimento ao Cliente: </p>
                <p>Se precisar de assistência ou tiver dúvidas sobre nossa política de devolução e troca, entre em contato com nosso serviço de atendimento ao cliente.</p>

            </div>

            </div>


        </div>
        
        <Footer />
        </React.StrictMode>
        </Provider>
    );
}

export default Politicas;