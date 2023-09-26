// frontend/src/pages/Payment.js
import React, { useState } from "react";
import "./styles/payment.css";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    nome: "",
    contato: "",
    entrega: "",
    cep: "",
    endereco: "",
    numero: "",
    complemento: "",
    bairro: "",
    cidade: "",
    estado: "",
  });

  const txt = "4574";

  // Recuperar o valor do localStorage
  const totalPriceFromStorage = JSON.parse(localStorage.getItem("totalPrice"));


  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  // Lógica para buscar o endereço via API ViaCEP
  const fetchAddressFromCep = async (cep) => {
    if (!cep || cep.length !== 9) {
      console.error("Por favor, insira um CEP válido.");
      return;
    }

    try {
      const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
      const data = await response.json();

      if (!data.erro) {
        setFormData((prevFormData) => ({
          ...prevFormData,
          endereco: data.logradouro || "",
          bairro: data.bairro || "",
          cidade: data.localidade || "",
          estado: data.uf || "",
        }));
      } else {
        console.error("CEP não encontrado.");
      }
    } catch (error) {
      console.error("Erro ao buscar o CEP:", error);
    }
  };

  // Implemente a lógica de continuação de pagamento
  const handlePaymentContinuation = async () => {
    try {
      // Verificar se todos os campos obrigatórios estão preenchidos
      if (
        formData.nome.trim() === "" ||
        formData.contato.trim() === "" ||
        formData.entrega === ""
      ) {
        alert("Por favor, preencha todos os campos obrigatórios.");
        return;
      }
      // Verificar se os campos do formulário de endereço estão preenchidos quando a entrega é selecionada
      if (formData.entrega === "endereco") {
        if (
          formData.cep.trim() === "" ||
          formData.endereco.trim() === "" ||
          formData.bairro.trim() === "" ||
          formData.cidade.trim() === "" ||
          formData.estado.trim() === ""
        ) {
          alert("Por favor, preencha todos os campos do endereço.");
          return;
        }
      }

      // Armazenar os dados no localStorage
      localStorage.setItem("formData", JSON.stringify(formData));

      //console.log(totalPriceFromStorage);
      // Chame a API para gerar o Pix
      fetch("https://backpix.hyagocolares.repl.co/gerar_payload", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ valor: totalPriceFromStorage, txt }),
      })
        .then((response) => {
          if (!response.ok) {
            throw new Error("Não foi possível gerar o Pix.");
          }
          return response.json();
        })
        .then((data) => {
          // Faça algo com os dados recebidos da API, se necessário
          console.log("Resposta da API Pix");
          // Converta o objeto em uma string JSON válida
          const payloadString = JSON.stringify(data.payload);
          //console.log(payloadString+" pauload aaaa");
          // Salve a string JSON no localStorage
          localStorage.setItem("payloadPix", JSON.stringify(payloadString));
        })
        .catch((error) => {
          console.error("Ocorreu um erro ao gerar o Pix:", error);
        });
      // Navegar para a próxima página (Payment2)
      navigate("/pagamento2");
    } catch (error) {
      // Lidar com erros
      console.error("Ocorreu um erro ao continuar pagamento:", error);
    }
  };

  return (
    <div className="payment-container">
      <h2 className="payment_title">Pagamento</h2>
      <form className="payment-form">
        <h2 className="payment_title-1">Informações do Cliente</h2>

        <div className="payment_text_nome">
          <label>
            Nome: <span className="confirm-cor">*</span>
          </label>
          <input
            type="text"
            name="nome"
            value={formData.nome}
            onChange={handleInputChange}
          />
        </div>

        <div className="payment_text_contato">
          <label>
            Contato (Telefone ou Email): <span className="confirm-cor">*</span>
          </label>
          <input
            type="text"
            name="contato"
            value={formData.contato}
            onChange={handleInputChange}
          />
        </div>

        <div className="delivery-option">
          <label>
            Opção de Entrega ou Retirada: <span className="confirm-cor">*</span>
          </label>
          <select
            name="entrega"
            value={formData.entrega}
            onChange={handleInputChange}
          >
            <option value="">Selecionar</option>
            <option value="endereco">Entrega</option>
            <option value="retirada">Retirada</option>
          </select>
        </div>
        <br />

        {formData.entrega === "endereco" && (
          <div className="address-form">
            <div className="payment_text_cep">
              <label>
                CEP: <span className="confirm-cor">Preenchimento automatico</span>
              </label>
              <input
                type="text"
                name="cep"
                value={formData.cep}
                onChange={handleInputChange}
                onBlur={(e) => fetchAddressFromCep(e.target.value)}
              />
            </div>
            <div className="payment_text_endereco">
              <label>Endereço:</label>
              <input
                type="text"
                name="endereco"
                value={formData.endereco}
                onChange={handleInputChange}
              />
            </div>
            <div className="payment_text_numero">
              <label>Número:</label>
              <input
                type="text"
                name="numero"
                value={formData.numero}
                onChange={handleInputChange}
              />
            </div>
            <div className="payment_text_complemento">
              <label>Complemento:</label>
              <input
                type="text"
                name="complemento"
                value={formData.complemento}
                onChange={handleInputChange}
              />
            </div>
            <div className="payment_text_bairro">
              <label>Bairro:</label>
              <input
                type="text"
                name="bairro"
                value={formData.bairro}
                onChange={handleInputChange}
              />
            </div>
            <div className="payment_text_cidade">
              <label>Cidade:</label>
              <input
                type="text"
                name="cidade"
                value={formData.cidade}
                onChange={handleInputChange}
              />
            </div>
            <div className="payment_text_estado">
              <label>Estado:</label>
              <input
                type="text"
                name="estado"
                value={formData.estado}
                onChange={handleInputChange}
              />
            </div>
          </div>
        )}

        {formData.entrega === "retirada" && (
          <div className="pickup-location">
            <div className="andress-info">
              <p>Local para retirada:</p>
              <p>Endereço: Rua da Retirada, 123</p>
              <p>Bairro: Bairro da Retirada</p>
              <p>Cidade: Cidade da Retirada</p>
              <p>Estado: UF</p>
              <p>
                Para chegar ao local de retirada, siga as instruções no mapa
                abaixo:
              </p>
            </div>
            <div className="andress-map"></div>
          </div>
        )}

        <button className="payment-button" onClick={handlePaymentContinuation}>
          Continuar Pagamento
        </button>
      </form>
    </div>
  );
};

export default Payment;
