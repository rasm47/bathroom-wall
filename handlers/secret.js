const db = require('../database');

const handleGet = (req, res) => {

    const tokenContents = req.decoded;

    if (db.getUser(req.decoded.username) !== null) {
        res.status(200)
        .json({
            secret: 'You are logged in so you can see this secret!',
            your_decoded_jwt: req.decoded
        });
        return;
    }

    res.status(401).json({
        info: 'User not found'
    });
};

module.exports = {handleGet};