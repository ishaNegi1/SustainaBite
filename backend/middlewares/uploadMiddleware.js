const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const fileFilter = (req, file, cb) => {
  const fileTypes = /jpeg|jpg|png/;
  const ext = path.extname(file.originalname).toLowerCase();
  const mime = fileTypes.test(file.mimetype);
  if (fileTypes.test(ext) && mime) {
    cb(null, true);
  } else {
    cb(new Error("Only JPEG and PNG files are allowed!"));
  }
};

const upload = multer({ storage, fileFilter });

module.exports = upload;
