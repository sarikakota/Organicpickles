import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Import Link
import '../styles/Nav.css'; // Adjust the path as necessary

const NavigationBar = () => {
  return (
    <Navbar className="custom-navbar" expand="lg">
      <Navbar.Brand as={Link} to="/"></Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mx-auto justify-content-center w-100">
          
        <Nav.Link as={Link} to="/">Home</Nav.Link>
          <Nav.Link as={Link} to="/shop-now">Shop Now</Nav.Link>
          <NavDropdown title="Pickles" id="pickles-dropdown">
            <NavDropdown.Item as={Link} to="/pickles/mango">Mango Pickles</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/pickles/papad-bandi">Papad Bandi</NavDropdown.Item>
            <NavDropdown.Item as={Link} to="/pickles/kids-friendly">Kids Friendly</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link as={Link} to="/about-us">About Us</Nav.Link>
          <Nav.Link as={Link} to="/Immunobooster">Immunobooster</Nav.Link>
         
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default NavigationBar;
