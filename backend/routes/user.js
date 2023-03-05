const express = require('express');
const userRoutes = express.Router();
const { createUser, updateUser, deleteUser } = require('../controllers/user');
const { isAuthenticatedAdmin} = require('../middleware/auth');

userRoutes.post('/', createUser);

userRoutes.put('/:userId', isAuthenticatedAdmin, updateUser);

userRoutes.delete('/:userId', isAuthenticatedAdmin, deleteUser);

module.exports = userRoutes;