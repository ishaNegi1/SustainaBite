const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { donateFood } = require('../controllers/donateController')
const multer = require('multer');

const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, 'uploads/'),
  filename: (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

router.post('/request', protect, upload.single('image'), donateFood);

module.exports = router;