const Blog = require('../models/blogModel')

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate('author', 'name');  
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const createBlog = async (req, res) => {
  try {
    const blog = new Blog({
      ...req.body,
      author: req.user.id, 
    });
    await blog.save();
    res.status(201).json(blog);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.author !== req.user.name)
      return res.status(403).json({ message: 'Unauthorized' });
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: 'Blog deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: 'Blog not found' });
    if (blog.author !== req.user.name)
      return res.status(403).json({ message: 'Unauthorized' });
    Object.assign(blog, req.body);
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStars = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { stars: 1 } },
      { new: true }
    );
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update stars' });
  }
};

const updateViews = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndUpdate(
      req.params.id,
      { $inc: { views: 1 } },
      { new: true }
    );
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: 'Failed to update views' });
  }
};


module.exports = {getAllBlogs, createBlog, deleteBlog, updateBlog, updateStars, updateViews}