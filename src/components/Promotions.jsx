import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../styles/Promotions.css'; // Import your CSS file

const Promotions = () => {
  return (
    <Container fluid className="promotions">
      <Row className="text-center">
        <Col xs={12} md={4} className="promotion-item">
          <div className="promotion-box">
            <img src="https://organicanand.com/wp-content/uploads/2022/11/icon-1.png" alt="Logo 1" className="promotion-logo" />
            <h5>Best prices & offers</h5>
            <p>Orders ₹200 or more</p>
          </div>
        </Col>
        <Col xs={12} md={4} className="promotion-item">
          <div className="promotion-box">
            <img src="https://organicanand.com/wp-content/uploads/2022/11/icon-3.png" alt="Logo 2" className="promotion-logo" />
            <h5>100% Hand made & Sun Dried</h5>
            <p>No Preservatives Added</p>
          </div>
        </Col>
        <Col xs={12} md={4} className="promotion-item">
          <div className="promotion-box">
            <img src="https://organicanand.com/wp-content/uploads/2022/11/icon-2.png" alt="Logo 3" className="promotion-logo" />
            <h5>Free Delivery</h5>
            <p>24/7 customer support</p>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Promotions;
