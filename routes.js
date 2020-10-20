const express = require('express');
const greeterRouter = require('./routes/greeter'); 

const routes = express.Router()
    .use('/', greeterRouter);

module.exports = routes;