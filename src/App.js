import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import ProductListing from "./pages/Product Listing Page/ProductListing";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import Cart from "../src/pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import { ProductContext } from "./contexts/ProductContext";
import { AuthContext } from "./index";

import { RequiresAuth } from "./components/RequiresAuth";
import { Login } from "./pages/Login";

import Navbar from "./components/Navbar";
import "./App.css";

function App() {
  const { techProducts } = useContext(ProductContext);
  const { isLoggedIn } = useContext(AuthContext);
  return (
    <div className="App">
      <Navbar techProducts={techProducts} />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth isLoggedIn={isLoggedIn}>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
