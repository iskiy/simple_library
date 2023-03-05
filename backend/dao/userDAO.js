const User = require('../models/user');

exports.createUser = async (user) => {
    try {
        return await User.create(user);
    } catch (err) {
        throw err;
    }
}

exports.getUserByUsername = async (username) => {
    try {
        return await User.findById(username);
    } catch (err) {
        throw err;
    }
}

exports.getAllUsers = async () => {
    try {
        return await User.find();
    } catch (err) {
        throw err;
    }
}

exports.updateUser = async (userId, updatedUser) => {
    try {
        return await User.findByIdAndUpdate(userId, updatedUser, {new: true});
    } catch (err) {
        throw err;
    }
}

exports.deleteUser = async (userId) => {
    try {
        return await User.findByIdAndDelete(userId);
    } catch (err) {
        throw err;
    }
}