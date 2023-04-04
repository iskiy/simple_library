const express = require('express');
const bookRoutes = express.Router();
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/book');
const { isAuthenticatedUser,isAuthenticatedAdmin } = require('../middleware/auth');

bookRoutes.get('/', isAuthenticatedUser, getAllBooks);

bookRoutes.get('/:bookID', isAuthenticatedUser, getBookById);

bookRoutes.post('/', isAuthenticatedAdmin, createBook);

bookRoutes.put('/:bookID', isAuthenticatedAdmin, updateBook);

bookRoutes.delete('/:bookID', isAuthenticatedAdmin, deleteBook);

module.exports = bookRoutes;