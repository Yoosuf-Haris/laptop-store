import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import './Home.css'; // Import custom CSS

const Home = () => {
  return (
    <div>
      <header className="hero-section">
        <Container>
          <Row className="align-items-center">
            <Col md={6}>
              <h1>Best Service. Best Price. Laptop Exchange Possible</h1>
              <h2>Laptops in Sri Lanka</h2>
              <Button variant="danger" size="lg">Shop Now</Button>
            </Col>
            <Col md={6}>
              <img
                src="/images/image01.jpg"
                alt="Image01"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </header>
      
      <Container className="products-section gap-2">
      <h2 className="text-center my-5">Our Products</h2>
        <Row>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Laptops</Card.Title>
                <Card.Text>
                  <img src="/images/image02.jpg" alt="Image02" className="img-fluid" />
                </Card.Text>
                <Button variant="danger">Browse</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={6}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Desktops</Card.Title>
                <Card.Text>
                  <img src="/images/image03.jpg" alt="Image03" className="img-fluid" />
                </Card.Text>
                <Button variant="danger">Browse</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Laptop Accessories</Card.Title>
                <Card.Text>
                  <img src="/images/image04.jpg" alt="Image04" className="img-fluid" />
                </Card.Text>
                <Button variant="danger">Browse</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Desktop Accessories</Card.Title>
                <Card.Text>
                  <img src="/images/image05.jpg" alt="Image05" className="img-fluid" />
                </Card.Text>
                <Button variant="danger">Browse</Button>
              </Card.Body>
            </Card>
          </Col>
          <Col md={4}>
            <Card className="mb-3">
              <Card.Body>
                <Card.Title>Monitors</Card.Title>
                <Card.Text>
                  <img src="/images/image06.jpg" alt="Monitors" className="img-fluid" />
                </Card.Text>
                <Button variant="danger">Browse</Button>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="latest-products-section gap-2">
      <Row className="text-center">
    <h1 className="my-5">Our services</h1>
    <Col md={4}>
      <img src="/images/image07.png" alt="Free Delivery" className="service-icon" />
      <p>Free Delivery</p>
      <p>Free Island Wide Delivery</p>
    </Col>
    <Col md={4}>
      <img src="/images/image08.png" alt="Technical Support" className="service-icon" />
      <p>Technical Support</p>
      <p>Friendly Customer Support</p>
    </Col>
    <Col md={4}>
      <img src="/images/image09.jpg" alt="Cash On Delivery" className="service-icon" />
      <p>Cash On Delivery</p>
      <p>Pay After Product Received</p>
    </Col>
  </Row>
        <h2 className="text-center my-5">Latest Products</h2>
        <Row>
          <Col md={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src="/images/acer.jpg" />
              <Card.Body>
                <Card.Title>Acer Aspire core i5 11th Gen</Card.Title>
                <Card.Text>Rs 129,000.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src="/images/Dell.jpg" />
              <Card.Body>
                <Card.Title>Dell core i3 12th Gen</Card.Title>
                <Card.Text>Rs 160,000.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src="/images/newDell.jpg" />
              <Card.Body>
                <Card.Title>Brand New Dell AMD Ryzen 7</Card.Title>
                <Card.Text>Rs 208,000.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col md={3}>
            <Card className="mb-3">
              <Card.Img variant="top" src="/images/dellv.jpg" />
              <Card.Body>
                <Card.Title>Dell Vostro 3520</Card.Title>
                <Card.Text>Rs 175,000.00</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      <Container className="about-us-section" fluid>
        <Row>
          <Col>
            <div className="about-us-content text-center">
              <h2>About Us</h2>
              <p>We are a leading provider of laptops and computer accessories in Sri Lanka, committed to offering the best products and services to our customers. Our mission is to provide top-quality products at competitive prices, ensuring customer satisfaction and a great shopping experience.</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Home;
