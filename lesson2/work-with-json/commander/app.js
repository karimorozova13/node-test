const books = require("../books");
const { program } = require("commander");

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

program
  .option("-a, --action <type>")
  .option("-id, --id <type>")
  .option("-t, --title <type>")
  .option("-au, --author <type>");

program.parse(process.argv);
const options = program.opts();
console.log(options);
invokeAction(options);
