// frontend/src/pages/ProductList.js
import React, { useEffect, useState } from "react";
import "./styles/productlist.css";
import { Link } from "react-router-dom";

const ProductList = ({ sortOrder, setSortOrder, minPrice, maxPrice }) => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Função para obter os produtos do backend
    const getProducts = async () => {
      try {
        const response = await fetch(
          "https://backendhc.hyagocolares.repl.co/products"
        );
        const data = await response.json();
        setProducts(data);
      } catch (error) {
        console.error("Erro ao buscar os produtos:", error);
      }
    };

    // Chamada da função para obter os produtos ao montar o componente
    getProducts();
  }, []); // Use o segundo argumento do useEffect para garantir que a função seja chamada apenas uma vez


  // Função para comparar a ordenação dos produtos
  const compareProducts = (a, b) => {
    switch (sortOrder) {
      case "relevance":
        return a.id - b.id;
      case "price_asc":
        return a.price - b.price;
      case "price_desc":
        return b.price - a.price;
      default:
        return a.id - b.id;
    }
  };

  // Filtrar produtos com base no preço mínimo e máximo
  const filteredProductsByPrice = products.filter((product) => {
    const price = parseFloat(product.price);
    const minPriceMatch = !minPrice || price >= parseFloat(minPrice);
    const maxPriceMatch = !maxPrice || price <= parseFloat(maxPrice);
    return minPriceMatch && maxPriceMatch;
  });

  // Ordenar produtos com base na ordenação selecionada
  const sortedProducts = filteredProductsByPrice.sort(compareProducts);
  const handleSortOrderChange = (event) => {
    setSortOrder(event.target.value);
  };

  return (
    <div className="product-list-container">
      <div className="pl-painel">
        <h3 className="pl-titulo">Itens</h3>
        <div className="product-filter">
          <select value={sortOrder} onChange={handleSortOrderChange}>
            <option value="relevance">Mais relevantes</option>
            <option value="price_asc">Menor preço</option>
            <option value="price_desc">Maior preço</option>
          </select>
        </div>
      </div>
      <div className="pl-container">
        {sortedProducts.map((product) => (
          <div className="pl-item" key={product.id}>
           <Link to={`/product/${product.id}`}>
              <div className="pl-img-item">
                <img src={product.imageUrl} alt={product.name} />
              </div>
              <div className="text-item">
                <h3 className="pl-text-name">{product.name}</h3>
                <p className="pl-text-price">R$ {product.price.toFixed(2)}</p>
                <p className="pl-text-message">{product.message}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProductList;
