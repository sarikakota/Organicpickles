import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Footer.css'; // Import your CSS file

const Footer = () => {
  return (
    <footer className="footer">
      <Container fluid>
        <Row className="footer-headings text-center">
          <Col md={3} className="footer-section">
            <h5>Pages</h5>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Categories</h5>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Quick Links</h5>
          </Col>
          <Col md={3} className="footer-section">
            <h5>Contact Us</h5>
          </Col>
        </Row>

        <Row>
          <Col md={3} className="footer-section text-center">
            <ul className="footer-links">
              <li>About Us</li>
              <li>Shop</li>
              <li>Blog</li>
              <li>Google Reviews</li>
              <li>Videos</li>
            </ul>
          </Col>
          <Col md={3} className="footer-section text-center">
            <ul className="footer-links">
              <li>Mango Pickles</li>
              <li>Mouthfreshner</li>
              <li>Papad & Badi</li>
              <li>Oil Free Pickles</li>
              <li>Kids Friendly</li>
              <li>Immunobooster Pickles</li>
              <li>Amla Pickles</li>
              <li>Lemon Pickles</li>
              <li>Garlic Pickles</li>
              <li>Mirchi Pickles</li>
            </ul>
          </Col>
          <Col md={3} className="footer-section text-center">
            <ul className="footer-links">
              <li>Shipping & Payment Policy</li>
              <li>Refund and Returns Policy</li>
              <li>Terms & Conditions</li>
              <li>Privacy Policy</li>
              <li>Frequently Asked Questions</li>
            </ul>
          </Col>
          <Col md={3} className="footer-section text-center">
            <p>Address: Kashyap Enterprises, Kailash Marg, Mandsaur, Madhya Pradesh, 458002</p>
            <p>Call Us: +91-9479826048</p>
            <p>Email: <a href="mailto:support@organicanand.com">support@organicanand.com</a></p>
            <p>Hours: 10:00 - 18:00, Mon - Sat</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
