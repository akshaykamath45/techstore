import { createContext } from "react";
import { useState } from "react";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (product) => {
    const existingItem = wishlist.find((item) => item._id === product._id);

    if (existingItem) {
      const deleteProduct = wishlist.filter((item) => item !== existingItem);
      setWishlist(deleteProduct);
    } else {
      setWishlist([...wishlist, { ...product, quantity: 1 }]);
    }
  };

  const handleDeleteFromWishlist = (productId) => {
    const deleteProduct = wishlist.filter(
      (product) => product._id !== productId
    );
    setWishlist(deleteProduct);
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, handleAddToWishlist, handleDeleteFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};
