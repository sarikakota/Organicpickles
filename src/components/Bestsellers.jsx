import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../styles/Bestsellers.css'; // Import the CSS file

const DailyBestsellers = () => {
  const products = [
    {
      title: "Aam ka Achar Mango pickle – Sour (Khatta)",
      price: "₹225.00 – ₹335.00",
      sizes: ["250-gm", "350-gm", "500-gm"],
      imageUrl: "https://organicanand.com/wp-content/uploads/2022/12/mango-pickle-1.jpg"
    },
    {
      title: "Adrak Mirchi Nimbu ka Achar | Khatta & Spicy",
      price: "₹200.00",
      sizes: ["250-gm", "350-gm", "500-gm"],
      imageUrl: "https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-2.jpg"
    },
    {
      title: "Amla -Mirchi pickle (Indian Gooseberry & green chilly)",
      price: "₹250.00",
      sizes: ["250-gm", "350-gm", "500-gm"],
      imageUrl: "https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-11-1-768x768-1.jpg"
    },
    {
      title: "Amla Achar and Nimbo ka Achar – Pickel Set 250gm",
      price: "₹300.00",
      sizes: ["250-gm", "350-gm", "500-gm"],
      imageUrl: "https://organicanand.com/wp-content/uploads/2023/04/Amla-Nimbu-Pickle-Combo-1.jpg"
    }
  ];

  return (
    <Container fluid>
      <div className="daily-bestseller-container">
        <h2 className="text-center">Daily Bestsellers</h2>
        <div className="daily-divider" />
        <Row>
          {products.map((product, index) => (
            <Col md={3} key={index} className="text-center">
              <img
                src={product.imageUrl}
                alt={product.title}
                className="img-fluid"
              />
              <h5 className="daily-bestseller-title">{product.title}</h5>
              <p className="daily-bestseller-price">{product.price}</p>
              <p className="daily-bestseller-sizes">{product.sizes.join(", ")}</p>
              <Button className="daily-custom-green-button">Add to Cart</Button>
            </Col>
          ))}
        </Row>
      </div>
    </Container>
  );
};

export default DailyBestsellers;
