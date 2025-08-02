import api from './api';

const getAllBlogs = async () => {
 try{
  const response = await api.get('/blogs/get');
  return response.data;
 }
 catch(error){
    return { error: error.response?.data?.message || "Error fetching blogs" };
 }
};

const createBlog = async (blogData) => {
try{
  const response = await api.post('/blogs/create', blogData);
  return response.data;
}
catch(error){
    return { error: error.response?.data?.message || "Error creating blog" };
}
};

const deleteBlog = async (id) => {
    try{
  const response = await api.delete(`/blogs/delete/${id}`);
  return response.data;
    }
    catch(error){
        return { error: error.response?.data?.message || "Error deleting blog" };
    }
};

const updateBlog = async (id, updatedData) => {
  try{
  const response = await api.put(`/blogs/update/${id}`, updatedData);
  return response.data;
  }
  catch(error){
    return { error: error.response?.data?.message || "Error updating blog" };
  }
};

const updateStars = async (id, stars) => {
  try {
    const res = await api.patch(`/blogs/update-stars/${id}`, { stars });
    return res.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Error updating stars" };
  }
};

const updateViews = async (id) => {
  try {
    const res = await api.patch(`/blogs/increment-views/${id}`);
    return res.data;
  } catch (error) {
    return { error: error.response?.data?.message || "Error updating views" };
  }
};

export { getAllBlogs, createBlog, deleteBlog, updateBlog, updateStars, updateViews };
