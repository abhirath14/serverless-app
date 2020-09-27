const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 8000;
const baseUrl = `http://localhost:${port}`;

app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => {
   res.status(200).send('hello world!');
});

// Server
module.exports = app;