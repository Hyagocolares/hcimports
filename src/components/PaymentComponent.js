// frontend/src/components/PaymentComponent.js
import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import "./styles/paymentPage.css";

const PaymentPage = () => {
  const [qrCodeData, setQrCodeData] = useState('');

  const handlePayment = async () => {
    // Enviar a solicitação de pagamento para o backend
    const response = await fetch('/api/gerar-payload', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        nome: 'Hyago Colares',
        chavepix: '00905335260',
        valor: '15.00',
        cidade: 'Paragominas',
        txtId: 'loja10',
      }),
    });

    const data = await response.json();
    setQrCodeData(data.payload);
  };

  return (
    <div>
      <button onClick={handlePayment}>Iniciar Pagamento</button>
      {qrCodeData && <QRCode value={qrCodeData} />}
    </div>
  );
};

export default PaymentPage;
