import { useEffect, useState } from "react";
import { getMyOrders } from "../api/orderApi";

const Orders = () => {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    getMyOrders().then(setOrders);
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-semibold mb-4">
        My Orders
      </h1>

      {orders.map((order) => (
        <div
          key={order._id}
          className="border p-4 mb-4"
        >
          <p>Total: ₹{order.totalPrice}</p>
          <p>Items: {order.orderItems.length}</p>
          <p>Date: {order.createdAt.slice(0, 10)}</p>
        </div>
      ))}
    </div>
  );
};

export default Orders;
