import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Shop from "./components/Shop";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";
import Gallery from "./components/Gallery";
import Cart from "./components/Cart";
import Orders from './components/Orders';
import "./index.css";
import { CartProvider } from './context/CartContext';

const App = () => {
  return (
    <CartProvider>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
        <Footer />
      </Router>
    </CartProvider>
  );
};

export default App;
