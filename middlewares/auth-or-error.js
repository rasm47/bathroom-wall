const jwt = require('jsonwebtoken');

const mySecret = process.env.SECRET;


// return 401 if jwt is missing or has a bad format
// adds decoded jwt contents to req.decoded
const authMiddleware = (req, res, next) => {
    if (!req.headers.authorization) {
        res.status(401);
        res.json({info: 'Authorization heared requred, please login'});
    } else {

        const yourToken = req.headers.authorization.split('Bearer ')[1] || null;
        jwt.verify(yourToken, mySecret,
            (err, content) => {
                if (err) {
                    res.status(401);
                    res.json({info: 'Authorization error: invalid token format'});
                }
                else {
                    req.decoded = content;
                    next();
                }
            }
        );
    }
}

module.exports = authMiddleware;