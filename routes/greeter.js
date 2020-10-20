const express = require('express');
const greeterHandler = require('../handlers/greeter');

const router = express.Router()
.get('/:id([0-9]+)', greeterHandler.handleGetOne)
.get('/', greeterHandler.handleGetAll)
.post('/', greeterHandler.handlePost)
.put('/', greeterHandler.handlePut)
.delete('/', greeterHandler.handleDelete);

module.exports = router;