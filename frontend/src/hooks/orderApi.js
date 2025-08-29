import api from "./api";

const getAllOrders = async () => {
  try {
    const response = await api.get("/orders/getOrders");
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Error fetching orders" };
  }
};

const placeOrder = async (orderDetails) => {
  try {
    const response = await api.post("/orders/postOrders", orderDetails);
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Error placing order" };
  }
};

export { getAllOrders, placeOrder };
