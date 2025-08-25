const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { donateFood, myDonations } = require('../controllers/donateController')
const multer = require("multer");
const { CloudinaryStorage } = require("multer-storage-cloudinary");
const cloudinary = require("../config/cloudinary");

const storage = new CloudinaryStorage({
  cloudinary,
  params: {
    folder: "donations",  
    allowed_formats: ["jpg", "png", "jpeg"],
  },
});

const upload = multer({ storage });

router.post('/request', protect, upload.single('image'), donateFood);
router.get('/myDonations', protect, myDonations)

module.exports = router;