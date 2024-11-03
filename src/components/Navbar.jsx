import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="w-12 h-12">
          <Link to="/">
            <img
              src="/images/LapatesserieLogo.png"
              alt="La Pâtisserie de Joie Logo"
              className="w-full h-full object-cover"
            />
          </Link>
        </div>
        <div className="md:hidden" onClick={toggleMenu}>
          {isOpen ? (
            <FaTimes className="text-2xl cursor-pointer" />
          ) : (
            <FaBars className="text-2xl cursor-pointer" />
          )}
        </div>
        <ul
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex space-y-4 md:space-y-0 md:space-x-4 absolute md:static top-16 left-0 w-full bg-white md:bg-transparent md:w-auto p-4 md:p-0 shadow-md md:shadow-none`}
        >
          <li className="md:ml-0 ml-4">
            <Link to="/" className="hover:text-gray-500">
              Home
            </Link>
          </li>
          <li className="md:ml-0 ml-4">
            <Link to="/about" className="hover:text-gray-500">
              About
            </Link>
          </li>
          <li className="md:ml-0 ml-4">
            <Link to="/blog" className="hover:text-gray-500">
              Blog
            </Link>
          </li>
          <li className="md:ml-0 ml-4">
            <Link to="/gallery" className="hover:text-gray-500">
              Gallery
            </Link>
          </li>
          <li className="md:ml-0 ml-4">
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
