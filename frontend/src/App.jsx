import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Website
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Categories from "./components/Categories.jsx";
import CatagoryProducts from "./components/CatagoryProducts.jsx";
import AllProducts from "./components/AllProducts.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Checkout from "./components/Checkout.jsx";
// Customer Panel
import Register from "./components/Customer/Register.jsx";
import Login from "./components/Customer/Login.jsx";
import Dashboard from "./components/Customer/Dashboard.jsx";
import Orders from "./components/Customer/Orders.jsx";
import OrderSuccess from "./components/OrderSuccess.jsx";
import OrderFailure from "./components/OrderFailure.jsx";
import Wishlist from "./components/Customer/Wishlist.jsx";
import Profile from "./components/Customer/Profile.jsx";
import ChangePassword from "./components/Customer/ChangePassword.jsx";
import AddressList from "./components/Customer/AddressList.jsx";
import AddAddress from "./components/Customer/AddAddress.jsx";
// Seller Panel
import SellerRegister from "./components/seller/SellerRegister.jsx";
import SellerLogin from "./components/seller/SellerLogin.jsx";
import SellerDashboard from "./components/seller/SellerDashboard.jsx";
import SellerProducts from "./components/seller/SellerProducts.jsx";
import AddProduct from "./components/seller/AddProduct.jsx";
import VenderOrders from "./components/seller/VenderOrders.jsx";
import Customers from "./components/seller/Customers.jsx";
import Reports from "./components/seller/Reports.jsx";
import VendorProfile from "./components/seller/VendorProfile.jsx";
import VendorChangePassword from "./components/seller/VendorChangePassword.jsx";

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
          <Route path="/order/success" element={<OrderSuccess />} />
          <Route path="/order/failure" element={<OrderFailure />} />
          {/* customer routes */}
          <Route path="/customer/register" element={<Register/>} />
          <Route path="/customer/login" element={<Login/>} />
          <Route path="/customer/dashboard" element={<Dashboard />} />
          <Route path="/customer/orders" element={<Orders />} />
          <Route path="/customer/wishlist" element={<Wishlist />} />
          <Route path="/customer/profile" element={<Profile />} />
          <Route path="/customer/change-password" element={<ChangePassword />} />
          <Route path="/customer/addresses" element={<AddressList />} />
          <Route path="/customer/add-address" element={<AddAddress />} />
          {/* Seller routes */}
          <Route path="/seller/register" element={<SellerRegister />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/products" element={<SellerProducts />} />
          <Route path="/seller/add-product" element={<AddProduct />} />
          <Route path="/seller/orders" element={<VenderOrders />} />
          <Route path="/seller/customers" element={<Customers />} />
          <Route path="/seller/reports" element={<Reports />} />
          <Route path="/seller/profile" element={<VendorProfile />} />
          <Route path="/seller/change-password" element={<VendorChangePassword />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
