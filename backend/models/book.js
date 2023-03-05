// Import Mongoose
const mongoose = require('mongoose');

// Define book schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    year: {
        type: Number,
        required: true
    },
    publisher: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true,
    }
});

// Create Book model
const Book = mongoose.model('Book', bookSchema);

// Export Book model
module.exports = Book;