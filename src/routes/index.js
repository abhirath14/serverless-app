const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const isAuth = require("../middlewares/isAuth.js").isAuth;
const {check} = require("express-validator/check");
const user = require("../models/user");


router.post("/add-user", check('email').isEmail().withMessage("Please enter a valid email"), userController.addUser);
router.post("/login", check('email').isEmail().withMessage("Please enter a valid email"), userController.login);
router.get("/get-full-name", isAuth, userController.getFullName);
router.patch("/update-name", isAuth, userController.updateFullName);
router.post("/delete-user", isAuth, userController.deleteUserByNickName);
exports.router = router;