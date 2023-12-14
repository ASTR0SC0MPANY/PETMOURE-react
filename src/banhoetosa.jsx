import './banhoetosa.css';
import Home from "./Homebt"
import About from "./AboutBanhoeTosa"
import Work from "./Workbt"
import App from './App.jsx'
import Header from './Header.jsx';
import Footer from './Footer.jsx';

function banhoetosa() {
  return <div className="banhoetosa">
    <Header />
    <Home/>
    <About/>
    <Work />
    <Footer />
  </div>
}


export default banhoetosa;