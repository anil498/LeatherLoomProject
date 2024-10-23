import React from "react";
import { Routes, Route } from 'react-router-dom';
import Header from "../layouts/mainLayoutComponents/header/Header";
import Footer from "./mainLayoutComponents/footer/Footer";
import Home from "../pages/Home";
import Products from "../pages/Products";

export default function MainLayout() {
  return (
    <>
      <Header />
        <Routes>
            <Route  index element={<Home />} />
            <Route path="/home" index element={<Home />} />
            <Route path="/products" element={<Products />} />
        </Routes>
      
      <Footer />
    </>
  );
}
