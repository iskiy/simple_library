function isAuthenticated(requiredRole) {
    return (req, res, next) => {
        if (req.session && req.session.userId && (req.session.role === requiredRole || req.session.role === 'admin')) {
            console.log(req.session)
            return next();

        } else {
            for (const cookieName in req.cookies) {
                res.clearCookie(cookieName);
            }
            const err = new Error(`Not authorized ${req.session}`);
            err.status = 403;
            return next(err);
        }
    };
}

exports.isAuthenticatedUser = isAuthenticated('default');


exports.isAuthenticatedAdmin = isAuthenticated('admin');