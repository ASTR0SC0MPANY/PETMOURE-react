
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faHeart, faShoppingCart, faSearch } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
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
      <Button className="icone btn btn-light" style={transparentBackground}>
      <FontAwesomeIcon icon={faShoppingCart} />
      </Button>

      </div>
      <div className="navbar">
      <Navbar expand="lg" className="body-tertiary">
      <Container>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Pets" id="basic-nav-dropdown" className='navbar-nav' >
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" onClick={() => window.location.href = '/cachorro'}>Cachorro</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.2">Gato</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Peixe</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Hamster</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Farmácia" id="basic-nav-dropdown">
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.1">Cachorro</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.2">Gato</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Peixe</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Hamster</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Banho e Tosa" id="basic-nav-dropdown">
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.1">Banho</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.2">Tosa</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Banho + Tosa</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Reparo</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Serviços" id="basic-nav-dropdown">
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.1">Cachorro</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.2">Gato</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Peixe</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Hamster</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Promoções" id="basic-nav-dropdown">
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.1">Cachorro</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.2">Gato</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Peixe</NavDropdown.Item>
              <NavDropdown.Item id="itens" className="animate__animated animate__slideInDown" href="#action/3.3">Hamster</NavDropdown.Item>
            </NavDropdown>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      </div>
    
    </div>
  );
}

export default BasicExample;

