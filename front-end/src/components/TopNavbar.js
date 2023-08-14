import 'bootstrap/dist/css/bootstrap.min.css';

import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Image from 'react-bootstrap/Image';

export const TopNavbar = () => {
    return (
    <Navbar collapseOnSelect expand="lg" fixed = "top" className="bg-dark" id="nav">
        <Image src="./logo_no_name.svg" id="navbar-icon"/>
        <Navbar.Brand href="/home" className="text-light" id= 'brand'>Bonzai</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/density" className="text-light">Density Map</Nav.Link>
            <Nav.Link href="/stats" className="text-light">Stats Page</Nav.Link>
            <Nav.Link href="/info" className="text-light">Information</Nav.Link>
          </Nav>
          <Nav>
            <Nav.Link href="/settings" id="navbar-settings" className="text-light">Settings</Nav.Link>
          </Nav>
        </Navbar.Collapse>
   
    </Navbar>
    );
} 