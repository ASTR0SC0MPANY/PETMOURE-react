import React from 'react';
import App from './App.jsx'
import Footer from "./Footer.jsx"
import './sobre.css'
import {register} from 'swiper/element/bundle'
import Provider from './context/Provider.jsx';


register();
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

function sobre(){

    return(
        <Provider>
        <React.StrictMode>
        <App />
       <h3>oi</h3>

        <Footer />
        </React.StrictMode>
        </Provider>

    );
}

export default sobre;