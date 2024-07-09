const {Router} = require("express");
const bookRouter = Router();

const {addBook, getAllBooks} = require("./controllers");

// http://localhost:5001/books/test
bookRouter.get("/test", async (req, res) => {
    res.status(200).json({message: "test a ok!" });
});

// http://localhost:5001/books/awesome
bookRouter.get("/awesome", async (req, res) => {
    res.status(200).json({message: "test a ok!" });
});

// // http://localhost:5001/books/books
// bookRouter.get("/books", async (req, res) => {
//     res.status(200).json({message: "book added" });
// });


bookRouter.post("/addBook", addBook);

bookRouter.get("/getAllBooks", getAllBooks);



module.exports = bookRouter;