import { useCart } from "../context/CartContext";
import { useNavigate } from "react-router-dom";

const ProductCard = ({ product }) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  return (
    <div className="border rounded-lg p-4 flex flex-col">
      <img
        src={product.image}
        alt={product.name}
        className="h-48 object-cover mb-4 cursor-pointer"
        onClick={() => navigate(`/product/${product.id}`)}
      />

      <h3 className="text-sm font-medium mb-1">{product.name}</h3>
      <p className="text-sm text-gray-600 mb-3">₹{product.price}</p>

      <button
        onClick={() => addToCart(product)}
        className="mt-auto bg-black text-white py-2 text-sm"
      >
        Add to Cart
      </button>
    </div>
  );
};

export default ProductCard;
