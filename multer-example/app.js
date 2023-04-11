const express = require("express");
const cors = require("cors");
const multer = require("multer");
const path = require("path");
const fs = require("fs/promises");
const { nanoid } = require("nanoid");

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("public"));

const tempDir = path.join(__dirname, "temp");
const booksDir = path.join(__dirname, "public", "books");

const multerConfig = multer.diskStorage({
  destination: tempDir,
  fileName: (req, file, cb) => {
    cb(null, file.originalname);
  },
});

const upload = multer({
  storage: multerConfig,
});

const books = [];

// upload.array('cover', 8 (maxCount)) - if we send several files
// upload.fields([{name:'cover',maxCount:2}, {name:'video',maxCount:3}]) - if I'm waiting files from different fields

app.post("/api/books", upload.single("cover"), async (req, res) => {
  const { name } = req.body;
  const { path: temporaryPath, originalname } = req.file;
  try {
    const uploadPath = path.join(booksDir, originalname);
    const avatar = path.join("books", originalname);
    const newBook = {
      name,
      id: nanoid(),
      avatar,
    };
    await fs.rename(temporaryPath, uploadPath);
    books.push(newBook);
    res.status(201).json(newBook);
  } catch (error) {
    console.log(error);
    await fs.unlink(temporaryPath);
  }
});
app.get("/api/books", async (reg, res) => {
  try {
    res.status(200).json(books);
  } catch (error) {
    console.log(error);
  }
});

app.listen(5001);
