
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faWhatsapp, faFacebook, faPaypal, faPix } from '@fortawesome/free-brands-svg-icons';


const Footer = () => {
  return (
    <footer>
      <div id="footer-content">
        <div id="footer-contacts">
          <h1>Nós</h1>
          <p>Para ficar por dentro das novidades!</p>

          <div id="footer-social-media">
            <a href="#" className="footer-link" id="instagram">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="#" className="footer-link" id="whatsapp">
              <FontAwesomeIcon icon={faWhatsapp} />
            </a>
            <a href="#" className="footer-link" id="facebook">
              <FontAwesomeIcon icon={faFacebook} />
            </a>
          </div>
        </div>

        <ul className="footer-list">
          <li>
            <h3>Conheça-nos</h3>
          </li>

          <li>
            <a href="#" className="footer-link">Sobre a PetMoure</a>
          </li>
          <li>
            <a href="#" className="footer-link">Informações Corporativas</a>
          </li>
          <li>
            <a href="#" className="footer-link">Políticas PetMoure</a>
          </li>
          <li>
            <a href="#" className="footer-link">Políticas de Privacidade</a>
          </li>
        </ul>

        <ul className="footer-list">
          <li>
            <h3>Meios de Pagamento</h3>
          </li>

          <li id="pagamentos">
            <FontAwesomeIcon icon={faPaypal} />
            Paypal
          </li>
          <li id="pagamentos">
            <FontAwesomeIcon icon={faPix} />
            Pix
          </li>
        </ul>

        <div id="meios-de-contato">
          <h3>Contatos</h3>
          <div id="contato">
            <p>E-mail: petmoure@gmail.com</p>
            <p>Telefone: (85) 98885-0079</p>
          </div>
        </div>
      </div>

      <div id="footer-copyright">
        &copy; 2023 all rights reserved
      </div>
    </footer>
  );
};

export default Footer;
