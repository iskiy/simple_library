const userDAO = require('../dao/userDAO');

exports.register = async (req, res, next) => {
    const { username, password } = req.body;

    try {
        const existingUser = await userDAO.getUserByUsername(username)

        if (existingUser) {
            return res.status(409).json({ message: 'User already registered' });
        }

        const newUser = new User({
            username,
            password: password,
            role: 'default',
        });

        await userDAO.createUser(newUser)

        return res.status(201).json({ message: 'User registered' });
    } catch (err) {
        return next(err);
    }
};

exports.login = async (req, res, next) => {
    const { username, password } = req.body;
    try {
        const user = await userDAO.getUserByUsername(username);
        if (!user || !user.comparePassword(password)) {
            res.status(401).json({ message: 'Invalid email or password' });
            return;
        }

        req.session.userId = user._id;
        req.session.role = user.role
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


