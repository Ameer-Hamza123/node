exports.userroleMiddleware = (req, res, next) => {
    if (req.session.userrole) {
        next();
    } else {
        res.send("You don't have rights.");
    }
};