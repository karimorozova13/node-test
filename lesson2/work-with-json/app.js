const books = require("./books");

const invokeAction = async ({ action, id, title, author }) => {
  switch (action) {
    case "getAll":
      const allBooks = await books.getAllBooks();
      console.log(allBooks);
      break;
    case "getById":
      const book = await books.getBookById(id);
      console.log(book);
      break;
  }
};
invokeAction({ action: "getAll" });
invokeAction({ action: "getById", id: "Op8ApLTY0-Vn2cR0vDIwG" });
