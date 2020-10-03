const mongodb = require('mongodb');
const mongoose = require('mongoose');
const mongoClient = mongodb.MongoClient;
const username = require('./settings.js').username;
const password = require('./settings.js').password;
const dbName = require('./settings.js').dbName;
var _db;
/**
 * 
 * @param {Object} app
 * Connects to the mongodb atlas at a particular address with the required user credentials
 */
var mongoFunction = (app) => {
  const uri = `mongodb+srv://${username}:${password}@cluster0.5ejyo.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  mongoose.connect(uri).then(() => {
    app.listen(8000);
  }).catch((err) => {
    console.log(err)
  });
}
exports.mongoFunction = mongoFunction;