const express = require('express');
const apiHandler = require('../handlers/api');

const router = express.Router()
    .get('/', apiHandler.handleGet);

module.exports = router;