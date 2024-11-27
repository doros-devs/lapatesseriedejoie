import { useState } from "react";
import ShopItem from "./ShopItem";
import OrderingTerms from "./OrderingTerms";
import { cakeData } from "../data/cakes";

const Shop = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [priceFilter, setPriceFilter] = useState("all");

  const filteredCakes = cakeData.filter((cake) => {
    const matchesSearch = cake.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    let matchesPrice;
    if (priceFilter === "all") {
      matchesPrice = true;
    } else if (priceFilter === "low") {
      matchesPrice = cake.priceOptions[0].price < 3500;
    } else if (priceFilter === "medium") {
      matchesPrice =
        cake.priceOptions[0].price >= 3500 && cake.priceOptions[0].price < 4500;
    } else {
      matchesPrice = cake.priceOptions[0].price >= 4500;
    }

    return matchesSearch && matchesPrice;
  });

  return (
    <div className="bg-pale-pink bg-opacity-10 min-h-screen">
      <div className="container mx-auto p-4">
        <h1 className="text-4xl font-bold mb-8 text-center">Our Cakes</h1>

        <div className="mb-8">
          <OrderingTerms />
        </div>

        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <input
            type="text"
            placeholder="Search cakes..."
            className="p-2 border border-pale-pink rounded flex-1 focus:outline-none focus:ring-2 focus:ring-pale-pink"
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <select
            className="p-2 border border-pale-pink rounded focus:outline-none focus:ring-2 focus:ring-pale-pink"
            onChange={(e) => setPriceFilter(e.target.value)}
          >
            <option value="all">All Prices</option>
            <option value="low">Under 3,500 KES</option>
            <option value="medium">3,500 - 4,500 KES</option>
            <option value="high">Above 4,500 KES</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCakes.map((cake) => (
            <ShopItem
              key={cake.name}
              name={cake.name}
              description={cake.description}
              priceOptions={cake.priceOptions}
              image={cake.image}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Shop;
