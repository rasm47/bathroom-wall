const jwt = require('jsonwebtoken');

// dummy registered users
const users = ['mark', 'mary', 'anon'];

const handlePost = (req, res) => {
    if (!req.body || !req.body.username) {
        res.status(400);
        res.json({info: 'Missing username'});
        return;
    }

    const givenUser = req.body.username;
    const givenPassword = req.body.password; // temporarily ignored

    const foundUser = users.reduce((acc, user) => user === givenUser ? user : acc, "");
    if (foundUser === "") {
        res.status(401);
        res.json({info: 'Invalid username or password'});
        return;
    }

    const token = jwt.sign({username: foundUser}, process.env.SECRET);
    
    res.send(token);
};

module.exports = {handlePost};