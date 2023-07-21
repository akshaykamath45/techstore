import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import ProductListing from "./pages/Product Listing Page/ProductListing";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import Cart from "../src/pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import { ProductContext } from "./contexts/ProductContext";
import Navbar from "./components/Navbar"; 
import "./App.css";

function App() {
  const { techProducts } = useContext(ProductContext);
  return (
    <div className="App">
      <Navbar techProducts={techProducts} /> 
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
