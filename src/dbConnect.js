const mongodb = require('mongodb');
const mongoose = require('mongoose');
const mongoClient = mongodb.MongoClient;
var _db;
var mongoFunction = (app) => {
  const uri = "mongodb+srv://shubham:root@cluster0.5ejyo.mongodb.net/ride-aggregator?retryWrites=true&w=majority";
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