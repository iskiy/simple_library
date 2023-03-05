const express = require('express');
const bookRoutes = express.Router();
const { getAllBooks, getBookById, createBook, updateBook, deleteBook } = require('../controllers/book');
const { isAuthenticatedUser,isAuthenticatedAdmin } = require('../middleware/auth');

bookRoutes.get('/', isAuthenticatedUser, getAllBooks);

bookRoutes.get('/:id', isAuthenticatedUser, getBookById);

bookRoutes.post('/', isAuthenticatedAdmin, createBook);

bookRoutes.put('/:id', isAuthenticatedAdmin, updateBook);

bookRoutes.delete('/:id', isAuthenticatedAdmin, deleteBook);

module.exports = bookRoutes;