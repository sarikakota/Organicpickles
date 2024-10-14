import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Categories.css'; // Ensure to include your CSS file

const FeaturedCategories = () => {
    const categories = [
        {
            image: "https://organicanand.com/wp-content/uploads/2024/08/ROUND-JAR-2nd-2.jpg",
            title: "Oil free Pickles",
        },
        {
            image: "https://organicanand.com/wp-content/uploads/2024/08/moong-dal-papad-mockup-768x768-1.jpg",
            title: "Papad & Badi",
        },
        {
            image: "https://organicanand.com/wp-content/uploads/2024/08/amla-candy-mockup-768x768-1.jpg",
            title: "mirchi pickle",
        },
        {
            image: "https://organicanand.com/wp-content/uploads/2024/08/mango-pickle.jpg",
            title: "Mango Pickle",
        },
        {
            image: "https://organicanand.com/wp-content/uploads/2024/08/square-jar-1st-side-9-768x768-1.jpg",
            title: "Kids Friendly",
        },
        {
            image: "https://organicanand.com/wp-content/uploads/2024/08/seedless-pickle.jpg",
            title: "Seasonal Pickle",
        },
    ];

    return (
        <div className="featured-categories">
            <h1 className="featured-title">Featured Categories</h1>
            <div className="underline"></div>
            <Row className="justify-content-center"> {/* Center the row */}
                {categories.map((category, index) => (
                    <Col md={2} key={index}>
                        <Card className="mb-4">
                            <Card.Img variant="top" src={category.image} className="category-image" />
                            <Card.Body>
                                <Card.Title>{category.title}</Card.Title>
                            </Card.Body>
                        </Card>
                    </Col>
                ))}
            </Row>
        </div>
    );
};

export default FeaturedCategories;
