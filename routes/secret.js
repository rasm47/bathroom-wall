const express = require('express');

const authOrError = require('../middlewares/auth-or-error');

const secretHandler = require('../handlers/secret');

const router = express.Router()
.use(authOrError)
.get('/', secretHandler.handleGet);

module.exports = router;