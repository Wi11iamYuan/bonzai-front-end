import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export const TopNavbar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" fixed = "top"  id="nav">
      <Nav.Link href="/home">
        <Image src="./logo_no_name.svg" id="navbar-icon"/>
      </Nav.Link>
      <Nav.Link href="/home" id="brand">Bonzai</Nav.Link>
      
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/login" className = 'top-hover' id="navbar-settings">Login / Register</Nav.Link>
            <Nav.Link href="/density" className = 'top-hover' id='tab'>Density Map</Nav.Link>
            <Nav.Link href="/stats" className = 'top-hover' id='tab'>Stats Page</Nav.Link>
          </Nav>
        </Navbar.Collapse>
   
    </Navbar>
    );
} 