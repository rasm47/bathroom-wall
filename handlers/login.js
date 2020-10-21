const jwt = require('jsonwebtoken');
const db = require('../database');

const handlePost = (req, res) => {
    if (!req.body || !req.body.username) {
        res.status(400);
        res.json({info: 'Missing username'});
        return;
    }

    const givenUser = req.body.username;
    const givenPassword = req.body.password; // temporarily ignored

    const foundUser = db.getUser(givenUser);
    if (foundUser === null) {
        res.status(401);
        res.json({info: 'Invalid username or password'});
        return;
    }

    const token = jwt.sign(foundUser, process.env.SECRET);
    
    res.status(200).send(
        {
            info: 'Put this token to your authentication header',
            token: token
        }
    );
};

module.exports = {handlePost};