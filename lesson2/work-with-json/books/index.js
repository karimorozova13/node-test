const fs = require("fs/promises");
const path = require("path");

const booksPath = path.join(__dirname, "books.json");
const getAllBooks = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getBookById = async (id) => {
  return 33;
};

module.exports = {
  getAllBooks,
  getBookById,
};
