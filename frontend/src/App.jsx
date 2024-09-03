import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// Website
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Categories from "./components/Categories.jsx";
import CategoryProducts from "./components/CategoryProducts.jsx";
import TagProducts from "./components/TagProducts.jsx";
import AllProducts from "./components/AllProducts.jsx";
import ProductDetail from "./components/ProductDetail.jsx";
import Checkout from "./components/Checkout.jsx";
import ConfirmOrder from "./components/ConfirmOrder.jsx";
import AddReview from "./components/Customer/AddReview.jsx";
// Customer Panel
import Register from "./components/Customer/Register.jsx";
import Login from "./components/Customer/Login.jsx";
import CustomerLogout from "./components/Customer/CustomerLogout.jsx";
import Dashboard from "./components/Customer/Dashboard.jsx";
import Orders from "./components/Customer/Orders.jsx";
import OrderSuccess from "./components/OrderSuccess.jsx";
import OrderFailure from "./components/OrderFailure.jsx";
import Wishlist from "./components/Customer/Wishlist.jsx";
import Profile from "./components/Customer/Profile.jsx";
import ChangePassword from "./components/Customer/ChangePassword.jsx";
import AddressList from "./components/Customer/AddressList.jsx";
import AddAddress from "./components/Customer/AddAddress.jsx";
import UpdateAddress from "./components/Customer/UpdateAddress.jsx";
// Seller Panel
import AllSellers from "./components/AllSellers.jsx";
import SellerRegister from "./components/seller/SellerRegister.jsx";
import SellerLogin from "./components/seller/SellerLogin.jsx";
import SellerLogout from "./components/seller/VendorLogout.jsx";
import SellerDashboard from "./components/seller/SellerDashboard.jsx";
import SellerProducts from "./components/seller/SellerProducts.jsx";
import AddProduct from "./components/seller/AddProduct.jsx";
import UpdateProduct from "./components/seller/UpdateProduct.jsx";
import VenderOrders from "./components/seller/VenderOrders.jsx";
import Customers from "./components/seller/Customers.jsx";
import Reports from "./components/seller/Reports.jsx";
import VendorProfile from "./components/seller/VendorProfile.jsx";
import VendorChangePassword from "./components/seller/VendorChangePassword.jsx";
import CustomerOrders from "./components/seller/CustomerOrders.jsx";
import DailyReports from "./components/seller/DailyReports.jsx";
import MonthlyReports from "./components/seller/MonthlyReports.jsx";
import YearlyReports from "./components/seller/YearlyReports.jsx";

import { CartContext } from "./Context.jsx";
const checkCart = localStorage.getItem('cartData') || '[]';
console.log("checkkart vvalur",checkCart);
function App() {
  const [count, setCount] = useState(0);
  const [cartData, setCartData] = useState(JSON.parse(checkCart));
  return (
    <>
    <CartContext.Provider value={{cartData, setCartData}} >
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/category/:category_slug/:category_id" element={<CategoryProducts />} />
          <Route path="/products" element={<AllProducts />} />
          <Route path="/products/:tag" element={<TagProducts />} />
          <Route path="/product/:product_slug/:product_id" element={<ProductDetail />} />
          <Route path="/checkout" element={<Checkout/>} />
          <Route path="/confirm-order" element={<ConfirmOrder />} />
          <Route path="/order/success" element={<OrderSuccess />} />
          <Route path="/order/failure" element={<OrderFailure />} />
          {/* customer routes */}
          <Route path="/customer/register" element={<Register/>} />
          <Route path="/customer/login" element={<Login/>} />
          <Route path="/customer/logout" element={<CustomerLogout/>} />
          <Route path="/customer/dashboard" element={<Dashboard />} />
          <Route path="/customer/orders" element={<Orders />} />
          <Route path="/customer/wishlist" element={<Wishlist />} />
          <Route path="/customer/profile" element={<Profile />} />
          <Route path="/customer/change-password" element={<ChangePassword />} />
          <Route path="/customer/addresses" element={<AddressList />} />
          <Route path="/customer/add-address" element={<AddAddress />} />
          <Route path="/customer/update-address/:address_id" element={<UpdateAddress />} />
          <Route path="/customer/review/product/:product_id/:product_name" element={<AddReview />} />
          {/* Seller routes */}
          <Route path="/sellers" element={<AllSellers />} />
          <Route path="/seller/register" element={<SellerRegister />} />
          <Route path="/seller/login" element={<SellerLogin />} />
          <Route path="/seller/logout" element={<SellerLogout />} />
          <Route path="/seller/dashboard" element={<SellerDashboard />} />
          <Route path="/seller/products" element={<SellerProducts />} />
          <Route path="/seller/add-product" element={<AddProduct />} />
          <Route path="/seller/update-product/:product_id" element={<UpdateProduct />} />
          <Route path="/seller/orders" element={<VenderOrders />} />
          <Route path="/seller/customer/:customer_id/orders" element={<CustomerOrders />} />
          <Route path="/seller/customers" element={<Customers />} />
          <Route path="/seller/reports" element={<Reports />} />
          <Route path="/seller/profile" element={<VendorProfile />} />
          <Route path="/seller/change-password" element={<VendorChangePassword />} />
          <Route path="/seller/daily-reports" element={<DailyReports />} />
          <Route path="/seller/monthly-reports" element={<MonthlyReports />} />
          <Route path="/seller/yearly-reports" element={<YearlyReports />} />
        </Routes>
      <Footer />
      </CartContext.Provider>
    </>
  );
}

export default App;
