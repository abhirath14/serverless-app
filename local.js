const app = require('./src/server.js');
const port = process.env.PORT || 8000;
const mongoFunction = require('./src/dbConnect.js').mongoFunction;
// Server
mongoFunction(app);