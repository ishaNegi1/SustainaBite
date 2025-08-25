const Blog = require("../models/blogModel");

const getAllBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().populate("author", "name").sort({ date: -1 });
    res.json(blogs);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};


const createBlog = async (req, res) => {
  try {
    const { title, content } = req.body;
    const blog = new Blog({
      title,
      content,
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
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    if (blog.author.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });
    await Blog.findByIdAndDelete(req.params.id);
    res.json({ message: "Blog deleted" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateBlog = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    if (blog.author.toString() !== req.user.id)
      return res.status(403).json({ message: "Unauthorized" });
    Object.assign(blog, req.body);
    await blog.save();
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const updateStars = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ message: "Blog not found" });
    const userId = req.user.id;
    const index = blog.starredBy.indexOf(userId);
    if (index > -1) {
      blog.starredBy.splice(index, 1);
      blog.stars = Math.max(blog.stars - 1, 0); 
    } else {
      blog.starredBy.push(userId);
      blog.stars += 1;
    }
    await blog.save();
    await blog.populate("author", "name");
    res.json(blog);
  } catch (err) {
    res.status(500).json({ message: err.message });
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
    res.status(500).json({ message: err.message });
  }
};

const myBlogs = async(req, res) => {
  try{
    const blogs = await Blog.find({author: req.user.id}).sort({ date: -1 });
    res.status(201).json(blogs);
  }
  catch(error){
    res.status(500).json({message: error.message})
  }
}

module.exports = {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  updateStars,
  updateViews,
  myBlogs
};
