const express = require("express");
const router = express.Router();
const userController = require("../controllers/user");
const isAuth = require("../middlewares/isAuth.js").isAuth;

router.post("/add-user", userController.addUser);
router.post("/login", userController.login);
router.get("/get-full-name", isAuth, userController.getFullName);
router.post("/delete-user", userController.deleteUserByNickName);
exports.router = router;