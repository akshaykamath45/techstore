import React, { useState, useContext } from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { WishlistContext } from "../contexts/WishlistContext";
import { AuthContext } from "../contexts/AuthContext";
import "./Navbar.css";
const Navbar = ({ techProducts }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const { cart } = useContext(CartContext);
  const { wishlist } = useContext(WishlistContext);
  const navigate = useNavigate();
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const handleSearch = (e) => {
    const value = e.target.value;
    setSearchValue(value);
    setShowModal(value !== "");
    const filteredProducts = techProducts.filter((product) =>
      product.name.toLowerCase().includes(value.toLowerCase())
    );
    setFilteredProducts(filteredProducts);
  };

  const handleProductClick = (productId) => {
    const product = techProducts.find((product) => product._id === productId);
    if (product) {
      setSearchValue("");
      setShowModal(false);
      setFilteredProducts([]);
      navigate(`/product/${productId}`);
    } else {
      console.log("Product not found!");
    }
  };
  const location = useLocation();
  const handleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
    navigate(location?.state?.from?.pathname);
  };

  return (
    <nav className="nav-bar">
      <NavLink to="/" className="nav-bar-item">
        <img
          src="https://i.postimg.cc/KjHD87m1/tech-store-logo-black-and-white.png"
          alt="techstore-logo"
          className="techstore-logo"
        />
      </NavLink>
      <input
        type="text"
        placeholder="Search by Name"
        className="search-bar"
        value={searchValue}
        onChange={handleSearch}
      />
      {showModal && (
        <div className="search-results-modal">
          {filteredProducts.length > 0 ? (
            filteredProducts.map((product) => (
              <div
                key={product.id}
                onClick={() => handleProductClick(product._id)}
                className="search-result-card"
              >
                <img
                  src={product.image}
                  alt="product-img"
                  className="navbar-img"
                ></img>
                <h3 style={{ color: "black", cursor: "pointer" }}>
                  {product.name}
                </h3>
              </div>
            ))
          ) : (
            <div>
              <h3 style={{ color: "black", marginLeft: "8px" }}>
                No items to show
              </h3>
            </div>
          )}
        </div>
      )}
      <NavLink to="/products" className="nav-bar-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-bag-fill"
          viewBox="0 0 16 16"
        >
          <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5z" />
        </svg>
      </NavLink>
      <NavLink to="/cart" className="nav-bar-item">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-cart-fill"
          viewBox="0 0 16 16"
        >
          <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z" />
        </svg>
        {cart.length > 0 && isLoggedIn && (
          <span className="count-badge cart-count">{cart.length}</span>
        )}
      </NavLink>
      <NavLink to="/wishlist" className="nav-bar-item wishlist">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          fill="currentColor"
          class="bi bi-heart-fill"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
          />
        </svg>
        {wishlist.length > 0 && isLoggedIn &&(
          <span className="count-badge wishlist-count">{wishlist.length}</span>
        )}
      </NavLink>
      <button onClick={handleLogin}>{isLoggedIn ? "Logout" : "Login"}</button>
    </nav>
  );
};

export default Navbar;
