import React from "react";
import { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const { handleDeleteFromWishlist } = useContext(WishlistContext);
  return (
    <div>
      <h1>This is the Wishlist Page</h1>
      <h2>Items in the Wishlist : {wishlist.length}</h2>
      {wishlist.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.brand}</p>
            <button onClick={() => handleDeleteFromWishlist(item._id)}>
              Delete from Wishlist
            </button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Wishlist;
