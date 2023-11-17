
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';

const ProductCachorro = () => {
  const acessorios = [
    { id: 1, name: 'Mangueira para Cachorro com Escova Massageadora', price: 'R$69,90', imageUrl: 'Cachorro/Acessórios/A1.png'},
    { id: 2, name: 'Escova de Dente para Pet Dedeiras', price: 'R$38,90', imageUrl: 'Cachorro/Acessórios/A2.png'},
    { id: 3, name: 'Kit Bandeja Automáticos Azul', price: 'R$85,90', imageUrl: 'Cachorro/Acessórios/A3.png'},
    { id: 4, name: 'Chalesco Rasqueadeira práticapara Cães', price: 'R$74,80', imageUrl: 'Cachorro/Acessórios/A4.png'},
    { id: 5, name: 'Comedouro Duplo Pet Bebedouro', price: 'R$51,50', imageUrl: 'Cachorro/Acessórios/A5.png'},
    { id: 6, name: 'Bandana para Cachorro, Bandana Dupla Face', price: 'R$7,92', imageUrl: 'Cachorro/Acessórios/A6.png'},
    { id: 7, name: 'Faixa de Natal para Cachorro', price: 'R$10,50', imageUrl: 'Cachorro/Acessórios/A7.png'},
    { id: 8, name: 'Cachecol de Babador para Cachorro', price: 'R$34,38', imageUrl: 'Cachorro/Acessórios/A8.png'},
    { id: 9, name: 'Laços para Cachorro', price: 'R$10,80', imageUrl: 'Cachorro/Acessórios/A9.png'},
    { id: 10, name: 'Laços elásticos para cães, gravata cachorro', price: 'R$25,18', imageUrl: 'Cachorro/Acessórios/A10.png'},
    { id: 11, name: 'Laço para o cabelo Arcos de Natal para Cachorro', price: 'R$35,80', imageUrl: 'Cachorro/Acessórios/A11.png'},
    { id: 12, name: 'Topete de Pelo de Cachorro, Lacinhos', price: 'R$41,86', imageUrl: 'Cachorro/Acessórios/A12.png'},
  ];

  const brinquedos = [
    { id: 1, name: 'Kit Mordedor para Cachorro', price: 'R$30,20', imageUrl: 'Cachorro/Brinquedos/B1.png'},
    { id: 2, name: 'Brinquedo Mordedor para Cachorro', price: 'R$42,90', imageUrl: 'Cachorro/Brinquedos/B2.png'},
    { id: 3, name: 'Bola Colorida Pisca Pisca', price: 'R$70,90', imageUrl: 'Cachorro/Brinquedos/B3.png'},
    { id: 4, name: 'Kit 4 Mordedores Borracha Pet Rígidos', price: 'R$40,90', imageUrl: 'Cachorro/Brinquedos/B4.png'},
    { id: 5, name: 'Brinquedo Mordedor para Cachorro', price: 'R$42,90', imageUrl: 'Cachorro/Brinquedos/B5.png'},
    { id: 6, name: 'Rope Catchball Chalesco para Cães', price: 'R$22,90', imageUrl: 'Cachorro/Brinquedos/B6.png'},
    { id: 7, name: 'Bola Cravinho, Brinquedo Mordedor', price: 'R$6,00', imageUrl: 'Cachorro/Brinquedos/B7.png'},
    { id: 8, name: 'Brinquedo Nó de Corda', price: 'R$10,00', imageUrl: 'Cachorro/Brinquedos/B8.png'},
    { id: 9, name: 'Triângulo de Borracha Furação', price: 'R$35,00', imageUrl: 'Cachorro/Brinquedos/B9.png'},
    { id: 10, name: 'Brinquedo para Cachorro Mordedor Pelúcia Jacaré', price: 'R$80,00', imageUrl: 'Cachorro/Brinquedos/B10.png'},
    { id: 11, name: 'Brinquedo Macaco Marrom para Cães', price: 'R$32,00', imageUrl: 'Cachorro/Brinquedos/B11.png'},
    { id: 12, name: 'Pneu Mordedor Resistente', price: 'R$40,10', imageUrl: 'Cachorro/Brinquedos/B12.png'},
  ];

  const camas = [
    { id: 1, name: 'Cama Casa Pet 2x1 Cabanas', price: 'R$78,80', imageUrl: 'Cachorro/Camas/C1.png'},
    { id: 2, name: 'Cama para Cachorro Grande', price: 'R$179,40', imageUrl: 'Cachorro/Camas/C2.png'},
    { id: 3, name: 'Cama Europa Luppet Verde G', price: 'R$147,12', imageUrl: 'Cachorro/Camas/C3.png'},
    { id: 4, name: 'Caminha Nuvem CAMA Pet Redonda', price: 'R$44,50', imageUrl: 'Cachorro/Camas/C4.png'},
    { id: 5, name: 'Cama para Pets Granulado', price: 'R$90,60', imageUrl: 'Cachorro/Camas/C5.png'},
    { id: 6, name: 'Cama Pet para Cães e Gatos Osso', price: 'R$90,60', imageUrl: 'Cachorro/Camas/C6.png'},
    { id: 7, name: 'Cama Animais Rosa Pet', price: 'R$90,60', imageUrl: 'Cachorro/Camas/C7.png'},
    { id: 8, name: 'Cama para Cães, Pequeno, Pink', price: 'R$94,90', imageUrl: 'Cachorro/Camas/C8.png'},
    { id: 9, name: 'Cama para Cães, Médio, Azul', price: 'R$110,90', imageUrl: 'Cachorro/Camas/C9.png'},
    { id: 10, name: 'Cama Iglu e Toca para Cachorro Luxo', price: 'R$100,00', imageUrl: 'Cachorro/Camas/C10.png'},
    { id: 11, name: 'Cama para Cachorros, Confortável e Higiênica', price: 'R$180,00', imageUrl: 'Cachorro/Camas/C11.png'},
    { id: 12, name: 'Cama Raposa Cinza Pet', price: 'R$94,90', imageUrl: 'Cachorro/Camas/C12.png'},
  ];

  const coleiras = [
    { id: 1, name: 'Coleira para Cachorro de Couro Cintilante', price: 'R$58,00', imageUrl: 'Cachorro/Coleiras/cl1.png'},
    { id: 2, name: 'Haoyueer Coleira de Couro Sintéticos', price: 'R$77,82', imageUrl: 'Cachorro/Coleiras/cl2.png'},
    { id: 3, name: 'Coleira para Cachorro de Couro Cintilantes', price: 'R$59,80', imageUrl: 'Cachorro/Coleiras/cl3.png'},
    { id: 4, name: 'Coleira de Princesa para Animais', price: 'R$59,80', imageUrl: 'Cachorro/Coleiras/cl4.png'},
    { id: 5, name: 'Peitoral para Cachorros, N 2', price: 'R$20,90', imageUrl: 'Cachorro/Coleiras/cl5.png'},
    { id: 6, name: 'Coleira para Cachorros, N 2, Coleira Ajustável', price: 'R$20,90', imageUrl: 'Cachorro/Coleiras/cl6.png'},
    { id: 7, name: 'Coleira para Cachorro com Placa de Identificação', price: 'R$27,90', imageUrl: 'Cachorro/Coleiras/cl7.png'},
    { id: 8, name: 'Guia Retrátil Coleira para Pet Cachorro 5 metros', price: 'R$46,86', imageUrl: 'Cachorro/Coleiras/cl8.png'},
    { id: 9, name: 'Coleira AJUSTÁVEL,pink & purple', price: 'R$20,00', imageUrl: 'Cachorro/Coleiras/cl9.png'},
    { id: 10, name: 'Coleira Peitoral Antipuxão', price: 'R$114,00', imageUrl: 'Cachorro/Coleiras/cl10.png'},
    { id: 11, name: 'Coleira Ajustável, WTF, Passeio', price: 'R$22,18', imageUrl: 'Cachorro/Coleiras/cl11.png'},
    { id: 12, name: 'Coleira para Cachorro Couro', price: 'R$100,00', imageUrl: 'Cachorro/Coleiras/cl12.png'},
  ];

  const racao = [
    { id: 1, name: 'Ração Magnos sabor carne', price: 'R$16,90', imageUrl: 'Cachorro/Ração/R1.png'},
    { id: 2, name: 'Ração PURINA ONE Frango e Carne', price: 'R$58,40', imageUrl: 'Cachorro/Ração/R2.png'},
    { id: 3, name: 'Ração Origens sabor carne e cereais', price: 'R$16,90', imageUrl: 'Cachorro/Ração/R3.png'},
    { id: 4, name: 'Ração Royal Canin sabor carne', price: 'R$22,80', imageUrl: 'Cachorro/Ração/R4.png'},
    { id: 5, name: 'Ração Premiata Adulto sabor carne e cereais', price: 'R$96,80', imageUrl: 'Cachorro/Ração/R5.png'},
    { id: 6, name: 'Adimax Ração Origens sabor frango', price: 'R$60,90', imageUrl: 'Cachorro/Ração/R6.png'},
    { id: 7, name: 'Ração GranPlus Choice Frango e Carne para Cães Adultos', price: 'R$149,90', imageUrl: 'Cachorro/Ração/R7.png'},
    { id: 8, name: 'ALPO Ração Cães Adultos, Carne e Frango', price: 'R$119,60', imageUrl: 'Cachorro/Ração/R8.png'},
    { id: 9, name: 'Premier Pet Golden Special', price: 'R$149,90', imageUrl: 'Cachorro/Ração/R9.png'},
    { id: 10, name: 'Ração Pedirgree para Cães', price: 'R$132,56', imageUrl: 'Cachorro/Ração/R10.png'},
    { id: 11, name: 'Ração Golden Fórmula Mini Bits', price: 'R$110,00', imageUrl: 'Cachorro/Ração/R11.png'},
    { id: 12, name: 'DOG CHOW Carne e Frango 10,1kg', price: 'R$135,56', imageUrl: 'Cachorro/Ração/R12.png'},
  ];

  const roupas = [
    { id: 1, name: 'Moletom para Cachorro Lakers', price: 'R$109,00', imageUrl: 'Cachorro/Roupas/RP1.png'},
    { id: 2, name: 'Roupa para Cachorro Sleep', price: 'R$39,99', imageUrl: 'Cachorro/Roupas/RP2.png'},
    { id: 3, name: 'Moletom Pet Roupa para Cachorro Bulls', price: 'R$109,00', imageUrl: 'Cachorro/Roupas/RP3.png'},
    { id: 4, name: 'Roupinha Pet Básica', price: 'R$74,80', imageUrl: 'Cachorro/Roupas/RP4.png'},
    { id: 5, name: 'Roupas Pet Soft Confortável e Quente', price: 'R$16,76', imageUrl: 'Cachorro/Roupas/RP5.png'},
    { id: 6, name: 'Fantasia de Cachorro de Halloween', price: 'R$58,20', imageUrl: 'Cachorro/Roupas/RP6.png'},
    { id: 7, name: 'Roupa de Natal para Cachorro com Capuz', price: 'R$59,20', imageUrl: 'Cachorro/Roupas/RP7.png'},
    { id: 8, name: 'VILLFUL Vestidos Pijamas de Verão', price: 'R$10,00', imageUrl: 'Cachorro/Roupas/RP8.png'},
    { id: 9, name: 'Moletom Soft PK para Cães', price: 'R$47,40', imageUrl: 'Cachorro/Roupas/RP9.png'},
    { id: 10, name: 'Peanuts for Pets Camiseta Amarela', price: 'R$54,30', imageUrl: 'Cachorro/Roupas/RP10.png'},
    { id: 11, name: 'Moletom com Capuz, Modernpet', price: 'R$50,44', imageUrl: 'Cachorro/Roupas/RP11.png'},
    { id: 12, name: 'Roupas Térmicas de Roleplay', price: 'R$40,00', imageUrl: 'Cachorro/Roupas/RP12.png'},
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
      <h2 style={textStyle}>Acessórios</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {acessorios.map((product) => (
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
      <h2 style={textStyle}>Brinquedos</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {brinquedos.map((product) => (
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
      <h2 style={textStyle}>Camas</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {camas.map((product) => (
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
      <h2 style={textStyle}>Coleiras</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {coleiras.map((product) => (
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
      <h2 style={textStyle}>Ração</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {racao.map((product) => (
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
      <h2 style={textStyle}>Roupas</h2>
      <Swiper
        spaceBetween={20}
        slidesPerView={4}
        navigation
      >
        {roupas.map((product) => (
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


export default ProductCachorro;
