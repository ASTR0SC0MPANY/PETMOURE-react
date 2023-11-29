import React from "react"
import App from './App.jsx'
import './index.css'
import Carrossel from './Carrossel.jsx'
import Footer from "./Footer.jsx"
import ProductCard from './ProductCard.jsx'
import Cart from './Cart/Cart.jsx';
import {register} from 'swiper/element/bundle'

register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';
import Provider from "./context/Provider.jsx"

function HomePage() {

    return (
    <Provider>
        <App />
        <Carrossel />
        <ProductCard />
        <Cart/>
        <Footer />
    </Provider>
    );
  }
  
  export default HomePage;