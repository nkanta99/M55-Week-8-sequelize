const Book = require("./model");

const addBook = async (req, res) => {
    try {

        // const book = await Book.create({
        //     title: req.body.title,
        //     author: req.body.author,
        //     genre: req.body.genre,
        // });
        
        const book = await Book.create(req.body);

        res.status(201).json({message: "success", book: book});
    } catch (error) {
        res.status(501).json({message: error.message, error: error});
    }
};

const getAllBooks = async (req, res) => {
    try {
        const books = await Book.findAll();

        res.status(200).json({message: "success", books: books});
    } catch (error) {
       res.status(501).json({message: error.message, error: error}); 
    }
};

const updateBook = async (req, res) => {
  try {
    const books = await Book.update();

    res.status(202).json({ message: "success", books: books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const deleteBook = async (req, res) => {
  try {
    const books = await Book.delete();

    res.status(204).json({ message: "success", books: books });
  } catch (error) {
    res.status(501).json({ message: error.message, error: error });
  }
};

const getBookByTitle = async (req, res) => {
    try {
        console.log("req.params:", req.params);
        const book = await Book.findOne({where: { title: req.params.title } });
        res
        .status(200)
        .json({message: "success", book: book, params: req.params});
    } catch (error) {
        res.status(501).json({message: error.message, error: error}); 
    }
};

module.exports = {
    addBook: addBook,
    getAllBooks: getAllBooks,
    updateBook: updateBook,
    deleteBook: deleteBook,
    getBookByTitle: getBookByTitle,
};