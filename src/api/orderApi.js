import axios from "axios";

const API_URL = "http://localhost:5001/api/orders";

export const placeOrder = async (orderData) => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await axios.post(API_URL, orderData, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  return response.data;
};

export const getMyOrders = async () => {
  const user = JSON.parse(localStorage.getItem("user"));

  const response = await axios.get(`${API_URL}/myorders`, {
    headers: {
      Authorization: `Bearer ${user.token}`,
    },
  });

  return response.data;
};
