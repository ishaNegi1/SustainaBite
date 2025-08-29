import api from "./api";

const getAllProducts = async () => {
  try {
    const response = await api.get("/fertilizer/getProducts");
    return response.data;
  } catch (error) {
    return {
      error: error.response?.data?.message || "Error fetching products",
    };
  }
};

export { getAllProducts };
