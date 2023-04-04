const userService = require('../services/user');
const User = require('../models/user');

exports.register = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const existingUser = await userService.getUserByUsername(username)

        if (existingUser) {
            return res.status(409).json({ message: 'User already registered' });
        }

        const newUser = new User({
            username,
            password: password,
            role: 'default',
        });

        const createdUser = await userService.createUser(newUser)

        req.session.userId = createdUser._id;
        req.session.role = createdUser.role
        res.cookie('role', createdUser.role, {sameSite:'lax'});

        return res.status(201).json({ message: 'User registered' });
    } catch (err) {
        return next(err);
    }
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await userService.getUserByUsername(username);
        if (!user || !user.comparePassword(password)) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }
        console.log(user)

        req.session.userId = user._id;
        req.session.role = user.role

        res.cookie('role', user.role, {sameSite:'lax'});

        res.status(200).json({ message: 'Login successful' });
    } catch (err) {
        next(err);
    }
};

exports.logout = async (req, res, next) => {
    try {
        req.session.destroy((err) => {
            if (err) {
                next(err);
                return;
            }
            res.status(204).end();
        });
    } catch (err) {
        next(err);
    }
};


