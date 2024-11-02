import React from "react";
import PropTypes from "prop-types";

const ShopItem = ({ name, description, priceOptions, image }) => {
  return (
    <div className="border rounded-lg overflow-hidden shadow-md">
      <img src={image} alt={name} className="w-full h-64 object-cover" />
    <div className="p-4">
        <h3 className="text-2xl font-bold mb-2">{name}</h3>
        <p className="text-lg mb-4">{description}</p>
        <select className="w-full p-2 border rounded mb-4">
            {priceOptions.map((option) => (
                <option key={option.label} value={option.price}>
                    {option.label} - {option.price} /=
                </option>
            ))}
        </select>
        <button className="w-full bg-blue-600 text-white p-2 rounded font-semibold">
            Add to Cart
        </button>
    </div>
    </div>
  );
};

ShopItem.propTypes = {
  name: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  priceOptions: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      price: PropTypes.number.isRequired,
    })
  ).isRequired,
  image: PropTypes.string.isRequired,
};

export default ShopItem;
