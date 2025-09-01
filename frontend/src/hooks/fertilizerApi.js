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

const likeFertilizer = async (id) => {
  const response = await api.put(`/fertilizer/like/${id}`);
  return response.data;
};

const dislikeFertilizer = async (id) => {
  const response = await api.put(`/fertilizer/dislike/${id}`);
  return response.data;
};

export { getAllProducts, likeFertilizer, dislikeFertilizer };
