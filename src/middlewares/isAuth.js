const jwt = require('jsonwebtoken');
const User = require('../models/user.js');
const jwtKey = require("../settings").jwtKey;

/**
 *
 * @param {Object} req
 * @param {Object} res
 * @param {Object} next
 *
 * Middleware for checking if the user is authenticated
 */
exports.isAuth = async (req, res, next) => {
  var token = req.headers.authorization;
  var array = token.split(' ');
  token = array[1];
  try {
    var payload = jwt.verify(token, jwtKey);
    var user = await User.findOne({nickName: payload.nickName});
    req.user = user;
    next();
  } catch(err) {
    res.json({"message": err});
  }
}