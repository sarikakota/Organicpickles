import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const KidsFriendlyPage = () => {
  const products = [
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg',
      name: 'Mango Chunda/Murabba (Grated mango Murabba)',
      price: '₹220.00 – ₹330.00',
      sizes: '250-gm, 350-gm, 500-gm',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/SQUARE-JAR-4th-SIDE-9.webp',
      name: 'Nimadi Lemon Pickle (Khatta Mitha Nimbu ka Achaar)',
      price: '₹220.00 – ₹325.00',
      sizes: '250-gm, 350-gm, 500-gm',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-10.webp',
      name: 'Panchmel Pickle (Beetroot, Gajar, Gobhi, Mooli, Matar)',
      price: '₹218.00 – ₹325.00',
      sizes: '250-gm, 350-gm, 500-gm',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side.jpg',
      name: 'Ayurvedic Nimbo Achar (40 days Sun Dried)',
      price: '₹240.00 – ₹350.00',
      sizes: '250-gm, 350-gm, 500-gm',
    },
  ];

  return (
    <Container>
      <h2>Kids Friendly Pickles</h2>
      <p>Specially made for kids with safe ingredients!</p>
      <Row>
        {products.map((product, index) => (
          <Col key={index} md={3} className="text-center mb-4">
            <img
              src={product.image}
              alt={product.name}
              style={{ width: '100%', height: 'auto' }}
            />
            <h5 style={{ fontSize: '16px' }}>{product.name}</h5>
            <p style={{ fontSize: '14px' }}>{product.price}</p>
            <p>{product.sizes}</p>
            <Button variant="success">Add to Cart</Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default KidsFriendlyPage;
