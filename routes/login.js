const express = require('express');
const loginHandler = require('../handlers/login');

const router = express.Router()
.post('/', loginHandler.handlePost);

module.exports = router;