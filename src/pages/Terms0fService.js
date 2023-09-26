import React from 'react';
import './styles/termsofservice.css';

const TermsOfService = () => {
  return (
    <div className='TermsOfService-container'>
      <h1 className='TermsOfService-title'>Termos de Serviço</h1>
      <p className='TermsOfService-text'>
        Bem-vindo(a) aos nossos Termos de Serviço. Ao utilizar nosso site ou serviço, você concorda
        em cumprir os seguintes termos e condições. Leia-os atentamente antes de utilizar nosso site.
      </p>
      <p className='TermsOfService-text'>
        Estes termos se aplicam a todos os visitantes, usuários e outras pessoas que acessam ou
        utilizam o serviço. Caso não concorde com qualquer parte dos termos, você não deve acessar
        o site nem utilizar nossos serviços.
      </p>
      <p className='TermsOfService-text'>
        O uso contínuo do site após qualquer alteração destes termos constitui sua aceitação das
        alterações. Por favor, verifique regularmente os termos para se manter atualizado.
      </p>
      <h2 className='TermsOfService-title'>1. Uso do Site</h2>
      <p className='TermsOfService-text'>
        O uso do nosso site é permitido para fins legais e de acordo com os termos estabelecidos.
        Você é responsável por garantir que seu uso do site não viole nenhuma lei ou regulamento
        aplicável.
      </p>
      <h2 className='TermsOfService-title'>2. Propriedade Intelectual</h2>
      <p className='TermsOfService-text'>
        Todo o conteúdo presente no site, incluindo textos, gráficos, logotipos, ícones, imagens,
        downloads digitais e outros materiais, é de propriedade da nossa empresa ou de nossos
        parceiros e está protegido pelas leis de propriedade intelectual.
      </p>
      <p className='TermsOfService-text'>
        Você não deve reproduzir, distribuir, modificar, criar trabalhos derivados ou utilizar
        comercialmente qualquer parte do conteúdo do site sem autorização expressa.
      </p>
      <h2 className='TermsOfService-title'>3. Isenção de Responsabilidade</h2>
      <p className='TermsOfService-text'>
        Nosso site é fornecido "como está", sem garantias de qualquer tipo, expressas ou implícitas.
        Não garantimos que o site estará sempre disponível, livre de erros ou que os resultados
        obtidos pelo uso do site serão precisos e confiáveis.
      </p>
      <p className='TermsOfService-text'>
        Nosso site e seus conteúdos são apenas para fins informativos e não constituem aconselhamento
        profissional. O uso das informações do site é de sua responsabilidade.
      </p>
      <p className='TermsOfService-text'>
        Para mais informações ou dúvidas sobre os termos de serviço, entre em contato conosco através
        da página de <a href="/Contato">Contato</a>.
      </p>
    </div>
  );
};

export default TermsOfService;
