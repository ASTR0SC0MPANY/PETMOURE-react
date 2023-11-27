
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart, faSearch, faDog,  faCat, faDove, faMouse, faFish  } from '@fortawesome/free-solid-svg-icons';
import { GiTurtle, GiRabbit  } from 'react-icons/gi';
import Container from 'react-bootstrap/Container';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Logo from './logo.png';

function BasicExample() {

  const transparentBackground = {
    background: 'transparent',
    border: 'none',
  };

  const lupa = {
    color: 'black',
    marginRight: '36px'
  }

  const roundedSearchBar = {
    borderRadius: '20px', // Defina o valor desejado para arredondar as bordas
    width: '500px'
  };

  const roundedButton = {
    borderRadius: '20px', // Defina o valor desejado para arredondar as bordas
  };

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

  return (

    <div className='header'>
      <div className='container-um'>
      <div className="logo-container">
       <img src={Logo} alt="Descrição da imagem" />
      </div>

      <div className="search-bar">
      <Form inline="true" id="pesquisa">
 <Row>
  <Col xs={12} sm={8} md={10} className='barra'>
    <Form.Control
      type="text"
      placeholder="Pesquise na PetMoure"
      className="mr-sm-2"
      style={roundedSearchBar}
    />
  </Col>
  <Col xs={12} sm={4} md={2} className='text-center'>
    <Button className='submit' style={transparentBackground} type="submit">
      <FontAwesomeIcon style={lupa} icon={faSearch} />
    </Button>
  </Col>
</Row>
  </Form>
      </div>

     <Button className='login-cadastro' variant="light" style={roundedButton}>
  <FontAwesomeIcon icon={faUser} style={{ marginRight: '5px' }} />
  <span className="entrar-text" onClick={() => window.location.href = '/login'}>Entrar</span>
</Button>
  <Button className="icone btn btn-light" style={transparentBackground}>
    <FontAwesomeIcon icon={faHeart} />
      </Button>

      {/*carrinho*/}
      <Button className="icone btn btn-light" style={transparentBackground}>
      <FontAwesomeIcon icon={faShoppingCart} /> 
       <span className='cart-status'>1</span>
      </Button>

      </div>
      <div className="navbar">
      <Navbar expand="lg" className="body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Dropdown>
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

          <Dropdown>
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

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Banho e Tosa</Dropdown.Toggle>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Club</Dropdown.Toggle>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Promoções</Dropdown.Toggle>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Marcas</Dropdown.Toggle>
          </Dropdown>

          <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic" style={dropdownToggleStyle} onClick={() => window.location.href = '/cachorro'}>Recompra</Dropdown.Toggle>
          </Dropdown>
  
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    </div>
  );
}

export default BasicExample;

