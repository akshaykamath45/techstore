import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartContext, CartProvider } from "../src/contexts/CartContext";
import { WishlistContext, WishlistProvider } from "./contexts/WishlistContext";
import { ProductContext,ProductProvider } from "./contexts/ProductContext";
import {
  useCategoryContext,
  CategoryProvider,
} from "./contexts/CategoryContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// Call make Server
makeServer();
export { CartContext };
export { WishlistContext };
export {ProductContext}
export { useCategoryContext };

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <CategoryProvider>
            <ProductProvider>
            <App />
            </ProductProvider>
            <ToastContainer />
          </CategoryProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
