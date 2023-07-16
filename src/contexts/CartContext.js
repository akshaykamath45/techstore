import { createContext } from "react";
import { useState } from "react";
export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    setCart([...cart, product]);
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
