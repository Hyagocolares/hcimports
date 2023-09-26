// frontend/src/pages/Sobrenos.js
import React from "react";
import "./styles/sobrenos.css";

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <h1>HC Import - Sobre Nós</h1>
      <p>
        Somos a HC Import, uma empresa dedicada à importação e distribuição de
        produtos de alta qualidade em diversos setores. Nossa missão é oferecer
        aos nossos clientes produtos inovadores, eficientes e confiáveis,
        proporcionando-lhes a melhor experiência de compra possível.
      </p>
      <h2>Quem Somos</h2>
      <p>
        A essência da HC Import é pautada pela excelência, integridade e
        compromisso com nossos clientes e parceiros. Valorizamos a transparência
        em nossas ações e buscamos sempre superar as expectativas, oferecendo
        soluções que atendam às necessidades específicas de cada cliente.
      </p>
      <h2>De Onde Viemos</h2>
      <p>
        Fundada em 2023, a HC Import tem início como um pequeno negócio
        familiar, com a visão de trazer ao mercado brasileiro, especicamente na
        cidade de Paragominas produtos diferenciados e inovadores.
      </p>
      <h2>Nossos Objetivos</h2>
      <p>
        Na HC Import, buscamos constantemente aprimorar nossos processos e
        expandir nossas operações. Nossos principais objetivos são:
        <ul>
          <li>Excelência no Atendimento</li>
          <li>Inovação e Qualidade</li>
          <li>Sustentabilidade</li>
          <li>Satisfação do Cliente</li>
        </ul>
      </p>
      <h2>Nossos Visão</h2>
      <p>
        Nossa visão de futuro é nos tornarmos uma referência no mercado de
        importação, reconhecidos pela excelência em nossos produtos e serviços,
        além de sermos uma empresa que contribui positivamente para a sociedade.
      </p>
      <p>
        A HC Import está comprometida em continuar crescendo e inovando,
        mantendo sempre o foco na qualidade, ética e no compromisso com nossos
        clientes e parceiros.
      </p>
      {/* Adicione mais tópicos relevantes sobre a sua empresa */}
      <img src="imagem-sua-empresa.jpg" alt="Hc-imports começando no quarto com o computador e as mercadorias." />
    </div>
  );
};

export default AboutUs;
