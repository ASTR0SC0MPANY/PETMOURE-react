import React from "react"
import App from './App.jsx'
import './index.css'
import Footer from "./Footer.jsx"
import ProductGato from "./components/ProductGato.jsx"
import {register} from 'swiper/element/bundle'
import Header from "./Header.jsx"

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function Cachorro() {

    return (
    <React.StrictMode>
        <Header />
        <ProductGato />
        <Footer />
    </React.StrictMode>
    );
  }
  
  export default Cachorro;