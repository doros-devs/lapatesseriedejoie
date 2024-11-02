import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
// import Shop from "./components/pages/Shop";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Gallery from "./components/pages/Gallery";
import "./index.css";


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        {/* <Route path="/shop" element={<Shop />} /> */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gallery" element={<Gallery />} />
      </Routes>
      <Footer />
    </Router>
  );
};

export default App;
