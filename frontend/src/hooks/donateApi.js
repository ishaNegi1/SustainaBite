import api from "./api";

const donateRequest = async(formData) => {
  try{
     const response = await api.post("/donate/request", formData)
     return response.data;
  }
  catch(error){
     return { error: error.response?.data?.message || "Error posting request" }; 
  }
}

export {donateRequest}

