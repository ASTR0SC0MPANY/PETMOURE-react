
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Propaganda from './Propaganda';
import React, { useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import './ProductCard.css';
import { AppContext } from './context/AppContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';

const ProductCard = () => {
  // Função para adicionar um produto ao carrinho
  const handleAddCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems((prevCart) => [...prevCart, product]);
  };

 //com banco de dados
 const [info, setInfo] = useState([]);
 const { cartItems, setCartItems } = useContext(AppContext);

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
}, [collectionRef, setInfo]);


  // Dados dos produtos mais vendidos
  const collectionRefe = collection(db, 'ColeiraCachorro');
  const [productVend, setProductVend] = useState([]);
  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const querySnapshot = await getDocs(collectionRefe);
        const catList = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          name: doc.data().descricao,
          price: doc.data().preco,
          imageUrl: doc.data().urlimage,
        }));
        setProductVend(catList);
      } catch (error) {
        console.error('Error fetching transactions:', error.message);
      }
    };

    fetchTransactions();
  }, [collectionRefe, setProductVend]);

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

   // Função para renderizar a lista de itens do carrinho
   const renderCartItems = () => {
    return (
      <div>
        <h2>Itens do Carrinho</h2>
        <ul>
          {cartItems.map((item) => (
            <li key={item.id}>
              {item.name} - {item.price}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  return (
    <div style={containerStyle}>
    <h2 style={textStyle}>Produtos recomendados</h2>
    <Swiper spaceBetween={20} slidesPerView={4} navigation>
      {info.map((product) => (
        <SwiperSlide key={product.id}>
          <div style={cardStyle} className="product-card">
            <img src={product.imageUrl} alt={product.name} />
            <p style={nameStyle}>{product.name}</p>
            <h4 style={priceStyle}>R${product.price},00</h4>
            <button
              type='button'
              className="button_add-cart"
              onClick={() => handleAddCart(product)}
            >
              <FontAwesomeIcon icon={faCartPlus} />
            </button>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
      <Propaganda />
      <h2 style={textStyle}>Produtos Mais Vendidos</h2>
      <Swiper spaceBetween={20} slidesPerView={4} navigation>
          {productVend.map((product) => (
            <SwiperSlide key={product.id}>
              <div style={cardStyle} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <p style={nameStyle}>{product.name}</p>
                <h4 style={priceStyle}>R${product.price},00</h4>
                <button
                  type='button'
                  className="button_add-cart"
                  onClick={() => handleAddCart(product)}
                >
                  <FontAwesomeIcon icon={faCartPlus} />
                </button>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

    </div>

  );
};


export default ProductCard;
