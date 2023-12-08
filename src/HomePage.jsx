import React from "react"
import App from './App.jsx'
import './index.css'
import Carrossel from './Carrossel.jsx'
import Footer from "./Footer.jsx"
import ProductCard from './ProductCard.jsx'
import {register} from 'swiper/element/bundle'
import Header from "./Header.jsx"

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function HomePage() {

    return (
    <React.StrictMode>
        <Header />
        <Carrossel />
        <ProductCard />
        <Footer />
    </React.StrictMode>
    );
  }
  
  export default HomePage;