import React from 'react';
import './styles/privacypolicy.css';

const PrivacyPolicy = () => {
  return (
    <div className='PrivacyPolicy-container'>
      <h1 className='PrivacyPolicy-title'>Política de Privacidade</h1>
      <p className='PrivacyPolicy-text'>
        Bem-vindo(a) à nossa Política de Privacidade. Aqui você encontrará informações sobre como
        coletamos, usamos e compartilhamos seus dados pessoais quando você utiliza nosso site ou
        serviço.
      </p>
      <p className='PrivacyPolicy-text'>
        Nosso compromisso é proteger sua privacidade. Caso você tenha alguma dúvida ou precise de
        esclarecimentos, entre em contato conosco através da página de <a href="/Contato">Contato</a>.
      </p>
      {/* ... Resto do conteúdo da página ... */}
    </div>
  );
};

export default PrivacyPolicy;
