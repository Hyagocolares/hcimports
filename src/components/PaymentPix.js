// frontend/src/components/PaymentPix.js
import React, { useState, useEffect } from "react";
import QRCode from "qrcode.react";
import './styles/paymentpix.css'

const PaymentPix = () => {
  const [payloadPix, setPayloadPix] = useState(""); // Para armazenar o payload sem as aspas
  const [isCopied, setIsCopied] = useState(false);

  useEffect(() => {
    // Recupere o payloadPix do localStorage
    const payloadPixFromStorage = JSON.parse(
      localStorage.getItem("payloadPix")
    );
    if (payloadPixFromStorage) {
      // Remova as aspas do início e do final, se houver
      const payloadWithoutQuotes = payloadPixFromStorage.slice(1, -1);
      setPayloadPix(payloadWithoutQuotes);
    }
  }, []);

  const handleCopyPayload = () => {
    // Copie o payloadPix para a área de transferência
    const textField = document.createElement("textarea");
    textField.innerText = payloadPix;
    document.body.appendChild(textField);
    textField.select();
    document.execCommand("copy");
    textField.remove();

    // Defina o estado como copiado
    setIsCopied(true);

    // Remova a mensagem após um determinado período de tempo (por exemplo, 3 segundos)
    setTimeout(() => {
      setIsCopied(false);
    }, 3000); // 3000 milissegundos (3 segundos)
  };

  return (
    <div className="App">
      <h1>Gerador de PIX</h1>
      {payloadPix && (
        <div className="Pix">
          <div className="qrcode">
            <QRCode
              value={payloadPix}
              size={256}
              onContextMenu={(e) => e.preventDefault()}
            />
            <div className="payment-pix-text">
              <p>Escaneie o QR Code para realizar o pa gamento via Pix.</p>
            </div>
          </div>
          <div className="payload">
            <p>Chave gerada:</p>
            <pre className="payload-text"><p>{payloadPix}</p></pre>
            <button type="button" onClick={handleCopyPayload}>
              Copiar Chave
              <svg
                className="copy-icon"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M5.5028 4.62704L5.5 6.75V17.2542C5.5 19.0491 6.95507 20.5042 8.75 20.5042L17.3663 20.5045C17.0573 21.3782 16.2240 22.0042 15.2444 22.0042H8.75C6.12665 22.0042 4 19.8776 4 17.2542V6.75C4 5.76929 4.62745 4.93512 5.5028 4.62704ZM17.75 2C18.9926 2 20 3.00736 20 4.25V17.25C20 18.4926 18.9926 19.5 17.75 19.5H8.75C7.50736 19.5 6.5 18.4926 6.5 17.25V4.25C6.5 3.00736 7.50736 2 8.75 2H17.75ZM17.75 3.5H8.75C8.33579 3.5 8 3.83579 8 4.25V17.25C8 17.6642 8.33579 18 8.75 18H17.75C18.1642 18 18.5 17.6642 18.5 17.25V4.25C18.5 3.83579 18.1642 3.5 17.75 3.5Z"></path>
              </svg>
            </button>
            {isCopied && <p>Texto copiado para a área de transferência.</p>}
          </div>
          <p className="confirmation-text">
            Após efetuar o pagamento, envie o comprovante via WhatsApp Business
            para confirmar a compra.
          </p>
        </div>
      )}
    </div>
  );
};

export default PaymentPix;
