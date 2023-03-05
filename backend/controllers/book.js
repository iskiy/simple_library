const bookDAO = require('../dao/bookDAO');

exports.getAllBooks = async (req, res, next) => {
    try {
        const books = await bookDAO.getAllBooks();
        res.json(books);
    } catch (err) {
        next(err);
    }
};

exports.getBookById = async (req, res, next) => {
    try {
        const book = await bookDAO.getBookById(req.params.bookId);
        res.json(book);
    } catch (err) {
        next(err);
    }
};

exports.createBook = async (req, res, next) => {
    try {
        const newBook = req.body;
        const book = await bookDAO.createBook(newBook);
        res.status(201).json(book);
    } catch (err) {
        next(err);
    }
};

exports.updateBook = async (req, res, next) => {
    try {
        const updatedBook = req.body;
        const book = await bookDAO.updateBookById(req.params.bookId, updatedBook);
        res.json(book);
    } catch (err) {
        next(err);
    }
};

exports.deleteBook = async (req, res, next) => {
    try {
        const book = await bookDAO.deleteBookById(req.params.bookId);
        res.json(book);
    } catch (err) {
        next(err);
    }
};