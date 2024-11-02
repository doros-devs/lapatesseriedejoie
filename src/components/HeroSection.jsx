import React from "react";

const HeroSection = () => {
  return (
    <div
      className="w-full h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: "url('/images/hero-image.jpg')" }}
    >
      <div className="p-8 rounded-lg text-center mt-28">
        <h1
          className="text-9xl font-bold mb-4 text-light-rose"
          style={{ fontFamily: "Imperial Script, cursive" }}
        >
          La Pâtisserie de Joie
        </h1>
        <p
          className="text-5xl text-light-rose font-semibold "
          style={{ fontFamily: "Imperial Script, cursive" }}
        >
          Where Pastry Meets Art
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
