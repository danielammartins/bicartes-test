import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.png"

const Menu: React.FC = () => {
  return (
    <Navbar expand="md" fixed="top" className="px-4 bg-mauve-100">
        <Navbar.Brand href="#bicartes">
              <img src={logo} className="w-16"></img>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto gap-8">
            <Nav.Link href="#bicartes">Bicartes</Nav.Link>
            <Nav.Link href="#programacao">Programação</Nav.Link>
            <Nav.Link href="#fazparte">Faz Parte</Nav.Link>
            <Nav.Link href="#contactos">Contactos</Nav.Link>
          </Nav>
        </Navbar.Collapse>
    </Navbar>
  );
}

export default Menu;