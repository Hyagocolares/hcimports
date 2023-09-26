// frontend/src/pages/ProductDetails.js
import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";
import "./styles/productDetails.css";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const [itemAdded, setItemAdded] = useState(false);
  const [alreadyAdded, setAlreadyAdded] = useState(false);

  const addToCart = (product) => {
    const existingCart = JSON.parse(localStorage.getItem("cart")) || [];

    if (existingCart.some((item) => item.id === product.id)) {
      setAlreadyAdded(true);

      setTimeout(() => {
        setAlreadyAdded(false);
      }, 15000);
    } else {
      const newProduct = { ...product, quantity: 1 };
      const updatedCart = [...existingCart, newProduct];
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      setItemAdded(true);

      setTimeout(() => {
        setItemAdded(false);
      }, 15000);
    }
  };

  const resetMessages = () => {
    setItemAdded(false);
    setAlreadyAdded(false);
  };

useEffect(() => {
  const getProductById = async () => {
    try {
      const response = await axios.get(
        `https://backendhc.hyagocolares.repl.co/products/${id}`
      );
      setProduct(response.data.product);
      // Debugging: Log the product object
      console.log(response.data.product); // Usar response.data.product
    } catch (error) {
      console.error(`Erro ao buscar o produto com o ID ${id}:`, error);
      setError(error);
    }
  };

  getProductById();
}, [id]);

  if (error) {
    return (
      <p>Erro ao buscar o produto. Por favor, tente novamente mais tarde.</p>
    );
  }

  if (!product) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="pdc">
      <div className="product-details-container">
        <div className="pd-image-viewer">
          <div className="pd-preview">
            <img className="pd-img" src={product.imageUrl} alt={product.name} />
          </div>
        </div>
        <div className="pd-details">
          <h2 className="pd-name">{product.name}</h2>
          <div
            className="comet-divider comet-divider-small split-line--wrap--uquPC9W"
            style={{
              margin: "16px 0px",
              backgroundColor: "rgba(40, 40, 40, 0.10)",
              height: "1px",
            }}
          ></div>
          <div className="pd-price-container">
            <p className="pd-price">{`R$${product.price}`}</p>
            <div className="product-price-original">
              <div className="product-price-del">
                <span className="product-price-value">R$73,54</span>
              </div>
              <span className="product-price-mark">50% off</span>
            </div>
          </div>
          <p className="pd-message">{product.message}</p>
          <div
            className="comet-divider comet-divider-small split-line--wrap--uquPC9W"
            style={{
              margin: "16px 0px",
              backgroundColor: "rgba(40, 40, 40, 0.10)",
              height: "1px",
            }}
          ></div>
        </div>
        <div className="pd-text">
          <div>
            <p>correios</p>
            <p>Enviamos para até os limites da zona urbana de Paragominas</p>
          </div>
          <div
            className="comet-divider comet-divider-small split-line--wrap--uquPC9W"
            style={{
              margin: "16px 0px",
              backgroundColor: "rgba(40, 40, 40, 0.10)",
              height: "1px",
            }}
          ></div>
          <div>
            <p>Frete grátis</p>
            <p>Frete grátis apenas nos limites da zona urbana de Paragominas</p>
          </div>
          <div
            className="comet-divider comet-divider-small split-line--wrap--uquPC9W"
            style={{
              margin: "16px 0px",
              backgroundColor: "rgba(40, 40, 40, 0.10)",
              height: "1px",
            }}
          ></div>
          <div>
            <div className="pd-button">
              <button onClick={() => addToCart(product)}>
                Adicionar ao Carrinho
              </button>
              <button className="pd-button-like">Comprar agora</button>

              {(itemAdded || alreadyAdded) && (
                <div className="item-added-message">
                  <div className="close-button" onClick={resetMessages}>
                    <span>&times;</span>
                  </div>
                  <div className="item-details">
                    <img src={product.imageUrl} alt={product.name} />
                    <div className="product-details-text">
                      <p className="product-details-name">{product.name}</p>
                      <p className="product-details-price">
                        Valor: R${product.price}
                      </p>
                    </div>
                  </div>
                  <span>Produto Adicionado</span>
                  <Link to="/carrinho">
                    <button>Ver Carrinho</button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
      <div className="details-product-container">
        <h2>Detalhes</h2>
        <table className="product-details-table">
          <tbody>
            <tr>
              <td>Nome do Modelo</td>
              <td>{product.details?.nomeModeloValue}</td>
            </tr>
            <tr>
              <td>Nome da Marca</td>
              <td>{product.details?.nomeMarcaValue}</td>
            </tr>
            <tr>
              <td>Acessórios</td>
              <td>{product.details?.acessoriosValue}</td>
            </tr>
            <tr>
              <td>Categoria</td>
              <td>{product.details?.categoriaValue}</td>
            </tr>
            <tr>
              <td>Peso</td>
              <td>{product.details?.pesoValue}</td>
            </tr>
            <tr>
              <td>Avaliação</td>
              <td>{product.details?.avaliacaoValue}</td>
            </tr>
            <tr>
              <td>Origem</td>
              <td>{product.details?.origemValue}</td>
            </tr>
            <tr>
              <td>Descrição</td>
              <td>{product.details?.descricaoValue}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="images-product-container">
        <h2>Imagens do Produto</h2>
        <div className="product-images">
          {product.images.map((imageUrl, index) => (
            <img
              key={index}
              src={imageUrl.imageUrlValue}
              alt={`Imagem do Produto ${index + 1}`}
              className="product-image"
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
