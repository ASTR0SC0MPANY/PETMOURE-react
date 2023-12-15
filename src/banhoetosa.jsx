import './banhoetosa.css';
import Homebt from "./Homebt"
import About from "./AboutBanhoeTosa"
import Work from "./Workbt"
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function banhoetosa() {
  return <div className="banhoetosa">
    <Header />
    <Homebt/>
    <About/>
    <Work />
    <Footer />
  </div>
}


export default banhoetosa;