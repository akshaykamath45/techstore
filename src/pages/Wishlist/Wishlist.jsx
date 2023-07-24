import React from "react";
import { useContext} from "react";
import {useNavigate} from "react-router-dom";
import { WishlistContext } from "../../contexts/WishlistContext";
import emptyWishlist from "../../assets/emptyWishlist.svg";
import "./Wishlist.css";

const Wishlist = () => {
  const { wishlist } = useContext(WishlistContext);
  const { handleDeleteFromWishlist } = useContext(WishlistContext);

  const navigate = useNavigate();

  const handleWishlisitClick = (productId) => {
    navigate(`/product/${productId}`);
  }
  return (
    <div className="wishlist-container">
      {wishlist.length === 0 ? (
        <div className="empty-wishlist">
          <h1>Nothing to show here</h1>
          <img src={emptyWishlist} alt="wishlist-empty" className="empty-wishlist-image" />
        </div>
      ) : (
        <div className='items-container'>
          <h2 className="wishlist-items">Items in Wishlist: {wishlist.length}</h2>
          <div className="wishlist-page">
            {wishlist.map((item) => {
              return (
                <div className="wishlist-card" key={item._id} onClick={()=>handleWishlisitClick(item._id)}>
                  <img src={item.image} alt="wishlisted" className="wishlist-image" />
                  <h2>{item.name}</h2>
                  <p>{item.price}</p>
                  <button
                    onClick={(event) => handleDeleteFromWishlist(event,item._id)}
                    className="delete-wishlist-btn"
                  >
                    Delete from Wishlist
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Wishlist;
