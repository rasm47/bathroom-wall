const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/', routes);
app.listen(port);