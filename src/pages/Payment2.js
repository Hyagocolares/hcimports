// frontend/src/pages/Payment.js
import React, { useState, useEffect } from "react";
import PaymentPix from "../components/PaymentPix";
import "./styles/payment.css";

const Payment2 = () => {
  const [compraData, setCompraData] = useState({
    cartItems: [], // Inicialize cartItems como um array vazio
    formData: {}, // Inicialize formData como um objeto vazio
  });

  useEffect(() => {
    // Buscar dados do localStorage quando o componente for montado
    const cartItems = JSON.parse(localStorage.getItem("cartItems"));
    const formData = JSON.parse(localStorage.getItem("formData"));
    
    // Recupere a string JSON do localStorage e analise-a de volta para um objeto
    const payloadPixFromStorage = JSON.parse(localStorage.getItem("payloadPix"));
    console.log(payloadPixFromStorage);
    // Supondo que payloadPixFromStorage seja a string com as aspas
    const payloadPix = payloadPixFromStorage.slice(1, -1);
    console.log(payloadPix);

    // Verificar se os dados foram recuperados com sucesso do localStorage
    if (cartItems && formData) {
      setCompraData({
        cartItems: cartItems,
        formData: formData,
      });
    } else {
      // Lidar com a situação em que os dados não foram encontrados no localStorage
      console.error("Dados não encontrados no localStorage.");
    }
  }, []); // Os [] vazios garantem que este efeito seja executado apenas uma vez, após a montagem do componente.

  // Calcular o total com base nos dados do carrinho
  const calculateTotal = () => {
    return compraData.cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  // Implemente a lógica de confirmação de pagamento
  const handlePaymentConfirmation = async () => {
    try {
      // Lógica para processar o pagamento final com todas as informações
      // Enviar os dados da compra para o servidor, incluindo cartItens, formData e criando o novo objeto o compraData
      // Exibir mensagem de agradecimento após confirmação e mostrar a aba de visualização de compra do produto.
    } catch (error) {
      // Lidar com erros
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment_title">Pagamento</h2>
      <form className="payment-form">
        <h2 className="payment_title-1">Informações da Compra</h2>
        <div className="order-summary">
          <ul className="nameProducts">
            {compraData.cartItems.map((item) => (
              <li key={item.id}>
                {item.name} <span>R$ {item.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <p className="total-price">Total: R$ {calculateTotal().toFixed(2)}</p>
        </div>

        <br />

        <div className="payment-pix">
          <div className="payment-pix-qrcode">
            <PaymentPix />
          </div>
        </div>

        <button className="payment-button" onClick={handlePaymentConfirmation}>
          Realizar Pagamento
        </button>
      </form>
    </div>
  );
};

export default Payment2;
