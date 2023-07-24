import { createContext } from "react";
import { useState } from "react";
import { useContext } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const handleAddToCart = (product) => {
    const existingItem = cart.find((item) => item._id === product._id);

    if (existingItem) {
      setCart((prevCart) =>
        prevCart.map((item) =>
          item._id === existingItem._id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const handleDeleteFromCart = (event,productId) => {
    event.stopPropagation();
    const updatedCart = cart.filter((product) => product._id !== productId);

    const updatedCartWithCartValue = updatedCart.map((product) => ({
      ...product,
      cartValue: false,
    }));

    setCart(updatedCartWithCartValue);
  };

  const handleIncreaseQuantity = (event,productId) => {
    event.stopPropagation();
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (event,productId) => {
    event.stopPropagation();
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId
          ? { ...item, quantity: item.quantity > 0 ? item.quantity - 1 : 0 }
          : item
      )
    );
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        setCart,
        handleAddToCart,
        handleDeleteFromCart,
        handleIncreaseQuantity,
        handleDecreaseQuantity,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
