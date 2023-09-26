// frontend/src/App.js
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Home from "./pages/Home";
import Products from "./pages/Products";
import ProductList from './components/ProductList';
import ProductDetails from "./pages/ProductDetails";
import Cart from "./pages/Cart";
import Payment from "./pages/Payment";
import Payment2 from "./pages/Payment2";
import Footer from "./components/Footer";
import TermsOfService from "./pages/Terms0fService";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Contact from "./pages/Contact";
import AboutUs from "./pages/Sobrenos"

const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="https://hyagocolares.github.io/" element={<Home />} />
        <Route path="https://hyagocolares.github.io/produtos" element={<Products />} />
        <Route path="https://hyagocolares.github.io/productlist" element={<ProductList />} />
        <Route path="https://hyagocolares.github.io/product/:id" element={<ProductDetails />} />
        <Route path="https://hyagocolares.github.io/carrinho" element={<Cart />} />
        <Route path="https://hyagocolares.github.io/pagamento" element={<Payment />} />
        <Route path="https://hyagocolares.github.io/pagamento2" element={<Payment2 />} />
        <Route path="https://hyagocolares.github.io/termos de servico" element={<TermsOfService />} />
        <Route path="https://hyagocolares.github.io/politica de privacidade" element={<PrivacyPolicy />} />
        <Route path="https://hyagocolares.github.io/contato" element={<Contact />} />
        <Route path="https://hyagocolares.github.io/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
