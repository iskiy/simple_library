function isAuthenticated(requiredRole) {
    return (req, res, next) => {
        if (req.session && req.session.userId && req.session.role === requiredRole) {
            return next();
        } else {
            const err = new Error('Not authorized');
            err.status = 403;
            return next(err);
        }
    };
}

exports.isAuthenticatedUser = (req, res, next) => {
        isAuthenticated('default')
        return next();
};

exports.isAuthenticatedAdmin = (req, res, next) => {
    isAuthenticated('admin')
    return next();
};