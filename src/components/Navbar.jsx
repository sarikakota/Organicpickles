import React from 'react';
import { Navbar, Nav, Button, Form, FormControl } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart, faUser, faSearch } from '@fortawesome/free-solid-svg-icons';
import '../styles/Navbar.css'; // Import the CSS file for scrolling text

const MyNavbar = () => {
    return (
        <div>
            {/* Top Bar with Contact Info and Scrolling Message */}
            <div className="top-bar" style={{ backgroundColor: 'rgb(80, 190, 122)', padding: '10px', color: 'white', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                    <span style={{ marginRight: '15px', fontWeight: 'bold' }}>📞 123-456-7890</span>
                    <span style={{ fontWeight: 'bold' }}>✉️ info@example.com</span>
                </div>
                <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '300px' }}>
                    <div className="scrolling-text">
                        Free shipping on all prepaid orders!
                    </div>
                </div>
            </div>

            {/* Main Navbar */}
            <Navbar bg="light" expand="lg">
                <Navbar.Brand as={Link} to="/">
                    <img 
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTXGi_z7YeRQsO-CTo4prgDXtxVT_A_x-lvBw&s" 
                        alt="Logo" 
                        style={{ height: '65px', borderRadius: '30px' }} 
                    />
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Form className="mx-auto position-relative" style={{ width: '300px' }}>
                        <FormControl
                            type="search"
                            placeholder="Search"
                            className="me-2"
                            aria-label="Search"
                            style={{ paddingRight: '30px' }} // Space for the icon
                        />
                        <Button 
                            variant="outline-secondary" 
                            style={{
                                position: 'absolute',
                                right: '5px',
                                top: '50%',
                                transform: 'translateY(-50%)',
                                backgroundColor: 'transparent', // Transparent background
                                border: 'none', // Remove border
                                color: 'rgb(55, 130, 60)', // Green color for icon
                            }}
                        >
                            <FontAwesomeIcon icon={faSearch} />
                        </Button>
                    </Form>
                    <Nav className="ml-auto">
                        <Link to="/cart" style={{ textDecoration: 'none' }}>
                            <Button 
                                variant="outline-warning" 
                                className="me-2"
                                style={{
                                    backgroundColor: 'transparent', // Transparent background
                                    border: 'none', // Remove border
                                    color: 'rgb(55, 130, 60)', // Green color
                                }}
                            >
                                <FontAwesomeIcon icon={faShoppingCart} className="me-1" />
                                Cart
                            </Button>
                        </Link>
                        <Link to="/login" style={{ textDecoration: 'none' }}>
                            <Button 
                                variant="outline-info" 
                                className="me-2"
                                style={{
                                    backgroundColor: 'transparent', // Transparent background
                                    border: 'none', // Remove border
                                    color: 'rgb(55, 130, 60)', // Green color
                                }}
                            >
                                <FontAwesomeIcon icon={faUser} className="me-1" />
                                Login
                            </Button>
                        </Link>
                        <Link to="/signup" style={{ textDecoration: 'none' }}>
                            <Button 
                                variant="outline-success"
                                style={{
                                    backgroundColor: 'transparent', // Transparent background
                                    border: 'none', // Remove border
                                    color: 'rgb(55, 130, 60)', // Green color
                                }}
                            >
                                <FontAwesomeIcon icon={faUser} className="me-1" />
                                Sign Up
                            </Button>
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default MyNavbar;
