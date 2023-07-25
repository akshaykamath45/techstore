import React, { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import "./Cart.css";
import emptyCart from "../../assets/emptyCart.svg";
import { useNavigate } from "react-router";
const Cart = () => {
  const {
    cart,
    handleDeleteFromCart,
    handleIncreaseQuantity,
    handleDecreaseQuantity,
  } = useContext(CartContext);

  const navigate = useNavigate();

  const handleCartItemClicked = (productId) => {
    navigate(`/product/${productId}`);
  };
  const price = cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const discountedPrice = cart.reduce(
    (acc, item) => acc + item.discountedPrice * item.quantity,
    0
  );
  const discount=(price-discountedPrice).toFixed(2);
  const totalAmount = (price - discount).toFixed(2);
  return (
    <div className="cart-container">
      {cart.length === 0 ? (
        <div className="empty-cart">
          <h1>Your cart is empty</h1>
          <img src={emptyCart} alt="empty-cart" className="empty-cart-svg" />
        </div>
      ) : (
        <div className="cart-items">
          {cart.map((item) => (
            <div
              key={item._id}
              className="cart-item"
              onClick={() => handleCartItemClicked(item._id)}
            >
              <img
                src={item.image}
                alt={item.name}
                className="cart-item-image"
              />
              <div className="cart-item-details">
                <p>{item.name}</p>
                <p>Price: ₹ {item.price}</p>
                <div className="quantity-container">
                  <button
                    onClick={(event) => handleDecreaseQuantity(event, item._id)}
                    className="cart-quantity-btn"
                  >
                    -
                  </button>
                  <p className="item-quantity">{item.quantity}</p>
                  <button
                    onClick={(event) => handleIncreaseQuantity(event, item._id)}
                    className="cart-quantity-btn"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={(event) => handleDeleteFromCart(event, item._id)}
                  className="delete-cart-btn"
                >
                  Delete from Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
      {cart.length > 0 && (
        <div className="total-amount">
          <hr />
          <h2>Price Details</h2>
          <hr />
          <p>
            Price ({cart.length} items){" "}
            <span className="align-items-right">
              {" "}
              ₹{" "}
              {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}
            </span>
          </p>
          <p>
            Discount{" "}
            <span>
              - 
              ₹{" "}
              {discount}{" "}
            </span>
          </p>
          <p>
            Delivery Charges <span>FREE</span>
          </p>
          <hr />
          <h4>
            Total Amount <span>₹ {totalAmount}</span>
          </h4>
          <hr />
          <p className="save-discount">
            You will save ₹ {discount} on this order
          </p>
          <button className="checkout-btn">Checkout</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
