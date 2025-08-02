const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const {
  getAllBlogs,
  createBlog,
  deleteBlog,
  updateBlog,
  updateStars, 
  updateViews,
} = require('../controllers/blogController');

router.get('/get', getAllBlogs);
router.post('/create', protect, createBlog);
router.delete('/delete/:id', protect, deleteBlog);
router.put('/update/:id', protect, updateBlog);
router.patch('/update-stars/:id', updateStars);
router.patch('/update-views/:id', updateViews);
// router.patch('/update-stars/:id', protect, updateStars);
// router.patch('/increment-views/:id', protect, updateViews);

module.exports = router;
