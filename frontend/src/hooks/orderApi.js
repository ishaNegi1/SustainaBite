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

const getCoinBalance = async() => {
  try{
    const response = await api.get("/orders/balance");
    return response.data;
  }
  catch(error){
    return { error: error.response?.data?.message || "Error fetching balance" };
  }
}

export { getAllOrders, placeOrder, getCoinBalance };
