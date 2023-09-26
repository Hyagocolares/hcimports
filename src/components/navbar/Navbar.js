// frontend/src/components/Navbar.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {
  return (
    <nav >
      <div className="navbar">
      <div className="navbar-logo">
        <Link to="/">HC IMPORTS</Link>
      </div>
      <div className="navbar-links">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-menu">
        <ul>
          <li>
            <Link to="/carrinho">Carrinho</Link>
          </li>
        </ul>
      </div>
      </div>
      <div className="navbar-links-m">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/produtos">Produtos</Link>
          </li>
          <li>
            <Link to="/about">Sobre nós</Link>
          </li>
          <li>
            <Link to="/productlist">Lista de Produtos</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
