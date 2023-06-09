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
    case "addBook":
      const newBook = await books.addBook(title, author);
      console.log(newBook);
      break;
    case "updateById":
      const updatedBook = await books.updateBookById(id, title, author);
      console.log(updatedBook);
      break;
    case "deleteById":
      const deletedBook = await books.deleteBookById(id);
      console.log(deletedBook);
      break;
  }
};

// OLD SCHOOL

console.log(process.argv);
const actionIdx = process.argv.indexOf("--action");
if (actionIdx) {
  const action = process.argv[actionIdx + 1];
  invokeAction({ action });
}

//  JUST CALL FUNCTION

// invokeAction({ action: "getAll" });
// invokeAction({ action: "getById", id: "CTHE0f1kkWwqS5sL2tI8_" });
// invokeAction({
//   action: "addBook",
//   title: "Add book",
//   author: "kari Morozova",
// });
// invokeAction({
//   action: "updateById",
//   id: "Op8ApLTY0-Vn2cR0vDIwG",
//   title: "Update book",
//   author: "Infinite loop",
// });
// invokeAction({
//   action: "deleteById",
//   id: "ck89qe3HriUDHe09TBoJ8",
// });
