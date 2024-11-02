import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">
          <Link to="/">La Pâtisserie de Joie</Link>
        </div>
        <ul className="flex space-x-4">
          <li>
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
          </li>
          {/* <li>
            <Link to="/shop" className="hover:text-gray-500">
              Shop
            </Link>
          </li> */}
          <li>
            <Link to="/about" className="hover:text-gray-500">
              About
            </Link>
          </li>
          <li>
            <Link to="/blog" className="hover:text-gray-500">
              Blog
            </Link>
          </li>
          <li>
            <Link to="/gallery" className="hover:text-gray-500">
              Gallery
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-gray-500">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
