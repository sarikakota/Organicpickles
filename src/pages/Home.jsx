import React from 'react';
import { Carousel, Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/Banner.css';
import '../styles/Categories.css';
import '../styles/Papulorproducts.css';
import '../styles/Bestsellers.css';
import '../styles/Kidsbestsellers.css';
import { width } from '@fortawesome/free-solid-svg-icons/fa0';

// ImageCarousel Component
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

// FeaturedCategories Component
const FeaturedCategories = () => {
    const categories = [
        { image: "https://organicanand.com/wp-content/uploads/2024/08/ROUND-JAR-2nd-2.jpg", title: "Oil free Pickles" },
        { image: "https://organicanand.com/wp-content/uploads/2024/08/moong-dal-papad-mockup-768x768-1.jpg", title: "Papad & Badi" },
        { image: "https://organicanand.com/wp-content/uploads/2024/08/amla-candy-mockup-768x768-1.jpg", title: "Mirchi Pickle" },
        { image: "https://organicanand.com/wp-content/uploads/2024/08/mango-pickle.jpg", title: "Mango Pickle" },
        { image: "https://organicanand.com/wp-content/uploads/2024/08/square-jar-1st-side-9-768x768-1.jpg", title: "Kids Friendly" },
        { image: "https://organicanand.com/wp-content/uploads/2024/08/seedless-pickle.jpg", title: "Seasonal Pickle" },
    ];

    return (
        <div className="featured-categories container-full">
            <h1 className="featured-title">Featured Categories</h1>
            <div className="underline"></div>
            <Row className="justify-content-center">
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

// PopularProducts Component
const PopularProducts = () => {
    return (
        <Container className="papulorproducts-container container-full mt-4">
            <h1 className="text-center-title">Popular Products</h1>
            <div className="divider"></div>
            <Row className="justify-content-center">
                {/* First Row of Products */}
                <Col xs={12} sm={6} md={3} className="text-center">
                    <img
                        src="https://organicanand.com/wp-content/uploads/2022/12/mango-pickle-1.jpg"
                        alt="Mango Pickle"
                        className="img-fluid"
                    />
                    <div className="product-details">
                        <h5>Aam ka Achar Mango Pickle – Sour (Khatta)</h5>
                        <p>₹225.00 – ₹335.00</p>
                        <p>250-gm / 350-gm / 500-gm</p>
                        <Button variant="success">Add to Cart</Button>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="text-center">
                    <img
                        src="https://organicanand.com/wp-content/uploads/2022/12/amla-candy-mockup.jpg"
                        alt="Amla Candy"
                        className="img-fluid"
                    />
                    <div className="product-details">
                        <h5>Amla Candy 200gm | Homemade, No Preservative</h5>
                        <p>₹225.00 – ₹335.00</p>
                        <p>250-gm / 350-gm / 500-gm</p>
                        <Button variant="success">Add to Cart</Button>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="text-center">
                    <img
                        src="https://organicanand.com/wp-content/uploads/2022/12/amla-candy-mockup.jpg"
                        alt="Amla Pickle"
                        className="img-fluid"
                    />
                    <div className="product-details">
                        <h5>Amla Pickle (Indian Gooseberry Pickle) | Homemade</h5>
                        <p>₹222.00 – ₹333.00</p>
                        <p>250-gm / 350-gm / 500-gm</p>
                        <Button variant="success">Add to Cart</Button>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="text-center">
                    <img
                        src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-11-1-768x768-1.jpg"
                        alt="Amla-Mirchi Pickle"
                        className="img-fluid"
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
                    <img
                        src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg"
                        alt="Mango Chunda"
                        className="img-fluid"
                    />
                    <div className="product-details">
                        <h5>Mango Chunda/Murabba (Grated Mango Murabba)</h5>
                        <p>₹225.00 – ₹335.00</p>
                        <p>250-gm / 350-gm / 500-gm</p>
                        <Button variant="success">Add to Cart</Button>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="text-center">
                    <img
                        src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg"
                        alt="Nimbu ka Achar"
                        className="img-fluid"
                    />
                    <div className="product-details">
                        <h5>Nimbu ka Achar (Lemon Pickle)</h5>
                        <p>₹225.00 – ₹335.00</p>
                        <p>250-gm / 350-gm / 500-gm</p>
                        <Button variant="success">Add to Cart</Button>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="text-center">
                    <img
                        src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg"
                        alt="Vegetable Pickle"
                        className="img-fluid"
                    />
                    <div className="product-details">
                        <h5>Vegetable Pickle</h5>
                        <p>₹225.00 – ₹335.00</p>
                        <p>250-gm / 350-gm / 500-gm</p>
                        <Button variant="success">Add to Cart</Button>
                    </div>
                </Col>
                <Col xs={12} sm={6} md={3} className="text-center">
                    <img
                        src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg"
                        alt="Mixed Pickle"
                        className="img-fluid"
                    />
                    <div className="product-details">
                        <h5>Mixed Pickle</h5>
                        <p>₹225.00 – ₹335.00</p>
                        <p>250-gm / 350-gm / 500-gm</p>
                        <Button variant="success">Add to Cart</Button>
                    </div>
                </Col>
            </Row>
        </Container>
    );
};



// DailyBestsellers Component
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
        <Container className="daily-bestseller-container container-full mt-4">
            <h1>Daily Bestsellers</h1>
            <div className="daily-divider"></div>
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
            {/* Add your bestselling products here, similar to the PopularProducts */}
        </Container>
    );
};

// KidsFriendly Component
const KidsFriendly = () => {
   
    
    return (
        <Container className="kids-friendly container-full mt-4">
            <h1 >Kids Friendly</h1>
            <div className="green-line"></div>
            <Row className="mb-2">
          <Col xs={12} md={6}> {/* Full width on small screens, half on medium+ */}
            <img
              src="https://organicanand.com/wp-content/uploads/2024/08/kids-friendly-1.jpg"
              alt="Kids Friendly 1"
              className="img-fluid large-image hover-effect"
            />
          </Col>
          <Col xs={6} md={3}> {/* Half width on small screens, one-third on medium+ */}
            <img
              src="https://organicanand.com/wp-content/uploads/2022/12/mango-pickle-1.jpg"
              alt="Aam ka Achar Mango pickle – Sour (Khatta)"
              className="img-fluid small-image hover-effect"
            />
            <h5 className="product-title">Aam ka Achar Mango pickle – Sour (Khatta)</h5>
            <p className="product-price">Price: ₹225.00 – ₹335.00</p>
            <p className="product-sizes">Sizes: 250-gm, 350-gm, 500-gm</p>
            <div className="text-center mt-2">
              <Button variant="success">Add to Cart</Button>
            </div>
          </Col>
          <Col xs={6} md={3}> {/* Half width on small screens, one-third on medium+ */}
            <img
              src="https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-2.jpg"
              alt="Adrak Mirchi Nimbu ka Achar | Khatta & Spicy"
              className="img-fluid small-image hover-effect"
            />
            <h5 className="product-title">Adrak Mirchi Nimbu ka Achar|Khatta&Spicy</h5>
            <p className="product-price">Price: ₹215.00 – ₹315.00</p>
            <p className="product-sizes">Sizes: 250-gm, 350-gm, 500-gm</p>
            <div className="text-center mt-2">
              <Button variant="success">Add to Cart</Button>
            </div>
          </Col>
        </Row>
            {/* Add your kids-friendly products here */}
        </Container>
    );
};

// Main Home Component
const Home = () => {
    return (
        <div>
            <ImageCarousel />
            <FeaturedCategories />
            <PopularProducts />
            <DailyBestsellers />
            <KidsFriendly />
            
        </div>
    );
};

export default Home;
