require('dotenv').config();
const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const routes = require('./routes');


const app = express();
const port = process.env.PORT || 3001;

app.use(express.json());
app.use(helmet());
app.use(cors());
app.use('/', routes);
app.listen(port);