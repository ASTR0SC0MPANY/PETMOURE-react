import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import React, { useContext, useEffect, useState } from 'react';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartPlus } from '@fortawesome/free-solid-svg-icons';
import './ProductCard.css';
import { AppContext } from './context/AppContext';

const ProductCard = () => {
  const { info, setInfo } = useContext(AppContext);
  const { cartItems, setCartItems } = useContext(AppContext);

  // Função para adicionar um produto ao carrinho
  const handleAddCart = (product) => {
    console.log('Adding to cart:', product);
    setCartItems((prevCart) => [...prevCart, product]);
  };

  const firebaseConfig = {
    apiKey: "AIzaSyCX07aQUmL1Uhue4pM6jQl-zu-oqOZy-50",
    authDomain: "teste-f2b52.firebaseapp.com",
    projectId: "teste-f2b52",
    storageBucket: "teste-f2b52.appspot.com",
    messagingSenderId: "593972511162",
    appId: "1:593972511162:web:3166ce3945fd215de99d83",
    measurementId: "G-VSM5D92ZYW"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  const db = getFirestore(firebaseApp);
  const collectionRef = collection(db, 'AcessorioCachorro');

  // Efeito para buscar os produtos recomendados no Firestore
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
        setProductVend(catList);
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

  // Estilos
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

  // Renderização do componente
  return (
      <div style={containerStyle}>
        <h2 style={textStyle}>Produtos recomendados</h2>
        <Swiper spaceBetween={20} slidesPerView={4} navigation>
          {info.map((product) => (
            <SwiperSlide key={product.id}>
              <div style={cardStyle} className="product-card">
                <img src={product.imageUrl} alt={product.name} />
                <p style={nameStyle}>{product.name}</p>
                <h4 style={priceStyle}>{product.price}</h4>
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

        <h2 style={textStyle}>Produtos mais vendidos</h2>

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

        {} {/* Renderiza a lista de itens do carrinho */}
      </div>
    )
};

export default ProductCard;
