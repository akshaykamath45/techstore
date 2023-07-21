import React, { useState, useContext } from "react";
import { Routes, Route, NavLink, useNavigate } from "react-router-dom";
import Home from "../src/pages/Home/Home";
import ProductListing from "./pages/Product Listing Page/ProductListing";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import Cart from "../src/pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import { ProductContext } from "./contexts/ProductContext";
import "./App.css"; // Import your CSS file here or define the styles inline

function App() {
  const { techProducts, setTechProducts } = useContext(ProductContext);
  const [searchValue, setSearchValue] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const navigate = useNavigate();

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



  return (
    <div className="App">
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
                    onClick={()=>handleProductClick(product._id)}
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
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/products" element={<ProductListing />} />
        <Route path="/product/:productId" element={<ProductDetail />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
    </div>
  );
}

export default App;
