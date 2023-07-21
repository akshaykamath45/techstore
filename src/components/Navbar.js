import React, { useState } from "react";
import { NavLink,useNavigate } from "react-router-dom";
import "./Navbar.css"
const Navbar = ({ techProducts }) => {
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);

  const navigate=useNavigate();
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
      navigate(`/product/${productId}`)
    } else {
      console.log("Product not found!");
    }
  };

  return (
    <nav>
      <NavLink to="/">Home</NavLink> ||
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
              <div key={product.id}>
                <h3
                  style={{ color: "black", cursor: "pointer" }}
                  onClick={() => handleProductClick(product._id)}
                >
                  {product.name}
                </h3>
              </div>
            ))
          ) : (
            <div>
              <h3 style={{ color: "black" }}>No items to show</h3>
            </div>
          )}
        </div>
      )}
      <NavLink to="/products">Products</NavLink> ||
      <NavLink to="/cart">Cart</NavLink> ||
      <NavLink to="/wishlist">Wishlist</NavLink>
    </nav>
  );
};

export default Navbar;
