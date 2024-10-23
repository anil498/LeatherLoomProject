import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer bg-dark">
      <Container>
        <Row className="text-center text-md-start">
          <Col xs={12} md={4} className="mb-3">
            <h5>Company Info</h5>
            <p>Leather Loom is a brand dedicated to crafting premium leather products.</p>
          </Col>
          <Col xs={12} md={4} className="mb-3">
            <h5>Useful Links</h5>
            <ul className="list-unstyled">
              <li><a href="/about" className="text-light">About Us</a></li>
              <li><a href="/products" className="text-light">Products</a></li>
              <li><a href="/contact" className="text-light">Contact Us</a></li>
            </ul>
          </Col>
          <Col xs={12} md={4}>
            <h5>Follow Us</h5>
            <ul className="list-inline">
              <li className="list-inline-item"><a href="https://facebook.com" className="text-light">Facebook</a></li>
              <li className="list-inline-item"><a href="https://twitter.com" className="text-light">Twitter</a></li>
              <li className="list-inline-item"><a href="https://instagram.com" className="text-light">Instagram</a></li>
            </ul>
          </Col>
        </Row>
        <Row className="mt-3">
          <Col className="text-center">
            <p>&copy; 2024 Leather Loom. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}
