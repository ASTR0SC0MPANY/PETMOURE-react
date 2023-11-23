import React from "react"
import App from './App.jsx'
import './index.css'
import Footer from "./Footer.jsx"
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Cachorro() {

    return (
    <React.StrictMode>
        <App />
        <Footer />
    </React.StrictMode>
    );
  }
  
  export default Cachorro;