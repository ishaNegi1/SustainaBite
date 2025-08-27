import api from "./api";

const donateRequest = async (formData) => {
  try {
    const data = new FormData();
    for (let key in formData) {
      data.append(key, formData[key]);
    }
    const response = await api.post("/donate/request", data, {
      headers: { "Content-Type": "multipart/form-data" }
    });
    return response.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Error posting request" };
  }
};

const getMyDonations = async() => {
  try{
    const response = await api.get('/donate/myDonations');
    return response.data;
  }
  catch(error){
    return { error: error.response?.data?.message || "Error fetching donations" }
  }
}

export {donateRequest, getMyDonations,}

