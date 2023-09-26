// frontend/src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import "./styles/footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          &copy; {new Date().getFullYear()} HC Imports. Todos os direitos
          reservados.
        </p>
        <div className="footer-ll">
          <div className="footer-logo">
            <Link to="/">HC IMPORTS</Link>
          </div>
          <div className="footer-links">
            <a href="/termos de servico">Termos de Serviço</a>
            <a href="/politica de privacidade">Política de Privacidade</a>
            <a href="/contato">Contato</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
