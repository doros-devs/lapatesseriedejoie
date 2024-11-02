import React from "react";
import ShopItem from "../ShopItem";

const Shop = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl font-bold mb-8 text-center">Shop</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Add ShopItem components here */}
        <ShopItem />
        <ShopItem />
        <ShopItem />
      </div>
    </div>
  );
};

export default Shop;
