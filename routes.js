const express = require('express');
const greeterRouter = require('./routes/greeter'); 

const routes = express.Router()
    .use('/api/greeter/', greeterRouter);

module.exports = routes;