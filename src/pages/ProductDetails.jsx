import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { fetchProductById } from "../api/productApi";
import { useCart } from "../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const { addToCart } = useCart();

  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const loadProduct = async () => {
      try {
        const data = await fetchProductById(id);
        setProduct(data);
      } catch (err) {
        setError("Product not found");
      } finally {
        setLoading(false);
      }
    };

    loadProduct();
  }, [id]);

  if (loading) return <p className="mt-6">Loading product...</p>;
  if (error) return <p className="mt-6 text-red-500">{error}</p>;

  return (
    <div className="mt-6 grid md:grid-cols-2 gap-8">
      <img
        src={product.image}
        alt={product.name}
        className="w-full max-h-[450px] object-cover"
      />

      <div>
        <h1 className="text-2xl font-semibold mb-2">
          {product.name}
        </h1>

        <p className="text-xl text-gray-700 mb-4">
          ₹{product.price}
        </p>

        <p className="text-gray-600 mb-6">
          {product.description}
        </p>

        <button
          onClick={() => addToCart(product)}
          className="bg-black text-white px-6 py-2"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductDetails;
