const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");

const app = express();
app.use(cors());
app.use(express.json());

const tempDir = path.join(__dirname, "temp");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  fileName: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

// upload.array('cover', 8 (maxCount)) - if we send several files
// upload.fields([{name:'cover',maxCount:2}, {name:'video',maxCount:3}]) - if I'm waiting files from different fields

app.post("/api/books", upload.single("cover"), async (req, res) => {
  await fs.rename("./temp/cover.jpg", "./public/books/cover.jpg");
  console.log(req.body);
  console.log(req.file);
});

app.listen(5001, () => {
  console.log("Files");
});
