import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Categories from "./components/Categories.jsx";
import CatagoryProducts from "./components/CatagoryProducts.jsx";
import AllProducts from "./components/AllProducts.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Checkout from "./components/Checkout.jsx";
import Register from "./components/Customer/Register.jsx";
import Login from "./components/Customer/Login.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category_slug/:category_id" element={<CatagoryProducts />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/product/:product_slug/:product_id" element={<ProductDetail/>} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/customer/register" element={<Register/>} />
          <Route path="/customer/login" element={<Login/>} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
