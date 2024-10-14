import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const ShopNow = [
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/mango-pickle-1.jpg',
    description: 'Aam ka Achar Mango pickle – Sour (Khatta)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-2.jpg',
    description: 'Adrak Mirchi Nimbu ka Achar | Khatta & Spicy',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-11-1-768x768-1.jpg',
    description: 'Amla -Mirchi pickle (Indian Gooseberry & green chilly Pickle)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2023/04/Amla-Nimbu-Pickle-Combo-1.jpg',
    description: 'Aam ka Achar Mango pickle – Sour (Khatta)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/2-3-1.jpg',
    description: 'Amla Achar and Nimbo ka Achar – Pickel Set 250gm each',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/amla-candy-mockup.jpg',
    description: 'Amla achar and Nimbu achar – Pickle set',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/4th-3.jpg',
    description: 'Amla Candy 200gm | Homemade, Authentic, No preservative',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/2-1-1.jpg',
    description: 'Amla Chukandar Supari ( Grated) 200 gm',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-5_1-1.jpg',
    description: 'amla ka achar lahsun ka achar (with haldi) – Pickle set',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/amla-supari-CMYK.jpg',
    description: 'Amla pickle (Indian Gooseberry Pickle)| Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2023/04/Garlic-Turmeric-Amla-Pickle-Combo.jpg',
    description: 'Amla Supari(grated) 200gm | Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side.jpg',
    description: 'Amla-Haldi Lahsun Pickle Combo set 250gm each',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/4th-1.jpg',
    description: 'Ayurvedic Nimbo Achar ( 40 days Sun Dried)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/CHICKPEA-MANGO-MIX-PICKLE-4-1.jpg',
    description: 'Bharwa Hari Mirchi Ka Achar ( Stuffed Green Chillies) | 350 gm',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/round-jar-4th-side-1.jpg',
    description: 'Chhola (Chickpea-Mango Mix pickle)| Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/SQUARE-JAR-4th-5-1.jpg',
    description: 'Fariyali Nimbo Achar ( sour lemon Pickle) | 200 gm',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side-3-1.jpg',
    description: 'Garlic pickle ( lahsun ka achar ) | Homemade, Authentic',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2023/04/Garlic-Turmeric-Nimbu-Pickle-Combo.jpg',
    description: 'Garlic-Turmeric pickle ( Lahsoon Kachi Haldi ka Achaar)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/1-1-1.jpg',
    description: 'Haldi Lahsun-Nimbu Pickle Combo Set 250gm each ',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2023/04/Garlic-Turmeric-Panchmel-Pickle-Combo-300x295-1.jpg',
    description: 'Haldi Lahsun-Nimbu Pickle set | Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/1-3-1.jpg',
    description: 'Haldi Lahsun-Panchmel Pickle Combo Set 250gm each',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-1.jpg',
    description: 'Haldi Lahsun-Panchmel Pickle set| Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/SQUAR-JAR-4th.jpg',
    description: 'Hari Mirch ka Achar (in lemon Juice) – Khatta & Spicy',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/SQUAR-JAR-4th.jpg',
    description: 'Hing Aam ka Achar – Seedless & oil free (mango Pickle)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/BITTERGROUD-MANGO-MIX-1-1.jpg',
    description: 'karele ka Achar with Keri Mix pickle | 350 gm',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2023/04/Mango-Nimbu-Pickle-Combo-2048x2012-2.jpg',
    description: 'Aam ka Achar Mango pickle – Sour (Khatta)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg',
    description: 'Aam ka Achar Mango pickle – Sour (Khatta)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2023/04/Mango-Garlic-Turmeric-Pickle-Combo-1-1.jpg',
    description: 'Keri ka achar and Nimbo ka Achar – Pickel Set 250gm ',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/moong-badi-mockup-1.jpg',
    description: 'Moong Badi(Mangodi) 200 gm | Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/SQUARE-JAR-4th-SIDE-9.webp',
    description: 'Nimadi Lemon Pickle ( Khatta Mitha Nimbu ka Achaar)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-10.webp',
    description: 'Panchmel Pickle ( beetroot, Gajar, Gobhi, Mooli, Matar Mix Achar)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2023/04/panchmel-amla-pickle-combo-1.jpg',
    description: 'Panchmel-Amla Pickle Combo Set 250gm each| Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/3-8-1.jpg',
    description: 'Panchmel-Amla Pickle set| Homemade, Authentic',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2023/04/Panchmel-Nimbu-pickle-combo-1.jpg',
    description: 'Panchmel-Amla Pickle Combo Set 250gm each | Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/3-10-1.jpg',
    description: 'Panchmel-Nimbu Pickle set| Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2024/04/61t9t7dwE1L-1.jpg',
    description: 'Sugarfree Amla candy 200 Gm| Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4th-side-13.webp',
    description: 'Sweet Keri ka Achar – Jaggery Mango Pickle',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/chana-dal-lahsun-papad-1.jpg',
    description: 'Chana Dal Lahsun Papad 200 gm | Homemade',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/chana-dal-papad-2.jpg',
    description: 'Chana Dal Papad 200 gm | Homemade, Authentic',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/moong-dal-papad-mockup-1.jpg',
    description: 'Moong Dal Papad 200 gm | Homemade, Authentic',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/moong-dal-lahsun-papad-1.jpg',
    description: 'Moong Dal Lahsun Papad 200 gm | Homemade, Authentic',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/urad-dal-papad-mockup-1.jpg',
    description: 'Urad Dal Punjabi Papad 200 gm | Homemade, Authentic',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/3-6-1.jpg',
    description: 'Keri-Haldi Lahsun Pickle set| Homemade, Authentic',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
  {
    src: 'https://organicanand.com/wp-content/uploads/2022/12/square-jar-4-side.jpg',
    description: 'Mango Chunda/Murabba (Grated mango Murabba)',
    price: '₹225.00 – ₹335.00',
    sizes: ['250-gm', '350-gm', '500-gm'],
  },
];


const ImageGallery = () => {
    return (
      <Container>
        <Row>
          {ShopNow.map((image, index) => (
            <Col md={3} key={index} className="text-center mb-4">
              <img src={image.src} alt={image.description} className="img-fluid mb-2" />
              <h6 style={{ fontSize: '0.9rem' }}>{image.description}</h6>
              <p style={{ fontSize: '0.8rem' }}>{image.price}</p>
              <p style={{ fontSize: '0.8rem' }}>{image.sizes.join(', ')}</p>
              <Button variant="success">Add to Cart</Button>
            </Col>
          ))}
        </Row>
      </Container>
    );
  };
  
  export default ImageGallery;
