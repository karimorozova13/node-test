const fs = require("fs/promises");
const path = require("path");
const { nanoid } = require("nanoid");

const booksPath = path.join(__dirname, "books.json");

const updateDataBase = async (data) => {
  await fs.writeFile(booksPath, JSON.stringify(data, null, 2));
};

const getAllBooks = async () => {
  const data = await fs.readFile(booksPath);
  return JSON.parse(data);
};

const getBookById = async (bookId) => {
  const books = await getAllBooks();
  const book = books.find(({ id }) => id === bookId);
  if (!book) return null;
  return book;
};

const addBook = async (title, author) => {
  const books = await getAllBooks();
  const book = { title, author, id: nanoid() };
  books.push(book);
  await updateDataBase(books);
  return book;
};

const updateBookById = async (id, title, author) => {
  const books = await getAllBooks();
  const idx = books.findIndex((item) => item.id === id);
  if (!idx) return null;
  books[idx] = { id, title, author };
  await updateDataBase(books);
  return books[idx];

  // const updatedBooks = books.map((item) => {
  //   if (item.id === id)
  //     return {
  //       title,
  //       author,
  //       id,
  //     };
  //   return item;
  // });
  // await fs.writeFile(booksPath, JSON.stringify(updatedBooks, null, 2));
  // return {
  //   title,
  //   author,
  //   id,
  // };
};

const deleteBookById = async (id) => {
  const books = await getAllBooks();
  const idx = books.findIndex((item) => item.id === id);
  if (!idx) return null;
  const [book] = books.splice(idx, 1);
  await updateDataBase(books);

  // let book = null;
  // const updatedBooks = books.filter((item) => {
  //   if (item.id === id) {
  //     book = item;
  //     return false;
  //   }
  //   return true;
  // });
  // await updateDataBase(updatedBooks)
  return book;
};

module.exports = {
  getAllBooks,
  getBookById,
  addBook,
  updateBookById,
  deleteBookById,
};
