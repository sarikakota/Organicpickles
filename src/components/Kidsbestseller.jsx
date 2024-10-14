import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Kidsbestsellers.css'; // Import your CSS file

const KidsFriendly = () => {
  return (
    <Container fluid>
      <div className="kids-friendly">
        <h1 className="kids-friendly-title">Kids Friendly</h1>
        <div className="green-line" />

        <Row className="mb-2">
          <Col xs={12} md={6}> {/* Full width on small screens, half on medium+ */}
            <img
              src="https://organicanand.com/wp-content/uploads/2024/08/kids-friendly-1.jpg"
              alt="Kids Friendly 1"
              className="img-fluid large-image hover-effect"
            />
          </Col>
          <Col xs={6} md={3}> {/* Half width on small screens, one-third on medium+ */}
            <img
              src="https://organicanand.com/wp-content/uploads/2022/12/mango-pickle-1.jpg"
              alt="Aam ka Achar Mango pickle – Sour (Khatta)"
              className="img-fluid small-image hover-effect"
            />
            <h5 className="product-title">Aam ka Achar Mango pickle – Sour (Khatta)</h5>
            <p className="product-price">Price: ₹225.00 – ₹335.00</p>
            <p className="product-sizes">Sizes: 250-gm, 350-gm, 500-gm</p>
            <div className="text-center mt-2">
              <Button variant="success">Add to Cart</Button>
            </div>
          </Col>
          <Col xs={6} md={3}> {/* Half width on small screens, one-third on medium+ */}
            <img
              src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-2.jpg"
              alt="Adrak Mirchi Nimbu ka Achar | Khatta & Spicy"
              className="img-fluid small-image hover-effect"
            />
            <h5 className="product-title">Adrak Mirchi Nimbu ka Achar|Khatta&Spicy</h5>
            <p className="product-price">Price: ₹215.00 – ₹315.00</p>
            <p className="product-sizes">Sizes: 250-gm, 350-gm, 500-gm</p>
            <div className="text-center mt-2">
              <Button variant="success">Add to Cart</Button>
            </div>
          </Col>
        </Row>
      </div>
    </Container>
  );
};

export default KidsFriendly;
