import React from "react";

const Footer = () => {
  return (
    <footer className="bg-pale-pink text-white p-4 mt-8">
      <div className="container mx-auto text-center">
        <p>La Pâtisserie de Joie &copy; {new Date().getFullYear()}</p>
        <div className="flex justify-center space-x-4 mt-4">
          <a
            href="https://www.instagram.com/lapatisseriedejoie/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/instagram-logo.png"
              alt="Instagram"
              className="h-6 w-6"
            />
          </a>
          <a
            href="https://wa.me/+254743272398"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/images/whatsapp.png"
              alt="Facebook"
              className="h-6 w-6"
            />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
