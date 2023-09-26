// frontend/src/components/FeatureContainer.js
import React from "react";
import "./styles/featureContainer.css";

const FeatureContainer = () => {
  return (
    <div className="feature-container">
      <div className="site-item">
        <div className="ico-img">
        <a
          href="https://www.instagram.com/hc_imports.pgm/"
          className="instagram"
          rel="noreferrer"
          target="_blank"
        >
          <span className="icon i-insta" aria-label="Instagram"></span>
        </a>
        <a
          href="https://youtube.com/@HCIMPORTS-PGM"
          className="youtube"
          rel="noreferrer"
          target="_blank"
        >
          <span className="icon i-yt" aria-label="YouTube"></span>
        </a>
        </div>
        <h3>Siga a gente</h3>
        <p>Siga nossas redes.</p>
      </div>
      <div className="site-item">
        <div className="icon i-great"></div>
        <h3>Preços Incríveis</h3>
        <p>Os melhores preços em mais de 500 produtos.</p>
      </div>
      <div className="site-item">
        <div className="icon i-payment"></div>
        <h3>Pagamentos Seguros</h3>
        <p>Pague com os métodos mais conhecidos e confiáveis do mundo.</p>
      </div>
      <div className="site-item">
        <div className="icon i-confidence"></div>
        <h3>Compre com Confiança</h3>
        <p>
          Nossa Proteção ao Consumidor protege a sua compra do clique à entrega.
        </p>
      </div>
      <div className="site-item">
        <div className="icon i-help"></div>
        <h3>Suporte ao Cliente</h3>
        <p>Atendimento rápido todos os dias para facilitar as suas compras.</p>
      </div>
    </div>
  );
};

export default FeatureContainer;
