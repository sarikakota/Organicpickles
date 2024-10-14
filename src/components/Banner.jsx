import React from 'react';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Banner.css'; // Ensure you have this import for your CSS

const ImageCarousel = () => {
    return (
        <Carousel interval={900} pause="hover">
            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="https://cdn-kiomd.nitrocdn.com/WorDVBIvVgeFFDKxIvONwEHCNNZozgHJ/assets/images/optimized/wp-content/uploads/2023/07/c9bdd1a7d9a56c65fb1baa7a00476b68.05-Banner-scaled.jpg"
                    alt="First slide"
                />
                <Carousel.Caption>
                    <h3>First Slide Label</h3>
                    <p>Description for the first slide.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="https://organicanand.com/wp-content/uploads/2023/09/banner0.jpg"
                    alt="Second slide"
                />
                <Carousel.Caption>
                    <h3>Second Slide Label</h3>
                    <p>Description for the second slide.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img
                    className="d-block w-100 carousel-image"
                    src="https://cdn.modernbazaar.online/assets/uploads/category/compress/0b2e024bc060f918d88948914fabfe3f.jpg"
                    alt="Third slide"
                />
                <Carousel.Caption>
                    <h3>Third Slide Label</h3>
                    <p>Description for the third slide.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
};

export default ImageCarousel;
