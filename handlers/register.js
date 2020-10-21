const db = require('../database');

const handlePost = (req, res) => {
    const userToAdd = req.body.username;
    if (db.adduser(userToAdd)) {
        res.status(200).json({username: userToAdd});
    } else {
        res.status(400).json({info: 'username taken'});
    }
};

module.exports = {handlePost};