
import './Propaganda.css'
import Propagandaum from './P1.png'
import Propagandadois from './P2.png'

function Propaganda() {

  return (
    <div className='container-propaganda'>
         <img className='prop' src={Propagandaum} alt="Descrição da imagem" />
         <img className='prop' src={Propagandadois} alt="Descrição da imagem" />
    </div>
  );
}

export default Propaganda;

