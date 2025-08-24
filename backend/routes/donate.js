const express = require('express');
const router = express.Router();
const protect = require('../middlewares/authMiddleware');
const { donateFood } = require('../controllers/donateController')

router.post('/request', protect, donateFood);

module.exports = router;