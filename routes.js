const express = require('express');
const greeterRouter = require('./routes/greeter'); 
const loginRouter = require('./routes/login');
const secretRouter = require('./routes/secret');

const routes = express.Router()
.use('/api/greeter', greeterRouter)
.use('/secret', secretRouter)
.use('/login', loginRouter);

module.exports = routes;