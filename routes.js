const express = require('express');
const apiRouter = require('./routes/api'); 

const routes = express.Router()
    .use('/', apiRouter);

module.exports = routes;