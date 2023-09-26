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
        <Route path="/" element={<Home />} />
        <Route path="/produtos" element={<Products />} />
        <Route path="/productlist" element={<ProductList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/carrinho" element={<Cart />} />
        <Route path="/pagamento" element={<Payment />} />
        <Route path="/pagamento2" element={<Payment2 />} />
        <Route path="/termos de servico" element={<TermsOfService />} />
        <Route path="/politica de privacidade" element={<PrivacyPolicy />} />
        <Route path="/contato" element={<Contact />} />
        <Route path="/about" element={<AboutUs />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
