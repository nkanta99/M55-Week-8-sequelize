const {Router} = require("express");
const bookRouter = Router();

const {addBook, getAllBooks, updateBook, deleteBook, getBookByTitle} = require("./controllers");

// http://localhost:5001/books/test
bookRouter.get("/test", async (req, res) => {
    res.status(200).json({message: "test a ok!" });
});

// http://localhost:5001/books/awesome
bookRouter.get("/awesome", async (req, res) => {
    res.status(200).json({message: "test a ok!" });
});

// http://localhost:5001/books/update
bookRouter.put("/update", async (req, res) => {
    res.status(202).json({message: "added update" });
});

// http://localhost:5001/books/done
bookRouter.delete("/done", async (req, res) => {
    res.status(204).json({message: "deleted done" });
});

// // http://localhost:5001/books/books
// bookRouter.get("/books", async (req, res) => {
//     res.status(200).json({message: "book added" });
// });


bookRouter.post("/addBook", addBook);

bookRouter.get("/getAllBooks", getAllBooks);

bookRouter.put("/updateBook", updateBook);

bookRouter.delete("/deleteBook", deleteBook);

bookRouter.get("/getBookByTitle/:title", getBookByTitle);



module.exports = bookRouter;