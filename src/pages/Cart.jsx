import { useCart } from "../context/CartContext";
import { placeOrder } from "../api/orderApi";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
  const { cartItems, removeFromCart, clearCart, totalAmount } = useCart();
  const { user } = useAuth();
  const navigate = useNavigate();

  const handlePlaceOrder = async () => {
    try {
      const orderData = {
        orderItems: cartItems.map((item) => ({
          name: item.name,
          price: item.price,
          qty: 1,
          image: item.image,
          product: item._id,
        })),
        totalPrice: totalAmount,
      };

      await placeOrder(orderData);
      clearCart();
      alert("Order placed successfully!");
    } catch (error) {
        console.error("ORDER ERROR:", error.response?.data || error.message);
        alert(error.response?.data?.message || "Failed to place order");
      }
      
  };

  if (cartItems.length === 0) {
    return <h2 className="mt-6 text-lg">Your cart is empty</h2>;
  }

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item._id}
            className="flex justify-between items-center border p-4"
          >
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <button
              className="text-sm text-red-600"
              onClick={() => removeFromCart(item._id)}
            >
              Remove
            </button>
          </div>
        ))}
      </div>

      <div className="mt-6 border-t pt-4 flex justify-between items-center">
        <h2 className="text-lg font-medium">Total</h2>
        <h2 className="text-lg font-semibold">₹{totalAmount}</h2>
      </div>

      <button
  onClick={() => {
    if (!user) {
      navigate("/login");
      return;
    }
    handlePlaceOrder();
  }}
  className="mt-6 bg-black text-white px-6 py-2"
>
  Place Order
</button>

    </div>
  );
};

export default Cart;
