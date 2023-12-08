
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Propaganda from './Propaganda';
import React, { useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const ProductCard = () => {
 //com banco de dados
 const [info, setInfo] = useState([]);

 const firebaseConfig = {
   apiKey: "AIzaSyCEWjUIrxiTrxfnG_F83efguvILmOgq5Rg",
   authDomain: "pet-moure-teste.firebaseapp.com",
   projectId: "pet-moure-teste",
   storageBucket: "pet-moure-teste.appspot.com",
   messagingSenderId: "598417750443",
   appId: "1:598417750443:web:013acd7db983820199faee",
   measurementId: "G-CF2KEZP241"
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
const collectionRef = collection(db, 'AcessorioCachorro');

useEffect(() => {
 const fetchTransactions = async () => {
   try {
     const querySnapshot = await getDocs(collectionRef);
     const catList = querySnapshot.docs.map((doc) => ({
       id: doc.id,
       name: doc.data().descricao,
       price: doc.data().preco,
       imageUrl: doc.data().urlimage,
     }));
     setInfo(catList);
   } catch (error) {
     console.error('Error fetching transactions:', error.message);
   }
 };

 fetchTransactions();
}, [collectionRef]);


  const productVend = [
    { id: 1, name: 'Coleira Ajustável, WTF, Passeio', price: 'R$28,18', imageUrl: 'Cachorro/Coleiras/cl11.png'},
    { id: 2, name: 'Coleira para Cachorro Couro', price: 'R$100,00', imageUrl: 'Cachorro/Coleiras/cl12.png'},
    { id: 3, name: 'Adimax Ração Origens Sabor Frango', price: 'R$60,90', imageUrl: 'Cachorro/Ração/R6.png'},
    { id: 4, name: 'Moletom Pet Roupa Para Cachorro Bulls', price: 'R$109,00', imageUrl: 'Cachorro/Roupas/RP3.png'},
    { id: 5, name: 'Brinquedo Nó de Corda', price: 'R$10,00', imageUrl: 'Cachorro/Brinquedos/B8.png'},
    { id: 6, name: 'Ração Pedigree Para Cães', price: '$R$132,56', imageUrl: 'Cachorro/Ração/R10.png'},
  ];

  const cardStyle = {
    background: 'white',
    borderRadius: '20px',
    padding: '10px',
    margin: '10px',
    height: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Centralizar horizontalmente
    justifyContent: 'center', // Centralizar verticalmente
    boxShadow: '0px 10px 20px rgba(0, 0, 0, 0.2)', // Aplicar sombra para efeito de elevação
  };

  const nameStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 400,
    color: 'black',
  };

  const priceStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 800,
    color: 'black',
  }

  const textStyle = {
    fontFamily: 'Inter, sans-serif',
    fontWeight: 800,
    color: 'black',
    margin: '10px'
  }

  const containerStyle = {
    padding: '50px',
  };

  const buttonStyle = {
    border: 'none',
    background: 'transparent',
    cursor: 'pointer',
    outline: 'none',
    width: '400px',
    height: '450px',
  };

  return (
    <div style={containerStyle}>
      <h2 style={textStyle}>Produtos Recomendados</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {info.map((product) => (
          <SwiperSlide key={product.id}>
             <button style={buttonStyle}>
            <div style={cardStyle} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <p style={nameStyle}>{product.name}</p>
              <h4 style={priceStyle}>{product.price}</h4>
            </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <Propaganda />
      <h2 style={textStyle}>Produtos Mais Vendidos</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {productVend.map((product) => (
          <SwiperSlide key={product.id}>
            <button style={buttonStyle}>
            <div style={cardStyle} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <p style={nameStyle}>{product.name}</p>
              <h4 style={priceStyle}>{product.price}</h4>
            </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>

  );
};


export default ProductCard;
