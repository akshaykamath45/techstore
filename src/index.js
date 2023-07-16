import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { makeServer } from "./server";
import { BrowserRouter as Router } from "react-router-dom";
import { CartContext, CartProvider } from "../src/contexts/CartContext";
import { WishlistContext,WishlistProvider } from "./contexts/WishlistContext";
// Call make Server
makeServer();
export { CartContext };
export {WishlistContext}
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <CartProvider>
        <WishlistProvider>
        <App />
        </WishlistProvider>
      </CartProvider>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
