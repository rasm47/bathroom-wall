
const greet = name => `Hello ${name}!`;
const handleGet = (res, req) => req.send({greeting: greet("world")});

module.exports = {handleGet};