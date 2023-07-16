import { createContext } from "react";
import { useState } from "react";
export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const handleAddToWishlist = (product) => {
    setWishlist([...wishlist, product]);
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
