const withAuth = (req, res, next) => {
    if (!req.session.loggedIn) {
        console.log('not logged in')
        return res.redirect('/login');
    }
    return next();
}

module.exports = withAuth;