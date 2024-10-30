import React from "react";
import './Products.css'; // Add styles for the Products page
import ProductCard from '../components/ProductCard'; // Ensure you have this component
import Img1 from '../assets/Img1.webp'; // Replace with your actual image imports
import Img2 from '../assets/Img2.webp'; // Add more images
import Img3 from '../assets/Img3.webp';
import Img4 from '../assets/Img4.webp';
import Filters from '../components/Filters'; // Import your FilterBar component
import Sort from '../components/Sort'

// Sample product data (you can fetch this from an API later)
const products = [
  { id: 1, title: "Product 1", price: "100", image: Img1 },
  { id: 2, title: "Product 2", price: "150", image: Img2 },
  { id: 3, title: "Product 3", price: "200", image: Img3 },
  { id: 4, title: "Product 4", price: "250", image: Img4 },
  // Add more products as needed
];

const Products = () => {
  return (
    <div className="products-page">
      <Filters  className="filters-sidebar"/>{/* Side filter bar */}
      
      <div className="products-container">
      <div className="products-header">
          <h2 className="products-heading">All Products</h2>
          <Filters className="filters-toggle"/>{/* Side filter bar */}
          <Sort /> 
        </div> <div className="product-card-container">
          {products.map(product => (
            <ProductCard
              key={product.id}
              image={product.image}
              title={product.title}
              price={product.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;
