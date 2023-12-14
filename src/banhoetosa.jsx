import './banhoetosa.css';
import Home from "./Homebt"
import About from "./AboutBanhoeTosa"
import Work from "./Workbt"
import App from './App.jsx'


function banhoetosa() {
  return <div className="banhoetosa">
    <App />
    <Home/>
    <About/>
    <Work />
  </div>
}


export default banhoetosa;