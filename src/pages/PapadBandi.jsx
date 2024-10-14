import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PapadBandi = () => {
  const products = [
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/moong-badi-mockup-1.jpg',
      title: 'Moong Badi (Mangodi) 200 gm',
      price: '₹220.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/chana-dal-lahsun-papad-1.jpg',
      title: 'Chana Dal Lahsun Papad 200 gm',
      price: '₹220.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/chana-dal-papad-2.jpg',
      title: 'Chana Dal Papad 200 gm',
      price: '₹220.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/moong-dal-papad-mockup-1.jpg',
      title: 'Moong Dal Papad 200 gm',
      price: '₹220.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/moong-dal-lahsun-papad-1.jpg',
      title: 'Moong Dal Lahsun Papad 200 gm',
      price: '₹220.00',
    },
    {
      image: 'https://organicanand.com/wp-content/uploads/2022/12/urad-dal-papad-mockup-1.jpg',
      title: 'Urad Dal Punjabi Papad 200 gm',
      price: '₹220.00',
    },
  ];

  return (
    <Container>
      <h1>Papad Bandi</h1>
      <Row>
        {products.map((product, index) => (
          <Col key={index} xs={12} md={3} className="mb-4">
            <div className="text-center">
              <img src={product.image} alt={product.title} style={{ width: '100%', height: 'auto' }} />
              <h5 style={{ fontSize: '16px' }}>{product.title}</h5> {/* Decrease title size */}
              <p style={{ fontSize: '14px' }}>Original price: ₹360.00</p> {/* Decrease price size */}
              <p style={{ fontSize: '14px' }}>{product.price}</p> {/* Decrease price size */}
              <Button variant="success">Add to Cart</Button> {/* Change button color to green */}
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PapadBandi;
