import React from 'react';
import { Card, Button, Col } from 'react-bootstrap';

export default function ProductCard({ image, title, price }) {
  return (
    <Col xs={6} md={4}> {/* 6 columns on extra small screens (2 cards per row), 3 columns on medium and larger screens (4 cards per row) */}
      <Card  style={{ margin: '10px' }}>
        <Card.Img variant="top" src={image} alt={title} style={{ height: '200px', objectFit: 'cover' }} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <strong>Price:</strong> ${price}
          </Card.Text>
          <Button variant="primary">View Details</Button>
        </Card.Body>
      </Card>
    </Col>
  );
}
