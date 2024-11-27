import PropTypes from "prop-types";
import { useCart } from '../context/CartContext';
import { useState } from 'react';

const ShopItem = ({ name, description, priceOptions, image }) => {
  const { addToCart } = useCart();
  const [selectedPrice, setSelectedPrice] = useState(priceOptions[0]);

  const handleAddToCart = () => {
    addToCart({
      id: `${name}-${selectedPrice.label}`,
      name,
      description,
      selectedPrice,
      image
    });
  };

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-4">
        <h3 className="text-2xl font-bold mb-1 text-soft-red">{name}</h3>
        <p className="text-light-gray text-sm mb-4">{description}</p>
      </div>
      
      <div className="p-4 pt-0">
        <div className="aspect-square mb-4">
          <img 
            src={image} 
            alt={name} 
            className="w-full h-full object-cover rounded-md"
          />
        </div>
        <select 
          className="w-full p-2 border rounded mb-4 text-light-gray"
          onChange={(e) => setSelectedPrice(priceOptions[Number(e.target.value)])}
        >
          {priceOptions.map((option, index) => (
            <option key={option.label} value={index}>
              {option.label} - {option.price} /=
            </option>
          ))}
        </select>
      </div>

      <div className="p-4 pt-0">
        <button 
          onClick={handleAddToCart}
          className="w-full bg-pale-pink hover:bg-light-rose text-white p-2 rounded font-semibold transition-colors duration-200"
        >
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
