import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const MangoPickles = () => {
  const products = [
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/mango-pickle-1.jpg',
      title: 'Aam ka Achar Mango pickle – Sour (Khatta)',
      prices: '₹225.00 – ₹335.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/CHICKPEA-MANGO-MIX-PICKLE-4-1.jpg',
      title: 'Chhola (Chickpea-Mango Mix pickle)',
      prices: '₹215.00 – ₹325.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/SQUAR-JAR-4th.jpg',
      title: 'Hing Aam ka Achar – Seedless & oil free',
      prices: '₹215.00 – ₹320.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/BITTERGROUD-MANGO-MIX-1-1.jpg',
      title: 'Karele ka Achar with Keri Mix pickle',
      prices: '₹210.00 – ₹310.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg',
      title: 'MangoChunda/Murabba(Grated mangoMurabba)',
      prices: '₹220.00 – ₹330.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-13.webp',
      title: 'Sweet Keri ka Achar – Jaggery Mango Pickle',
      prices: '₹215.00 – ₹325.00',
    },
  ];

  return (
    <Container>
      <h1 style={{ fontSize: '1.5rem' }}>Mango Pickles</h1>
      <p>Delicious mango pickles made with fresh ingredients!</p>
      <Row>
        {products.map((product, index) => (
          <Col md={3} key={index} className="mb-4">
            <Card>
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title style={{ fontSize: '1rem' }}>{product.title}</Card.Title>
                <Card.Text style={{ fontSize: '0.9rem' }}>
                  <strong>{product.prices}</strong>
                </Card.Text>
                <Button style={{ backgroundColor: 'green', borderColor: 'green', color: 'white' }}>
                  Add to Cart
                </Button>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default MangoPickles;
