const express = require('express');
const greeterRouter = require('./routes/greeter'); 
const loginRouter = require('./routes/login');
const registerRouter = require('./routes/register');
const secretRouter = require('./routes/secret');

const routes = express.Router()
.use('/api/greeter', greeterRouter)
.use('/secret', secretRouter)
.use('/register', registerRouter)
.use('/login', loginRouter);

module.exports = routes;