import React from 'react';
import { Container, Row, Col, Image, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Papulorproducts.css'; // Ensure this CSS file is created or modified

const PopularProducts = () => {
  return (
    <Container className="papulorproducts-container mt-4">
      <h1 className="text-center-title">Popular Products</h1>
      <div className="divider"></div>
      
      {/* First Row of Products */}
      <Row className="justify-content-center">
        <Col xs={12} sm={6} md={3} className="text-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/12/mango-pickle-1.jpg" 
            fluid 
            alt="Mango Pickle" 
          />
          <div className="product-details">
            <h5>Aam ka Achar Mango Pickle – Sour (Khatta)</h5>
            <p>₹225.00 – ₹335.00</p>
            <p>250-gm / 350-gm / 500-gm</p>
            <Button variant="success">Add to Cart</Button>
          </div>
        </Col>
        
        <Col xs={12} sm={6} md={3} className="text-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/12/amla-candy-mockup.jpg" 
            fluid 
            alt="Amla Candy" 
          />
          <div className="product-details">
            <h5>Amla Candy 200gm | Homemade,No Preservative</h5>
            <p>₹225.00 – ₹335.00</p>
            <p>250-gm / 350-gm / 500-gm</p>
            <Button variant="success">Add to Cart</Button>
          </div>
        </Col>

        <Col xs={12} sm={6} md={3} className="text-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/12/amla-candy-mockup.jpg" 
            fluid 
            alt="Amla Pickle" 
          />
          <div className="product-details">
            <h5>Amla Pickle (Indian Gooseberry Pickle)|Homemade</h5>
            <p>₹222.00 – ₹333.00</p>
            <p>250-gm / 350-gm / 500-gm</p>
            <Button variant="success">Add to Cart</Button>
          </div>
        </Col>

        <Col xs={12} sm={6} md={3} className="text-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-11-1-768x768-1.jpg" 
            fluid 
            alt="Amla-Mirchi Pickle" 
          />
          <div className="product-details">
            <h5>Amla - Mirchi Pickle (Indian Green Chilly Pickle)</h5>
            <p>₹205.00 – ₹315.00</p>
            <p>250-gm / 350-gm / 500-gm</p>
            <Button variant="success">Add to Cart</Button>
          </div>
        </Col>
      </Row>

      {/* Second Row of Products */}
      <Row className="justify-content-center mt-4">
        <Col xs={12} sm={6} md={3} className="text-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg" 
            fluid 
            alt="Mango Chunda" 
          />
          <div className="product-details">
            <h5>Mango Chunda/Murabba (Grated Mango Murabba)</h5>
            <p>₹225.00 – ₹335.00</p>
            <p>250-gm / 350-gm / 500-gm</p>
            <Button variant="success">Add to Cart</Button>
          </div>
        </Col>
        
        <Col xs={12} sm={6} md={3} className="text-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-13.webp" 
            fluid 
            alt="Sweet Keri ka Achar" 
          />
          <div className="product-details">
            <h5>Sweet Keri ka Achar – Jaggery Mango Pickle</h5>
            <p>₹225.00 – ₹335.00</p>
            <p>250-gm / 350-gm / 500-gm</p>
            <Button variant="success">Add to Cart</Button>
          </div>
        </Col>

        <Col xs={12} sm={6} md={3} className="text-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-1.jpg" 
            fluid 
            alt="Hari Mirch ka Achar" 
          />
          <div className="product-details">
            <h5>Hari Mirch ka Achar (in Lemon Juice) – Khatta & Spicy</h5>
            <p>₹222.00 – ₹333.00</p>
            <p>250-gm / 350-gm / 500-gm</p>
            <Button variant="success">Add to Cart</Button>
          </div>
        </Col>

        <Col xs={12} sm={6} md={3} className="text-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-10.webp" 
            fluid 
            alt="Panchmel Pickle" 
          />
          <div className="product-details">
            <h5>Panchmel Pickle (Beetroot, Gajar, Gobhi, Mooli, Matar Mix )</h5>
            <p>₹205.00 – ₹315.00</p>
            <p>250-gm / 350-gm / 500-gm</p>
            <Button variant="success">Add to Cart</Button>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default PopularProducts;
