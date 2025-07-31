const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog
} = require('../controllers/blogController');

router.get('/get', getAllBlogs);
router.post('/create', protect, createBlog);
router.delete('/delete/:id', protect, deleteBlog);
router.put('/update/:id', protect, updateBlog);

module.exports = router;
