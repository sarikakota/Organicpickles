import React from 'react';
import { Row, Col, Button } from 'react-bootstrap';

const Immunobooster = () => {
    const products = [
        {
            image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-11-1-768x768-1.jpg',
            title: 'Amla -Mirchi pickle (Indian Gooseberry & green chilly Pickle)',
            price: '₹220.00 – ₹338.00',
            weights: '250-gm, 350-gm, 500-gm',
        },
        {
            image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-5_1-1.jpg',
            title: 'Amla pickle (Indian Gooseberry Pickle)',
            price: '₹220.00 – ₹330.00',
            weights: '250-gm, 350-gm, 500-gm',
        },
        {
            image: 'https://organicanand.com/wp-content/uploads/2022/12/SQUARE-JAR-4th-5-1.jpg',
            title: 'Garlic pickle (lahsun ka achar) | Homemade, Authentic',
            price: '₹230.00 – ₹350.00',
            weights: '250-gm, 350-gm, 500-gm',
        },
        {
            image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side-3-1.jpg',
            title: 'Garlic-Turmeric pickle (Lahsoon Kachi Haldi ka Achaar)',
            price: '₹225.00 – ₹340.00',
            weights: '250-gm, 350-gm, 500-gm',
        },
        {
            image: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-10.webp',
            title: 'Panchmel Pickle (beetroot, Gajar, Gobhi, Mooli, Matar Mix Achar)',
            price: '₹218.00 – ₹325.00',
            weights: '250-gm, 350-gm, 500-gm',
        },
    ];

    const styles = {
        productTitle: {
            fontSize: '1rem', // Decrease the font size
        },
        productPrice: {
            fontSize: '0.9rem', // Decrease the font size
        },
        productWeights: {
            fontSize: '0.9rem', // Decrease the font size
        },
        button: {
            backgroundColor: '#28a745', // Green color
            borderColor: '#28a745', // Green border
        },
    };

    return (
        <Row>
            {products.map((product, index) => (
                <Col key={index} xs={12} md={3} className="text-center mb-4">
                    <img src={product.image} alt={product.title} className="img-fluid" />
                    <h5 style={styles.productTitle}>{product.title}</h5>
                    <p style={styles.productPrice}>{product.price}</p>
                    <p style={styles.productWeights}>{product.weights}</p>
                    <Button style={styles.button}>Add to Cart</Button>
                </Col>
            ))}
        </Row>
    );
};

export default Immunobooster;
