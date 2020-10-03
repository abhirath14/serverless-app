const User = require("../models/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const jwtKey = require("../settings").jwtKey;
const jwtExpirySeconds = require("../settings").jwtExpirySeconds;

exports.login = async (req, res, next) => {
  var email = req.body.email;
  var password = req.body.password;

  try {
    var user = await User.findOne({email: email});
    var doMatch = await bcrypt.compare(password, user.password);
    if (doMatch) {
      var nickName = user.nickName;
      var token = jwt.sign({nickName: nickName}, jwtKey, {
        algorithm: "HS256",
        expiresIn: jwtExpirySeconds,
      });
      res.json({message: "User Authenticated", token: token});
      res.status(200);
    }
  } catch(err) {
    res.json({message: "User Could not be authenticated"});
    res.status(401);
  }
  
}
exports.addUser = async (req, res, next) => {
  var firstName = req.body.firstName;
  var lastName = req.body.lastName;
  var email = req.body.email;
  var nickName = req.body.nickName;
  var password = req.body.password;
  var typeOfUser = req.body.typeOfUser;
  var hashedPassword = await bcrypt.hash(password, 10);

  var user = new User({
    firstName: firstName,
    lastName: lastName,
    password: hashedPassword,
    email: email,
    nickName: nickName,
    typeOfUser: typeOfUser
  });

  user.save().then(
    () => {
      res.json({message: "User added"});
    }
  ).catch(err => {
    res.json({message: err});
    console.log(err);
  });

}

exports.getFullName = (req, res, next) => {
  if (req.user) {
    return res.json({name: req.user.firstName + " " + req.user.lastName});
  } else {
    return res.json({name: ""});;
  }
}

exports.deleteUserByNickName = async (req, res, next) => {
  try {
    var nickName = req.body.nickName;
    var result = await User.deleteOne({nickName: nickName});
    res.json({"result": result});
  } catch(err) {
    res.json({"result": err});
    console.log(err);
  }
}