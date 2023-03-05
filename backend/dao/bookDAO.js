const Book = require('../models/book');

exports.createBook = async (book) => {
    try {
        return await Book.create(book);
    } catch (err) {
        throw err;
    }
}

exports.getBookById = async (id) => {
    try {
        return await Book.findById(id);
    } catch (err) {
        throw err;
    }
}

exports.getAllBooks = async () => {
    try {
        return await Book.find({});
    } catch (err) {
        throw err;
    }
}

exports.updateBookById = async (id, book) => {
    try {
        return await Book.findByIdAndUpdate(id, book, {new: true});
    } catch (err) {
        throw err;
    }
}

exports.deleteBookById = async (id) => {
    try {
        return await Book.findByIdAndDelete(id);
    } catch (err) {
        throw err;
    }
}