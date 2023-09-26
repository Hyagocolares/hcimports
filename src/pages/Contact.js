import React from 'react';
import './styles/contact.css'

const Contact = () => {
  return (
    <div className='contact-container'>
      <h1 className='contact-title'>Contato</h1>
      <p className='contact-text'>
        Aqui você pode exibir os contatos de todas as formas disponíveis para entrar em contato
        com a sua empresa ou serviço. Isso pode incluir e-mail, telefone, WhatsApp Business,
        redes sociais como Instagram, Facebook, entre outros.
      </p>
      <p className='contact-text'>
        Caso tenha alguma dúvida ou precise de suporte, não hesite em entrar em contato conosco.
      </p>
      {/* Exemplo de contato com e-mail */}
      <p className='contact-email'>E-mail: exemplo@empresa.com</p>
      {/* Exemplo de contato com WhatsApp Business */}
      <p className='contact-number'>WhatsApp: (XX) 99999-9999</p>
      {/* Exemplo de contato com Instagram */}
      <p className='contact-instagram'>Instagram: <a href="https://www.instagram.com/">@empresa_instagram</a></p>
    </div>
  );
};

export default Contact;
