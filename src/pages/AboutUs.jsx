import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './AboutUs.css'; // Import custom CSS file for additional styling

const AboutUs = () => {
  return (
    <Container fluid className="about-us-container">
      <h1 className="text-center">About Us</h1>
      <Row className="align-items-stretch">
        <Col md={6} className="about-image-col d-flex justify-content-center">
          <Image 
            src="https://organicanand.com/wp-content/uploads/2022/11/hbh4.jpg" 
            fluid 
            rounded 
            className="about-image"
          />
        </Col>
        <Col md={6} className="about-text-col d-flex align-items-center">
          <p>
            <h1>Welcome to Organic Pickles</h1>
            Kashyap Enterprises (Brand name-Organic Anand) was founded in April 2021 during the second lockdown, with the aim of providing traditional Indian food items in a very authentic and non-adulterated way. We faced situations where we struggled to find traditional Indian food items (like pickles, squashes, and papads) without preservatives and authentic taste. We tried various brands from national to local levels, but none fulfilled our benchmarks. 
            We remember that during our school days, our pickles were loved by our classmates, and there was always a tussle among them for our pickles. So the idea of Organic Anand was born. We discussed this with our mother, and she assured her full support. Our first two prototype products (Mango Pickle & Handmade Chocolate) were a huge success. Our customers and close acquaintances enjoyed the taste and encouraged us to launch new products. Now, we are launching a complete range of preservative-free and child-friendly products. Our complete recipe is homemade, including pickle masala. We procure raw food items from two sources: our own farms in M.P. and the local market. We use only quality products for the preparation of traditional food items. We use only kachi ghani mustard oil, and all our items are handmade. All our products are preservative-free and have a mouth-watering taste. We use a minimum amount of plastics to make our products more eco-friendly.
          </p>
        </Col>
      </Row>
    </Container>
  );
};

export default AboutUs;
