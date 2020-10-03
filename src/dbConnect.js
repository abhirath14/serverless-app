const mongodb = require('mongodb');
const mongoose = require('mongoose');
const mongoClient = mongodb.MongoClient;
const username = require('./settings.js').username;
const password = require('./settings.js').password;
const dbName = require('./settings.js').dbName;
var _db;
var mongoFunction = (app) => {
  const uri = `mongodb+srv://${username}:${password}@cluster0.5ejyo.mongodb.net/${dbName}?retryWrites=true&w=majority`;
  mongoose.connect(uri).then(() => {
    app.listen(8000);
  }).catch((err) => {
    console.log(err)
  });
  // mongoClient.connect(uri).then(
  //   client => {
  //     _db = client.db();
  //     console.log("Connected");
  //   }
  // ).catch(err => {
  //   console.log(err);
  // });
}

var getDb = () => {
  if (_db) {
    return _db;
  } else {
    return "Not connected";
  }
}
exports.getDb = getDb;
exports.mongoFunction = mongoFunction;