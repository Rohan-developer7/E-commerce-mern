import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cartItems, removeFromCart, totalAmount } = useCart();

  if (cartItems.length === 0) {
    return <h2 className="mt-6 text-lg">Your cart is empty</h2>;
  }

  return (
    <div className="mt-6">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      <div className="space-y-4">
        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between items-center border p-4"
          >
            <div>
              <h3 className="font-medium">{item.name}</h3>
              <p className="text-gray-600">₹{item.price}</p>
            </div>

            <button
              className="text-sm text-red-600"
              onClick={() => removeFromCart(item.id)}
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
    </div>
  );
};

export default Cart;
