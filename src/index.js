import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartContext, CartProvider } from "../src/contexts/CartContext";
import { WishlistContext, WishlistProvider } from "./contexts/WishlistContext";
import { useCategoryContext, CategoryProvider } from "./contexts/CategoryContext";
// Call make Server
makeServer();
export { CartContext };
export { WishlistContext };
export {useCategoryContext}
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
          <CategoryProvider>
            <App />
          </CategoryProvider>
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
