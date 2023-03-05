const express = require('express');
const authRoutes = express.Router();
const { register, login, logout } = require('../controllers/auth');

authRoutes.post('/register', register);

authRoutes.post('/login', login);

authRoutes.get('/logout', logout);

module.exports = authRoutes;