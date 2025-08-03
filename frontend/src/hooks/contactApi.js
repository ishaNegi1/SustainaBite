import api from './api'

export const submitForm = async(formData) => {
try {
    const response = await api.post("/contact", formData);
    return response.data;
  } catch (error) {
   return { error: error.response?.data?.message || "Submission failed" };
  }
}

