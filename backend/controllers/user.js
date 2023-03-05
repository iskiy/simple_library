const userDAO = require('../dao/userDAO');

exports.getAllUsers = async (req, res, next) => {
    try {
        const users = await userDAO.getAllUsers();
        res.json(users);
    } catch (err) {
        next(err);
    }
};

exports.getUserById = async (req, res, next) => {
    try {
        const user = await userDAO.getUserById(req.params.userId);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

exports.createUser = async (req, res, next) => {
    try {
        const newUser = req.body;
        const user = await userDAO.createUser(newUser);
        res.status(201).json(user);
    } catch (err) {
        next(err);
    }
};

exports.updateUser = async (req, res, next) => {
    try {
        const updatedUser = req.body;
        const user = await userDAO.updateUser(req.params.userId, updatedUser);
        res.json(user);
    } catch (err) {
        next(err);
    }
};

exports.deleteUser = async (req, res, next) => {
    try {
        const user = await userDAO.deleteUser(req.params.userId);
        res.json(user);
    } catch (err) {
        next(err);
    }
};