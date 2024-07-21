import { useState } from "react";
import { Routes, Route } from "react-router-dom"
import Header from "./components/Header.jsx";
import Home from "./components/Home.jsx";
import Footer from "./components/Footer.jsx";
import Categories from "./components/Categories.jsx";

function App() {
  const [count, setCount] = useState(0);
  return (
    <>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/categories" element={<Categories />} />
        </Routes>
      <Footer />
    </>
  );
}

export default App;
