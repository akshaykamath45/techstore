import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "./ProductContext";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const selectedItem={...product,cartValue:true}
    setCart([...cart, selectedItem]);
  };

  const handleDeleteFromCart = (productId) => {
    const deleteProduct = cart.filter((product) => product._id !== productId);
    setCart(deleteProduct);
  };

  return (
    
    <CartContext.Provider
      value={{ cart, handleAddToCart, handleDeleteFromCart }}
    >
      {children}
    </CartContext.Provider>
  );
};
