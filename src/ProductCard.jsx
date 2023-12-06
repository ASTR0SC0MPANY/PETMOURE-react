
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ProductCard = () => {
  const productData = [
    { id: 1, name: 'Mangueira para Cachorro com Escova Massageadora', price: 'R$69,90', imageUrl: 'Cachorro/Acessórios/A1.png'},
    { id: 2, name: 'Kit Mordedor Para Cachorro', price: 'R$30,20', imageUrl: 'Cachorro/Brinquedos/B1.png'},
    { id: 3, name: 'Brinquedo Mordedor Para Cachorro', price: 'R$49,90', imageUrl: 'Cachorro/Brinquedos/B5.png'},
    { id: 4, name: 'Cama Para Cachorro Grande', price: 'R$179,90', imageUrl: 'Cachorro/Camas/C2.png'},
    { id: 5, name: 'Coleira De Princesa Para Animais ', price: 'R$59,80', imageUrl: 'Cachorro/Coleiras/cl4.png'},
    { id: 6, name: 'Pneu Mordedor Resistente', price: 'R$40,10', imageUrl: 'Cachorro/Brinquedos/B12.png'},
  ];

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
  };

  return (
    <div style={containerStyle}>
      <h2 style={textStyle}>Produtos recomendados</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {productData.map((product) => (
          <SwiperSlide key={product.id}>
             <button style={buttonStyle} onClick={() => window.location.href = '/product'}>
            <div style={cardStyle} className="product-card">
              <img src={product.imageUrl} alt={product.name} />
              <p style={nameStyle}>{product.name}</p>
              <h4 style={priceStyle}>{product.price}</h4>
            </div>
            </button>
          </SwiperSlide>
        ))}
      </Swiper>
      <h2 style={textStyle}>Produtos mais vendidos</h2>
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
