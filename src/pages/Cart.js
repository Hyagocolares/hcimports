// frontend/src/pages/Cart.js
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./styles/cart.css";

const Cart = () => {
  const navigate = useNavigate();
  const [cartItems, setCartItems] = useState(
    JSON.parse(localStorage.getItem("cart")) || []
  );

  const handleRemoveItem = (itemId) => {
    const updatedCartItems = cartItems.filter(item => item.id !== itemId);
    setCartItems(updatedCartItems);
    localStorage.setItem('cart', JSON.stringify(updatedCartItems));
  };

  const handleQuantityChange = (itemId, newQuantity) => {
    const updatedCartItems = cartItems.map(item => {
      if (item.id === itemId) {
        return { ...item, quantity: parseInt(newQuantity) || 1 };
      }
      return item;
    });
    setCartItems(updatedCartItems);
  };

  const calculateTotal = () => {
    return cartItems.reduce(
      (total, item) => total + item.quantity * item.price,
      0
    );
  };

  const totalPrice = calculateTotal().toFixed(2);

  // Implemente a lógica de pagar
  const handleCartProduct = async () => {
    try {
      // Só poder continuar o para pagar agora se tiver produto em carrinho cartItems.
      // Verificar se há produtos no carrinho
      if (cartItems.length === 0) {
        alert("Seu carrinho está vazio. Adicione produtos antes de pagar.");
        return;
      }
      // Lógica para processar acontinuação do pagar agora enviando o objeto cartItems para variaveis locais no localstarge, incluindo cartItems para a proxima pagina do pagamento
      // Você pode armazenar cartItems no localStorage para acessá-los na próxima página
      console.log(totalPrice  + " Calculate");
      localStorage.setItem("totalPrice", JSON.stringify(totalPrice));
      localStorage.setItem("cartItems", JSON.stringify(cartItems));
      // Navegar para a próxima página (Payment)
      navigate("/pagamento");
    } catch (error) {
      // Lidar com erros
      console.error("Ocorreu um erro ao iniciar pagamento:", error);
    }
  };

  return (
    <div className="cart-container">
      <h2 className="cart_title">Listagem dos Itens no Carrinho</h2>
      <ul className="cart_item">
        {cartItems.map((item) => (
          <li key={item.id}>
            <img className="cart-img" src={item.imageUrl} alt={item.name} />
            <div className="cart-text">
              <p className="cart-text-name">{item.name}</p>
              <p className="cart-text-qaunti">Quantidade: {item.quantity}</p>
              <p className="cart-text-price-unit">
                Preço Unitário: R$ {item.price.toFixed(2)}
              </p>
              <p className="cart-text-subtotal">
                Subtotal: R$ {(item.quantity * item.price).toFixed(2)}
              </p>
            </div>
            <input
              className="cart-select-number-quant"
              type="number"
              min="1"
              max="1"
              value={item.quantity}
              onChange={(e) => handleQuantityChange(item.id, e.target.value)}
            />
            <button
              className="cart-button-remove"
              onClick={() => handleRemoveItem(item.id)}
            >
              Remover
            </button>
          </li>
        ))}
      </ul>
      <div className="cart-area-total-price">
        <p className="cart-text-total-price">
          Total do Carrinho: R$ {calculateTotal().toFixed(2)}
        </p>
      </div>
        <button
          className="cart-button-pagament"
          onClick={handleCartProduct}
        >
          Pagar Agora
        </button>
    </div>
  );
};

export default Cart;
