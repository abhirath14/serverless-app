const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const rideController = require("../controllers/ride");
const isAuth = require("../middlewares/isAuth.js").isAuth;
const {check} = require("express-validator/check");
const user = require("../models/user");
const ride = require("../models/ride");


router.post("/add-user", check('email').isEmail().withMessage("Please enter a valid email"), userController.addUser);
router.post("/login", check('email').isEmail().withMessage("Please enter a valid email"), userController.login);
router.get("/get-full-name", isAuth, userController.getFullName);
router.patch("/update-name", isAuth, userController.updateFullName);
router.post("/delete-user", isAuth, userController.deleteUserByNickName);
router.post("/add-ride", isAuth, rideController.createRide);
router.post("/end-ride", isAuth, rideController.endRide);
router.get("/get-fare", isAuth, rideController.getFare);
exports.router = router;