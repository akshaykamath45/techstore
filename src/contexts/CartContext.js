import { createContext } from "react";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";

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

  const handleDeleteFromCart = (event, productId) => {
    event.stopPropagation();
    const updatedCart = cart.filter((product) => product._id !== productId);

    const updatedCartWithCartValue = updatedCart.map((product) => ({
      ...product,
      cartValue: false,
    }));

    setCart(updatedCartWithCartValue);
    toast.success("Deleted from Cart", { autoClose: 500 });
  };

  const handleIncreaseQuantity = (event, productId) => {
    event.stopPropagation();
    setCart((prevCart) =>
      prevCart.map((item) =>
        item._id === productId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const handleDecreaseQuantity = (event, productId) => {
    event.stopPropagation();
    setCart((prevCart) =>
      prevCart.map((item) => {
        if (item._id === productId) {
          if (item.quantity === 1) {
            toast.error("Quantity can't be less than 1", { autoClose: 500 });
            return item;
          } else {
            return { ...item, quantity: item.quantity - 1 };
          }
        } else {
          return item;
        }
      })
    );
  };

  useEffect(() => {
    toast.update();
  }, [cart]);

  return (
    <CartContext.Provider
      value={{
        cart,
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
