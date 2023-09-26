// frontend/src/pages/Home.js
import React from "react";
import ProductCarousel from "../components/ProductCarousel";
import ProductCardCarousel from "../components/ProductCardCarousel";
import ProductList from "../components/ProductList";
import FeatureContainer from "../components/FeatureContainer"
import "./styles/home.css";

const Home = () => {
  return (
    <div className="home">
      <div className="ProductCarousel">
        <ProductCarousel />
      </div>
   {/*<div className="ProductCardCarousel">
        <ProductCardCarousel title="Mais Vendidos" />
      </div>*/}
      <div className="ProductCardCarousel">
        <ProductCardCarousel title="Produtos" />
      </div>
      <div className="ProductList">
        <ProductList />
      </div>
      <div className="FeatureContainer">
        <FeatureContainer/>
      </div>
    </div>
  );
};

export default Home;
