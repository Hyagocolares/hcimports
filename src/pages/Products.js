// frontend/src/pages/Products.js
import React, { useState } from "react";
import ProductList from "../components/ProductList";
import "./styles/product.css";

const Products = () => {
  const [sortOrder, setSortOrder] = useState("relevance");
  const [minPrice] = useState("");
  const [maxPrice] = useState("");

  return (
    <div className="product">
      <ProductList
        sortOrder={sortOrder}
        setSortOrder={setSortOrder}
        minPrice={minPrice}
        maxPrice={maxPrice}
      />
    </div>
  );
};

export default Products;
