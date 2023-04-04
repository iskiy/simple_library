const bookService = require('../services/book');

exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await bookService.getAllBooks();
        res.json(books);
    } catch (err) {
        next(err);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const book = await bookService.getBookById(req.params.bookID);
        res.json(book);
    } catch (err) {
        next(err);
    }
};

exports.createBook = async (req, res, next) => {
    try {
        const newBook = req.body;
        const book = await bookService.createBook(newBook);
        console.log("controller; book created")
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const updatedBook = req.body;
        const book = await bookService.updateBookById(req.params.bookID, updatedBook);
        res.json(book);
    } catch (err) {
        next(err);
    }
};

exports.deleteBook = async (req, res, next) => {
    console.log("Delete book")
    try {
        const book = await bookService.deleteBookById(req.params.bookID);
        res.json(book);
    } catch (err) {
        next(err);
    }
};