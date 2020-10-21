const express = require('express');
const registerHandler = require('../handlers/register');

const router = express.Router()
.post('/', registerHandler.handlePost);

module.exports = router;