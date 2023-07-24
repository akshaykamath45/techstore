import React from "react";
import { useContext } from "react";
import { WishlistContext } from "../../contexts/WishlistContext";
import "./Wishlist.css";
const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const { handleDeleteFromWishlist } = useContext(WishlistContext);
  return (
    <div className="wishlist">
    
      <h2 className='wishlist-items'>Items in  Wishlist : {wishlist.length}</h2>
      <div className="wishlist-page">
      {wishlist.map((item) => {
        return (
          <div className='wishlist-card'>
            <img src={item.image} alt="wishlisted" className='wishlist-image' />
            <h2>{item.name}</h2>
            <p>{item.price}</p>
           
            <button onClick={() => handleDeleteFromWishlist(item._id)} className="delete-wishlist-btn">
              Delete from Wishlist
            </button>
         
          </div>
        );
      })}
      </div>
  
    </div>
  );
};

export default Wishlist;
