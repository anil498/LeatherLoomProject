import React from "react";
import "./Home.css"; // Import CSS for styling
import ProductCard from "../components/ProductCard";
import Img1 from "../assets/Img1.webp";
import Img2 from "../assets/Img2.webp";
import Img3 from "../assets/Img3.webp";
import Img4 from "../assets/Img4.webp";
import gif from "../assets/gif.gif";

export default function Home() {
  return (
    <div className="homepage-container">
      <img
        src={gif}
        className="img-container"
        alt="oops! Something Went Wrong"
      />
      <br />
      <h2 className="featured-heading">Featured Products</h2>
      <div className="product-card-container">
        <ProductCard image={Img1} title="PRODUCT 1" price="100" />
        <ProductCard image={Img2} title="PRODUCT 2" price="150" />
        <ProductCard image={Img3} title="PRODUCT 3" price="200" />
        <ProductCard image={Img4} title="PRODUCT 4" price="200" />
      </div>
    </div>
  );
}
