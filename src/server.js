const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`;
const generalRoutes = require('./routes/index.js');
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use("", generalRoutes.router);

// Server
module.exports = app;