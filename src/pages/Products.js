import React, { useEffect, useState } from 'react';
import { Card, Button } from 'react-bootstrap';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch product data from a static JSON file or an API
    const fetchProducts = async () => {
      const response = await fetch('/products.json'); // Assuming you have a products.json file in the public folder
      const data = await response.json();
      setProducts(data);
    };
    fetchProducts();
  }, []);

  return (
    <div className="container mt-4">
      <h1>Our Products</h1>
      <div className="row">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <Card className="mb-4">
              <Card.Img variant="top" src={product.image} />
              <Card.Body>
                <Card.Title>{product.name}</Card.Title>
                <Card.Text>${product.price}</Card.Text>
                <Button variant="primary">Buy Now</Button>
              </Card.Body>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
