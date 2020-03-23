require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();

app.use(cors());
const routes = require('./routes');
const errorHandler = require('./middlewares/error-handler');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

app.use(errorHandler);
app.use(routes);


module.exports = app;
