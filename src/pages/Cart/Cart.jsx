import React from "react";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext.js";
import "./Cart.css";
const Cart = () => {
  const { cart } = useContext(CartContext);
  const {handleDeleteFromCart} = useContext(CartContext);
  return (
    <div>
      <h1>This is the Cart Page</h1>
      <h2>Items in the cart : {cart.length}</h2>
      {cart.map((item) => {
        return (
          <div>
            <h2>{item.name}</h2>
            <p>{item.price}</p>
            <p>{item.brand}</p>
            <button onClick={()=>handleDeleteFromCart(item._id)}>Delete from Cart</button>
            <hr />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
