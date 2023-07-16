import "./App.css";
import {Routes,Route,NavLink} from "react-router-dom";
import Home from "../src/pages/Home/Home";
import ProductListing from "./pages/Product Listing Page/ProductListing";
import ProductDetail from "./pages/Product Detail/ProductDetail";
import Cart from "../src/pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";


function App() {
  return (
    <div className="App">
    <nav>
      <NavLink to="/">Home</NavLink> || 
      <NavLink to="/products">Products</NavLink> || 
      <NavLink to="/cart">Cart</NavLink> ||
      <NavLink to="/wishlist">Wishlist</NavLink> ||
    </nav>
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/products" element={<ProductListing/>}/>
      <Route path="/products/:productId" element={<ProductDetail/>}/>
      <Route path="/cart" element={<Cart/>}/>
      <Route path="/wishlist" element={<Wishlist/>}/>
    </Routes>
    </div>
  );
}

export default App;
