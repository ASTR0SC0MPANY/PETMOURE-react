import { useState } from 'react';
import './Header.css'
import { BsSearch } from 'react-icons/bs'
import { AiOutlineShoppingCart} from 'react-icons/ai'
import { FaRegHeart, FaRegCircleUser, FaPix } from "react-icons/fa6";
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faDog,  faCat, faDove, faMouse, faFish  } from '@fortawesome/free-solid-svg-icons';
import { GiTurtle, GiRabbit  } from 'react-icons/gi';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Logo from './logo.png';

function Header() {

      const dropdownToggleStyle = {
        border: 'none',
        borderRadius: '0',
        boxShadow: 'none',
        marginRight: '40px', // Ajuste conforme necessário
        marginLeft: '35px',  // Ajuste conforme necessário
      };
    
      const dropdownMenuStyle = {
        backgroundColor: '#E6E1C8',
        borderRadius: 0,
        border: 'none',
        
      };
    
      const iconStyle = {
        marginRight: '8px', // Ajuste conforme necessário para afastar o ícone do texto
        color: 'black', // Defina a cor do ícone como preto
      };

    const [searchValue, setSearchValue] = useState('');

  return (
    <div className='all'>
        <div className='pix'>
        <p className='desconto'>Ganhe 10% de desconto nos produtos vendidos e entregues pela PetMoure pagando no <FaPix /></p>
      </div>
    <div className='header__dois'>
        <div className='containerh'>
        <img src={Logo} alt="Descrição da imagem" />
            <form className='search-bar'>
                <input 
                    type='search' 
                    value={searchValue}
                    placeholder='Pesquisar na PetMoure' 
                    className='search__input'
                    required
                    onChange={ ({target}) => setSearchValue(target.value)}
                />

                <button type='submit' className='search__button'>
                    <BsSearch />
                </button>
            </form>

            <button type='button' className='cart__button'>
                <AiOutlineShoppingCart />
            </button>
            <button type='button' className='cart__button'>
                <FaRegHeart />
            </button>
            <button type='button' className='cart__button'>
                <FaRegCircleUser />
            </button>
        </div>

        <div className="navbar">
      <Navbar expand="lg" className="body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle}>Pets</Dropdown.Toggle>
            <Dropdown.Menu style={dropdownMenuStyle}>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" onClick={() => window.location.href = '/cachorro'}> <FontAwesomeIcon icon={faDog} style={iconStyle} /> Cachorro</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" onClick={() => window.location.href = '/gato'}> <FontAwesomeIcon icon={faCat} style={iconStyle} />Gato</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-3"> <FontAwesomeIcon icon={faDove} style={iconStyle} />Pássaro</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-3"> <FontAwesomeIcon icon={faMouse} style={iconStyle} />Hamster</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-3"> <FontAwesomeIcon icon={faFish} style={iconStyle} />Peixe</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-3"> <GiTurtle style={iconStyle} />Tartaruga</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown"  href="#/action-3"> <GiRabbit style={iconStyle} />Coelho</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle}>Farmácia</Dropdown.Toggle>
            <Dropdown.Menu style={dropdownMenuStyle}>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown">Anti-inflamatórios</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-2">Antibióticos</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-3">Antipulgas e Carrapatos</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-3">Cicatrizante</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-3">Analgésicos</Dropdown.Item>
              <Dropdown.Item id="dropdown-itens" className="animate__animated animate__slideInDown" href="#/action-3">A. Antialérgico</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>

          <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/header'}>Banho e Tosa</Dropdown.Toggle>
          </Dropdown>

          <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Club</Dropdown.Toggle>
          </Dropdown>

          <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Promoções</Dropdown.Toggle>
          </Dropdown>

          <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Marcas</Dropdown.Toggle>
          </Dropdown>

          <Dropdown className='dropdown'>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Recompra</Dropdown.Toggle>
          </Dropdown>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </div>
    </div> 
  );
}

export default Header;

